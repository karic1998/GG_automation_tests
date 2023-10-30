import { defineConfig } from "cypress";
import * as mochawesome from "cypress-mochawesome-reporter/plugin";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    charts: true,
    html: false,
    json: true,
    "inline":true,
  },
  env: {
    apiUrl: "https://api-uat.locorum.ca/",
    uatUrl: "https://uat.app.locorum.ca",
  },
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 25000,
    responseTimeout: 60000,
    setupNodeEvents(on) {
      // implement node event listeners here
      mochawesome(on);
    },
  },
});
