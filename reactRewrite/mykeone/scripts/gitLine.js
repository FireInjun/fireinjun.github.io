const shell = require('shelljs')

const greeting = "Hi! I'm going to check if your git line endings are correct"
const error = 'Sorry, these seem to be fine.'
const success = "Alright, I'll get right on this"
const config = 'git config '
const commands = [
  'core.autocrlf',
  '--global--unset core.autocrlf',
  '--system--unset core.autocrlf',
  '--global--add core.autocrlf false',
  '--system--add core.autocrlf false',
  'core.autocrlf'
]
const resetglobal (arr => {
  commands.forEach(command => {
    shell.exec(config + command).code
  });
}
