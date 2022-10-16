/** @type { import("jest").Config } */
const jestConfigObject = {
  moduleDirectories: [
    "./node_modules/",
    "<rootDir>/",
  ],
  moduleNameMapper: {
    "^@root/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: [
    "./jest.setup.js",
  ],
  testEnvironment: "jest-environment-jsdom",
};

const jestConfig = require("next/jest")({ dir: "./" })(jestConfigObject);
module.exports = jestConfig;
