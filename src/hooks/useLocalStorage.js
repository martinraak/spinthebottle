import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for syncing state with localStorage.
 * Provides automatic persistence and recovery of state.
 *
 * @param {string} key - The localStorage key
 * @param {any} defaultValue - Default value if nothing in storage
 * @returns {[any, function]} - State value and setter function
 */
export function useLocalStorage(key, defaultValue) {
  // Initialize state with value from localStorage or default
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  // Save to localStorage whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Failed to save to localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
}

/**
 * Helper function to load a value from localStorage (for initial state).
 * Useful when you need to read without setting up the hook.
 *
 * @param {string} key - The localStorage key
 * @param {any} defaultValue - Default value if nothing in storage
 * @returns {any} - The stored value or default
 */
export function loadFromStorage(key, defaultValue) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch {
    return defaultValue;
  }
}

// Storage keys as constants for consistency
export const STORAGE_KEYS = {
  NAMES: 'spinTheBottle_names',
  LABEL: 'spinTheBottle_label',
  HISTORY: 'spinTheBottle_history',
  MUTED: 'spinTheBottle_muted',
};
