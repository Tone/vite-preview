module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  collectCoverageFrom: [
    '**/src/**',
    '!**/node_modules/**',
    '!**/lib/**'
  ],
  testMatch: ['**/__test__/**/*.(ts|js)', '**/?(*.)+(spec|test).[jt]s'],
  testEnvironment: 'node',
  testTimeout: 8000
}
