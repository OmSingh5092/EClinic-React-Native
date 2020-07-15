module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: [
          "./src"
        ],
        alias: {
          _navigator: "./src/navigator",
          _pages:"./src/components/pages"
       }
      } 
    ] 
  ]
};
