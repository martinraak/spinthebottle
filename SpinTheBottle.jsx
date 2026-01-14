import React, { useState, useRef, useCallback, useEffect } from 'react';

// Pixel art animals for dancing celebration - SVG components
const PixelBunny = () => (
  <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    <rect x="5" y="0" width="2" height="4" fill="#ffb6c1"/>
    <rect x="9" y="0" width="2" height="4" fill="#ffb6c1"/>
    <rect x="4" y="4" width="8" height="6" fill="#fff"/>
    <rect x="5" y="6" width="2" height="2" fill="#ff69b4"/>
    <rect x="9" y="6" width="2" height="2" fill="#ff69b4"/>
    <rect x="7" y="8" width="2" height="1" fill="#ffb6c1"/>
    <rect x="4" y="10" width="8" height="4" fill="#fff"/>
    <rect x="3" y="12" width="2" height="2" fill="#fff"/>
    <rect x="11" y="12" width="2" height="2" fill="#fff"/>
  </svg>
);

const PixelCat = () => (
  <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="2" width="3" height="3" fill="#ffa500"/>
    <rect x="11" y="2" width="3" height="3" fill="#ffa500"/>
    <rect x="3" y="5" width="10" height="8" fill="#ffa500"/>
    <rect x="5" y="7" width="2" height="2" fill="#2e8b57"/>
    <rect x="9" y="7" width="2" height="2" fill="#2e8b57"/>
    <rect x="7" y="10" width="2" height="1" fill="#ff69b4"/>
    <rect x="5" y="11" width="6" height="1" fill="#fff"/>
    <rect x="4" y="13" width="3" height="2" fill="#ffa500"/>
    <rect x="9" y="13" width="3" height="2" fill="#ffa500"/>
  </svg>
);

const PixelDog = () => (
  <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="3" width="3" height="4" fill="#8b4513"/>
    <rect x="11" y="3" width="3" height="4" fill="#8b4513"/>
    <rect x="3" y="5" width="10" height="8" fill="#d2691e"/>
    <rect x="5" y="7" width="2" height="2" fill="#000"/>
    <rect x="9" y="7" width="2" height="2" fill="#000"/>
    <rect x="6" y="10" width="4" height="2" fill="#000"/>
    <rect x="7" y="11" width="2" height="2" fill="#ff69b4"/>
    <rect x="4" y="13" width="3" height="2" fill="#d2691e"/>
    <rect x="9" y="13" width="3" height="2" fill="#d2691e"/>
  </svg>
);

const PixelBear = () => (
  <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="2" width="3" height="3" fill="#8b4513"/>
    <rect x="11" y="2" width="3" height="3" fill="#8b4513"/>
    <rect x="3" y="4" width="10" height="9" fill="#8b4513"/>
    <rect x="5" y="6" width="2" height="2" fill="#000"/>
    <rect x="9" y="6" width="2" height="2" fill="#000"/>
    <rect x="6" y="9" width="4" height="3" fill="#d2691e"/>
    <rect x="7" y="10" width="2" height="1" fill="#000"/>
    <rect x="4" y="13" width="3" height="2" fill="#8b4513"/>
    <rect x="9" y="13" width="3" height="2" fill="#8b4513"/>
  </svg>
);

const PixelPig = () => (
  <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="4" width="3" height="3" fill="#ffb6c1"/>
    <rect x="11" y="4" width="3" height="3" fill="#ffb6c1"/>
    <rect x="3" y="5" width="10" height="8" fill="#ffb6c1"/>
    <rect x="5" y="7" width="2" height="2" fill="#000"/>
    <rect x="9" y="7" width="2" height="2" fill="#000"/>
    <rect x="6" y="10" width="4" height="3" fill="#ff69b4"/>
    <rect x="7" y="11" width="1" height="1" fill="#000"/>
    <rect x="9" y="11" width="1" height="1" fill="#000"/>
    <rect x="4" y="13" width="3" height="2" fill="#ffb6c1"/>
    <rect x="9" y="13" width="3" height="2" fill="#ffb6c1"/>
  </svg>
);

const PixelFrog = () => (
  <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="4" width="4" height="3" fill="#32cd32"/>
    <rect x="10" y="4" width="4" height="3" fill="#32cd32"/>
    <rect x="3" y="5" width="2" height="2" fill="#fff"/>
    <rect x="11" y="5" width="2" height="2" fill="#fff"/>
    <rect x="4" y="6" width="1" height="1" fill="#000"/>
    <rect x="12" y="6" width="1" height="1" fill="#000"/>
    <rect x="3" y="7" width="10" height="6" fill="#32cd32"/>
    <rect x="5" y="10" width="6" height="2" fill="#ff6347"/>
    <rect x="3" y="13" width="4" height="2" fill="#32cd32"/>
    <rect x="9" y="13" width="4" height="2" fill="#32cd32"/>
  </svg>
);

const PixelChicken = () => (
  <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    <rect x="6" y="1" width="4" height="2" fill="#ff0000"/>
    <rect x="5" y="3" width="6" height="5" fill="#fff"/>
    <rect x="6" y="5" width="2" height="2" fill="#000"/>
    <rect x="5" y="8" width="2" height="2" fill="#ffa500"/>
    <rect x="4" y="8" width="8" height="5" fill="#fff"/>
    <rect x="2" y="9" width="3" height="3" fill="#fff"/>
    <rect x="11" y="9" width="3" height="3" fill="#fff"/>
    <rect x="5" y="13" width="2" height="2" fill="#ffa500"/>
    <rect x="9" y="13" width="2" height="2" fill="#ffa500"/>
  </svg>
);

