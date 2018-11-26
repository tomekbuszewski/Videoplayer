module.exports = {
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  setupTestFrameworkScriptFile: "<rootDir>/enzyme.config.js",
  collectCoverage: true,
  moduleNameMapper: {
    '@config$': '<rootDir>/@config/index.js',
    '@config/(.*)$': '<rootDir>/@config/$1',
    '@services/(.*)$': '<rootDir>/services/$1',
    '@src/(.*)$': '<rootDir>/src/$1',
  },
};
