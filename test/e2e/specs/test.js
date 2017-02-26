// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'see clock by default': (browser) => {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.clock')
      .end();
  },
};
