// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-object-rest-spread', // Add this
    // other plugins
  ],
};
