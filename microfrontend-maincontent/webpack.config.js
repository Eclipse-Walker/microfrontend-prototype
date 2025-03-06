const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const moduleFederationConfig = withModuleFederationPlugin({
  name: "microfrontend-maincontent",

  exposes: {
    // "./Component": "./src/app/app.component.ts",
    "./WelcomeModule": "./src/app/welcome/welcome.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

// moduleFederationConfig.output = moduleFederationConfig.output || {};
moduleFederationConfig.output.publicPath = "http://localhost:4201/";

module.exports = moduleFederationConfig;
