import { boolish, string, int } from 'getenv';

export const EXPO_NO_GIT_STATUS = boolish('EXPO_NO_GIT_STATUS', false);

/** Enable profiling metrics */
export const EXPO_PROFILE = boolish('EXPO_PROFILE', false);

/** Enable debug logging */
export const EXPO_DEBUG = boolish('EXPO_DEBUG', false);
export const EXPO_LOCAL = boolish('EXPO_LOCAL', false);
export const EXPO_STAGING = boolish('EXPO_STAGING', false);
/** Enable the beta version of Expo (TODO: Should this just be in the beta version of expo releases?) */
export const EXPO_BETA = boolish('EXPO_BETA', false);

/** Is running in non-interactive CI mode */
export const CI = boolish('CI', false);

/** Disable auto web setup */
export const EXPO_NO_WEB_SETUP = boolish('EXPO_NO_WEB_SETUP', false);
/** Disable auto TypeScript setup */
export const EXPO_NO_TYPESCRIPT_SETUP = boolish('EXPO_NO_TYPESCRIPT_SETUP', false);

/** Expo automated authentication token for use in CI environments */
export const EXPO_TOKEN = process.env.EXPO_TOKEN ?? null;

/** Is running in non-interactive CI mode */
export const LOCAL_XDL_SCHEMA = boolish('LOCAL_XDL_SCHEMA', false);

/** local directory to the universe repo for testing locally */
export const EXPO_UNIVERSE_DIR = string('EXPO_UNIVERSE_DIR', '');

/** TODO: No idea what this does */
export const XDG_CACHE_HOME = string('XDG_CACHE_HOME', '');

/** Disables json cache */
export const SKIP_CACHE = boolish('SKIP_CACHE', false);

// TODO: Rename to EXPO_API_PORT or something...

export const XDL_PORT = int('XDL_PORT', 0);

/** Defaults to `exp.host` */
export const XDL_HOST = string('XDL_HOST', 'exp.host');

export const XDL_SCHEME = string('XDL_SCHEME', 'https');

// @expo/webpack-config -> expo-pwa -> @expo/image-utils: EXPO_IMAGE_UTILS_NO_SHARP
