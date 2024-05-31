const { defineConfig } = require("cypress");
const env = require("./cypress/config/cypress.env.json");
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

module.exports = defineConfig({
  projectId: "powb6b",
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    videoOnFailOnly: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
      require("./cypress/plugins/index.js")(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    testIsolation: false,
    baseUrl: env.baseUrl,
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
  },
});