const PixelLion = () => (
  <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    <rect x="1" y="2" width="14" height="4" fill="#daa520"/>
    <rect x="2" y="1" width="12" height="2" fill="#daa520"/>
    <rect x="3" y="5" width="10" height="8" fill="#ffa500"/>
    <rect x="5" y="7" width="2" height="2" fill="#000"/>
    <rect x="9" y="7" width="2" height="2" fill="#000"/>
    <rect x="6" y="10" width="4" height="2" fill="#d2691e"/>
    <rect x="7" y="11" width="2" height="1" fill="#000"/>
    <rect x="4" y="13" width="3" height="2" fill="#ffa500"/>
    <rect x="9" y="13" width="3" height="2" fill="#ffa500"/>
  </svg>
);

const PixelPanda = () => (
  <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="2" width="3" height="3" fill="#000"/>
    <rect x="11" y="2" width="3" height="3" fill="#000"/>
    <rect x="3" y="4" width="10" height="9" fill="#fff"/>
    <rect x="4" y="6" width="3" height="3" fill="#000"/>
    <rect x="9" y="6" width="3" height="3" fill="#000"/>
    <rect x="5" y="7" width="1" height="1" fill="#fff"/>
    <rect x="10" y="7" width="1" height="1" fill="#fff"/>
    <rect x="7" y="10" width="2" height="2" fill="#000"/>
    <rect x="4" y="13" width="3" height="2" fill="#000"/>
    <rect x="9" y="13" width="3" height="2" fill="#000"/>
  </svg>
);

const PixelMonkey = () => (
  <svg viewBox="0 0 16 16" width="100%" height="100%" style={{ imageRendering: 'pixelated' }}>
    <rect x="1" y="5" width="3" height="4" fill="#d2691e"/>
    <rect x="2" y="6" width="1" height="2" fill="#deb887"/>
    <rect x="12" y="5" width="3" height="4" fill="#d2691e"/>
    <rect x="13" y="6" width="1" height="2" fill="#deb887"/>
    <rect x="4" y="3" width="8" height="10" fill="#8b4513"/>
    <rect x="5" y="5" width="6" height="6" fill="#deb887"/>
    <rect x="6" y="6" width="2" height="2" fill="#000"/>
    <rect x="9" y="6" width="2" height="2" fill="#000"/>
    <rect x="7" y="9" width="2" height="2" fill="#8b4513"/>
    <rect x="4" y="13" width="3" height="2" fill="#8b4513"/>
    <rect x="9" y="13" width="3" height="2" fill="#8b4513"/>
  </svg>
);

