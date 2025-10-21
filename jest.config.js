/** @type { import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['./src'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '\.(less|css)$': 'jest-less-loader'
  },
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.ts', '!src/index.ts', '!src/**/demo/*'],
}