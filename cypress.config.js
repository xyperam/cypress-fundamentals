const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://liquipedia.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