// Pixel art Cessna airplane for celebration
const PixelCessna = () => (
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
const PixelUnicorn = () => (
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
const PixelTieFighter = () => (
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
const PixelUFO = () => (
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
const PixelHelicopter = () => (
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
const PixelRocket = () => (
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
const PixelSuperhero = () => (
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
const PixelDragon = () => (
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
const PixelBalloon = () => (
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
const PixelWitch = () => (
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
const PixelFlyingCow = () => (
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
const PixelMarioKart = () => (
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
const FLYING_OBJECTS = [
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

// Array of pixel art animal components
const DANCING_ANIMALS = [
  { name: 'bunny', Component: PixelBunny },
  { name: 'cat', Component: PixelCat },
  { name: 'dog', Component: PixelDog },
  { name: 'bear', Component: PixelBear },
  { name: 'pig', Component: PixelPig },
  { name: 'frog', Component: PixelFrog },
  { name: 'chicken', Component: PixelChicken },
  { name: 'lion', Component: PixelLion },
  { name: 'panda', Component: PixelPanda },
  { name: 'monkey', Component: PixelMonkey },
];

// Fixed champagne bottle color (classic green)
const BOTTLE_COLOR = { body: '#1a472a', bodyLight: '#2d5a27', bodyDark: '#0d2818' };

// Pastel foam colors for surprise effect
const FOAM_COLORS = [
  { name: 'champagne', primary: '#fff8dc', secondary: '#fffacd', accent: '#ffefd5' }, // Classic champagne
  { name: 'rose', primary: '#ffb6c1', secondary: '#ffc0cb', accent: '#ffe4e9' }, // Soft pink
  { name: 'lavender', primary: '#e6e6fa', secondary: '#d8bfd8', accent: '#f0e6ff' }, // Light purple
  { name: 'mint', primary: '#b5ead7', secondary: '#c7f9e5', accent: '#e0fff0' }, // Mint green
  { name: 'peach', primary: '#ffdab9', secondary: '#ffe4c4', accent: '#fff0e0' }, // Soft peach
  { name: 'sky', primary: '#b4d7e8', secondary: '#c5e3f0', accent: '#e0f4ff' }, // Light blue
  { name: 'lemon', primary: '#fffacd', secondary: '#fff9b0', accent: '#ffffdd' }, // Soft yellow
  { name: 'coral', primary: '#ffcccb', secondary: '#ffd6d5', accent: '#ffe8e8' }, // Soft coral
];

// LocalStorage keys
const STORAGE_KEY_NAMES = 'spinTheBottle_names';
const STORAGE_KEY_LABEL = 'spinTheBottle_label';
const STORAGE_KEY_HISTORY = 'spinTheBottle_history';
const STORAGE_KEY_MUTED = 'spinTheBottle_muted';

// Helper to load from localStorage
const loadFromStorage = (key, defaultValue) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch {
    return defaultValue;
  }
};

// Sound mute state (global so sound functions can check it)
let isSoundMuted = loadFromStorage(STORAGE_KEY_MUTED, false);

// 8-bit Sound Effects Generator
const createAudioContext = () => {
  return new (window.AudioContext || window.webkitAudioContext)();
};

let audioCtx = null;
const getAudioContext = () => {
  if (!audioCtx) {
    audioCtx = createAudioContext();
  }
  return audioCtx;
};

// Play a simple 8-bit tone
const playTone = (frequency, duration, type = 'square', volume = 0.3) => {
  if (isSoundMuted) return;
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
};

// Play a sequence of notes
const playSequence = (notes, tempo = 150) => {
  if (isSoundMuted) return;
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
};

// Sound: Start Game - triumphant fanfare
const playStartGameSound = () => {
  playSequence([
    { freq: 523, duration: 0.15, volume: 0.4 }, // C5
    { freq: 659, duration: 0.15, volume: 0.4 }, // E5
    { freq: 784, duration: 0.15, volume: 0.4 }, // G5
    { freq: 1047, duration: 0.4, volume: 0.5 }, // C6
  ], 300);
};

// Sound: Spin click - quick whoosh up
const playSpinClickSound = () => {
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
};

// Sound: Spinning bottle - tempo matches actual spin speed
let spinSoundTimeout = null;
let lastSpinSoundTime = 0;
let spinSoundActive = false;

const playSpinTick = (velocity) => {
  // Pitch based on velocity - faster = higher pitch
  const pitch = 200 + (velocity * 8); // 200-840 Hz range
  const volume = Math.min(0.25, 0.08 + velocity * 0.003);
  playTone(pitch, 0.06, 'square', volume);
};

const startSpinningSound = () => {
  spinSoundActive = true;
  lastSpinSoundTime = 0;
};

const updateSpinningSound = (velocity, currentTime) => {
  if (!spinSoundActive) return;

  // Calculate interval based on velocity - faster spin = faster ticks
  // velocity ranges from ~80 (fast) to ~0.05 (slow)
  // We want interval from ~30ms (fast) to ~300ms (slow)
  const interval = Math.max(30, Math.min(300, 400 / (velocity + 1)));

  if (currentTime - lastSpinSoundTime >= interval) {
    playSpinTick(velocity);
    lastSpinSoundTime = currentTime;
  }
};

const stopSpinningSound = () => {
  spinSoundActive = false;
  if (spinSoundTimeout) {
    clearTimeout(spinSoundTimeout);
    spinSoundTimeout = null;
  }
};

// Sound: Cork pop - explosive pop with fizz
const playCorkPopSound = () => {
  if (isSoundMuted) return;
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
};

// Sound: Winner celebration tune - over the top 8-bit victory music
const playWinnerCelebration = () => {
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
};

// Pixel art style Spin the Bottle meeting picker
export default function SpinTheBottle() {
  const [names, setNames] = useState(() => loadFromStorage(STORAGE_KEY_NAMES, ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank']));
  const [newName, setNewName] = useState('');
  const [bottleLabel, setBottleLabel] = useState(() => loadFromStorage(STORAGE_KEY_LABEL, 'Weekly Sync'));
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
  const [isEditorView, setIsEditorView] = useState(true); // Start on editor side
  const [isMuted, setIsMuted] = useState(() => loadFromStorage(STORAGE_KEY_MUTED, false));
  const [winHistory, setWinHistory] = useState(() => loadFromStorage(STORAGE_KEY_HISTORY, {}));
  const [showStats, setShowStats] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const animationRef = useRef(null);
  const velocityRef = useRef(0);
  const corkRef = useRef(null);

  // Generate confetti particles
  const generateConfetti = useCallback(() => {
    const particles = [];
    const colors = ['#ffd700', '#ff6b6b', '#7fdbca', '#ff69b4', '#00ff00', '#ff4500', '#00bfff', '#ffff00', '#ff1493', '#32cd32'];
    for (let i = 0; i < 150; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100, // percentage across screen
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
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
    // Normalize angle to 0-360
    const normalizedAngle = ((angle % 360) + 360) % 360;
    // The bottle points up (0 degrees), so we need to figure out which segment it's in
    const segmentAngle = 360 / names.length;
    // Offset by half segment so the bottle points to the center of each name
    const adjustedAngle = (normalizedAngle + segmentAngle / 2) % 360;
    const index = Math.floor(adjustedAngle / segmentAngle);
    return { name: names[index], index };
  }, [names]);

  // Generate foam particles shooting toward winner - RIDICULOUS AMOUNT
  const generateFoamParticles = useCallback((winnerIdx) => {
    const particles = [];
    const particleCount = 500; // INSANE amount of particles!

    // Calculate winner position angle
    const winnerAngle = (winnerIdx * 360 / names.length) - 90;

    for (let i = 0; i < particleCount; i++) {
      // Spread particles in a HUGE cone - almost 360 degrees for explosion effect
      const spreadAngle = (Math.random() - 0.5) * 180;
      const finalAngle = winnerAngle + spreadAngle;
      const finalRad = finalAngle * Math.PI / 180;

      // Random distance - particles go EVERYWHERE
      const distance = 80 + Math.random() * 350;

      // Determine particle type for variety
      const particleType = Math.random();

      particles.push({
        id: i,
        startX: 0,
        startY: 0,
        endX: Math.cos(finalRad) * distance,
        endY: Math.sin(finalRad) * distance,
        size: particleType < 0.3 ? 2 + Math.random() * 5 : // tiny bubbles
              particleType < 0.7 ? 5 + Math.random() * 12 : // medium foam
              12 + Math.random() * 20, // big foam chunks
        delay: Math.random() * 1.5, // Very staggered for continuous effect
        duration: 0.5 + Math.random() * 1.5,
        opacity: 0.5 + Math.random() * 0.5,
        type: particleType < 0.3 ? 'bubble' : particleType < 0.7 ? 'foam' : 'chunk',
      });
    }
    return particles;
  }, [names.length]);

  // Pick random dancing animal for celebration (same on both sides)
  const pickRandomAnimals = useCallback(() => {
    const animal = DANCING_ANIMALS[Math.floor(Math.random() * DANCING_ANIMALS.length)];
    return { left: animal, right: animal };
  }, []);

  // Spin the bottle with physics
  const spinBottle = () => {
    if (isSpinning || names.length < 2) return;

    // Play spin click sound
    playSpinClickSound();
    // Start spinning sound
    startSpinningSound();

    setIsSpinning(true);
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

    // Randomize foam color for surprise effect
    setFoamColor(FOAM_COLORS[Math.floor(Math.random() * FOAM_COLORS.length)]);

    // Random initial velocity - much higher for longer spin
    const initialVelocity = 50 + Math.random() * 30; // 50-80 degrees per frame
    velocityRef.current = initialVelocity;

    // Lower friction = spins much longer, very slow deceleration for maximum anticipation
    const friction = 0.995; // Even lower friction for longer spin
    const minVelocity = 0.05;

    let currentRotation = rotation;
    let wobblePhase = 0;
    let isWobbling = false;
    let wobbleAmplitude = 0;
    let animationStartTime = performance.now();

    const animate = (timestamp) => {
      const elapsedTime = timestamp - animationStartTime;

      if (!isWobbling) {
        // Apply friction
        velocityRef.current *= friction;
        currentRotation += velocityRef.current;

        // Update spinning sound based on current velocity
        updateSpinningSound(velocityRef.current, elapsedTime);

        // Extended slow-down phase - when velocity gets low, reduce friction even more
        // This creates the "almost stopping... still going..." anticipation
        if (velocityRef.current < 3 && velocityRef.current > minVelocity) {
          velocityRef.current *= 0.998; // Much slower deceleration at the end
        }
        if (velocityRef.current < 1 && velocityRef.current > minVelocity) {
          velocityRef.current *= 0.999; // Even slower at the very end
        }

        // Check if we should start wobbling
        if (velocityRef.current < minVelocity) {
          isWobbling = true;
          wobbleAmplitude = 5; // Bigger wobble
          wobblePhase = 0;
          stopSpinningSound(); // Stop spinning sound when wobbling starts
        }

        setRotation(currentRotation);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Wobble effect - slower decay for longer wobble
        wobblePhase += 0.2;
        wobbleAmplitude *= 0.96; // Even slower decay

        const wobble = Math.sin(wobblePhase) * wobbleAmplitude;
        setRotation(currentRotation + wobble);

        if (wobbleAmplitude < 0.08) {
          // Stop animation
          setRotation(currentRotation);
          setIsSpinning(false);
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

          // Calculate cork trajectory toward winner
          const winnerAngle = (selectedIndex * 360 / names.length) - 90;
          const winnerRad = winnerAngle * Math.PI / 180;
          setCorkPosition({
            x: Math.cos(winnerRad) * 180,
            y: Math.sin(winnerRad) * 180
          });

          // Trigger cork pop first!
          setShowCorkPop(true);
          setCorkRemoved(true); // Cork stays removed permanently until next spin
          playCorkPopSound(); // Play cork pop sound!

          // Then foam spray after cork
          setTimeout(() => {
            setFoamParticles(generateFoamParticles(selectedIndex));
            setShowFoam(true);
          }, 200);

          // Hide cork animation after it flies off (but cork stays removed)
          // Then show winner celebration with confetti
          setTimeout(() => {
            setShowCorkPop(false);
            // Start winner celebration after cork is gone
            setDancingAnimals(pickRandomAnimals());
            setConfetti(generateConfetti());
            setFlyingObject(FLYING_OBJECTS[Math.floor(Math.random() * FLYING_OBJECTS.length)]);
            setShowWinnerCelebration(true);
            playWinnerCelebration(); // Play victory music!
          }, 3500); // Cork flies for 3 seconds

          // Hide foam after animation - extended for ridiculous effect
          setTimeout(() => {
            setShowFoam(false);
          }, 4500);
          return;
        }

        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // Cleanup animation and sounds on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      stopSpinningSound();
    };
  }, []);

  // Save names to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_NAMES, JSON.stringify(names));
  }, [names]);

  // Save bottle label to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_LABEL, JSON.stringify(bottleLabel));
  }, [bottleLabel]);

  // Save mute state and sync global variable
  useEffect(() => {
    isSoundMuted = isMuted;
    localStorage.setItem(STORAGE_KEY_MUTED, JSON.stringify(isMuted));
  }, [isMuted]);

  // Save win history to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(winHistory));
  }, [winHistory]);

  // Keyboard support - spacebar or Enter to spin
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only trigger if not in editor view and not already spinning
      if (!isEditorView && !isSpinning && (e.code === 'Space' || e.code === 'Enter')) {
        e.preventDefault();
        spinBottle();
      }
      // Dismiss winner celebration on any key
      if (showWinnerCelebration && (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape')) {
        e.preventDefault();
        setShowWinnerCelebration(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditorView, isSpinning, showWinnerCelebration]);

  // Sparkle effect positions
  const sparkles = showSparkle ? Array.from({ length: 8 }, (_, i) => ({
    angle: (i * 45) + (Date.now() % 360),
    delay: i * 0.1
  })) : [];

  return (
    <>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .pixel-font {
          font-family: 'Press Start 2P', cursive;
        }

        .pixel-border {
          box-shadow:
            4px 0 0 0 #1a1a2e,
            -4px 0 0 0 #1a1a2e,
            0 4px 0 0 #1a1a2e,
            0 -4px 0 0 #1a1a2e,
            4px 4px 0 0 #1a1a2e,
            -4px 4px 0 0 #1a1a2e,
            4px -4px 0 0 #1a1a2e,
            -4px -4px 0 0 #1a1a2e;
        }

        .pixel-border-thick {
          box-shadow:
            6px 0 0 0 #1a1a2e,
            -6px 0 0 0 #1a1a2e,
            0 6px 0 0 #1a1a2e,
            0 -6px 0 0 #1a1a2e,
            6px 6px 0 0 #1a1a2e,
            -6px 6px 0 0 #1a1a2e,
            6px -6px 0 0 #1a1a2e,
            -6px -6px 0 0 #1a1a2e;
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px #ffd700) drop-shadow(0 0 20px #ff6b6b);
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 20px #ffd700) drop-shadow(0 0 40px #ff6b6b);
            transform: scale(1.05);
          }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes foam-spray {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          20% {
            transform: translate(var(--endX-20), var(--endY-20)) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--endX), var(--endY)) scale(0.3);
            opacity: 0;
          }
        }

        @keyframes foam-drip {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(30px);
            opacity: 0;
          }
        }

        @keyframes cork-fly {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          8% {
            transform: translate(var(--p1X), var(--p1Y)) rotate(180deg) scale(1.4);
            opacity: 1;
          }
          20% {
            transform: translate(var(--p2X), var(--p2Y)) rotate(400deg) scale(1.1);
            opacity: 1;
          }
          35% {
            transform: translate(var(--p3X), var(--p3Y)) rotate(650deg) scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translate(var(--p4X), var(--p4Y)) rotate(900deg) scale(1.0);
            opacity: 1;
          }
          65% {
            transform: translate(var(--p5X), var(--p5Y)) rotate(1150deg) scale(0.9);
            opacity: 1;
          }
          80% {
            transform: translate(var(--p6X), var(--p6Y)) rotate(1400deg) scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: translate(var(--endX), var(--endY)) rotate(1800deg) scale(0.5);
            opacity: 0;
          }
        }

        .cork-fly {
          animation: cork-fly 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes foam-stream {
          0% {
            transform: scaleY(0) scaleX(0.5);
            opacity: 0;
          }
          10% {
            transform: scaleY(0.3) scaleX(1);
            opacity: 1;
          }
          50% {
            transform: scaleY(1) scaleX(1.2);
            opacity: 0.9;
          }
          100% {
            transform: scaleY(1.5) scaleX(0.8);
            opacity: 0;
          }
        }

        .foam-stream {
          animation: foam-stream 1.2s ease-out forwards;
        }

        .winner-glow {
          animation: pulse-glow 0.5s ease-in-out infinite;
        }

        .sparkle {
          animation: sparkle 0.8s ease-in-out infinite;
        }

        .float {
          animation: float 2s ease-in-out infinite;
        }

        .foam-particle {
          animation: foam-spray ease-out forwards;
        }

        .foam-drip {
          animation: foam-drip 1s ease-in forwards;
        }

        @keyframes dance {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(0) rotate(-5deg); }
          75% { transform: translateY(-10px) rotate(5deg); }
        }

        .dancing {
          animation: dance 0.5s ease-in-out infinite;
        }

        .pixelated {
          image-rendering: pixelated;
          -webkit-font-smoothing: none;
          font-smooth: never;
          text-shadow:
            2px 0 0 rgba(0,0,0,0.3),
            -2px 0 0 rgba(0,0,0,0.3),
            0 2px 0 rgba(0,0,0,0.3),
            0 -2px 0 rgba(0,0,0,0.3),
            4px 4px 0 rgba(0,0,0,0.2);
          filter: contrast(1.1);
        }

        @keyframes winner-enter {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .winner-celebration {
          animation: winner-enter 0.8s ease-out forwards;
        }

        @keyframes cork-bounce {
          0% { transform: translate(var(--startX), var(--startY)) rotate(0deg) scale(1); }
          10% { transform: translate(var(--b1X), var(--b1Y)) rotate(180deg) scale(1.2); }
          20% { transform: translate(var(--b2X), var(--b2Y)) rotate(360deg) scale(1.1); }
          30% { transform: translate(var(--b3X), var(--b3Y)) rotate(540deg) scale(1.15); }
          40% { transform: translate(var(--b4X), var(--b4Y)) rotate(720deg) scale(1.1); }
          50% { transform: translate(var(--b5X), var(--b5Y)) rotate(900deg) scale(1.05); }
          60% { transform: translate(var(--b6X), var(--b6Y)) rotate(1080deg) scale(1.0); }
          70% { transform: translate(var(--b7X), var(--b7Y)) rotate(1260deg) scale(0.95); }
          80% { transform: translate(var(--b8X), var(--b8Y)) rotate(1440deg) scale(0.9); }
          90% { transform: translate(var(--b9X), var(--b9Y)) rotate(1620deg) scale(0.8); opacity: 0.8; }
          100% { transform: translate(var(--endX), var(--endY)) rotate(1800deg) scale(0.5); opacity: 0; }
        }

        .cork-bounce {
          animation: cork-bounce 3s linear forwards;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        .shimmer {
          animation: shimmer 1s ease-in-out infinite;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0.8;
          }
        }

        .confetti {
          position: fixed;
          top: 0;
          width: var(--size);
          height: var(--size);
          background-color: var(--color);
          animation: confetti-fall var(--duration) ease-in-out forwards;
          animation-delay: var(--delay);
          z-index: 60;
        }

        @keyframes plane-fly {
          0% {
            transform: translateX(-600px) translateY(0);
          }
          25% {
            transform: translateX(calc(25vw - 100px)) translateY(-15px);
          }
          50% {
            transform: translateX(calc(50vw - 100px)) translateY(5px);
          }
          75% {
            transform: translateX(calc(75vw - 100px)) translateY(-10px);
          }
          100% {
            transform: translateX(calc(100vw + 800px)) translateY(0);
          }
        }

        .plane-fly {
          animation: plane-fly 10s linear forwards;
        }

        @keyframes ribbon-wave {
          0%, 100% {
            transform: translateY(0) skewY(0deg);
          }
          25% {
            transform: translateY(3px) skewY(2deg);
          }
          50% {
            transform: translateY(-2px) skewY(-1deg);
          }
          75% {
            transform: translateY(2px) skewY(1deg);
          }
        }

        .ribbon-wave {
          animation: ribbon-wave 0.8s ease-in-out infinite;
        }

        .ribbon-segment {
          animation: ribbon-wave 0.8s ease-in-out infinite;
        }

        /* Flip card animation */
        .flip-container {
          perspective: 2000px;
        }

        .flip-card {
          position: relative;
          width: 100%;
          height: 750px;
          transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card.flipped {
          transform: rotateX(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-front {
          z-index: 2;
        }

        .flip-card-back {
          transform: rotateX(180deg);
          z-index: 1;
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .flip-card {
            height: auto;
            min-height: 500px;
          }
          .game-container {
            transform: scale(0.6);
            transform-origin: top center;
          }
          .editor-container {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .game-container {
            transform: scale(0.45);
            transform-origin: top center;
          }
        }

        /* Stats panel styles */
        .stats-panel {
          max-height: 300px;
          overflow-y: auto;
        }
      `}</style>

      <div className="min-h-screen pixel-font text-xs" style={{ backgroundColor: '#0f0f23' }}>
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
                      <rect x="1" y="5" width="4" height="6" fill="#e0e0e0"/>
                      <rect x="5" y="3" width="2" height="10" fill="#e0e0e0"/>
                      <rect x="7" y="1" width="2" height="14" fill="#e0e0e0"/>
                      <rect x="10" y="3" width="2" height="2" fill="#ff4444"/>
                      <rect x="12" y="5" width="2" height="2" fill="#ff4444"/>
                      <rect x="14" y="7" width="2" height="2" fill="#ff4444"/>
                      <rect x="12" y="9" width="2" height="2" fill="#ff4444"/>
                      <rect x="10" y="11" width="2" height="2" fill="#ff4444"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" width="16" height="16" style={{ imageRendering: 'pixelated' }}>
                      <rect x="1" y="5" width="4" height="6" fill="#e0e0e0"/>
                      <rect x="5" y="3" width="2" height="10" fill="#e0e0e0"/>
                      <rect x="7" y="1" width="2" height="14" fill="#e0e0e0"/>
                      <rect x="11" y="6" width="2" height="4" fill="#7fdbca"/>
                      <rect x="13" y="4" width="2" height="8" fill="#7fdbca"/>
                      <rect x="15" y="2" width="1" height="12" fill="#7fdbca"/>
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
                    localStorage.removeItem(STORAGE_KEY_HISTORY);
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

          {/* Flip Container - responsive */}
          <div className="flip-container mx-auto mb-8" style={{ maxWidth: '700px', width: '100%' }}>
            <div className="game-container mx-auto" style={{ width: '700px', height: '750px' }}>
              <div className={`flip-card ${!isEditorView ? 'flipped' : ''}`}>

              {/* FRONT SIDE - Editor View */}
              <div className="flip-card-front">
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  {/* Decorative circle background */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: '600px',
                      height: '600px',
                      backgroundColor: '#16213e',
                      border: '4px solid #4a4a8a',
                    }}
                  />

                  {/* Editor content */}
                  <div className="relative z-10 w-full max-w-md px-8">
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
                          onKeyPress={(e) => e.key === 'Enter' && addName()}
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
                          playStartGameSound();
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
                // Draw line from center to edge between each person's sector
                const angle = (index * 360 / names.length) - 90 + (180 / names.length);
                const rad = angle * Math.PI / 180;
                const centerX = 350;
                const centerY = 350;
                const innerRadius = 170; // Start after the bottle
                const outerRadius = 320; // End before the names
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
              {/* Optional: subtle outer circle */}
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
                    {/* Sparkles around winner */}
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
              {/* Bottle SVG - Pixel Art Champagne Style */}
              <svg viewBox="0 0 100 130" className={`w-full h-full ${!isSpinning ? 'float' : ''}`}>
                {/* Cork top (mushroom cap) - hidden when cork is removed */}
                {!corkRemoved && (
                  <>
                    {/* Mushroom cap - blunt rounded top */}
                    <ellipse cx="50" cy="4" rx="8" ry="4" fill="#ffd700" />
                    <ellipse cx="48" cy="3" rx="3" ry="2" fill="#ffed4a" opacity="0.5" />
                    {/* Gold foil wrapping */}
                    <rect x="42" y="4" width="16" height="8" fill="#ffd700" />
                    <rect x="43" y="5" width="5" height="6" fill="#ffed4a" opacity="0.4" />
                  </>
                )}

                {/* Cork body - hidden when cork is removed */}
                {!corkRemoved && (
                  <>
                    {/* Cork neck (narrower part) */}
                    <rect x="44" y="12" width="12" height="6" fill="#d2691e" />
                    <rect x="45" y="13" width="4" height="4" fill="#daa520" opacity="0.4" />
                    {/* Cork base (wider part that sits in bottle) */}
                    <rect x="45" y="18" width="10" height="6" fill="#8b4513" />
                    <rect x="46" y="19" width="3" height="4" fill="#a0522d" opacity="0.5" />
                  </>
                )}

                {/* Open bottle mouth - shown when cork is removed */}
                {corkRemoved && (
                  <>
                    <ellipse cx="50" cy="12" rx="6" ry="3" fill={BOTTLE_COLOR.bodyDark} />
                    <rect x="44" y="12" width="12" height="4" fill={BOTTLE_COLOR.body} />
                  </>
                )}

                {/* Bottle neck - thin and tall */}
                <rect x="44" y="16" width="12" height="20" fill={BOTTLE_COLOR.body} />
                <rect x="45" y="17" width="4" height="18" fill={BOTTLE_COLOR.bodyLight} opacity="0.5" />

                {/* Neck ring / collar */}
                <rect x="42" y="36" width="16" height="4" fill={BOTTLE_COLOR.body} />
                <rect x="43" y="37" width="5" height="2" fill={BOTTLE_COLOR.bodyLight} opacity="0.4" />

                {/* Shoulder transition - curved champagne style */}
                <polygon points="42,40 28,60 72,60 58,40" fill={BOTTLE_COLOR.body} />
                <polygon points="43,41 32,58 43,58" fill={BOTTLE_COLOR.bodyLight} opacity="0.4" />
                <polygon points="57,41 68,58 57,58" fill={BOTTLE_COLOR.bodyDark} opacity="0.3" />

                {/* Main body - wide champagne shape */}
                <rect x="28" y="60" width="44" height="50" fill={BOTTLE_COLOR.body} />
                <rect x="30" y="62" width="12" height="46" fill={BOTTLE_COLOR.bodyLight} opacity="0.4" />

                {/* Body highlight stripe */}
                <rect x="62" y="62" width="6" height="46" fill={BOTTLE_COLOR.bodyDark} opacity="0.3" />

                {/* Body curvature hints */}
                <rect x="28" y="60" width="4" height="4" fill={BOTTLE_COLOR.bodyDark} opacity="0.5" />
                <rect x="68" y="60" width="4" height="4" fill={BOTTLE_COLOR.bodyDark} opacity="0.5" />

                {/* Bottom of bottle - slight taper */}
                <rect x="30" y="108" width="40" height="4" fill={BOTTLE_COLOR.body} />
                <rect x="32" y="112" width="36" height="4" fill={BOTTLE_COLOR.bodyDark} />

                {/* Bottom punt indent hint */}
                <rect x="40" y="116" width="20" height="4" fill={BOTTLE_COLOR.bodyDark} />
                <rect x="44" y="118" width="12" height="4" fill="#0a1a10" />

                {/* Label on bottle - cream/gold colored */}
                <rect x="30" y="68" width="40" height="32" fill="#f5deb3" />
                <rect x="31" y="69" width="38" height="30" fill="#ffe4b5" />

                {/* Label decorative border */}
                <rect x="32" y="70" width="36" height="3" fill="#c4a052" />
                <rect x="32" y="95" width="36" height="3" fill="#c4a052" />

                {/* Small decorative element on label */}
                <rect x="46" y="74" width="8" height="2" fill="#87ceeb" />
                <rect x="47" y="74" width="6" height="1" fill="#add8e6" />

                {/* Label text - larger and more readable */}
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

                {/* Pixel corner accents for retro feel */}
                <rect x="28" y="108" width="4" height="4" fill={BOTTLE_COLOR.bodyDark} />
                <rect x="68" y="108" width="4" height="4" fill={BOTTLE_COLOR.bodyDark} />
              </svg>
            </div>

            {/* Cork popping effect - positioned at bottle mouth */}
            {showCorkPop && (() => {
              // Calculate where the bottle mouth is based on current rotation
              // The bottle points "up" in its local coordinates, but rotates
              // Bottle mouth is about 130px from center (top of 320px bottle)
              const bottleMouthDistance = 130;
              const rotationRad = (rotation - 90) * Math.PI / 180; // -90 because CSS rotation 0 = pointing right
              const mouthX = Math.cos(rotationRad) * bottleMouthDistance;
              const mouthY = Math.sin(rotationRad) * bottleMouthDistance;

              // Screen bounds for bouncing - use full viewport
              const screenLeft = -window.innerWidth / 2;
              const screenRight = window.innerWidth / 2;
              const screenTop = -window.innerHeight / 2;
              const screenBottom = window.innerHeight / 2;

              // Generate bouncing trajectory that bounces off screen edges like real world
              const generateBouncePath = () => {
                const points = [];
                let x = 0;
                let y = 0;
                // Much stronger initial velocity in the direction the bottle is pointing
                let vx = Math.cos(rotationRad) * 120 + (Math.random() - 0.5) * 40;
                let vy = Math.sin(rotationRad) * 120 - 60; // Strong upward bias

                for (let i = 0; i < 9; i++) {
                  // Move
                  x += vx;
                  y += vy;

                  // Bounce off screen edges with energy loss
                  if (x < screenLeft) { x = screenLeft; vx = Math.abs(vx) * 0.75; }
                  if (x > screenRight) { x = screenRight; vx = -Math.abs(vx) * 0.75; }
                  if (y < screenTop) { y = screenTop; vy = Math.abs(vy) * 0.75; }
                  if (y > screenBottom) { y = screenBottom; vy = -Math.abs(vy) * 0.7; }

                  // Apply gravity and air resistance
                  vy += 25; // Strong gravity
                  vx *= 0.92; // Air resistance
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
                  {/* Flying cork - starts at bottle mouth, bounces off screen edges */}
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
                    {/* Cork SVG - champagne mushroom style */}
                    <svg width="28" height="40" viewBox="0 0 24 34">
                      {/* Mushroom cap - blunt rounded top */}
                      <ellipse cx="12" cy="5" rx="10" ry="5" fill="#ffd700" />
                      <ellipse cx="9" cy="4" rx="4" ry="2" fill="#ffed4a" opacity="0.5" />
                      {/* Gold foil wrapping */}
                      <rect x="2" y="5" width="20" height="9" fill="#ffd700" />
                      <rect x="4" y="6" width="6" height="7" fill="#ffed4a" opacity="0.4" />
                      {/* Cork neck (narrower part) */}
                      <rect x="4" y="14" width="16" height="8" fill="#d2691e" />
                      <rect x="6" y="15" width="5" height="6" fill="#daa520" opacity="0.4" />
                      {/* Cork base (wider part) */}
                      <rect x="5" y="22" width="14" height="10" fill="#8b4513" />
                      <rect x="7" y="23" width="4" height="8" fill="#a0522d" opacity="0.5" />
                      {/* Bottom rim */}
                      <rect x="6" y="30" width="12" height="4" fill="#6b3810" />
                    </svg>
                  </div>

                  {/* MASSIVE foam stream shooting out - starts at bottle mouth */}
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

                  {/* TONS of additional foam burst rings */}
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

            {/* Champagne foam spray effect - starts from bottle mouth */}
            {showFoam && (() => {
              // Calculate bottle mouth position based on final rotation
              const bottleMouthDistance = 130;
              const rotationRad = (rotation - 90) * Math.PI / 180;
              const mouthX = Math.cos(rotationRad) * bottleMouthDistance;
              const mouthY = Math.sin(rotationRad) * bottleMouthDistance;

              return (
                <div
                  className="absolute left-1/2 top-1/2 pointer-events-none"
                  style={{ transform: 'translate(-50%, -50%)' }}
                >
                  {/* RIDICULOUS amount of foam particles - using random pastel color */}
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
                  {/* EVEN MORE bubbles layer - tiny sparkly ones */}
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
                  {/* THIRD layer - medium floating foam */}
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

                  {/* Edit button - to flip back to editor */}
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

          {/* Winner celebration overlay - shows after cork flies away */}
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
                {/* Random flying object */}
                <div style={{ width: `${flyingObject.width}px`, height: `${flyingObject.height}px` }}>
                  <flyingObject.Component />
                </div>

                {/* Ribbon banner attached to tail */}
                <div
                  className="absolute"
                  style={{
                    top: `${flyingObject.height * 0.3}px`,
                    right: `${flyingObject.width * 0.7}px`,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {/* Rope/string connecting to flying object */}
                  <div
                    style={{
                      width: '40px',
                      height: '4px',
                      backgroundColor: '#8b4513',
                      marginRight: '-2px',
                    }}
                  />

                  {/* Main ribbon banner - white with black text */}
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

                  {/* Ribbon tail - simple forked end (white) */}
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

              {/* Click to dismiss hint */}
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
    </>
  );
}
