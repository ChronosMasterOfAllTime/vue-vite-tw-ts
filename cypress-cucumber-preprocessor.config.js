const cwd = process.cwd()

module.exports = {
  nonGlobalStepDefinitions: true,
  stepDefinitions: `${cwd}/test/e2e/specs/features`,
  commonPath: `${cwd}/test/e2e/specs/common`,
  cucumberJson: {
    generate: true,
    outputFolder: `${cwd}/test/e2e/reports/cucumber-json`,
    filePrefix: 'chronos-e2e',
    fileSuffix: '.cucumber'
  }
}
