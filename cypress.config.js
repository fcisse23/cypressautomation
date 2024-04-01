const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;


module.exports = defineConfig({
  projectId: 'pddp1c',
  e2e: {

      setupNodeEvents(on, config) {

      on('file:preprocessor', cucumber());

      config.specPattern = 'cypress/e2e/features/*.feature';
    
      return config;

      },
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    env: {
      urlDev:
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      urlProd:
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      userId: "Admin",
      passWord: "admin123"
     
    },
  },
  stepDefinitions: 'cypress/support/step_definitions/*',
  defaultCommandTimeout: 10000,
  responseTimeout: 30000,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  video: true,
  projectId: "8rjt2g",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results/mochawesome",
    overwrite: false,
    html: false,
    json: true,
  },
});
