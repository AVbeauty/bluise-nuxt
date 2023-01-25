const { defineConfig } = require('cypress')

module.exports = defineConfig({
  form: {
    baseUrl: "http://localhost:8888/",
    supportFile: false,
    chromeWebSecurity: false,
  },
});
