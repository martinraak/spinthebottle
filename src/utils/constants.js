// Fixed champagne bottle color (classic green)
export const BOTTLE_COLOR = {
  body: '#1a472a',
  bodyLight: '#2d5a27',
  bodyDark: '#0d2818'
};

// Pastel foam colors for surprise effect
export const FOAM_COLORS = [
  { name: 'champagne', primary: '#fff8dc', secondary: '#fffacd', accent: '#ffefd5' }, // Classic champagne
  { name: 'rose', primary: '#ffb6c1', secondary: '#ffc0cb', accent: '#ffe4e9' }, // Soft pink
  { name: 'lavender', primary: '#e6e6fa', secondary: '#d8bfd8', accent: '#f0e6ff' }, // Light purple
  { name: 'mint', primary: '#b5ead7', secondary: '#c7f9e5', accent: '#e0fff0' }, // Mint green
  { name: 'peach', primary: '#ffdab9', secondary: '#ffe4c4', accent: '#fff0e0' }, // Soft peach
  { name: 'sky', primary: '#b4d7e8', secondary: '#c5e3f0', accent: '#e0f4ff' }, // Light blue
  { name: 'lemon', primary: '#fffacd', secondary: '#fff9b0', accent: '#ffffdd' }, // Soft yellow
  { name: 'coral', primary: '#ffcccb', secondary: '#ffd6d5', accent: '#ffe8e8' }, // Soft coral
];

// Confetti colors for celebration
export const CONFETTI_COLORS = [
  '#ffd700', '#ff6b6b', '#7fdbca', '#ff69b4', '#00ff00',
  '#ff4500', '#00bfff', '#ffff00', '#ff1493', '#32cd32'
];

// Physics constants for bottle spinning
export const SPIN_PHYSICS = {
  MIN_INITIAL_VELOCITY: 50,
  MAX_INITIAL_VELOCITY: 80,
  FRICTION: 0.995,
  SLOW_FRICTION: 0.998,
  VERY_SLOW_FRICTION: 0.999,
  MIN_VELOCITY: 0.05,
  WOBBLE_AMPLITUDE: 5,
  WOBBLE_DECAY: 0.96,
  WOBBLE_STOP_THRESHOLD: 0.08,
};

// Animation timing constants
export const TIMING = {
  FOAM_DELAY: 200,
  CORK_FLY_DURATION: 3500,
  FOAM_HIDE_DELAY: 4500,
};
