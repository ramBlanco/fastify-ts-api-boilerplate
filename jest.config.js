module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': [
      'ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' } 
    ],
    '^.+\\.[tj]sx?$': [
      'ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html', 'text-summary'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  setupFiles: ['dotenv/config'],
};
