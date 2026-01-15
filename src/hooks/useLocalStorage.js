import { useState, useEffect, useCallback, useRef } from 'react';

// Global storage error state - shared across all useLocalStorage instances
let storageErrorCallbacks = new Set();
let hasStorageError = false;

/**
 * Subscribe to storage error notifications
 */
export function onStorageError(callback) {
  storageErrorCallbacks.add(callback);
  // Immediately notify if there's already an error
  if (hasStorageError) {
    callback(true);
  }
  return () => storageErrorCallbacks.delete(callback);
}

/**
 * Notify all subscribers of storage error state change
 */
function notifyStorageError(hasError) {
  if (hasStorageError !== hasError) {
    hasStorageError = hasError;
    storageErrorCallbacks.forEach(cb => cb(hasError));
  }
}

/**
 * Check if localStorage is available and working
 */
function isStorageAvailable() {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

/**
 * Custom hook for syncing state with localStorage.
 * Provides automatic persistence and recovery of state.
 * Gracefully handles storage failures (quota exceeded, private browsing, etc.)
 *
 * @param {string} key - The localStorage key
 * @param {any} defaultValue - Default value if nothing in storage
 * @returns {[any, function]} - State value and setter function
 */
export function useLocalStorage(key, defaultValue) {
  // Track if we've already shown an error for this session
  const errorShownRef = useRef(false);

  // Initialize state with value from localStorage or default
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch {
      // Don't notify on initial load - just use default
      return defaultValue;
    }
  });

  // Save to localStorage whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      // If save succeeds, clear any previous error state
      if (errorShownRef.current) {
        errorShownRef.current = false;
        notifyStorageError(false);
      }
    } catch (error) {
      console.warn(`Failed to save to localStorage key "${key}":`, error);
      // Only notify once per session to avoid spamming
      if (!errorShownRef.current) {
        errorShownRef.current = true;
        notifyStorageError(true);
      }
    }
  }, [key, value]);

  return [value, setValue];
}

/**
 * Hook to subscribe to storage error state
 * @returns {boolean} - Whether there's a storage error
 */
export function useStorageError() {
  const [hasError, setHasError] = useState(hasStorageError);

  useEffect(() => {
    return onStorageError(setHasError);
  }, []);

  return hasError;
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
