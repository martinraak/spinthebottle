import React, { useState, useRef, useCallback, useEffect } from 'react';

// Import refactored modules
import { DANCING_ANIMALS, FLYING_OBJECTS } from './components/PixelArt';
import { useAudio } from './hooks/useAudio';
import { useLocalStorage, useStorageError, STORAGE_KEYS } from './hooks/useLocalStorage';
import { BOTTLE_COLOR, FOAM_COLORS, CONFETTI_COLORS, SPIN_PHYSICS, TIMING } from './utils/constants';
import './styles/animations.css';

// Pixel art style Spin the Bottle meeting picker
export default function SpinTheBottle() {
  // Loading splash screen state
  const [showSplash, setShowSplash] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // State with localStorage persistence
  const [names, setNames] = useLocalStorage(STORAGE_KEYS.NAMES, ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank']);
  const [bottleLabel, setBottleLabel] = useLocalStorage(STORAGE_KEYS.LABEL, 'Weekly Sync');
  const [isMuted, setIsMuted] = useLocalStorage(STORAGE_KEYS.MUTED, false);
  const [winHistory, setWinHistory] = useLocalStorage(STORAGE_KEYS.HISTORY, {});

  // Local state
  const [newName, setNewName] = useState('');
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [showSparkle, setShowSparkle] = useState(false);
  const [showFoam, setShowFoam] = useState(false);
  const [foamParticles, setFoamParticles] = useState([]);
  const [showCorkPop, setShowCorkPop] = useState(false);
  const [corkRemoved, setCorkRemoved] = useState(false);
  const [corkPosition, setCorkPosition] = useState({ x: 0, y: 0 });
  const [showWinnerCelebration, setShowWinnerCelebration] = useState(false);
  const [dancingAnimals, setDancingAnimals] = useState({ left: null, right: null });
  const [confetti, setConfetti] = useState([]);
  const [foamColor, setFoamColor] = useState(FOAM_COLORS[0]);
  const [flyingObject, setFlyingObject] = useState(FLYING_OBJECTS[0]);
  const [isEditorView, setIsEditorView] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  // Storage error tracking for graceful degradation
  const storageError = useStorageError();
  const [storageErrorDismissed, setStorageErrorDismissed] = useState(false);

  // Refs for animation state (fixes memory leak issue #3)
  const animationRef = useRef(null);
  const velocityRef = useRef(0);
  const isAnimatingRef = useRef(false);

  // Audio hook with proper React state management
  const audio = useAudio(isMuted);

  // Generate confetti particles
  const generateConfetti = useCallback(() => {
    const particles = [];
    for (let i = 0; i < 150; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        size: 8 + Math.random() * 12,
        rotation: Math.random() * 360,
        swingAmplitude: 20 + Math.random() * 40,
      });
    }
    return particles;
  }, []);

  // Add new name
  const addName = () => {
    if (newName.trim() && !names.includes(newName.trim())) {
      setNames([...names, newName.trim()]);
      setNewName('');
    }
  };

  // Remove name
  const removeName = (index) => {
    setNames(names.filter((_, i) => i !== index));
    if (winner === names[index]) setWinner(null);
  };

  // Shuffle names
  const shuffleNames = () => {
    const shuffled = [...names];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setNames(shuffled);
  };

  // Sort A-Z
  const sortNames = () => {
    setNames([...names].sort((a, b) => a.localeCompare(b)));
  };

  // Calculate which person the bottle points to
  const getSelectedPerson = useCallback((angle) => {
    if (names.length === 0) return { name: null, index: null };
    const normalizedAngle = ((angle % 360) + 360) % 360;
    const segmentAngle = 360 / names.length;
    const adjustedAngle = (normalizedAngle + segmentAngle / 2) % 360;
    const index = Math.floor(adjustedAngle / segmentAngle);
    return { name: names[index], index };
  }, [names]);

  // Generate foam particles shooting toward winner
  const generateFoamParticles = useCallback((winnerIdx) => {
    const particles = [];
    const particleCount = 500;
    const winnerAngle = (winnerIdx * 360 / names.length) - 90;

    for (let i = 0; i < particleCount; i++) {
      const spreadAngle = (Math.random() - 0.5) * 180;
      const finalAngle = winnerAngle + spreadAngle;
      const finalRad = finalAngle * Math.PI / 180;
      const distance = 80 + Math.random() * 350;
      const particleType = Math.random();

      particles.push({
        id: i,
        startX: 0,
        startY: 0,
        endX: Math.cos(finalRad) * distance,
        endY: Math.sin(finalRad) * distance,
        size: particleType < 0.3 ? 2 + Math.random() * 5 :
              particleType < 0.7 ? 5 + Math.random() * 12 :
              12 + Math.random() * 20,
        delay: Math.random() * 1.5,
        duration: 0.5 + Math.random() * 1.5,
        opacity: 0.5 + Math.random() * 0.5,
        type: particleType < 0.3 ? 'bubble' : particleType < 0.7 ? 'foam' : 'chunk',
      });
    }
    return particles;
  }, [names.length]);

  // Pick random dancing animal for celebration
  const pickRandomAnimals = useCallback(() => {
    const animal = DANCING_ANIMALS[Math.floor(Math.random() * DANCING_ANIMALS.length)];
    return { left: animal, right: animal };
  }, []);

  // Spin the bottle with physics (fixes memory leak issue #3)
  const spinBottle = useCallback(() => {
    if (isSpinning || names.length < 2) return;

    // Play spin click sound
    audio.playSpinClickSound();
    audio.startSpinningSound();

    setIsSpinning(true);
    isAnimatingRef.current = true;
    setWinner(null);
    setWinnerIndex(null);
    setShowSparkle(false);
    setShowFoam(false);
    setShowCorkPop(false);
    setCorkRemoved(false);
    setFoamParticles([]);
    setShowWinnerCelebration(false);
    setDancingAnimals({ left: null, right: null });
    setConfetti([]);

    // Randomize foam color
    setFoamColor(FOAM_COLORS[Math.floor(Math.random() * FOAM_COLORS.length)]);

    // Random initial velocity
    const initialVelocity = SPIN_PHYSICS.MIN_INITIAL_VELOCITY +
      Math.random() * (SPIN_PHYSICS.MAX_INITIAL_VELOCITY - SPIN_PHYSICS.MIN_INITIAL_VELOCITY);
    velocityRef.current = initialVelocity;

    let currentRotation = rotation;
    let wobblePhase = 0;
    let isWobbling = false;
    let wobbleAmplitude = 0;
    let animationStartTime = performance.now();

    const animate = (timestamp) => {
      // Check if animation was cancelled
      if (!isAnimatingRef.current) {
        return;
      }

      const elapsedTime = timestamp - animationStartTime;

      if (!isWobbling) {
        velocityRef.current *= SPIN_PHYSICS.FRICTION;
        currentRotation += velocityRef.current;

        // Update spinning sound based on velocity
        audio.updateSpinningSound(velocityRef.current, elapsedTime);

        // Extended slow-down phase
        if (velocityRef.current < 3 && velocityRef.current > SPIN_PHYSICS.MIN_VELOCITY) {
          velocityRef.current *= SPIN_PHYSICS.SLOW_FRICTION;
        }
        if (velocityRef.current < 1 && velocityRef.current > SPIN_PHYSICS.MIN_VELOCITY) {
          velocityRef.current *= SPIN_PHYSICS.VERY_SLOW_FRICTION;
        }

        // Start wobbling
        if (velocityRef.current < SPIN_PHYSICS.MIN_VELOCITY) {
          isWobbling = true;
          wobbleAmplitude = SPIN_PHYSICS.WOBBLE_AMPLITUDE;
          wobblePhase = 0;
          audio.stopSpinningSound();
        }

        setRotation(currentRotation);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        wobblePhase += 0.2;
        wobbleAmplitude *= SPIN_PHYSICS.WOBBLE_DECAY;

        const wobble = Math.sin(wobblePhase) * wobbleAmplitude;
        setRotation(currentRotation + wobble);

        if (wobbleAmplitude < SPIN_PHYSICS.WOBBLE_STOP_THRESHOLD) {
          // Stop animation
          setRotation(currentRotation);
          setIsSpinning(false);
          isAnimatingRef.current = false;
          const { name: selectedName, index: selectedIndex } = getSelectedPerson(currentRotation);
          setWinner(selectedName);
          setWinnerIndex(selectedIndex);
          setShowSparkle(true);

          // Update win history
          if (selectedName) {
            setWinHistory(prev => ({
              ...prev,
              [selectedName]: (prev[selectedName] || 0) + 1
            }));
          }

          // Calculate cork trajectory
          const winnerAngle = (selectedIndex * 360 / names.length) - 90;
          const winnerRad = winnerAngle * Math.PI / 180;
          setCorkPosition({
            x: Math.cos(winnerRad) * 180,
            y: Math.sin(winnerRad) * 180
          });

          // Trigger cork pop
          setShowCorkPop(true);
          setCorkRemoved(true);
          audio.playCorkPopSound();

          // Then foam spray
          setTimeout(() => {
            if (!isAnimatingRef.current) return; // Check if component still mounted
            setFoamParticles(generateFoamParticles(selectedIndex));
            setShowFoam(true);
          }, TIMING.FOAM_DELAY);

          // Hide cork, show celebration
          setTimeout(() => {
            setShowCorkPop(false);
            setDancingAnimals(pickRandomAnimals());
            setConfetti(generateConfetti());
            setFlyingObject(FLYING_OBJECTS[Math.floor(Math.random() * FLYING_OBJECTS.length)]);
            setShowWinnerCelebration(true);
            audio.playWinnerCelebration();
          }, TIMING.CORK_FLY_DURATION);

          // Hide foam
          setTimeout(() => {
            setShowFoam(false);
          }, TIMING.FOAM_HIDE_DELAY);
          return;
        }

        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [isSpinning, names, rotation, audio, getSelectedPerson, generateFoamParticles, pickRandomAnimals, generateConfetti, setWinHistory]);

  // Cleanup animation on unmount (fixes memory leak issue #3)
  useEffect(() => {
    return () => {
      isAnimatingRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      audio.stopSpinningSound();
    };
  }, [audio]);

  // Splash screen loading animation
  useEffect(() => {
    if (!showSplash) return;

    const loadingDuration = 3000; // 3 seconds
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / loadingDuration) * 100, 100);
      setLoadingProgress(progress);

      if (progress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Add small delay after reaching 100% for dramatic effect
        setTimeout(() => setShowSplash(false), 300);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [showSplash]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isEditorView && !isSpinning && (e.code === 'Space' || e.code === 'Enter')) {
        e.preventDefault();
        spinBottle();
      }
      if (showWinnerCelebration && (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape')) {
        e.preventDefault();
        setShowWinnerCelebration(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditorView, isSpinning, showWinnerCelebration, spinBottle]);

  // Sparkle effect positions
  const sparkles = showSparkle ? Array.from({ length: 8 }, (_, i) => ({
    angle: (i * 45) + (Date.now() % 360),
    delay: i * 0.1
  })) : [];

  return (
    <div className="min-h-screen pixel-font text-xs" style={{ backgroundColor: '#0f0f23' }}>
      {/* Storage Error Notification */}
      {storageError && !storageErrorDismissed && (
        <div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 rounded-lg flex items-center gap-3"
          style={{
            backgroundColor: 'rgba(255, 165, 0, 0.95)',
            color: '#1a1a2e',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            maxWidth: '90vw',
          }}
        >
          <span style={{ fontSize: '16px' }}>!</span>
          <span className="flex-1">Storage unavailable. Your settings won't be saved.</span>
          <button
            onClick={() => setStorageErrorDismissed(true)}
            className="ml-2 px-2 py-1 hover:opacity-80"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '4px' }}
          >
            OK
          </button>
        </div>
      )}

      {/* Loading Splash Screen */}
      {showSplash && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center"
          style={{
            zIndex: 1000,
            backgroundColor: '#0f0f23',
            background: 'radial-gradient(ellipse at center, #1a1a3e 0%, #0f0f23 70%)',
          }}
        >
          {/* Sparkle particles floating */}
          {Array.from({ length: 60 }).map((_, i) => {
            // Use seeded values for consistent positioning
            const topPos = 5 + ((i * 23) % 85);
            const leftPos = 5 + ((i * 37) % 90);
            const duration = 2 + ((i * 7) % 30) / 10;
            const delay = (i * 11) % 20 / 10;
            const size = 3 + ((i * 3) % 3);
            return (
              <div
                key={`sparkle-${i}`}
                className="splash-sparkle"
                style={{
                  position: 'absolute',
                  top: `${topPos}%`,
                  left: `${leftPos}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: '#ffd700',
                  boxShadow: '0 0 8px #ffd700, 0 0 16px #ff6b6b',
                  animation: `splash-sparkle-float ${duration}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}

          {/* Ice bucket with champagne bottle */}
          <div className="splash-bucket-container" style={{ position: 'relative', marginBottom: '30px' }}>
            <svg viewBox="0 0 200 220" width="280" height="308" style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))' }}>
              {/* Ice bucket - back rim */}
              <ellipse cx="100" cy="130" rx="70" ry="20" fill="#6b6b8a" />

              {/* Ice bucket - body */}
              <path d="M30 130 L40 200 L160 200 L170 130" fill="#8a8aaa" />
              <path d="M35 130 L45 195 L100 195" fill="#9a9abf" opacity="0.6" />
              <path d="M165 130 L155 195 L120 195" fill="#6a6a8a" opacity="0.4" />

              {/* Ice bucket - decorative bands */}
              <rect x="38" y="145" width="124" height="6" fill="#ffd700" rx="1" />
              <rect x="40" y="146" width="40" height="4" fill="#ffed4a" opacity="0.5" />
              <rect x="42" y="175" width="116" height="6" fill="#ffd700" rx="1" />
              <rect x="44" y="176" width="35" height="4" fill="#ffed4a" opacity="0.5" />

              {/* Ice bucket - front rim */}
              <ellipse cx="100" cy="130" rx="70" ry="15" fill="#aaaacc" />
              <ellipse cx="85" cy="128" rx="25" ry="5" fill="#ccccee" opacity="0.5" />

              {/* Ice cubes visible in bucket */}
              <rect x="50" y="115" width="20" height="18" fill="#b4d7e8" rx="2" opacity="0.8" />
              <rect x="52" y="117" width="8" height="6" fill="#e0f4ff" opacity="0.6" />
              <rect x="75" y="118" width="18" height="15" fill="#c5e3f0" rx="2" opacity="0.7" />
              <rect x="77" y="120" width="6" height="5" fill="#e0f4ff" opacity="0.5" />
              <rect x="110" y="116" width="22" height="16" fill="#b4d7e8" rx="2" opacity="0.75" />
              <rect x="112" y="118" width="8" height="5" fill="#e0f4ff" opacity="0.6" />
              <rect x="135" y="119" width="16" height="14" fill="#c5e3f0" rx="2" opacity="0.7" />

              {/* Champagne bottle neck sticking out */}
              <rect x="92" y="20" width="16" height="35" fill={BOTTLE_COLOR.body} />
              <rect x="93" y="22" width="5" height="30" fill={BOTTLE_COLOR.bodyLight} opacity="0.5" />

              {/* Cork with gold foil */}
              <ellipse cx="100" cy="8" rx="10" ry="5" fill="#ffd700" />
              <ellipse cx="97" cy="6" rx="4" ry="2" fill="#ffed4a" opacity="0.6" />
              <rect x="90" y="8" width="20" height="12" fill="#ffd700" />
              <rect x="91" y="9" width="7" height="9" fill="#ffed4a" opacity="0.4" />

              {/* Cork body */}
              <rect x="92" y="20" width="16" height="8" fill="#d2691e" />
              <rect x="93" y="21" width="5" height="6" fill="#daa520" opacity="0.4" />

              {/* Bottle neck ring */}
              <rect x="90" y="50" width="20" height="6" fill={BOTTLE_COLOR.body} />
              <rect x="91" y="51" width="6" height="4" fill={BOTTLE_COLOR.bodyLight} opacity="0.4" />

              {/* Bottle shoulder visible */}
              <polygon points="90,56 78,80 122,80 110,56" fill={BOTTLE_COLOR.body} />
              <polygon points="91,57 82,78 91,78" fill={BOTTLE_COLOR.bodyLight} opacity="0.4" />

              {/* Bottle body visible above ice */}
              <rect x="78" y="80" width="44" height="45" fill={BOTTLE_COLOR.body} />
              <rect x="80" y="82" width="12" height="40" fill={BOTTLE_COLOR.bodyLight} opacity="0.4" />
              <rect x="114" y="82" width="6" height="40" fill={BOTTLE_COLOR.bodyDark} opacity="0.3" />

              {/* Bottle label */}
              <rect x="80" y="88" width="40" height="28" fill="#f5deb3" />
              <rect x="81" y="89" width="38" height="26" fill="#ffe4b5" />
              <rect x="82" y="90" width="36" height="3" fill="#c4a052" />
              <rect x="82" y="112" width="36" height="3" fill="#c4a052" />
              <rect x="96" y="94" width="8" height="2" fill="#87ceeb" />
              <text x="100" y="104" textAnchor="middle" fontSize="5" fontFamily="'Press Start 2P', cursive" fill="#1a1a2e">PARTY</text>
              <text x="100" y="110" textAnchor="middle" fontSize="4" fontFamily="'Press Start 2P', cursive" fill="#1a1a2e">TIME</text>

              {/* Bucket handles */}
              <ellipse cx="25" cy="150" rx="8" ry="15" fill="none" stroke="#ffd700" strokeWidth="4" />
              <ellipse cx="175" cy="150" rx="8" ry="15" fill="none" stroke="#ffd700" strokeWidth="4" />

              {/* Water droplets / condensation */}
              <circle cx="45" cy="160" r="3" fill="#b4d7e8" opacity="0.6" />
              <circle cx="155" cy="170" r="2" fill="#b4d7e8" opacity="0.5" />
              <circle cx="50" cy="185" r="2.5" fill="#b4d7e8" opacity="0.5" />
              <circle cx="148" cy="155" r="2" fill="#b4d7e8" opacity="0.6" />
            </svg>

            {/* Animated glow behind bucket */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,107,107,0.1) 40%, transparent 70%)',
                animation: 'splash-glow-pulse 2s ease-in-out infinite',
                zIndex: -1,
              }}
            />
          </div>

          {/* Game title with golden letters */}
          <div
            className="text-center mb-8"
            style={{
              animation: 'splash-title-entrance 0.8s ease-out forwards',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(24px, 6vw, 48px)',
                color: '#ffd700',
                textShadow: `
                  4px 4px 0 #ff6b6b,
                  8px 8px 0 #4a4a8a,
                  0 0 20px rgba(255,215,0,0.5),
                  0 0 40px rgba(255,215,0,0.3),
                  0 0 60px rgba(255,107,107,0.2)
                `,
                letterSpacing: '4px',
                animation: 'splash-title-glow 1.5s ease-in-out infinite',
              }}
            >
              SPIN THE BOTTLE
            </h1>
            <div
              style={{
                fontSize: 'clamp(8px, 2vw, 12px)',
                color: '#7fdbca',
                marginTop: '12px',
                letterSpacing: '3px',
                opacity: 0.9,
              }}
            >
              PIXEL BOTTLE PICKER DELUXE
            </div>
          </div>

          {/* Loading bar container */}
          <div
            style={{
              width: 'clamp(250px, 60vw, 400px)',
              padding: '4px',
              backgroundColor: '#16213e',
              boxShadow: `
                6px 0 0 0 #1a1a2e,
                -6px 0 0 0 #1a1a2e,
                0 6px 0 0 #1a1a2e,
                0 -6px 0 0 #1a1a2e,
                6px 6px 0 0 #1a1a2e,
                -6px 6px 0 0 #1a1a2e,
                6px -6px 0 0 #1a1a2e,
                -6px -6px 0 0 #1a1a2e
              `,
            }}
          >
            {/* Loading bar with pixel segments */}
            <div
              style={{
                height: '24px',
                backgroundColor: '#0f0f23',
                display: 'flex',
                gap: '2px',
                padding: '2px',
              }}
            >
              {Array.from({ length: 20 }).map((_, i) => {
                // Each segment represents 5% (100/20 = 5)
                // Segment i fills when progress > i * 5
                const segmentStart = i * 5;
                const isFilled = loadingProgress > segmentStart;
                return (
                  <div
                    key={`segment-${i}`}
                    style={{
                      flex: 1,
                      backgroundColor: isFilled ? '#ffd700' : '#1a1a2e',
                      boxShadow: isFilled ? '0 0 6px rgba(255,215,0,0.6)' : 'none',
                      transition: 'background-color 0.15s ease-out, box-shadow 0.15s ease-out',
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Loading text */}
          <div
            style={{
              marginTop: '16px',
              color: '#7fdbca',
              fontSize: '10px',
              letterSpacing: '2px',
              animation: 'splash-text-blink 0.8s ease-in-out infinite',
            }}
          >
            {loadingProgress < 100 ? 'LOADING PARTY MODE...' : 'GET READY!'}
          </div>

          {/* Progress percentage */}
          <div
            style={{
              marginTop: '8px',
              color: '#ffd700',
              fontSize: '14px',
            }}
          >
            {Math.floor(loadingProgress)}%
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-4 md:py-8 max-w-4xl">
        {/* Control buttons - Mute & Stats */}
        <div className="flex justify-between items-center mb-4">
          {/* Stats button */}
          <button
            onClick={() => setShowStats(!showStats)}
            className="pixel-border px-3 py-2 transition-opacity hover:opacity-80 flex items-center gap-2"
            style={{
              backgroundColor: showStats ? '#2d5a27' : '#4a4a8a',
              color: '#e0e0e0',
              fontSize: '8px',
            }}
            title="View pick history"
          >
            <svg viewBox="0 0 16 16" width="14" height="14" style={{ imageRendering: 'pixelated' }}>
              <rect x="1" y="10" width="3" height="5" fill="#7fdbca"/>
              <rect x="6" y="6" width="3" height="9" fill="#ffd700"/>
              <rect x="11" y="2" width="3" height="13" fill="#ff6b6b"/>
              <rect x="0" y="14" width="16" height="2" fill="#e0e0e0"/>
            </svg>
            STATS
          </button>

          <div className="flex items-center gap-2">
            {/* Share button */}
            <div className="relative group">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setShareCopied(true);
                  setTimeout(() => setShareCopied(false), 1500);
                }}
                className="pixel-border px-3 py-2 transition-all hover:opacity-80 flex items-center justify-center"
                style={{
                  backgroundColor: shareCopied ? '#2d5a27' : '#4a4a8a',
                  color: '#e0e0e0',
                  width: '40px',
                  height: '32px',
                }}
              >
                <svg viewBox="0 0 16 16" width="16" height="16" style={{ imageRendering: 'pixelated' }}>
                  {/* Share icon - box with arrow pointing up/out */}
                  {/* Arrow pointing up */}
                  <rect x="7" y="1" width="2" height="8" fill="#7fdbca"/>
                  <rect x="5" y="3" width="2" height="2" fill="#7fdbca"/>
                  <rect x="9" y="3" width="2" height="2" fill="#7fdbca"/>
                  <rect x="3" y="5" width="2" height="2" fill="#7fdbca"/>
                  <rect x="11" y="5" width="2" height="2" fill="#7fdbca"/>
                  {/* Box/tray */}
                  <rect x="2" y="8" width="2" height="6" fill="#e0e0e0"/>
                  <rect x="12" y="8" width="2" height="6" fill="#e0e0e0"/>
                  <rect x="2" y="12" width="12" height="2" fill="#e0e0e0"/>
                </svg>
              </button>
              {/* Pixel tooltip */}
              <div
                className="pixel-border absolute bottom-full left-1/2 mb-2 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                style={{
                  transform: 'translateX(-50%)',
                  backgroundColor: '#16213e',
                  color: '#e0e0e0',
                  fontSize: '7px',
                  zIndex: 100,
                }}
              >
                {shareCopied ? 'COPIED!' : 'COPY LINK'}
              </div>
            </div>

            {/* Mute toggle */}
            <div className="relative group">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="pixel-border px-3 py-2 transition-opacity hover:opacity-80 flex items-center justify-center"
                style={{
                  backgroundColor: isMuted ? '#8b0000' : '#4a4a8a',
                  color: '#e0e0e0',
                  width: '40px',
                  height: '32px',
                }}
              >
                {isMuted ? (
                  <svg viewBox="0 0 16 16" width="16" height="16" style={{ imageRendering: 'pixelated' }}>
                    <rect x="1" y="5" width="3" height="6" fill="#e0e0e0"/>
                    <rect x="4" y="4" width="2" height="8" fill="#e0e0e0"/>
                    <rect x="6" y="3" width="2" height="10" fill="#e0e0e0"/>
                    <rect x="10" y="4" width="2" height="2" fill="#ff6b6b"/>
                    <rect x="14" y="4" width="2" height="2" fill="#ff6b6b"/>
                    <rect x="12" y="6" width="2" height="2" fill="#ff6b6b"/>
                    <rect x="10" y="8" width="2" height="2" fill="#ff6b6b"/>
                    <rect x="14" y="8" width="2" height="2" fill="#ff6b6b"/>
                    <rect x="12" y="10" width="2" height="2" fill="#ff6b6b"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 16 16" width="16" height="16" style={{ imageRendering: 'pixelated' }}>
                    <rect x="1" y="5" width="3" height="6" fill="#e0e0e0"/>
                    <rect x="4" y="4" width="2" height="8" fill="#e0e0e0"/>
                    <rect x="6" y="3" width="2" height="10" fill="#e0e0e0"/>
                    <rect x="10" y="6" width="2" height="4" fill="#7fdbca"/>
                    <rect x="12" y="4" width="2" height="8" fill="#7fdbca"/>
                    <rect x="14" y="2" width="2" height="12" fill="#7fdbca"/>
                  </svg>
                )}
              </button>
              {/* Pixel tooltip */}
              <div
                className="pixel-border absolute bottom-full left-1/2 mb-2 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                style={{
                  transform: 'translateX(-50%)',
                  backgroundColor: '#16213e',
                  color: '#e0e0e0',
                  fontSize: '7px',
                  zIndex: 100,
                }}
              >
                {isMuted ? 'UNMUTE' : 'MUTE'}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Panel */}
        {showStats && (
          <div
            className="pixel-border mb-4 p-4 stats-panel"
            style={{
              backgroundColor: '#16213e',
            }}
          >
            <div className="flex justify-between items-center mb-3">
              <span style={{ color: '#ffd700', fontSize: '10px' }}>PICK HISTORY</span>
              <button
                onClick={() => {
                  setWinHistory({});
                }}
                className="pixel-border px-2 py-1 hover:opacity-80"
                style={{
                  backgroundColor: '#8b0000',
                  color: '#fff',
                  fontSize: '7px',
                }}
              >
                CLEAR
              </button>
            </div>
            {Object.keys(winHistory).length === 0 ? (
              <div style={{ color: '#7fdbca', fontSize: '8px' }}>
                No spins yet! Start spinning to track picks.
              </div>
            ) : (
              <div className="space-y-2">
                {Object.entries(winHistory)
                  .sort(([, a], [, b]) => b - a)
                  .map(([name, count]) => (
                    <div
                      key={name}
                      className="flex justify-between items-center"
                      style={{ fontSize: '9px' }}
                    >
                      <span style={{ color: '#e0e0e0' }}>{name}</span>
                      <div className="flex items-center gap-2">
                        <div
                          style={{
                            width: `${Math.min(count * 20, 100)}px`,
                            height: '8px',
                            backgroundColor: '#7fdbca',
                          }}
                        />
                        <span style={{ color: '#ffd700', minWidth: '30px', textAlign: 'right' }}>
                          {count}x
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            <div
              className="mt-3 pt-2"
              style={{ borderTop: '2px solid #4a4a8a', color: '#7fdbca', fontSize: '7px' }}
            >
              Total spins: {Object.values(winHistory).reduce((a, b) => a + b, 0)}
            </div>
          </div>
        )}

        {/* Header */}
        <h1
          className="text-center text-lg md:text-2xl mb-4 md:mb-8 tracking-wider"
          style={{
            color: '#ffd700',
            textShadow: '4px 4px 0 #ff6b6b, 8px 8px 0 #4a4a8a'
          }}
        >
          SPIN THE BOTTLE
        </h1>

        {/* Flip Container */}
        <div className="flip-container mx-auto mb-8 overflow-hidden" style={{ maxWidth: '700px', width: '100%' }}>
          <div className="game-container" style={{ width: '700px', height: '750px' }}>
            <div className={`flip-card ${!isEditorView ? 'flipped' : ''}`}>

            {/* FRONT SIDE - Editor View */}
            <div className="flip-card-front">
              <div className="relative w-full h-full" style={{ width: '700px', height: '700px' }}>
                {/* Decorative circle background - centered like game view */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: '600px',
                    height: '600px',
                    backgroundColor: '#16213e',
                    border: '4px solid #4a4a8a',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Editor content - absolutely centered like game view */}
                <div
                  className="absolute z-10 w-full max-w-md px-8"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Title */}
                  <div
                    className="text-center mb-6"
                    style={{ color: '#7fdbca', fontSize: '14px' }}
                  >
                    SETUP YOUR GAME
                  </div>

                  {/* Bottle Label Input */}
                  <div className="mb-6">
                    <label
                      className="block mb-2 text-center"
                      style={{ color: '#ffd700', fontSize: '10px' }}
                    >
                      BOTTLE LABEL
                    </label>
                    <input
                      type="text"
                      value={bottleLabel}
                      onChange={(e) => setBottleLabel(e.target.value)}
                      className="pixel-border px-4 py-3 w-full text-center"
                      style={{
                        backgroundColor: '#0f0f23',
                        color: '#e0e0e0',
                        border: 'none',
                        outline: 'none',
                        fontSize: '12px'
                      }}
                      placeholder="Weekly Sync..."
                    />
                  </div>

                  {/* Add name */}
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-center"
                      style={{ color: '#ffd700', fontSize: '10px' }}
                    >
                      ADD PLAYERS
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addName()}
                        className="pixel-border flex-1 px-3 py-2"
                        style={{
                          backgroundColor: '#0f0f23',
                          color: '#e0e0e0',
                          border: 'none',
                          outline: 'none'
                        }}
                        placeholder="Enter name..."
                      />
                      <button
                        onClick={addName}
                        className="pixel-border px-4 py-2 hover:opacity-80 transition-opacity"
                        style={{
                          backgroundColor: '#2d5a27',
                          color: '#e0e0e0'
                        }}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mb-4 justify-center">
                    <button
                      onClick={shuffleNames}
                      className="pixel-border px-3 py-2 hover:opacity-80 transition-opacity"
                      style={{
                        backgroundColor: '#4a4a8a',
                        color: '#e0e0e0',
                        fontSize: '10px'
                      }}
                    >
                      SHUFFLE
                    </button>
                    <button
                      onClick={sortNames}
                      className="pixel-border px-3 py-2 hover:opacity-80 transition-opacity"
                      style={{
                        backgroundColor: '#4a4a8a',
                        color: '#e0e0e0',
                        fontSize: '10px'
                      }}
                    >
                      SORT A-Z
                    </button>
                  </div>

                  {/* Names list */}
                  <div
                    className="flex flex-wrap gap-2 justify-center mb-6 max-h-48 overflow-y-auto p-2"
                    style={{ backgroundColor: '#0f0f23', borderRadius: '4px' }}
                  >
                    {names.map((name, index) => (
                      <div
                        key={`editor-${name}-${index}`}
                        className="pixel-border px-3 py-2 flex items-center gap-2"
                        style={{
                          backgroundColor: '#16213e',
                          color: '#e0e0e0'
                        }}
                      >
                        <span>{name}</span>
                        <button
                          onClick={() => removeName(index)}
                          className="hover:opacity-60 transition-opacity"
                          style={{
                            color: '#ff6b6b',
                            fontSize: '10px'
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    {names.length === 0 && (
                      <div style={{ color: '#7fdbca', padding: '8px' }}>
                        No players yet!
                      </div>
                    )}
                  </div>

                  {/* Player count */}
                  <div
                    className="text-center mb-4"
                    style={{ color: '#7fdbca', fontSize: '10px' }}
                  >
                    {names.length} PLAYER{names.length !== 1 ? 'S' : ''} READY
                  </div>

                  {/* Start button */}
                  <button
                    onClick={() => {
                      if (names.length >= 2) {
                        audio.playStartGameSound();
                        setIsEditorView(false);
                      }
                    }}
                    className={`pixel-border-thick w-full py-4 transition-opacity ${names.length < 2 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'}`}
                    style={{
                      backgroundColor: names.length >= 2 ? '#2d5a27' : '#333',
                      color: '#ffd700',
                      fontSize: '16px'
                    }}
                    disabled={names.length < 2}
                  >
                    {names.length < 2 ? 'NEED 2+ PLAYERS' : 'START GAME'}
                  </button>
                </div>
              </div>
            </div>

            {/* BACK SIDE - Spinner View */}
            <div className="flip-card-back">
              <div className="relative w-full h-full" style={{ width: '700px', height: '700px' }}>
                {/* Sector floor lines */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  width="700"
                  height="700"
                  style={{ opacity: 0.3 }}
                >
                  {names.map((_, index) => {
                    const angle = (index * 360 / names.length) - 90 + (180 / names.length);
                    const rad = angle * Math.PI / 180;
                    const centerX = 350;
                    const centerY = 350;
                    const innerRadius = 170;
                    const outerRadius = 320;
                    const x1 = centerX + Math.cos(rad) * innerRadius;
                    const y1 = centerY + Math.sin(rad) * innerRadius;
                    const x2 = centerX + Math.cos(rad) * outerRadius;
                    const y2 = centerY + Math.sin(rad) * outerRadius;

                    return (
                      <line
                        key={`sector-${index}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#4a4a8a"
                        strokeWidth="2"
                        strokeDasharray="8 4"
                      />
                    );
                  })}
                  <circle
                    cx="350"
                    cy="350"
                    r="320"
                    fill="none"
                    stroke="#4a4a8a"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                  />
                </svg>

                {/* Names around the circle */}
                {names.map((name, index) => {
                  const angle = (index * 360 / names.length) - 90;
                  const radius = 290;
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;
                  const isWinner = winner === name;

                  return (
                    <div
                      key={`${name}-${index}`}
                      className={`absolute flex items-center justify-center ${isWinner ? 'winner-glow' : ''}`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div
                        className="pixel-border px-4 py-3 text-center relative"
                        style={{
                          backgroundColor: isWinner ? '#ffd700' : '#16213e',
                          color: isWinner ? '#1a1a2e' : '#e0e0e0',
                          minWidth: '100px',
                          whiteSpace: 'nowrap',
                          fontSize: '14px'
                        }}
                      >
                        {name}
                        {isWinner && showSparkle && sparkles.map((s, i) => (
                          <div
                            key={i}
                            className="sparkle absolute"
                            style={{
                              left: `${50 + Math.cos((s.angle + i * 45) * Math.PI / 180) * 50}%`,
                              top: `${50 + Math.sin((s.angle + i * 45) * Math.PI / 180) * 50}%`,
                              width: '8px',
                              height: '8px',
                              backgroundColor: '#fff',
                              animationDelay: `${s.delay}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Bottle in center */}
                <div
                  className="absolute left-1/2 top-1/2 cursor-pointer"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                    width: '320px',
                    height: '320px',
                  }}
                  onClick={spinBottle}
                >
                  {/* Bottle SVG */}
                  <svg viewBox="0 0 100 130" className={`w-full h-full ${!isSpinning ? 'float' : ''}`}>
                    {/* Cork top */}
                    {!corkRemoved && (
                      <>
                        <ellipse cx="50" cy="4" rx="8" ry="4" fill="#ffd700" />
                        <ellipse cx="48" cy="3" rx="3" ry="2" fill="#ffed4a" opacity="0.5" />
                        <rect x="42" y="4" width="16" height="8" fill="#ffd700" />
                        <rect x="43" y="5" width="5" height="6" fill="#ffed4a" opacity="0.4" />
                      </>
                    )}

                    {/* Cork body */}
                    {!corkRemoved && (
                      <>
                        <rect x="44" y="12" width="12" height="6" fill="#d2691e" />
                        <rect x="45" y="13" width="4" height="4" fill="#daa520" opacity="0.4" />
                        <rect x="45" y="18" width="10" height="6" fill="#8b4513" />
                        <rect x="46" y="19" width="3" height="4" fill="#a0522d" opacity="0.5" />
                      </>
                    )}

                    {/* Open bottle mouth */}
                    {corkRemoved && (
                      <>
                        <ellipse cx="50" cy="12" rx="6" ry="3" fill={BOTTLE_COLOR.bodyDark} />
                        <rect x="44" y="12" width="12" height="4" fill={BOTTLE_COLOR.body} />
                      </>
                    )}

                    {/* Bottle neck */}
                    <rect x="44" y="16" width="12" height="20" fill={BOTTLE_COLOR.body} />
                    <rect x="45" y="17" width="4" height="18" fill={BOTTLE_COLOR.bodyLight} opacity="0.5" />

                    {/* Neck ring */}
                    <rect x="42" y="36" width="16" height="4" fill={BOTTLE_COLOR.body} />
                    <rect x="43" y="37" width="5" height="2" fill={BOTTLE_COLOR.bodyLight} opacity="0.4" />

                    {/* Shoulder */}
                    <polygon points="42,40 28,60 72,60 58,40" fill={BOTTLE_COLOR.body} />
                    <polygon points="43,41 32,58 43,58" fill={BOTTLE_COLOR.bodyLight} opacity="0.4" />
                    <polygon points="57,41 68,58 57,58" fill={BOTTLE_COLOR.bodyDark} opacity="0.3" />

                    {/* Main body */}
                    <rect x="28" y="60" width="44" height="50" fill={BOTTLE_COLOR.body} />
                    <rect x="30" y="62" width="12" height="46" fill={BOTTLE_COLOR.bodyLight} opacity="0.4" />
                    <rect x="62" y="62" width="6" height="46" fill={BOTTLE_COLOR.bodyDark} opacity="0.3" />
                    <rect x="28" y="60" width="4" height="4" fill={BOTTLE_COLOR.bodyDark} opacity="0.5" />
                    <rect x="68" y="60" width="4" height="4" fill={BOTTLE_COLOR.bodyDark} opacity="0.5" />

                    {/* Bottom */}
                    <rect x="30" y="108" width="40" height="4" fill={BOTTLE_COLOR.body} />
                    <rect x="32" y="112" width="36" height="4" fill={BOTTLE_COLOR.bodyDark} />
                    <rect x="40" y="116" width="20" height="4" fill={BOTTLE_COLOR.bodyDark} />
                    <rect x="44" y="118" width="12" height="4" fill="#0a1a10" />

                    {/* Label */}
                    <rect x="30" y="68" width="40" height="32" fill="#f5deb3" />
                    <rect x="31" y="69" width="38" height="30" fill="#ffe4b5" />
                    <rect x="32" y="70" width="36" height="3" fill="#c4a052" />
                    <rect x="32" y="95" width="36" height="3" fill="#c4a052" />
                    <rect x="46" y="74" width="8" height="2" fill="#87ceeb" />
                    <rect x="47" y="74" width="6" height="1" fill="#add8e6" />

                    <text
                      x="50"
                      y="84"
                      textAnchor="middle"
                      fontSize="6"
                      fontFamily="'Press Start 2P', cursive"
                      fill="#1a1a2e"
                    >
                      {bottleLabel.substring(0, 6)}
                    </text>
                    {bottleLabel.length > 6 && (
                      <text
                        x="50"
                        y="92"
                        textAnchor="middle"
                        fontSize="5"
                        fontFamily="'Press Start 2P', cursive"
                        fill="#1a1a2e"
                      >
                        {bottleLabel.substring(6, 14)}
                      </text>
                    )}

                    <rect x="28" y="108" width="4" height="4" fill={BOTTLE_COLOR.bodyDark} />
                    <rect x="68" y="108" width="4" height="4" fill={BOTTLE_COLOR.bodyDark} />
                  </svg>
                </div>

                {/* Cork popping effect */}
                {showCorkPop && (() => {
                  const bottleMouthDistance = 130;
                  const rotationRad = (rotation - 90) * Math.PI / 180;
                  const mouthX = Math.cos(rotationRad) * bottleMouthDistance;
                  const mouthY = Math.sin(rotationRad) * bottleMouthDistance;

                  const screenLeft = -window.innerWidth / 2;
                  const screenRight = window.innerWidth / 2;
                  const screenTop = -window.innerHeight / 2;
                  const screenBottom = window.innerHeight / 2;

                  const generateBouncePath = () => {
                    const points = [];
                    let x = 0;
                    let y = 0;
                    let vx = Math.cos(rotationRad) * 120 + (Math.random() - 0.5) * 40;
                    let vy = Math.sin(rotationRad) * 120 - 60;

                    for (let i = 0; i < 9; i++) {
                      x += vx;
                      y += vy;

                      if (x < screenLeft) { x = screenLeft; vx = Math.abs(vx) * 0.75; }
                      if (x > screenRight) { x = screenRight; vx = -Math.abs(vx) * 0.75; }
                      if (y < screenTop) { y = screenTop; vy = Math.abs(vy) * 0.75; }
                      if (y > screenBottom) { y = screenBottom; vy = -Math.abs(vy) * 0.7; }

                      vy += 25;
                      vx *= 0.92;
                      vy *= 0.95;

                      points.push({ x, y });
                    }
                    return points;
                  };

                  const bouncePoints = generateBouncePath();

                  return (
                    <div
                      className="absolute left-1/2 top-1/2 pointer-events-none"
                      style={{ transform: 'translate(-50%, -50%)' }}
                    >
                      {/* Flying cork */}
                      <div
                        className="cork-bounce absolute"
                        style={{
                          left: `calc(50% + ${mouthX}px)`,
                          top: `calc(50% + ${mouthY}px)`,
                          marginLeft: '-12px',
                          marginTop: '-18px',
                          '--startX': '0px',
                          '--startY': '0px',
                          '--b1X': `${bouncePoints[0].x}px`,
                          '--b1Y': `${bouncePoints[0].y}px`,
                          '--b2X': `${bouncePoints[1].x}px`,
                          '--b2Y': `${bouncePoints[1].y}px`,
                          '--b3X': `${bouncePoints[2].x}px`,
                          '--b3Y': `${bouncePoints[2].y}px`,
                          '--b4X': `${bouncePoints[3].x}px`,
                          '--b4Y': `${bouncePoints[3].y}px`,
                          '--b5X': `${bouncePoints[4].x}px`,
                          '--b5Y': `${bouncePoints[4].y}px`,
                          '--b6X': `${bouncePoints[5].x}px`,
                          '--b6Y': `${bouncePoints[5].y}px`,
                          '--b7X': `${bouncePoints[6].x}px`,
                          '--b7Y': `${bouncePoints[6].y}px`,
                          '--b8X': `${bouncePoints[7].x}px`,
                          '--b8Y': `${bouncePoints[7].y}px`,
                          '--b9X': `${bouncePoints[8].x}px`,
                          '--b9Y': `${bouncePoints[8].y}px`,
                          '--endX': `${corkPosition.x * 3 + 400}px`,
                          '--endY': `${-300}px`,
                        }}
                      >
                        <svg width="28" height="40" viewBox="0 0 24 34">
                          <ellipse cx="12" cy="5" rx="10" ry="5" fill="#ffd700" />
                          <ellipse cx="9" cy="4" rx="4" ry="2" fill="#ffed4a" opacity="0.5" />
                          <rect x="2" y="5" width="20" height="9" fill="#ffd700" />
                          <rect x="4" y="6" width="6" height="7" fill="#ffed4a" opacity="0.4" />
                          <rect x="4" y="14" width="16" height="8" fill="#d2691e" />
                          <rect x="6" y="15" width="5" height="6" fill="#daa520" opacity="0.4" />
                          <rect x="5" y="22" width="14" height="10" fill="#8b4513" />
                          <rect x="7" y="23" width="4" height="8" fill="#a0522d" opacity="0.5" />
                          <rect x="6" y="30" width="12" height="4" fill="#6b3810" />
                        </svg>
                      </div>

                      {/* Foam stream */}
                      <div
                        className="foam-stream absolute"
                        style={{
                          left: `calc(50% + ${mouthX}px)`,
                          top: `calc(50% + ${mouthY}px)`,
                          width: '60px',
                          height: '250px',
                          marginLeft: '-30px',
                          marginTop: '-250px',
                          background: `linear-gradient(to top, ${foamColor.primary}, ${foamColor.secondary}, ${foamColor.accent}80)`,
                          borderRadius: '30px 30px 50% 50%',
                          transformOrigin: 'bottom center',
                          transform: `rotate(${rotation}deg)`,
                          boxShadow: `0 0 40px ${foamColor.primary}, 0 0 80px ${foamColor.secondary}cc, 0 0 120px ${foamColor.accent}80`,
                        }}
                      />

                      {/* Foam burst rings */}
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((ring) => (
                        <div
                          key={`ring-${ring}`}
                          className="foam-stream absolute"
                          style={{
                            left: `calc(50% + ${mouthX}px)`,
                            top: `calc(50% + ${mouthY}px)`,
                            width: `${30 + ring * 15}px`,
                            height: `${120 + ring * 40}px`,
                            marginLeft: `-${15 + ring * 7.5}px`,
                            marginTop: `-${120 + ring * 40}px`,
                            background: `linear-gradient(to top, ${foamColor.primary}ee, ${foamColor.secondary}aa, transparent)`,
                            borderRadius: '40% 40% 50% 50%',
                            transformOrigin: 'bottom center',
                            transform: `rotate(${rotation + (ring - 3) * 10}deg)`,
                            animationDelay: `${ring * 0.05}s`,
                            opacity: 0.8 - ring * 0.08,
                          }}
                        />
                      ))}
                    </div>
                  );
                })()}

                {/* Champagne foam spray */}
                {showFoam && (() => {
                  const bottleMouthDistance = 130;
                  const rotationRad = (rotation - 90) * Math.PI / 180;
                  const mouthX = Math.cos(rotationRad) * bottleMouthDistance;
                  const mouthY = Math.sin(rotationRad) * bottleMouthDistance;

                  return (
                    <div
                      className="absolute left-1/2 top-1/2 pointer-events-none"
                      style={{ transform: 'translate(-50%, -50%)' }}
                    >
                      {foamParticles.map((particle) => (
                        <div
                          key={particle.id}
                          className="foam-particle absolute"
                          style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            backgroundColor: particle.type === 'bubble' ? foamColor.accent :
                                            particle.type === 'foam' ? (particle.id % 2 === 0 ? foamColor.primary : foamColor.secondary) :
                                            foamColor.primary,
                            borderRadius: particle.type === 'bubble' ? '50%' : '3px',
                            left: `calc(50% + ${mouthX}px)`,
                            top: `calc(50% + ${mouthY}px)`,
                            marginLeft: `-${particle.size / 2}px`,
                            marginTop: `-${particle.size / 2}px`,
                            '--endX': `${particle.endX}px`,
                            '--endY': `${particle.endY}px`,
                            '--endX-20': `${particle.endX * 0.2}px`,
                            '--endY-20': `${particle.endY * 0.2}px`,
                            animationDuration: `${particle.duration}s`,
                            animationDelay: `${particle.delay}s`,
                            opacity: particle.opacity,
                            boxShadow: particle.type === 'chunk' ?
                              `0 0 10px ${foamColor.primary}, 0 0 20px ${foamColor.secondary}cc` :
                              `0 0 6px ${foamColor.accent}`,
                          }}
                        />
                      ))}
                      {foamParticles.slice(0, 200).map((particle) => (
                        <div
                          key={`bubble-${particle.id}`}
                          className="foam-particle absolute"
                          style={{
                            width: `${particle.size * 0.4}px`,
                            height: `${particle.size * 0.4}px`,
                            backgroundColor: foamColor.accent,
                            borderRadius: '50%',
                            left: `calc(50% + ${mouthX}px)`,
                            top: `calc(50% + ${mouthY}px)`,
                            marginLeft: `-${particle.size * 0.2}px`,
                            marginTop: `-${particle.size * 0.2}px`,
                            '--endX': `${particle.endX * 1.4}px`,
                            '--endY': `${particle.endY * 1.4}px`,
                            '--endX-20': `${particle.endX * 0.28}px`,
                            '--endY-20': `${particle.endY * 0.28}px`,
                            animationDuration: `${particle.duration * 1.5}s`,
                            animationDelay: `${particle.delay + 0.2}s`,
                            opacity: 0.8,
                            boxShadow: `0 0 3px ${foamColor.primary}`,
                          }}
                        />
                      ))}
                      {foamParticles.slice(0, 150).map((particle) => (
                        <div
                          key={`foam2-${particle.id}`}
                          className="foam-particle absolute"
                          style={{
                            width: `${particle.size * 0.8}px`,
                            height: `${particle.size * 0.8}px`,
                            backgroundColor: particle.id % 3 === 0 ? foamColor.primary : foamColor.secondary,
                            borderRadius: '4px',
                            left: `calc(50% + ${mouthX}px)`,
                            top: `calc(50% + ${mouthY}px)`,
                            marginLeft: `-${particle.size * 0.4}px`,
                            marginTop: `-${particle.size * 0.4}px`,
                            '--endX': `${particle.endX * 0.9 + (Math.random() - 0.5) * 50}px`,
                            '--endY': `${particle.endY * 0.9 + (Math.random() - 0.5) * 50}px`,
                            '--endX-20': `${particle.endX * 0.18}px`,
                            '--endY-20': `${particle.endY * 0.18}px`,
                            animationDuration: `${particle.duration * 1.2}s`,
                            animationDelay: `${particle.delay * 0.8}s`,
                            opacity: 0.7,
                            boxShadow: `0 0 8px ${foamColor.accent}`,
                          }}
                        />
                      ))}
                    </div>
                  );
                })()}

                {/* Click to spin text */}
                {!isSpinning && names.length >= 2 && (
                  <div
                    className="absolute left-1/2 text-center"
                    style={{
                      bottom: '35%',
                      transform: 'translateX(-50%)',
                      color: '#7fdbca',
                      fontSize: '8px'
                    }}
                  >
                    CLICK OR PRESS SPACE TO SPIN!
                  </div>
                )}

                {/* Not enough players warning */}
                {names.length < 2 && (
                  <div
                    className="absolute left-1/2 text-center"
                    style={{
                      bottom: '35%',
                      transform: 'translateX(-50%)',
                      color: '#ff6b6b',
                      fontSize: '8px'
                    }}
                  >
                    ADD MORE PLAYERS!
                  </div>
                )}

                {/* Edit button */}
                <button
                  onClick={() => !isSpinning && setIsEditorView(true)}
                  className={`absolute pixel-border px-4 py-2 transition-opacity ${isSpinning ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'}`}
                  style={{
                    bottom: '-45px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#4a4a8a',
                    color: '#e0e0e0',
                    fontSize: '10px',
                    zIndex: 10,
                  }}
                  disabled={isSpinning}
                >
                  EDIT PLAYERS
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Winner celebration overlay */}
        {showWinnerCelebration && winner && (
          <div
            className="fixed inset-0 flex items-center justify-center"
            style={{
              zIndex: 50,
              backgroundColor: 'rgba(15, 15, 35, 0.95)',
            }}
            onClick={() => setShowWinnerCelebration(false)}
          >
            {/* Confetti */}
            {confetti.map((particle) => (
              <div
                key={particle.id}
                className="confetti"
                style={{
                  left: `${particle.x}%`,
                  '--color': particle.color,
                  '--size': `${particle.size}px`,
                  '--delay': `${particle.delay}s`,
                  '--duration': `${particle.duration}s`,
                  transform: `rotate(${particle.rotation}deg)`,
                }}
              />
            ))}

            {/* Flying object with ribbon banner */}
            <div
              className="plane-fly fixed"
              style={{
                top: '15%',
                left: 0,
                zIndex: 70,
                pointerEvents: 'none',
              }}
            >
              <div style={{ width: `${flyingObject.width}px`, height: `${flyingObject.height}px` }}>
                <flyingObject.Component />
              </div>

              {/* Ribbon banner */}
              <div
                className="absolute"
                style={{
                  top: `${flyingObject.height * 0.3}px`,
                  right: `${flyingObject.width * 0.7}px`,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '4px',
                    backgroundColor: '#8b4513',
                    marginRight: '-2px',
                  }}
                />
                <div
                  className="pixel-border flex items-center justify-center"
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '16px 40px',
                    minWidth: '300px',
                    height: '60px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      color: '#000',
                      fontSize: '16px',
                      textShadow: '1px 1px 0 #ccc',
                      letterSpacing: '2px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {bottleLabel.toUpperCase()}
                  </span>
                </div>
                <div
                  style={{
                    width: '0',
                    height: '0',
                    borderTop: '30px solid transparent',
                    borderBottom: '30px solid transparent',
                    borderLeft: '25px solid #ffffff',
                    marginLeft: '-1px',
                  }}
                />
              </div>
            </div>

            <div
              className="winner-celebration flex items-center gap-12"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
              }}
            >
              {/* Left dancing animal */}
              {dancingAnimals.left && (
                <div
                  className="dancing"
                  style={{
                    animationDelay: '0s',
                    width: '120px',
                    height: '120px',
                  }}
                >
                  <dancingAnimals.left.Component />
                </div>
              )}

              {/* Winner name */}
              <div
                className="text-center py-8 px-8 pixel-border-thick shimmer"
                style={{
                  backgroundColor: '#16213e',
                  borderColor: '#ffd700',
                  maxWidth: '70vw',
                  minWidth: '200px',
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '16px', color: '#ff6b6b' }}>
                  WINNER
                </div>
                <div
                  style={{
                    fontSize: winner && winner.length > 12 ? (winner.length > 20 ? '28px' : '40px') : '56px',
                    color: '#ffd700',
                    textShadow: '3px 3px 0 #ff6b6b, 6px 6px 0 #4a4a8a',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  {winner}
                </div>
              </div>

              {/* Right dancing animal */}
              {dancingAnimals.right && (
                <div
                  className="dancing"
                  style={{
                    animationDelay: '0.25s',
                    width: '120px',
                    height: '120px',
                    transform: 'scaleX(-1)',
                  }}
                >
                  <dancingAnimals.right.Component />
                </div>
              )}
            </div>

            <div
              className="absolute bottom-8 left-1/2 pixel-font"
              style={{
                transform: 'translateX(-50%)',
                color: '#7fdbca',
                fontSize: '10px',
              }}
            >
              CLICK TO CONTINUE
            </div>
          </div>
        )}

        {/* Footer */}
        <div
          className="text-center mt-20"
          style={{
            color: '#4a4a8a',
            fontSize: '8px'
          }}
        >
          ★ PIXEL BOTTLE PICKER ★
        </div>
      </div>
    </div>
  );
}
