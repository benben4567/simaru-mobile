module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {'prettier/prettier': ['error', {tabWidth: 2, endOfLine: 'auto'}]},
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
};
