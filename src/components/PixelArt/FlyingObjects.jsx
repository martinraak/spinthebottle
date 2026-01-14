import React from 'react';

// Pixel art Cessna airplane for celebration
export const PixelCessna = () => (
  <svg viewBox="0 0 40 20" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Tail section */}
    <rect x="0" y="6" width="6" height="5" fill="#fff"/>
    <rect x="1" y="7" width="4" height="3" fill="#f0f0f0"/>
    {/* Vertical tail fin */}
    <rect x="2" y="1" width="4" height="6" fill="#fff"/>
    <rect x="3" y="2" width="2" height="4" fill="#f0f0f0"/>
    <rect x="4" y="0" width="2" height="2" fill="#fff"/>
    {/* Horizontal stabilizer */}
    <rect x="0" y="5" width="6" height="2" fill="#fff"/>
    <rect x="0" y="10" width="6" height="2" fill="#fff"/>
    {/* Main fuselage */}
    <rect x="6" y="6" width="24" height="6" fill="#fff"/>
    <rect x="7" y="7" width="22" height="4" fill="#f5f5f5"/>
    {/* Red stripe on fuselage */}
    <rect x="6" y="9" width="22" height="2" fill="#ff4444"/>
    {/* Cockpit windows */}
    <rect x="22" y="6" width="6" height="3" fill="#87ceeb"/>
    <rect x="23" y="6" width="4" height="2" fill="#add8e6"/>
    {/* Nose/engine cowling */}
    <rect x="30" y="7" width="6" height="4" fill="#ccc"/>
    <rect x="31" y="8" width="4" height="2" fill="#e0e0e0"/>
    {/* Propeller spinner */}
    <rect x="36" y="8" width="2" height="2" fill="#333"/>
    {/* Propeller blades (blurred motion) */}
    <rect x="38" y="4" width="2" height="10" fill="#888" opacity="0.7"/>
    <rect x="38" y="5" width="2" height="8" fill="#666" opacity="0.5"/>
    {/* High wing */}
    <rect x="12" y="3" width="14" height="3" fill="#fff"/>
    <rect x="13" y="4" width="12" height="2" fill="#f0f0f0"/>
    <rect x="10" y="4" width="3" height="2" fill="#fff"/>
    <rect x="25" y="4" width="3" height="2" fill="#fff"/>
    {/* Wing strut */}
    <rect x="16" y="6" width="1" height="3" fill="#aaa"/>
    <rect x="21" y="6" width="1" height="3" fill="#aaa"/>
    {/* Landing gear */}
    <rect x="14" y="12" width="1" height="3" fill="#666"/>
    <rect x="23" y="12" width="1" height="3" fill="#666"/>
    {/* Wheels */}
    <rect x="13" y="15" width="3" height="3" fill="#333"/>
    <rect x="22" y="15" width="3" height="3" fill="#333"/>
    <rect x="14" y="16" width="1" height="1" fill="#555"/>
    <rect x="23" y="16" width="1" height="1" fill="#555"/>
  </svg>
);

