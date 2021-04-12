const lolcatjs = require('lolcatjs')


lolcatjs.options.colors = true;

lolcatjs.fromString('[INFO] Suscribete a mi canal:3 Samu330')
lolcatjs.fromString('[SYSTEM] NyanBot INICIANDOSE...')

let { spawn } = require('child_process')
let path = require('path')

function start() {
  let args = [path.join(__dirname, 'samu.js'), ...process.argv.slice(2)]
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
lolcatjs.fromString('Sm330')
