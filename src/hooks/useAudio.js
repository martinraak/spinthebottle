import { useRef, useCallback, useEffect, useMemo } from 'react';

/**
 * Custom hook for 8-bit audio effects with proper React state management.
 * Moves audio state into React refs to avoid global mutable state issues.
 */
export function useAudio(isMuted) {
  // Audio context ref - lazy initialized
  const audioCtxRef = useRef(null);

  // Spinning sound state refs
  const spinSoundActiveRef = useRef(false);
  const lastSpinSoundTimeRef = useRef(0);
  const spinSoundTimeoutRef = useRef(null);

  // Get or create audio context
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    // Resume context if suspended (browser autoplay policy)
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Play a simple 8-bit tone
  const playTone = useCallback((frequency, duration, type = 'square', volume = 0.3) => {
    if (isMuted) return;
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  }, [isMuted, getAudioContext]);

  // Play a sequence of notes
  const playSequence = useCallback((notes, tempo = 150) => {
    if (isMuted) return;
    const ctx = getAudioContext();
    let time = ctx.currentTime;
    const beatDuration = 60 / tempo;

    notes.forEach(({ freq, duration, type = 'square', volume = 0.3 }) => {
      if (freq > 0) {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(freq, time);

        gainNode.gain.setValueAtTime(volume, time);
        gainNode.gain.exponentialRampToValueAtTime(0.01, time + duration * beatDuration * 0.9);

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start(time);
        oscillator.stop(time + duration * beatDuration);
      }
      time += duration * beatDuration;
    });
  }, [isMuted, getAudioContext]);

  // Sound: Start Game - triumphant fanfare
  const playStartGameSound = useCallback(() => {
    playSequence([
      { freq: 523, duration: 0.15, volume: 0.4 }, // C5
      { freq: 659, duration: 0.15, volume: 0.4 }, // E5
      { freq: 784, duration: 0.15, volume: 0.4 }, // G5
      { freq: 1047, duration: 0.4, volume: 0.5 }, // C6
    ], 300);
  }, [playSequence]);

  // Sound: Spin click - quick whoosh up
  const playSpinClickSound = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(200, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.15);

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.2);
  }, [isMuted, getAudioContext]);

  // Spinning sound tick - pitch based on velocity
  const playSpinTick = useCallback((velocity) => {
    const pitch = 200 + (velocity * 8); // 200-840 Hz range
    const volume = Math.min(0.25, 0.08 + velocity * 0.003);
    playTone(pitch, 0.06, 'square', volume);
  }, [playTone]);

  // Start spinning sound tracking
  const startSpinningSound = useCallback(() => {
    spinSoundActiveRef.current = true;
    lastSpinSoundTimeRef.current = 0;
  }, []);

  // Update spinning sound based on velocity (called in animation loop)
  const updateSpinningSound = useCallback((velocity, currentTime) => {
    if (!spinSoundActiveRef.current) return;

    // Calculate interval based on velocity - faster spin = faster ticks
    const interval = Math.max(30, Math.min(300, 400 / (velocity + 1)));

    if (currentTime - lastSpinSoundTimeRef.current >= interval) {
      playSpinTick(velocity);
      lastSpinSoundTimeRef.current = currentTime;
    }
  }, [playSpinTick]);

  // Stop spinning sound
  const stopSpinningSound = useCallback(() => {
    spinSoundActiveRef.current = false;
    if (spinSoundTimeoutRef.current) {
      clearTimeout(spinSoundTimeoutRef.current);
      spinSoundTimeoutRef.current = null;
    }
  }, []);

  // Sound: Cork pop - explosive pop with fizz
  const playCorkPopSound = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();

    // Initial loud pop
    const popOsc = ctx.createOscillator();
    const popGain = ctx.createGain();
    popOsc.type = 'square';
    popOsc.frequency.setValueAtTime(150, ctx.currentTime);
    popOsc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);
    popGain.gain.setValueAtTime(0.6, ctx.currentTime);
    popGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    popOsc.connect(popGain);
    popGain.connect(ctx.destination);
    popOsc.start(ctx.currentTime);
    popOsc.stop(ctx.currentTime + 0.15);

    // Fizzing noise
    const bufferSize = ctx.sampleRate * 0.5;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseGain = ctx.createGain();
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(3000, ctx.currentTime);

    noiseGain.gain.setValueAtTime(0.4, ctx.currentTime + 0.05);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(ctx.currentTime + 0.05);

    // Rising whistle (cork flying)
    const whistleOsc = ctx.createOscillator();
    const whistleGain = ctx.createGain();
    whistleOsc.type = 'sine';
    whistleOsc.frequency.setValueAtTime(400, ctx.currentTime + 0.1);
    whistleOsc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.4);
    whistleOsc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.8);
    whistleGain.gain.setValueAtTime(0.2, ctx.currentTime + 0.1);
    whistleGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
    whistleOsc.connect(whistleGain);
    whistleGain.connect(ctx.destination);
    whistleOsc.start(ctx.currentTime + 0.1);
    whistleOsc.stop(ctx.currentTime + 0.8);
  }, [isMuted, getAudioContext]);

  // Sound: Winner celebration tune - over the top 8-bit victory music
  const playWinnerCelebration = useCallback(() => {
    // Main melody - triumphant fanfare
    const melody = [
      { freq: 523, duration: 0.25, volume: 0.4 }, // C5
      { freq: 523, duration: 0.25, volume: 0.4 }, // C5
      { freq: 523, duration: 0.25, volume: 0.4 }, // C5
      { freq: 659, duration: 0.5, volume: 0.5 },  // E5
      { freq: 784, duration: 0.25, volume: 0.4 }, // G5
      { freq: 784, duration: 0.25, volume: 0.4 }, // G5
      { freq: 659, duration: 0.25, volume: 0.4 }, // E5
      { freq: 784, duration: 0.25, volume: 0.4 }, // G5
      { freq: 1047, duration: 0.75, volume: 0.6 }, // C6
      { freq: 0, duration: 0.25 }, // rest
      { freq: 784, duration: 0.25, volume: 0.4 }, // G5
      { freq: 1047, duration: 0.25, volume: 0.5 }, // C6
      { freq: 1319, duration: 0.75, volume: 0.6 }, // E6
    ];

    playSequence(melody, 280);

    // Add bass line for extra punch
    setTimeout(() => {
      const bass = [
        { freq: 131, duration: 0.5, type: 'triangle', volume: 0.5 }, // C3
        { freq: 165, duration: 0.5, type: 'triangle', volume: 0.5 }, // E3
        { freq: 196, duration: 0.5, type: 'triangle', volume: 0.5 }, // G3
        { freq: 262, duration: 1.0, type: 'triangle', volume: 0.6 }, // C4
      ];
      playSequence(bass, 280);
    }, 100);

    // Add arpeggios for sparkle
    setTimeout(() => {
      const arp = [
        { freq: 1047, duration: 0.1, volume: 0.2 },
        { freq: 1319, duration: 0.1, volume: 0.2 },
        { freq: 1568, duration: 0.1, volume: 0.2 },
        { freq: 2093, duration: 0.2, volume: 0.3 },
        { freq: 1568, duration: 0.1, volume: 0.2 },
        { freq: 1319, duration: 0.1, volume: 0.2 },
        { freq: 1047, duration: 0.1, volume: 0.2 },
        { freq: 1319, duration: 0.1, volume: 0.2 },
        { freq: 1568, duration: 0.1, volume: 0.2 },
        { freq: 2093, duration: 0.3, volume: 0.35 },
      ];
      playSequence(arp, 400);
    }, 800);
  }, [playSequence]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSpinningSound();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    };
  }, [stopSpinningSound]);

  return useMemo(() => ({
    playStartGameSound,
    playSpinClickSound,
    startSpinningSound,
    updateSpinningSound,
    stopSpinningSound,
    playCorkPopSound,
    playWinnerCelebration,
  }), [
    playStartGameSound,
    playSpinClickSound,
    startSpinningSound,
    updateSpinningSound,
    stopSpinningSound,
    playCorkPopSound,
    playWinnerCelebration,
  ]);
}