// Pixel art Unicorn flying
export const PixelUnicorn = () => (
  <svg viewBox="0 0 40 24" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Tail - rainbow colored */}
    <rect x="0" y="10" width="3" height="2" fill="#ff6b6b"/>
    <rect x="1" y="12" width="3" height="2" fill="#ffd700"/>
    <rect x="0" y="14" width="3" height="2" fill="#7fdbca"/>
    <rect x="1" y="16" width="2" height="2" fill="#ff69b4"/>
    {/* Back legs */}
    <rect x="6" y="18" width="3" height="5" fill="#fff"/>
    <rect x="7" y="22" width="2" height="2" fill="#ffb6c1"/>
    {/* Body */}
    <rect x="5" y="10" width="20" height="10" fill="#fff"/>
    <rect x="6" y="11" width="18" height="8" fill="#f8f8ff"/>
    {/* Front legs */}
    <rect x="20" y="18" width="3" height="5" fill="#fff"/>
    <rect x="21" y="22" width="2" height="2" fill="#ffb6c1"/>
    {/* Wing */}
    <rect x="10" y="4" width="10" height="8" fill="#e6e6fa"/>
    <rect x="12" y="2" width="6" height="4" fill="#d8bfd8"/>
    <rect x="11" y="5" width="8" height="6" fill="#f0e6ff"/>
    {/* Neck */}
    <rect x="22" y="6" width="6" height="8" fill="#fff"/>
    {/* Head */}
    <rect x="26" y="4" width="10" height="8" fill="#fff"/>
    <rect x="27" y="5" width="8" height="6" fill="#f8f8ff"/>
    {/* Horn - rainbow spiral */}
    <rect x="34" y="0" width="2" height="5" fill="#ffd700"/>
    <rect x="35" y="1" width="2" height="3" fill="#ff69b4"/>
    <rect x="36" y="0" width="2" height="2" fill="#7fdbca"/>
    {/* Eye */}
    <rect x="32" y="6" width="2" height="2" fill="#ff69b4"/>
    <rect x="33" y="6" width="1" height="1" fill="#fff"/>
    {/* Mane - rainbow */}
    <rect x="22" y="2" width="3" height="3" fill="#ff6b6b"/>
    <rect x="24" y="3" width="3" height="3" fill="#ffd700"/>
    <rect x="26" y="2" width="3" height="2" fill="#7fdbca"/>
    {/* Nose */}
    <rect x="35" y="9" width="2" height="2" fill="#ffb6c1"/>
  </svg>
);

// Pixel art TIE Fighter
export const PixelTieFighter = () => (
  <svg viewBox="0 0 40 24" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Left wing panel */}
    <rect x="0" y="0" width="3" height="24" fill="#333"/>
    <rect x="3" y="2" width="2" height="20" fill="#444"/>
    <rect x="1" y="1" width="1" height="22" fill="#555"/>
    {/* Left wing struts */}
    <rect x="5" y="10" width="8" height="4" fill="#666"/>
    <rect x="6" y="11" width="6" height="2" fill="#777"/>
    {/* Cockpit ball */}
    <rect x="13" y="6" width="14" height="12" fill="#333"/>
    <rect x="15" y="8" width="10" height="8" fill="#444"/>
    {/* Cockpit window */}
    <rect x="17" y="9" width="6" height="6" fill="#4a90d9"/>
    <rect x="18" y="10" width="4" height="4" fill="#87ceeb"/>
    <rect x="19" y="11" width="2" height="2" fill="#add8e6"/>
    {/* Right wing struts */}
    <rect x="27" y="10" width="8" height="4" fill="#666"/>
    <rect x="28" y="11" width="6" height="2" fill="#777"/>
    {/* Right wing panel */}
    <rect x="35" y="0" width="3" height="24" fill="#333"/>
    <rect x="35" y="2" width="2" height="20" fill="#444"/>
    <rect x="37" y="1" width="1" height="22" fill="#555"/>
    {/* Panel details */}
    <rect x="1" y="4" width="1" height="4" fill="#222"/>
    <rect x="1" y="12" width="1" height="4" fill="#222"/>
    <rect x="37" y="4" width="1" height="4" fill="#222"/>
    <rect x="37" y="12" width="1" height="4" fill="#222"/>
  </svg>
);

