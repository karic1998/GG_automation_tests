import { defineConfig } from "cypress";
import * as mochawesome from "cypress-mochawesome-reporter/plugin";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  env: {
    apiUrl: "https://api.test.com/",
    Url: "https://test.com",
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