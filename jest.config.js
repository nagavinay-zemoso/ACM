module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,tsx}',
    '!**/*.stories.tsx',
    '!**/index.{tsx,html}',
    '!**/assets/**',
    '!**/utils/**',
    '!**/services/**',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts'],
};