// Pixel art UFO / Flying Saucer
export const PixelUFO = () => (
  <svg viewBox="0 0 40 20" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Bottom beam */}
    <rect x="16" y="16" width="8" height="4" fill="#7fff00" opacity="0.5"/>
    <rect x="18" y="18" width="4" height="2" fill="#7fff00" opacity="0.3"/>
    {/* Main saucer body */}
    <rect x="4" y="10" width="32" height="4" fill="#888"/>
    <rect x="6" y="11" width="28" height="2" fill="#aaa"/>
    <rect x="2" y="11" width="4" height="2" fill="#666"/>
    <rect x="34" y="11" width="4" height="2" fill="#666"/>
    {/* Dome */}
    <rect x="12" y="4" width="16" height="8" fill="#87ceeb"/>
    <rect x="14" y="2" width="12" height="4" fill="#add8e6"/>
    <rect x="16" y="0" width="8" height="3" fill="#b0e0e6"/>
    <rect x="14" y="5" width="4" height="4" fill="#c0e8f0"/>
    {/* Lights around rim */}
    <rect x="6" y="12" width="2" height="2" fill="#ff0000"/>
    <rect x="12" y="13" width="2" height="2" fill="#00ff00"/>
    <rect x="18" y="12" width="2" height="2" fill="#ffff00"/>
    <rect x="24" y="13" width="2" height="2" fill="#00ff00"/>
    <rect x="30" y="12" width="2" height="2" fill="#ff0000"/>
    {/* Alien eyes in dome */}
    <rect x="16" y="6" width="3" height="3" fill="#000"/>
    <rect x="21" y="6" width="3" height="3" fill="#000"/>
    <rect x="17" y="7" width="1" height="1" fill="#0f0"/>
    <rect x="22" y="7" width="1" height="1" fill="#0f0"/>
  </svg>
);

// Pixel art Helicopter
export const PixelHelicopter = () => (
  <svg viewBox="0 0 44 20" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Tail boom */}
    <rect x="0" y="8" width="12" height="4" fill="#c41e3a"/>
    <rect x="1" y="9" width="10" height="2" fill="#d44d5c"/>
    {/* Tail rotor */}
    <rect x="0" y="4" width="2" height="12" fill="#666"/>
    <rect x="0" y="5" width="1" height="10" fill="#888" opacity="0.7"/>
    {/* Tail fin */}
    <rect x="2" y="5" width="3" height="3" fill="#c41e3a"/>
    {/* Main body */}
    <rect x="12" y="6" width="22" height="10" fill="#c41e3a"/>
    <rect x="14" y="8" width="18" height="6" fill="#d44d5c"/>
    {/* Cockpit */}
    <rect x="30" y="6" width="10" height="8" fill="#87ceeb"/>
    <rect x="32" y="7" width="6" height="6" fill="#add8e6"/>
    <rect x="34" y="8" width="3" height="4" fill="#c0e8f0"/>
    {/* Nose */}
    <rect x="38" y="8" width="4" height="6" fill="#c41e3a"/>
    <rect x="40" y="9" width="2" height="4" fill="#d44d5c"/>
    {/* Main rotor mast */}
    <rect x="22" y="2" width="4" height="4" fill="#444"/>
    {/* Main rotor blades (spinning blur) */}
    <rect x="4" y="0" width="38" height="3" fill="#666" opacity="0.6"/>
    <rect x="8" y="1" width="30" height="2" fill="#888" opacity="0.4"/>
    {/* Landing skids */}
    <rect x="14" y="16" width="2" height="4" fill="#444"/>
    <rect x="30" y="16" width="2" height="4" fill="#444"/>
    <rect x="12" y="18" width="22" height="2" fill="#333"/>
  </svg>
);

// Pixel art Rocket Ship
export const PixelRocket = () => (
  <svg viewBox="0 0 40 24" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Flame exhaust */}
    <rect x="0" y="8" width="6" height="8" fill="#ff4500"/>
    <rect x="2" y="10" width="4" height="4" fill="#ffd700"/>
    <rect x="4" y="11" width="2" height="2" fill="#fff"/>
    {/* Tail fins */}
    <rect x="6" y="4" width="4" height="6" fill="#c41e3a"/>
    <rect x="6" y="14" width="4" height="6" fill="#c41e3a"/>
    {/* Main body */}
    <rect x="8" y="6" width="22" height="12" fill="#e8e8e8"/>
    <rect x="10" y="8" width="18" height="8" fill="#f5f5f5"/>
    {/* Red stripe */}
    <rect x="8" y="10" width="22" height="4" fill="#c41e3a"/>
    {/* Window */}
    <rect x="20" y="8" width="6" height="8" fill="#4a90d9"/>
    <rect x="21" y="9" width="4" height="6" fill="#87ceeb"/>
    <rect x="22" y="10" width="2" height="4" fill="#add8e6"/>
    {/* Nose cone */}
    <rect x="30" y="8" width="6" height="8" fill="#c41e3a"/>
    <rect x="34" y="9" width="4" height="6" fill="#d44d5c"/>
    <rect x="36" y="10" width="3" height="4" fill="#e55d6d"/>
    <rect x="38" y="11" width="2" height="2" fill="#f0f0f0"/>
  </svg>
);

