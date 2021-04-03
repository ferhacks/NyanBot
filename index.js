const lolcatjs = require('lolcatjs')
const figlet = require('figlet')

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

lolcatjs.fromString('[INFO] HOLA, SOY NyanBot')
lolcatjs.fromString('[SYSTEM] NyanBot INICIANDOSE...')
console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('NyanBot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'Version de Prueba\' By Samu330', {
  font: 'console',
  align: 'center',
  gradient: ['green', 'cyan']
})
CFonts.say('Contactame Para nuevas actualizaciones', {
  font: 'console',
  align: 'left',
  gradient: ['blue', 'red']
})
console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::')

function start() {
  let args = [path.join(__dirname, 'samu.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}

start()
console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::')
lolcatjs.fromString('Sm330')
