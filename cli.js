const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')
const { program } = require('commander')
const inquirer = require('inquirer')

const sites = fs.readdirSync(path.join(__dirname, 'sites')).filter(f => f.isDirectory())

// eslint-disable-next-line prettier/prettier
program
  .option('-s, --site <site>', 'name of the site')
  .command('<command>', 'package.json script name for the site')

program.on('command:*', async (operands) => {
  const options = program.opts()

  const { site } =
    'site' in options
      ? options
      : await inquirer.prompt([{ name: 'site', type: 'list', message: 'Select a site', choices: sites }])

  spawn(`yarn workspace @dwh-sites/${site} ${operands.join(' ')}`, { stdio: 'inherit', shell: true })
})

program.parse()