// Pixel art Superman flying
export const PixelSuperhero = () => (
  <svg viewBox="0 0 40 20" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Cape flowing behind */}
    <rect x="0" y="6" width="8" height="10" fill="#c41e3a"/>
    <rect x="2" y="8" width="6" height="6" fill="#d44d5c"/>
    <rect x="0" y="14" width="4" height="4" fill="#c41e3a"/>
    {/* Boots */}
    <rect x="4" y="14" width="4" height="4" fill="#c41e3a"/>
    {/* Legs */}
    <rect x="6" y="12" width="8" height="4" fill="#1e90ff"/>
    {/* Body */}
    <rect x="12" y="6" width="14" height="10" fill="#1e90ff"/>
    <rect x="14" y="8" width="10" height="6" fill="#4169e1"/>
    {/* S symbol on chest */}
    <rect x="17" y="8" width="6" height="5" fill="#ffd700"/>
    <rect x="18" y="9" width="4" height="3" fill="#c41e3a"/>
    {/* Arms stretched forward */}
    <rect x="26" y="8" width="10" height="4" fill="#ffdbac"/>
    <rect x="34" y="9" width="4" height="2" fill="#ffdbac"/>
    {/* Fists */}
    <rect x="36" y="8" width="4" height="4" fill="#ffdbac"/>
    {/* Head */}
    <rect x="24" y="2" width="8" height="8" fill="#ffdbac"/>
    <rect x="25" y="3" width="6" height="6" fill="#ffe4c4"/>
    {/* Hair */}
    <rect x="24" y="0" width="8" height="3" fill="#222"/>
    <rect x="23" y="2" width="2" height="2" fill="#222"/>
    {/* Eyes */}
    <rect x="27" y="5" width="2" height="1" fill="#1e90ff"/>
    <rect x="30" y="5" width="2" height="1" fill="#1e90ff"/>
  </svg>
);

// Pixel art Dragon
export const PixelDragon = () => (
  <svg viewBox="0 0 44 24" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Tail */}
    <rect x="0" y="12" width="6" height="4" fill="#228b22"/>
    <rect x="0" y="14" width="3" height="2" fill="#32cd32"/>
    {/* Tail spikes */}
    <rect x="2" y="10" width="2" height="2" fill="#ff4500"/>
    {/* Back legs */}
    <rect x="8" y="18" width="4" height="6" fill="#228b22"/>
    <rect x="9" y="22" width="3" height="2" fill="#1a6b1a"/>
    {/* Body */}
    <rect x="6" y="10" width="24" height="10" fill="#228b22"/>
    <rect x="8" y="12" width="20" height="6" fill="#32cd32"/>
    {/* Wings */}
    <rect x="10" y="2" width="16" height="10" fill="#2e8b57"/>
    <rect x="12" y="0" width="12" height="4" fill="#3cb371"/>
    <rect x="14" y="4" width="10" height="6" fill="#228b22"/>
    {/* Wing membrane lines */}
    <rect x="12" y="4" width="1" height="6" fill="#1a6b1a"/>
    <rect x="16" y="2" width="1" height="8" fill="#1a6b1a"/>
    <rect x="20" y="2" width="1" height="8" fill="#1a6b1a"/>
    {/* Front legs */}
    <rect x="24" y="18" width="4" height="6" fill="#228b22"/>
    <rect x="25" y="22" width="3" height="2" fill="#1a6b1a"/>
    {/* Neck */}
    <rect x="28" y="8" width="6" height="8" fill="#228b22"/>
    {/* Head */}
    <rect x="32" y="6" width="10" height="10" fill="#228b22"/>
    <rect x="34" y="8" width="6" height="6" fill="#32cd32"/>
    {/* Snout */}
    <rect x="40" y="10" width="4" height="4" fill="#228b22"/>
    {/* Fire breath */}
    <rect x="42" y="8" width="2" height="2" fill="#ff4500"/>
    <rect x="42" y="14" width="2" height="2" fill="#ff4500"/>
    {/* Eye */}
    <rect x="38" y="8" width="2" height="2" fill="#ffd700"/>
    <rect x="39" y="8" width="1" height="1" fill="#000"/>
    {/* Horns */}
    <rect x="34" y="4" width="2" height="3" fill="#8b4513"/>
    <rect x="38" y="4" width="2" height="3" fill="#8b4513"/>
  </svg>
);

