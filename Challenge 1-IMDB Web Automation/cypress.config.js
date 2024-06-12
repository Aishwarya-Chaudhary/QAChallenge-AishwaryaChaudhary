const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3oiubt',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     // this.watchForFileChanges(true);
    },
  },
});
