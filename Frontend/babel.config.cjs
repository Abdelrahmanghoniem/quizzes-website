module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: ['@babel/plugin-transform-modules-commonjs'], // Add this line to handle ESM
  };
  