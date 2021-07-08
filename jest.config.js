module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // "\\.(png|svg|pdf|jpg|jpeg)$": "<rootDir>/tests/__mocks__/mockFiles.js",
    "\\.(png|svg|pdf|jpg|jpeg)$": "identity-obj-proxy",
    '\\.(css|less|scss|sass)$': "identity-obj-proxy",
  }
}