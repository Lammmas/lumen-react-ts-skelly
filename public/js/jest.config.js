module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
  	"^.+\\.jsx?$": "babel-jest",
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.(tsx|ts|jsx|js)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
}