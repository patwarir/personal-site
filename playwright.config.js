const { devices } = require("@playwright/test");

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

/** @type { import("@playwright/test").PlaywrightTestConfig } */
const config = {
  timeout: 30 * 1000,
  testDir: "./src/tests/e2e/",
  retries: 0,
  outputDir: "./out/",
  webServer: {
    command: "npm run dev",
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL,
    trace: "retry-with-trace",
  },
  projects: [
    {
      name: "Desktop Firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 5"],
      },
    },
  ],
};

module.exports = config;