// Pixel art Hot Air Balloon
export const PixelBalloon = () => (
  <svg viewBox="0 0 32 28" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Balloon envelope */}
    <rect x="4" y="0" width="24" height="6" fill="#ff6b6b"/>
    <rect x="2" y="4" width="28" height="8" fill="#ffd700"/>
    <rect x="4" y="10" width="24" height="6" fill="#7fdbca"/>
    <rect x="6" y="14" width="20" height="4" fill="#ff69b4"/>
    {/* Balloon highlights */}
    <rect x="6" y="2" width="4" height="10" fill="#ff8a8a"/>
    <rect x="22" y="2" width="4" height="10" fill="#cc5555"/>
    {/* Ropes */}
    <rect x="8" y="18" width="1" height="4" fill="#8b4513"/>
    <rect x="14" y="18" width="1" height="4" fill="#8b4513"/>
    <rect x="17" y="18" width="1" height="4" fill="#8b4513"/>
    <rect x="23" y="18" width="1" height="4" fill="#8b4513"/>
    {/* Basket */}
    <rect x="8" y="22" width="16" height="6" fill="#8b4513"/>
    <rect x="10" y="24" width="12" height="2" fill="#a0522d"/>
    {/* Person in basket */}
    <rect x="14" y="20" width="4" height="4" fill="#ffdbac"/>
    <rect x="15" y="18" width="2" height="2" fill="#ffdbac"/>
  </svg>
);

// Pixel art Witch on Broomstick
export const PixelWitch = () => (
  <svg viewBox="0 0 40 24" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Broom bristles */}
    <rect x="0" y="12" width="8" height="6" fill="#daa520"/>
    <rect x="0" y="14" width="6" height="2" fill="#cd853f"/>
    <rect x="0" y="10" width="4" height="4" fill="#daa520"/>
    <rect x="0" y="16" width="4" height="4" fill="#daa520"/>
    {/* Broom handle */}
    <rect x="6" y="14" width="24" height="3" fill="#8b4513"/>
    <rect x="8" y="15" width="20" height="1" fill="#a0522d"/>
    {/* Witch body/robe */}
    <rect x="20" y="10" width="10" height="10" fill="#2f2f2f"/>
    <rect x="22" y="12" width="6" height="6" fill="#1a1a1a"/>
    {/* Witch head */}
    <rect x="26" y="4" width="8" height="8" fill="#90ee90"/>
    <rect x="28" y="6" width="4" height="4" fill="#98fb98"/>
    {/* Witch hat */}
    <rect x="24" y="0" width="12" height="4" fill="#2f2f2f"/>
    <rect x="28" y="-2" width="4" height="4" fill="#2f2f2f"/>
    <rect x="30" y="-4" width="2" height="3" fill="#2f2f2f"/>
    {/* Hat band */}
    <rect x="24" y="2" width="12" height="1" fill="#8b008b"/>
    {/* Eye */}
    <rect x="30" y="6" width="2" height="2" fill="#000"/>
    <rect x="31" y="6" width="1" height="1" fill="#fff"/>
    {/* Nose */}
    <rect x="32" y="8" width="3" height="2" fill="#228b22"/>
    {/* Feet */}
    <rect x="28" y="18" width="4" height="3" fill="#2f2f2f"/>
  </svg>
);

