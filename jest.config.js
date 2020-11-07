const { withEnzyme } = require("jest-expo-enzyme");

module.exports = {
  preset: "react-native",
  setupFiles: ["./jest/setup.js"],
  projects: [
    // Skipping Node because we want to test DOM presets only
    withEnzyme(require("jest-expo/ios/jest-preset")),
    withEnzyme(require("jest-expo/android/jest-preset")),
  ],
};
