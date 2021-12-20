/* eslint-disable @typescript-eslint/no-var-requires */
const chalk = require('chalk');

console.log(chalk.greenBright.bold('📦 Building Labox!'));

require('./pre-build/update-version');