// Pixel art Flying Cow (cow with angel wings)
export const PixelFlyingCow = () => (
  <svg viewBox="0 0 44 28" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Tail */}
    <rect x="0" y="14" width="4" height="2" fill="#1a1a1a"/>
    <rect x="0" y="16" width="2" height="4" fill="#1a1a1a"/>
    {/* Back legs */}
    <rect x="6" y="20" width="4" height="6" fill="#fff"/>
    <rect x="7" y="24" width="3" height="2" fill="#1a1a1a"/>
    {/* Body - white with black spots */}
    <rect x="6" y="12" width="24" height="10" fill="#fff"/>
    <rect x="10" y="14" width="6" height="4" fill="#1a1a1a"/>
    <rect x="20" y="13" width="4" height="3" fill="#1a1a1a"/>
    <rect x="16" y="18" width="5" height="3" fill="#1a1a1a"/>
    {/* Udder */}
    <rect x="14" y="20" width="6" height="3" fill="#ffb6c1"/>
    {/* Front legs */}
    <rect x="24" y="20" width="4" height="6" fill="#fff"/>
    <rect x="25" y="24" width="3" height="2" fill="#1a1a1a"/>
    {/* Angel wings - fluffy white */}
    <rect x="10" y="2" width="16" height="12" fill="#f0f8ff"/>
    <rect x="12" y="0" width="12" height="4" fill="#fff"/>
    <rect x="8" y="4" width="6" height="8" fill="#fff"/>
    <rect x="22" y="4" width="6" height="8" fill="#fff"/>
    <rect x="14" y="2" width="8" height="8" fill="#f8f8ff"/>
    {/* Wing feather details */}
    <rect x="9" y="6" width="2" height="4" fill="#e8e8e8"/>
    <rect x="25" y="6" width="2" height="4" fill="#e8e8e8"/>
    {/* Neck */}
    <rect x="28" y="10" width="4" height="8" fill="#fff"/>
    {/* Head */}
    <rect x="30" y="8" width="10" height="10" fill="#fff"/>
    <rect x="32" y="10" width="6" height="6" fill="#f8f8f8"/>
    {/* Snout */}
    <rect x="38" y="12" width="6" height="6" fill="#ffb6c1"/>
    <rect x="40" y="14" width="1" height="2" fill="#1a1a1a"/>
    <rect x="42" y="14" width="1" height="2" fill="#1a1a1a"/>
    {/* Eyes */}
    <rect x="34" y="10" width="2" height="2" fill="#1a1a1a"/>
    <rect x="34" y="10" width="1" height="1" fill="#fff"/>
    {/* Ears */}
    <rect x="30" y="6" width="3" height="3" fill="#ffb6c1"/>
    <rect x="37" y="6" width="3" height="3" fill="#ffb6c1"/>
    {/* Horns */}
    <rect x="32" y="4" width="2" height="4" fill="#f5deb3"/>
    <rect x="36" y="4" width="2" height="4" fill="#f5deb3"/>
    {/* Halo */}
    <rect x="33" y="0" width="6" height="2" fill="#ffd700"/>
    <rect x="32" y="1" width="2" height="2" fill="#ffd700"/>
    <rect x="38" y="1" width="2" height="2" fill="#ffd700"/>
  </svg>
);

