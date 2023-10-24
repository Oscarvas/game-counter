const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);
// @ts-expect-error
config.resolver.sourceExts.push('cjs', 'mjs');

module.exports = config;