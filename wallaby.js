module.exports = function (wallaby) {
  return {
    files: [
      "package.json",
      "tsconfig.json",
      "Capish.Applications.Reflect.Web/Content/Scripts/**/*.ts*",
      { pattern: "Capish.Applications.Reflect.Web/Content/Scripts/cql/cql.peg.parser.js", instrument: false },
      { pattern: "Capish.Applications.Reflect.Web/Content/Scripts/cql/cql-intellisense-parser.js", instrument: false },
      "!Capish.Applications.Reflect.Web/Content/Scripts/tests/**/test.*.ts*",
      "!Capish.Applications.Reflect.Web/Content/Scripts/tests/index.ts*",
      { pattern: "Capish.Applications.Reflect.Web/Content/Scripts/tests/polyfills.ts", instrument: false },
      { pattern: "Capish.Applications.Reflect.Web/Content/Scripts/tests/jsnlogTestConfigure.ts", instrument: false },
      "Capish.Applications.Reflect.ConfigurationBuilders/**/*.ts*",
      "!Capish.Applications.Reflect.ConfigurationBuilders/tests/**/test.*.ts*"
    ],

    tests: [
      "Capish.Applications.Reflect.Web/Content/Scripts/tests/**/test.*.ts*",
      "Capish.Applications.Reflect.ConfigurationBuilders/tests/**/test.*.ts*"
    ],

    debug: true,

    preprocessors: {
      'Capish.Applications.Reflect.Web/Content/Scripts/**/*.js*': file => {
        return require("@babel/core")
          .transform(file.content, {
            sourceMap: true,
            compact: false,
            babelrc: true,
            filename: file.path
          });
      },
      'Capish.Applications.Reflect.ConfigurationBuilders/**/*.js*': file => {
        return require("@babel/core")
          .transform(file.content, {
            sourceMap: true,
            compact: false,
            babelrc: true,
            filename: file.path
          });
      }
    },
    env: {
      type: "node",
      runner: "node"
    },
    testFramework: "jest",
  };
};