const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

const baseConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

const combinedConfig = mergeConfig(defaultConfig, baseConfig);
const reanimatedConfig = wrapWithReanimatedMetroConfig(combinedConfig);
const finalConfig = withNativeWind(reanimatedConfig, {input: './global.css'});

module.exports = finalConfig;
