module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupTestFrameworkScriptFile: "<rootDir>/enzyme.config.js",
  collectCoverage: true,
  moduleNameMapper: {
    '@assets/(.*)$': '<rootDir>/assets/$1',
    '@base$': '<rootDir>/@base',
    '@base/(.*)$': '<rootDir>/@base/$1',
    '@config$': '<rootDir>/@config/index.js',
    '@config/(.*)$': '<rootDir>/@config/$1',
    '@services/(.*)$': '<rootDir>/services/$1',
    '@src/(.*)$': '<rootDir>/src/$1',
  },
};
