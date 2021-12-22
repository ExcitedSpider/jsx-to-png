/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'jsdom',
  // "testEnvironmentOptions": { "resources": "usable" },
  "globalSetup": "jest-browser/setup",
  "globalTeardown": "jest-browser/teardown",
  "testEnvironment": "jest-browser"
};