module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testURL: 'http://localhost',
  moduleFileExtensions: ['js', 'jsx', 'svg', 'json', 'node'],
  setupTestFrameworkScriptFile: '<rootDir>/enzyme.config.js',
  collectCoverage: true,
  moduleNameMapper: {
    '@assets/(.*)$': '<rootDir>/__mocks__/empty.js',
    '@config$': '<rootDir>/@config/index.js',
    '@config/(.*)$': '<rootDir>/@config/$1',
    '@services/(.*)$': '<rootDir>/src/services/$1',
    '@src/(.*)$': '<rootDir>/src/$1',
  },
};
