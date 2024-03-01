const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Add redirection limit
      this.redirectionLimit = 3000;
    },
  },
});