// Pixel art Mario Kart
export const PixelMarioKart = () => (
  <svg viewBox="0 0 48 28" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    {/* Kart body - red */}
    <rect x="4" y="16" width="32" height="8" fill="#e52521"/>
    <rect x="6" y="18" width="28" height="4" fill="#ff3b30"/>
    {/* Kart front */}
    <rect x="34" y="14" width="8" height="10" fill="#e52521"/>
    <rect x="40" y="16" width="4" height="6" fill="#ff3b30"/>
    {/* Exhaust pipe */}
    <rect x="2" y="18" width="4" height="3" fill="#666"/>
    <rect x="0" y="17" width="3" height="2" fill="#888"/>
    {/* Exhaust flames */}
    <rect x="0" y="16" width="2" height="1" fill="#ff4500"/>
    <rect x="0" y="20" width="2" height="1" fill="#ff4500"/>
    {/* Wheels */}
    <rect x="8" y="22" width="6" height="6" fill="#1a1a1a"/>
    <rect x="9" y="23" width="4" height="4" fill="#333"/>
    <rect x="10" y="24" width="2" height="2" fill="#555"/>
    <rect x="28" y="22" width="6" height="6" fill="#1a1a1a"/>
    <rect x="29" y="23" width="4" height="4" fill="#333"/>
    <rect x="30" y="24" width="2" height="2" fill="#555"/>
    {/* Mario body */}
    <rect x="16" y="8" width="12" height="10" fill="#e52521"/>
    <rect x="18" y="10" width="8" height="6" fill="#ff3b30"/>
    {/* Mario overalls/belly */}
    <rect x="18" y="14" width="8" height="4" fill="#0050ef"/>
    {/* Mario arms */}
    <rect x="12" y="10" width="6" height="4" fill="#e52521"/>
    <rect x="26" y="10" width="6" height="4" fill="#e52521"/>
    {/* Mario hands (holding wheel) */}
    <rect x="12" y="12" width="4" height="4" fill="#ffdbac"/>
    <rect x="28" y="12" width="4" height="4" fill="#ffdbac"/>
    {/* Steering wheel */}
    <rect x="14" y="14" width="16" height="2" fill="#1a1a1a"/>
    <rect x="20" y="12" width="4" height="6" fill="#1a1a1a"/>
    {/* Mario head */}
    <rect x="18" y="0" width="10" height="10" fill="#ffdbac"/>
    <rect x="20" y="2" width="6" height="6" fill="#ffe4c4"/>
    {/* Mario cap */}
    <rect x="16" y="-2" width="14" height="4" fill="#e52521"/>
    <rect x="18" y="0" width="10" height="2" fill="#e52521"/>
    {/* Cap M logo */}
    <rect x="22" y="-1" width="2" height="2" fill="#fff"/>
    {/* Mario mustache */}
    <rect x="20" y="6" width="6" height="2" fill="#4a2c00"/>
    <rect x="18" y="7" width="2" height="1" fill="#4a2c00"/>
    <rect x="26" y="7" width="2" height="1" fill="#4a2c00"/>
    {/* Mario eyes */}
    <rect x="20" y="3" width="2" height="2" fill="#000"/>
    <rect x="24" y="3" width="2" height="2" fill="#000"/>
    <rect x="20" y="3" width="1" height="1" fill="#fff"/>
    <rect x="24" y="3" width="1" height="1" fill="#fff"/>
    {/* Mario nose */}
    <rect x="22" y="4" width="2" height="3" fill="#ffdbac"/>
    {/* Mario ear */}
    <rect x="16" y="3" width="2" height="3" fill="#ffdbac"/>
    {/* Number 1 on kart */}
    <rect x="20" y="18" width="2" height="4" fill="#fff"/>
    <rect x="19" y="19" width="1" height="1" fill="#fff"/>
  </svg>
);

// Array of flying objects for ribbon
export const FLYING_OBJECTS = [
  { name: 'Cessna', Component: PixelCessna, width: 120, height: 60 },
  { name: 'Unicorn', Component: PixelUnicorn, width: 140, height: 80 },
  { name: 'TIE Fighter', Component: PixelTieFighter, width: 120, height: 70 },
  { name: 'UFO', Component: PixelUFO, width: 130, height: 65 },
  { name: 'Helicopter', Component: PixelHelicopter, width: 140, height: 65 },
  { name: 'Rocket', Component: PixelRocket, width: 130, height: 75 },
  { name: 'Superhero', Component: PixelSuperhero, width: 130, height: 65 },
  { name: 'Dragon', Component: PixelDragon, width: 150, height: 85 },
  { name: 'Balloon', Component: PixelBalloon, width: 100, height: 90 },
  { name: 'Witch', Component: PixelWitch, width: 130, height: 75 },
  { name: 'Flying Cow', Component: PixelFlyingCow, width: 145, height: 90 },
  { name: 'Mario Kart', Component: PixelMarioKart, width: 150, height: 85 },
];
