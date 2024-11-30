module.exports = {
  testEnvironment: 'jsdom',  // Ensure jsdom is being used as the test environment
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // Use babel-jest for JS/TS files
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  };
  