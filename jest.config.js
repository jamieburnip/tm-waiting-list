module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "^@components/(.*)": "<rootDir>/components/$1",
    "^@consts/(.*)": "<rootDir>/consts/$1",
    "^@style/(.*)": "<rootDir>/style/$1",
  },
};
