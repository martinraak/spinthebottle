import posthog from 'posthog-js';
import { useCallback, useEffect, useRef } from 'react';

// Initialize PostHog once
let isInitialized = false;

function initPostHog() {
  if (isInitialized) return;

  const apiKey = import.meta.env.VITE_POSTHOG_KEY;

  if (!apiKey) {
    console.warn('PostHog API key not found. Analytics disabled.');
    return;
  }

  // Use reverse proxy to avoid ad blockers on mobile
  const isProduction = window.location.hostname !== 'localhost';
  const apiHost = isProduction
    ? '/ingest'  // Proxied through Vercel rewrites
    : (import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com');

  posthog.init(apiKey, {
    api_host: apiHost,
    ui_host: 'https://eu.posthog.com', // For toolbar/surveys
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: false, // We'll track custom events manually
  });

  isInitialized = true;
}

/**
 * Custom hook for tracking analytics events
 */
export function useAnalytics() {
  const sessionStartRef = useRef(Date.now());

  // Initialize on first use
  useEffect(() => {
    initPostHog();

    // Track session start
    if (isInitialized) {
      posthog.capture('session_start');
    }

    return () => {
      // Track session duration on unmount
      if (isInitialized) {
        const duration = Math.round((Date.now() - sessionStartRef.current) / 1000);
        posthog.capture('session_end', { duration_seconds: duration });
      }
    };
  }, []);

  // Track game started (clicking "Start Game")
  const trackGameStart = useCallback((playerCount) => {
    if (!isInitialized) return;
    posthog.capture('game_started', {
      player_count: playerCount,
    });
  }, []);

  // Track spin event
  const trackSpin = useCallback((playerCount, winnerName) => {
    if (!isInitialized) return;
    posthog.capture('bottle_spun', {
      player_count: playerCount,
      winner_name_length: winnerName?.length || 0, // Don't track actual names for privacy
    });
  }, []);

  // Track player added
  const trackPlayerAdded = useCallback((totalPlayers) => {
    if (!isInitialized) return;
    posthog.capture('player_added', {
      total_players: totalPlayers,
    });
  }, []);

  // Track player removed
  const trackPlayerRemoved = useCallback((totalPlayers) => {
    if (!isInitialized) return;
    posthog.capture('player_removed', {
      total_players: totalPlayers,
    });
  }, []);

  // Track label changed
  const trackLabelChanged = useCallback(() => {
    if (!isInitialized) return;
    posthog.capture('label_changed');
  }, []);

  // Track mute toggle
  const trackMuteToggle = useCallback((isMuted) => {
    if (!isInitialized) return;
    posthog.capture('mute_toggled', { is_muted: isMuted });
  }, []);

  // Track share button clicked
  const trackShare = useCallback(() => {
    if (!isInitialized) return;
    posthog.capture('share_clicked');
  }, []);

  // Track stats viewed
  const trackStatsViewed = useCallback(() => {
    if (!isInitialized) return;
    posthog.capture('stats_viewed');
  }, []);

  return {
    trackGameStart,
    trackSpin,
    trackPlayerAdded,
    trackPlayerRemoved,
    trackLabelChanged,
    trackMuteToggle,
    trackShare,
    trackStatsViewed,
  };
}
