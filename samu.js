const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,
} = require('@adiwajshing/baileys');
//*********

//*********File js
const {color, bgcolor} = require('./lib/color');
const { bahasa } = require('./src/bahasa');
const { negara } = require('./src/kodenegara');
const {wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, clos } = require('./lib/functions');
const {fetchJson} = require('./lib/fetcher');
const {recognize} = require('./lib/ocr');

//*********

//*********Pakage Npm
const fs = require('fs');
const os = require('os');
const moment = require('moment-timezone');
const {exec} = require('child_process');
const { execSync } = require('child_process');
const kagApi = require('@kagchi/kag-api');
const fetc = require('node-fetch');
const tiktod = require('tiktok-scraper');
const ffmpeg = require('fluent-ffmpeg');
const {removeBackgroundFromImageFile} = require('remove.bg');
const imgbb = require('imgbb-uploader');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const crypto = require('crypto');
const qrcode = require("qrcode-terminal");
const axios = require('axios');
//*********

//*********File json bot
const welkom = JSON.parse(fs.readFileSync('./data/welkom.json'));
const samu = JSON.parse(fs.readFileSync('./data/settings.json'));
const bad = JSON.parse(fs.readFileSync('./data/bad.json'))
const badword = JSON.parse(fs.readFileSync('./data/badword.json'))
const antilink = JSON.parse(fs.readFileSync('./data/antilink.json'))
const samih = JSON.parse(fs.readFileSync('./data/simi.json'))
//*********

//*********File json temp
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/vid.json'))
//const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))

//*********File json user
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));
//*********

//*********File json data
const trut = JSON.parse(fs.readFileSync('./data/truth.json'));
const fak = JSON.parse(fs.readFileSync('./data/dare.json'));
const dare = JSON.parse(fs.readFileSync('./data/fakta.json'));
//*********


//*********Setting
prefix = samu.prefix
bodyM = samu.samuM
const memberlimit = samu.memberlimit;
const cr = samu.cr;
const NombreBot = samu.NamaBot;
const Ig = samu.Ig;
const Wa1 = samu.Wa1;
const Wa2 = samu.Wa2;
const blocked = [];
const ownerNumber = samu.ownerNumber;
//*********

//*********Apikey
BarBarKey = samu.BarBarKey;
vKey = samu.Vhtearkey;
viKey = samu.Vinzapi
meKey = samu.Itsmeikyapi
lolKey = samu.LolHumanKey
//*********

//*********
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ 'FN:-·👑Samu330🏆·-\n'
+ 'ORG:🐬NyanBot;\n'
+ 'TEL;type=CELL;type=VOICE;waid=50062108:+500 62108\n' 
+ 'END:VCARD' 


const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
  _registered.push(obj)
  fs.writeFileSync('./datauser/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
  let status = false
  Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
  status = true
}
  })
  return status
}


//*********Horario
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var second = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(second)}`;
}
//*********


//*********Whatsapp start connect
async function starts() {
	const samu330 = new WAConnection()
	samu330.logger.level = 'warn'
	samu330.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./Samu.json') && samu330.loadAuthInfo('./Samu.json')
	samu330.on('connecting', () => {
		start('2', 'Connecting...')
	})
	samu330.on('open', () => {
		success('2', 'Connected')
	})
	await samu330.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu.json', JSON.stringify(samu330.base64EncodedAuthInfo(), null, '\t'))


	samu330.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await samu330.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `😙Hola, @${num.split('@')[0]}, _*Bienvenido a ${mdata.subject}, esperamos que te la pases a gusto en este grupo✨*_
_Recuerda siempre seguir las reglas y mantener una formalidad respetuosa_😉
*Si quieres hacer uso del bot, primero tienes que registrarte para eso:*
Usa *${prefix}reg*.`
				samu330.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `_Weno ps.... amm😪...  @${num.split('@')[0]} se nos fue, ni llorar es bueno:)_
_*Ojala y le baya bien, y mas despues..... que lo atropelle un tren!!🚉🤣*_
*No se awiten gente, esten seguros que nadie lo extrañara:D*`
				samu330.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	samu330.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	samu330.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
      const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
			mess = {
  wait: '⌛ 𝐄𝐍 𝐏𝐑𝐎𝐂𝐄𝐒𝐎 ⌛',
  success: '✔️ 𝙎𝙐𝙎𝙎𝙀𝙎 ✔️',
  Public: '🛡 _*MODO PRIVADO ACTIVADO*_',
  ferr: 'Intentalo de nuevo mas tarde',
  limitend: 'El tiempo se agoto',
  error: {
  stick: '[❗] 𝙀𝙍𝙍𝙊𝙍 intentalo de nuevo, da error a la primera:D  ❌',
  Iv: '❌ Link invalido ❌'
  },
  only: {
    group: '[❗] ¡Este comando solo se puede usar en grupos! ❌',
    ownerG: '[❗] ¡Este comando solo puede ser utilizado por el creador del grupo! ❌',
    ownerB: '[❗] ¡Este comando solo puede ser utilizado por el creador del bot! ❌',
    admin: '[❗] ¡Este comando solo puede ser utilizado por administradores del grupo! ❌',
    Badmin: '[❗] ¡Este comando solo se puede usar cuando el bot es administrador! ❌',
    daftarB: `Hola, usa *${prefix}reg* para poder usar el bot`
  }
}
      const totalchat = await samu330.chats.all()
			const botNumber = samu330.user.jid
			const samu = '```'
			const ownerNumber = [`${samu.ownerNumber}@s.whatsapp.net`]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await samu330.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isSimi = isGroup ? samih.includes(from): false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
      const isRegister = checkRegisteredUser(sender)
      const q = args.join(' ')
      const tescuk = ["0@s.whatsapp.net"]
			let pushname = samu330.contacts[sender] != undefined ? samu330.contacts[sender].vname || samu330.contacts[sender].notify: undefined
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			
//*********Balasan bot
			const reply = (teks) => {
				samu330.sendMessage(from, teks, text, {quoted: mek, tescuk, cr, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
})
			}
			const sendMess = (hehe, teks) => {
				samu330.sendMessage(hehe, teks, text, {quoted: mek, tescuk, cr, "forwardingScore": 9999, "isForwarded": true
})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? samu330.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : samu330.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
      samu330.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {
  remoteJid: from
}: {})
  }, message: {
conversation: `${target2}`
  }}})
}
const sendPtt = (teks) => {
  samu330.sendMessage(from, audio, mp3, {
quoted: mek, "forwardingScore": 9999, "isForwarded": true
  })
}
			
//*********MessageType
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (isGroup && isBadWord) {
                        if (bad.includes(messagesC)) {
                                if (!isGroupAdmins) {
                                        return reply("😠")
                                        .then(() => {
                                                samu330.sendMessage(from, `*「 ANTI BADWORD 」*\nEliminado por grocero:v`, text, {quoted: mek})
						samu330.groupRemove(from, sender)
                                        }).catch(() => samu330.sendMessage(from, `Te salvaste xq no soy admin si no te saco a patadas!`, text , {quoted : mek}))
                                } else {
                                        return reply( "Cuidado 😇")
                                }
                        }
                }

			
			 if (messagesC.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Tienes suerte, eres admin y no te sacaré')
		        samu330.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin recebido")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link detectado ${sender.split("@")[0]} serás expulsado en 5 segundos`)
		        setTimeout( () => {
			        samu330.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("1 segundo")
		        }, 4000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
		                reply("2 segundos")
		        }, 3000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("3 segundos")
		        }, 2000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("4 segundos")
		        }, 1000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("5 segundos")
		        }, 0)
	        }
	
	
	            if (messagesC.includes("www.")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Tienes suerte, eres admin y no te sacaré')
		        samu330.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin recebido")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link detectado ${sender.split("@")[0]} serás expulsado en 5 segundos`)
		        setTimeout( () => {
			        samu330.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("1 segundo")
		        }, 4000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
		                reply("2 segundos")
		        }, 3000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("3 segundos")
		        }, 2000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("4 segundos")
		        }, 1000)
		        setTimeout( () => {
			        samu330.updatePresence(from, Presence.composing)
			        reply("5 segundos")
		        }, 0)
	        }
			

//*********Colors
      colors = ['red','white','black','blue','yellow','green']

//*********Console log chats
			if (!isGroup && isCmd) console.log('\x1b[1;32m>', time, color(command), 'from', color(pushname), 'args :', (args.length))
			
//*********Console log grupos
			if (isCmd && isGroup) console.log('\x1b[1;32m>', time, color(command), 'from', (groupName), 'args :', color(args.length))

//*********-Metadata stiker
			
			function addMetadata(packname) {	
				if (!packname) packname = 'WABot';	
				let name = `${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}


//*********Member limit
if (isGroup) {
  try {
const getmemex = groupMembers.length
if (getmemex <= memberlimit) {
  samu330.sendMessage(from, `Los miembros de este grupo son insuficientes, se nececitan: ${memberlimit}, para usar este bot`, text)

  setTimeout(() => {
samu330.groupLeave(from) // ur cods
  }, 5000) // 1000 = 1s,
}
  } catch {
console.error(err)
  }
}


//*********Auto respon
if(budy.match('bot')){
result = fs.readFileSync(`./temp/stick/Samu.webp`)
  samu330.sendMessage(from, result, sticker, {
quoted: mek, "forwardingScore": 9999, "isForwarded": true
  })
}
			
/*if(budy.match('bot')){
	reply('Eh, Aqui estoy🐬')*/
	

//*********End auto respon 1

//*********Auto respon 2
switch(is) {
  case 'buenos dias':
buf = fs.readFileSync(`./temp/audio/Buenos días.mp3`)
samu330.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
		
case '#menu':
case '#help':
case '!help':
case '!menu':
case '/menu':
case '/help':
case 'help':
case 'menu':
hasil = `        
Hola *${pushname}* usa este comando *${prefix}menu*
       `
reply(hasil)
        break
}

			switch(command) {
case 'help':
  case 'menu':
case '?':
   samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  uptime = process.uptime()
const Menu = {
text: `👑Samu330🏆
🔐Hola *${pushname}* 

${samu}❑ Prefijo:${samu}「 ${prefix} 」
${samu}❑ Tiempo de actividad:${samu} *${kyun(uptime)}*
${samu}❑ Modo:${samu} *ON*
${samu}❑ Grupo:${samu} *${groupName}*
${samu}❑ Número de grupos:${samu} *${_registered.length}*
${samu}❑ Número de chats:${samu} *${totalchat.length}*
${samu}❑ Numero del Dueño wa.me/+529984907794${samu}

⍣ *BOT INFO* ⍣
${samu}◦ 🔋 nivel de bateria :
${samu}◦ 🌐Navegador :${samu} *${samu330.browserDescription[1]}*
${samu}◦ 📡servidor :${samu} *${samu330.browserDescription[0]}*
${samu}◦ ✅version :${samu} *${samu330.browserDescription[2]}*
${samu}◦ 🚄Velocidad :${samu} *${process.uptime()}*
${samu}◦ 📲Sistema operativo : *${samu} ${samu330.user.phone.device_manufacturer}*
${samu}◦ 🪀version de *WhatsApp* :${samu} ${samu330.user.phone.wa_version}

_LOS COMANDOS QUE APARECEN A CONTINUACION NO SON TODOS LOS COMANDOS DEL BOT, ASI QUE ESPERA A QUE CREE UN BUEN MENU:D_

╓╴*COMADOS DE STICKERS*
${bodyM}
${bodyM}${prefix}sticker (Imagen, video o gif)
${bodyM}${prefix}sticker nobg
${bodyM}
${bodyM}╴ *COMANDOS DE MEDIA*
${bodyM}
${bodyM}${prefix}imagen (algo para buscar:v)
${bodyM}${prefix}toimg (sticker a imagen)
${bodyM}${prefix}tmp3 (video a mp3)
${bodyM}${prefix}pubg 
${bodyM}${prefix}sombra
${bodyM}
${bodyM}╴ *COMANDOS DE GRUPOS*
${bodyM}
${bodyM}${prefix}readmore
${bodyM}${prefix}reply
${bodyM}${prefix}tagme
${bodyM}${prefix}all
${bodyM}${prefix}listonline
${bodyM}${prefix}hidetag
${bodyM}${prefix}nitif
${bodyM}${prefix}closegc
${bodyM}${prefix}opengc
${bodyM}${prefix}setame
${bodyM}${prefix}setdesc
${bodyM}${prefix}setppgc
${bodyM}${prefix}promote
${bodyM}${prefix}demote
${bodyM}${prefix}kick
${bodyM}${prefix}add
${bodyM}
${bodyM}*COMADOS DE DESCARGAS*
${bodyM}
${bodyM}${prefix}play
${bodyM}${prefix}joox
${bodyM}${prefix}ytmp3
${bodyM}${prefix}ytmp4
........................
`,
	contextInfo: {
  mentionedJid: [sender], "forwardingScore": 9999, "isForwarded": true
}
  }
  samu330.sendMessage(from, Menu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "🪀𝐒𝐚𝐦𝐮𝟑𝟑𝟎👑", "jpegThumbnail": fs.readFileSync(`./NyanBot.jpg`)}}}})              
  break


					
					//BY SAMU330✅
										
					case 'cc':
			
            const cc = await axios.get('https://videfikri.com/api/ccgenerator/')
            samu330.sendMessage(from, `${cc.data.number}`, '', `${cc.data.cvv}`)
            break
					
					
				case 'vcard':
				case 'contacto':
					args = arg.split(' ')
					if (!args) return reply(`Ejemplo: *${prefix}contacto* @tag nombre | *${prefix}contacto* @Samu330 👑Samu👑`)
					if (mek.message.extendedTextMessage != undefined){
						mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
						samu330.sendkontak(from, mentioned[0].split('@')[0], args[1])
								   }else{
								   samu330.sendKontaK(from, args[0], args[1])
						}
					break
					
					
					
					
					//case creado por Samu330
					case 'cambiar':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
				  bodyM = args[0]
					samu.prefix = bodyM
					fs.writeFileSync('./data/settings.json', JSON.stringify(samu, null, '\t'))
					reply(`Cuerpo de menu cambiado a: ${bodyM}`)
					break
					

	
					case 'slow':
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					slo = await samu330.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai':
					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					tup = await samu330.downloadAndSaveMediaMessage(pai)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(tup)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					gem = await samu330.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					bas = await samu330.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu330.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, tescuk, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					

//*********Info bot
				case 'info':
  me = samu330.user
  uptime = process.uptime()
  teks = `*‣ Nombre del bot* : ${me.name}
  ‣ *Número del bot* : @${me.jid.split('@')[0]}
  ‣ *Dueño* : Samu330
  ‣ *Prefijo* : ${prefix}
  ‣ *Usuarios bloqueados* : ${blocked.length}
  ‣ *Tiempo activo* : ${kyun(uptime)}
  ‣ *Total de usuarios* : ${_registered.length} Usuarios
  ‣ *Total de chats* : ${totalchat.length}`
  buffer = await getBuffer(me.imgUrl)
  samu330.sendMessage(from, buffer, image, {
caption: teks, contextInfo: {
  mentionedJid: [me.jid]}})
  break

//*********-Kecepatan respon
case 'ping':
  case 'speed':
if (!isRegister) return reply(mess.only.userB)
const timestamp = speed();
const latensi = speed() - timestamp
samu330.updatePresence(from, Presence.composing)
uptime = process.uptime()
samu330.sendMessage(from, `*Pong.... xD*\n‣ *Speed* : ${latensi.toFixed(4)} _Segundos_\n\n*Info bot*\n‣ *Total de chats* : ${totalchat.length}\n‣ *Total de usuarios* : ${_registered.length}\n‣ *Bloqueados* : ${blocked.length}\n‣ *Tiempo activo* : ${kyun(uptime)}`, text, {
	quoted: mek, contextInfo: {"forwardingScore": 9999, "isForwarded": true}, key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "🔋𝙄𝙣𝙛𝙤 𝘽𝙤𝙩🔋", "jpegThumbnail": fs.readFileSync(`./NyanBot.jpg`)}}       
})
break


//*********arti nama
case 'arti':
if (args.length < 1) return reply('*☒* Ingresa texto')
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
teks = body.slice(6)
try {
data = await fetchJson(`https://scrap.terhambar.com/nama?n=${teks}`)
hasil = `Nombre : *${teks}*\n${data.result.arti}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break


//*********
case 'imagen':
tels = body.slice(11)
if (!isRegister) return reply(mess.only.daftarB)

if (args.length < 1) return reply('Ingresa lo que quieres buscar')
samu330.updatePresence(from, Presence.composing)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
  quoted: mek, caption: `Resultado de: *${tels}*`, key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "💟𝐈𝐦𝐚𝐠𝐞𝐧💟", "jpegThumbnail": fs.readFileSync(`./NyanBot.jpg`)}}       
})

} catch {
  reply(mess.ferr)
}
break

case 'listonline':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(samu330.chats.get(ido).presences), samu330.user.jid]
			    samu330.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break



//*********pinterest anime neko
case 'neko':
if (!isRegister) return reply(mess.only.daftarB)

samu330.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
  quoted: mek, caption: `...`
})

} catch {
  reply(mess.ferr)
}
break

//*********Pinteres anime loli
  case 'loli':
if (!isRegister) return reply(mess.only.daftarB)

samu330.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
  quoted: mek, caption: `...`
})

} catch {
  reply(mess.ferr)
}
break


//*********Pinterest Twitter
  case 'twit':
if (!isRegister) return reply(mess.only.daftarB)

samu330.updatePresence(from, Presence.composing)
tw = ["Twitter lucu Indonesia",
  "Twitter harian",
  "Recehkan Twitter",
  "twit lucu"]
nk = tw[Math.floor(Math.random() * tw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
  quoted: mek
})

} catch {
  reply(mess.ferr)
}
break

  //
  case 'anime':
if (!isRegister) return reply(mess.only.daftarB)

samu330.updatePresence(from, Presence.composing)
am = ["anime tumblr",
  "wallpaper anime hd",
  "anime aestethic",
  "anime hd"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
samu330.sendMessage(from, pok, image, {
  quoted: mek, caption: `....`
})

break

//*********Pinterest wallpaper
  case 'wp':
case 'wallpaper':
  if (!isRegister) return reply(mess.only.daftarB)
  
  samu330.updatePresence(from, Presence.composing)
  pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper gatitos",
"wallpaper"]
  nk = pw[Math.floor(Math.random() * pw.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  samu330.sendMessage(from, pok, image, {
quoted: mek, caption: `.....`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//*********Pinterest quotes
case 'quotes':
  if (!isRegister) return reply(mess.only.daftarB)
  
  tels = body.slice(5)
  samu330.updatePresence(from, Presence.composing)
  qt = ["quotes tristes",
"tristes"]
  nk = qt[Math.floor(Math.random() * qt.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  samu330.sendMessage(from, pok, image, {
quoted: mek, caption: `.....`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break



//*********Pinterest cogan
case 'cogan':
  if (!isRegister) return reply(mess.only.daftarB)
  
  samu330.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  samu330.sendMessage(from, pok, image, {
quoted: mek, caption: `....`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//*********Pinterest cyberpunk
case 'cyberpunk':
  if (!isRegister) return reply(mess.only.daftarB)
  
  samu330.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  samu330.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


//*********searching lirik
case 'lirik':
  if (args.length < 1) return reply('Escribe el nombre de la cancion')
  if (!isRegister) return reply(mess.only.daftarB)
  
  samu330.updatePresence(from, Presence.composing)
  tels = body.slice(7)
  try {
  anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${tels}`, {
method: 'get'
  })
  reply(anu.result.lirik)
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'namae':
  if (args.length < 1) return reply('Escribe el nombre')
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)

teks = body.slice(7) 
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${teks}`)
hasil = `*Nombre de ninja*\n*${data.result.ninja}*`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

case 'alay':
  if (args.length < 1) return reply('Escribe el texto')
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)

teks = body.slice(6)
try {
data = await fetchJson(`https://api.terhambar.com/bpk?kata=${teks}`)
reply(data.text)

} catch {
  reply(mess.ferr)
}
break


case 'rate':
  if (args.length < 1) return reply('Escribe el nombre')
  samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  random = `${Math.floor(Math.random() * 100)}`
  hasil = `Rating : *${body.slice(6)}*\n\nPorcentaje : *${random}%*`
  reply(hasil)
  break


case 'setppgc':

if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
const media = await samu330.downloadAndSaveMediaMessage(encmedia)
await samu330.updateProfilePicture (from, media)
reply('Se cambio la foto del grupo')
break

					
					
					
					case 'porno':
			if (isGroup) return reply(mess.only.group)
            const porn = await axios.get('https://meme-api.herokuapp.com/gimme/porn')
            await samu330.sendMessage(from, `${porn.data.url}`, '', `${porn.data.title}`)
            break
					
					case 'lesbi':
			if (isGroup) return reply(mess.only.group)
            const les = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
            await samu330.sendMessage(from, `${les.data.url}`, '', `${les.data.title}`)
            break
					
					
				case 'sombra':
                                        var gh = body.slice(7)
                                        
                                        if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}sombra NyanBot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://videfikri.com/api/textmaker/shadowtext/?text=${gh}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        samu330.sendMessage(from, buffer, image, {quoted: mek, caption: 'By 👑Samu330✅'})
                                        break
					
					
				case 'pubg':
                                        var gh = body.slice(5)
                                        var teks1 = gh.split("|")[0];
                                        var teks2 = gh.split("|")[1];
                                        if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}pubg NyanBot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        anu = await fetchJson(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${teks1}&text2=${teks2}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        samu330.sendMessage(from, buffer, image, {quoted: mek, caption: 'By @Samu330'})
                                        break
					
					
case 'triggered':
					case 'ger':
 if (!isRegister) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await samu330.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                samu330.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Se nececita una foto!')
                                          }
                                             break


case 'tourl':
 if (!isRegister) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await samu330.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
reply(teks)
}
break

//*********-stiker wasted
case 'wasted':
  case 'was':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
samu330.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Manda la foto')
}
break

case 'drawing':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Manda la foto')
}
break


case 'wanted':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 samu330.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Manda la foto')
}
break

case 'gtav':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await samu330.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 samu330.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Manda la foto')
}
break

//*********list kodebahasa
case 'idiomas':
samu330.sendMessage(from, bahasa(prefix, sender), text, {
  quoted: mek
})
break

//*********list kode negara
case 'paises':
samu330.sendMessage(from, negara(prefix, sender), text, {
  quoted: mek
})
break

//*********link wame
case 'wa.me':
case 'wame':
  samu330.updatePresence(from, Presence.composing)
  options = {
text: `Link WhatsApp: *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
  mentionedJid: [sender]
}
  }
  samu330.sendMessage(from, options, text, {
quoted: mek
  })
  break

//*********translate semua bahasa
  case 'tl':
    if (!isRegister) return reply(mess.only.daftarB)
  
if (args.length < 1) return samu330.sendMessage(from, 'Introduce el código y el texto', text, {
  quoted: mek
})
var pc = body.slice(4)
nomor = pc.split("/")[0];
pesan = pc.split("/")[1];
try {
data = await fetchJson(`https://api-translate.azharimm.tk/translate?engine=google&text=${nomor}&to=${pesan}`)
if (!isRegister) return reply(mess.only.daftarB)
hasil = `*Translate* :\n${data.data.result}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//*********
  case 'reverse':
    if (!isRegister) return reply(mess.only.daftarB)
  
if (args.length < 1) return samu330.sendMessage(from, 'Escribe el texto', text, {
  quoted: mek
})
var pc = body.slice(9)
try {
data = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${pc}`)
if (!isRegister) return reply(mess.only.daftarB)
hasil = data.result.kata
reply(hasil)

} catch {
  reply(mess.ferr)
}
break



//*********fake reply
case 'reply':
if (args.length < 1) return reply(`Uso :\n${prefix}fitnah [@tag|frase a etiquetar|respuesta]]\n\nEx : \n${prefix}reply @tagmember|hola|hola que tal`)
var gh = body.slice(7)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
samu330.sendMessage(from, `${bot}`, text, {
  quoted: {
key: {
  fromMe: false, participant: `${mentioned}`, ...(from ? {
remoteJid: from
  }: {})
}, message: {
  conversation: `${target}`
}}})
break

//*********
case 'verdad':
const ttrth = trut[Math.floor(Math.random() * trut.length)]
samu330.sendMessage(from, `‣ *Verdad*\n${ttrth}`, text, {
  quoted: mek
})
break


//*********notifikasi grup
  case 'notif':

if (!isGroupAdmins) return reply(mess.only.admin)
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
teks = `Notificación dada por @${sender.split("@")[0]}\n*Mensaje : ${body.slice(7)}*`
group = await samu330.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await samu330.sendMessage(from, options, text)
break


//*********
  case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
let idgrup = `${from.split("@s.whatsapp.net")[0]}`;
samu330.groupUpdateSubject(idgrup, `${body.slice(9)}`)
samu330.sendMessage(from, 'Cambio nombre del grupo', text, {
  quoted: mek
})
break

//*********
  case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
samu330.groupUpdateDescription(from, `${body.slice(9)}`)
samu330.sendMessage(from, 'Cambio nombre del grupo', text, {
  quoted: mek
})
break



//*********random meme
case 'meme':
  samu330.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)

try {
  beh = await fetchJson(`https://meme-api.herokuapp.com/gimme/memesmexico`)
  pint = await getBuffer(beh.result)
  reply(mess.wait)
  samu330.sendMessage(from, pint, image, {
quoted: mek
  })
  
} catch {
  reply(mess.ferr)
}
  break

//*********tagme
case 'tagme':
if (!isRegister) return reply(mess.only.daftarB)
const tagme = {
  text: `@${sender.split("@")[0]} Hola`,
  contextInfo: {
mentionedJid: [sender]
  }
}
samu330.sendMessage(from, tagme, text)
break


  case 'readmore':
samu330.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)

if (args.length < 1) return reply(`Escribe el texto\nEjemplo : ${prefix}readmore te amo/rdido un perro?`)
tels = body.slice(9)
var teks1 = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
samu330.sendMessage(from, hasil, text, {
  quoted: mek
})
break

//*********searching chord
case 'chord':
  if (args.length < 1) return reply('Ingresa lo que quieres buscar')
  if (!isRegister) return reply(mess.only.daftarB)
  
  samu330.updatePresence(from, Presence.composing)
  tels = body.slice(7)
  try {
  anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=${tKey}`, {
method: 'get'
  })
  reply(anu.result)
  
  } catch {
    reply(mess.ferr)
  }
  break



//*********mini map
case 'map':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Ingresa el nombre del área')
  daerah = body.slice(5)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply(mess.wait)
  hasil = await getBuffer(data.gambar)
  samu330.sendMessage(from, hasil, image, {
quoted: mek, caption: `Resultado *${daerah}i*`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
  })
  
  } catch {
    reply(mess.ferr)
  }
  break



//*********Cerpen
case 'cerpen':
if (!isRegister) return reply(mess.only.daftarB)
samu330.updatePresence(from, Presence.composing)

try {
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
hasil = `*CERPEN*\n‣ Nombre : *${data.result.title}*\n‣ Autor : *${data.result.pengarang}}*\n${data.result.cerpen}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//*********-kontak pemilik bot
case 'owner':
  case 'creator':
samu330.sendMessage(from, {
  displayname: "Neftali", vcard: vcard
}, MessageType.contact, {
  quoted: mek
})
break


//*********-Random ayat Alquran
case 'ngaji':
  if (!isRegister) return reply(mess.only.daftarB)
  
  try {
  anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {
method: 'get'
  })
  quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
  samu330.sendMessage(from, quran, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break





case 'itsme':
  if (!isRegister) return reply(mess.only.daftarB)
  try {
ppimg = await samu330.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nombre* : ${pushname}
  ‣ *Número* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  samu330.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
  
  break

case 'play':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Escribe el nombre')
  reply(mess.wait)
  play = body.slice(6)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Audio*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_El audio se esta mandando, si no llega descargue por el link_\n‣ *Link* : ${anu.result.url_audio}
  `
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  samu330.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  samu330.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, filename: `${anu.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//Arreglado por Samu330
case 'ytmp3':
  if (!isRegister) return reply(mess.only.daftarB)
  
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Formato de link incorrecto')
  try {
  sam = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=apivinz`)
  infomp3 = `*Audio!!!*\n‣ Nombre : ${sam.result.title}\n‣ Fuente: ${sam.result.source}\n‣ Tamaño: ${sam.result.size}\n‣ *Calidad* : ${anu.result.quality}\n\n_El audio se esta mandando espere, si no llega descargue por el link_\n‣ *link* : ${sam.result.link}`
  buffer = await getBuffer(sam.result.thumb)
  lagu = await getBuffer(sam.result.link)
  samu330.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  samu330.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, filename: `${sam.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'ytmp4':
  if (!isRegister) return reply(mess.only.daftarB)
  
  reply(mess.wait)
  play = body.slice(7)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=apivinz`)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Envia un link solo de youtube')
  if (anu.error) return reply(anu.error)
  infomp3 = `*Video*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_Se esta mandando el video, si no llega descargue por el link_\n‣ *link* : ${anu.result.url_video}`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_video)
  samu330.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  samu330.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', duration :-999999999999999, ptt:true, filename: `${anu.result.title}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


//*********-Youtube search
				case 'ytsearch':
					if (args.length < 1) return reply('Ingresa lo que quieres buscar')
					try {
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Titulo* : ${i.title}\n*Id* : ${i.id}\n*Publicado* : ${i.publishTime}\n*Duración* : ${i.duration}\n*Vistas* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					
					} catch {
					  reply(mess.ferr)
					}
					break

//*********download pinterest
case 'pin':
  if (!isRegister) return reply(mess.only.daftarB)
  
    if(!isUrl(args[0]) && !args[0].includes('pin')) return reply('Formato de link incorrecto')
  reply(mess.wait)
  play = body.slice(5)
  try {
  anu = await fetchJson(`https://scrap.terhambar.com/pin?url=${play}`)
  if (anu.error) return reply(anu.error)
  n = JSON.parse(JSON.stringify(anu.result.data));
  lagu = await getBuffer(anu.result)
  samu330.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


case 'ig':
  if (!isRegister) return reply(mess.only.daftarB)
  
  reply(mess.wait)
    if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply('Formato de link incorrecto')
  play = body.slice(4)
  try {
  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${lolKey}&url=${play}`)
  lagu = await getBuffer(anu.result)
  samu330.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `Imlexa.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break



case 'scdl':
    if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Manda el enlace de soundcloud')
  tels = body.slice(6)
  try {
  data = await fetchJson(`http://lolhuman.herokuapp.com/api/soundcloud?apikey=${lolKey}&url=${tels}`, {
method: 'get'
  })
  lagu = await getBuffer(data.result)
  samu330.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${data.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'tik':
  if (args.length < 1) return reply('Ingresa el enlace')
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (!isUrl(args[0]) && !args[0].includes('vt.tiktok')) return reply(mess.error.Iv)
  try {
  anu = await fetchJson(`https://api.arugaz.my.id/api/media/tiktok?url=${args[0]}`, {
method: 'get'
  })
  if (anu.error) return reply(anu.error)
  teks = `*Nombre* : ${anu.result.nameInfo}\n*Caption* : ${anu.result.textInfo}\n\n_Enviando archivos, espere_`
  thumb = await getBuffer(anu.result.image)
  samu330.sendMessage(from, thumb, image, {
quoted: mek, caption: teks
  })
  buffer = await getBuffer(anu.result.mp4direct)
  samu330.sendMessage(from, buffer, video, {
mimetype: 'video/mp4', filename: `${anu.nameInfo}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

/*
				case 'tiktok':
				  case 'tik':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					samu330.sendMessage(from, buffer, video, {quoted: mek})
					break
*/

//*********block user
				case 'blocklist':
					teks = 'Lista de bloqueados por el bot :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					samu330.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break

//*********read text on image
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await samu330.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto')
					}
					break

				case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await samu330.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('By-Sam-y-Perry')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									samu330.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                                                                        reply(mess.success)
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await samu330.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Error al convertir el ${tipe} a stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('StMv-By:-Samu-y-Perry')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									samu330.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                                                                        reply(mess.success)
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await samu330.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Error, intenté de nuevo más tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('StNoBg-By:-Sam-y-Perry')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									samu330.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envía una foto xon el comando: ${prefix}sticker o etiqueta una imagen, video o gif ya enviados`)
					}
					break

//********* temp
			case 'gets':
			  
				var itsme = `0@s.whatsapp.net`
				var split = `🐬NyanBot`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(6)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				samu330.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('El paquete no esta registrado')
				}
				break
			
			
			  case 'getstik':
				var itsme = `0@s.whatsapp.net`
				var split = `🏆Sticker🏆`
				var selepbot = {
					contextInfo: {
						participant: itsme, forwardingScore: 9999, isForwarded: true,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				samu330.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('El paquete no esta registrado')
				}
				break
			
			
			
			case 'liststik':
				teks = '*Lista de stickers :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*\nUsa el comando\n*${prefix}getstik (nombre del pack)*\npara seleccionar sticker`
				samu330.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				break
			
			case 'totaluser':
				teks = '*Total usuarios :*\n\n'
				for (let i of _registered) {
					teks += `[${id.toString()}]\`\`\` @${i.split('@')[0]}`
				}
				teks += `\n*Total : ${_registered.length}`
				samu330.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": _registered} })
				break

			case 'addstik':
				if (!isQuotedSticker) return reply('Respon un sticker')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(9)
				if (!svst) return reply('Nombre del sticker?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await samu330.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				samu330.sendMessage(from, `Sticker añadido con exito\ncompruebalo con ${prefix}liststik`, MessageType.text, { quoted: mek })
				break

			case 'addvn':
				if (!isQuotedAudio) return reply('Responde un audio')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(7)
				if (!svst) return reply('Nombre del audio?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await samu330.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				samu330.sendMessage(from, `Audio añadido con exito\ncompruebalo con ${prefix}listvn`, MessageType.text, { quoted: mek })
				break

			case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				samu330.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
				} catch {
				  reply('No esta registrado ese paquete')
				}
				break

			case 'listvn':
			case 'vnlist':
				teks = '*Lista Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*\nUsa el comando\n*${prefix}getvn (nombre del pack)*\n`
				samu330.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
				break

			case 'addimg':
				if (!isQuotedImage) return reply('Responde una imagen')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(8)
				if (!svst) return reply('Nombre de la imagen')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await samu330.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				samu330.sendMessage(from, `Video añadido\ncompruebalo con: *${prefix}listimage*`, MessageType.text, { quoted: mek })
				break

			case 'getimg':
				var itsme = `0@s.whatsapp.net`
				var split = `✅Imagen✅`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				samu330.sendMessage(from, buffer, image, { quoted: mek, caption: `Resultados : ${namastc}.jpeg` }, selepbot)
				} catch {
				  reply('Paquete no registrado')
				}
				break
				
			case 'listimg':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*\nUsa el comando\n*${prefix}getimg (nombre del pack)*\n`
				samu330.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
				break

			case 'addvid':
			  if (!isOwner) return reply(mess.only.ownerB)
				if (!isQuotedVideo) return reply('Responde un video')
				svst = body.slice(8)
				if (!svst) return reply('Nombre del video')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await samu330.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/vid.json', JSON.stringify(videonye))
				samu330.sendMessage(from, `Video añadido con exito\ncompruebalo con *${prefix}listvid*`, MessageType.text, { quoted: mek })
				break

			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				samu330.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
				} catch {
				  reply('Paquete no registrado')
				}
				break

			case 'listvid':
				teks = '*Lista de videos :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*\nUsa el comando\n*${prefix}getvid (nombre del pack)*\n`
				samu330.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
				break

					
			case 'antibad':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (args.length < 1) return reply('Escribe *1* para activar')
                                        if (args[0] === '1') {
                                                if (isBadWord) return reply('*Ya está activo*')
                 	                        badword.push(from)
                 	                        fs.writeFileSync('./data/badword.json', JSON.stringify(badword))
                  	                        reply(`*[ Activado ] *`)
                                        } else if (args[0] === '0') {
                  	                        badword.splice(from, 1)
                 	                        fs.writeFileSync('./data/badword.json', JSON.stringify(badword))
                 	                        reply(`Desactivado`)
             	                        } else {
                 	                        reply('1 para activar, 0 para desactivar')
                	                }
                                        break
                                case 'addbad':
                                
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (args.length < 1) return reply( `Escribe ${prefix}addbad [palabra]. Ejemplo: ${prefix}addbad pto`)
                                        const bw = body.slice(12)
                                        bad.push(bw)
                                        fs.writeFileSync('./data/bad.json', JSON.stringify(bad))
                                        reply('Se añadio con exito')
                                        break
                                case 'delbad':
                                
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (args.length < 1) return reply( `Escribe ${prefix}delbad [palabra]. Ejemplo: ${prefix}delbad bego`)
                                        let dbw = body.slice(12)
                                        bad.splice(dbw)
                                        fs.writeFileSync('./data/bad.json', JSON.stringify(bad))
                                        reply('Se quito con exito')
                                        break 
                                case 'listbad':
                                
                                        let lbw = `Lista de BAD WORD\nTotal : ${bad.length}\n`
                                        for (let i of bad) {
                                                lbw += `◦ ${i.replace(bad)}\n`
                                        }
                                        await reply(lbw)
                                        break 

				case 'antilink':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('escriba *1* para activar')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya esta activo')
						antilink.push(from)
						fs.writeFileSync('./data/antilink.json', JSON.stringify(antilink))
						reply('*Anti-link activado ✔️*')
						samu330.sendMessage(from,`Los miembros que manden un link serán eliminados, *OJO* _CULAQUIER TIPO DE LINK_`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('Se desactivo el anti-link')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./data/antilink.json', JSON.stringify(antilink))
						reply('Anti-link desactivado ✔️')
					} else {
						reply('*1 para activar, 0 para desactivar*')
					}
					break
					

//*********stiker to video
  case 'tovid':
samu330.updatePresence(from,
  Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!isQuotedSticker) return reply('Responde un sticker')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await samu330.downloadAndSaveMediaMessage(anumedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
  fs.unlinkSync(anum)
  if (err) return reply('Error al convertir el sticker en vídeo')
  buffer = fs.readFileSync(ran)
  samu330.sendMessage(from, buffer, video, {
quoted: mek, caption: ':D'
  })
  fs.unlinkSync(ran)
})
break

//*********mp4 to mp3
  case 'tomp3':
samu330.updatePresence(from,
  Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!isQuotedVideo) return reply('Responde a un video')
reply(mess.wait)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await samu330.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
  fs.unlinkSync(duh)
  if (err) return reply('No se pudo convertir a mp3')
  buffer = fs.readFileSync(ran)
  samu330.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', quoted: mek
  })
  fs.unlinkSync(ran)
})
break

 
//*********google voice
				case 'tts':
					samu330.updatePresence(from, Presence.composing)
					if (args.length < 1) return samu330.sendMessage(from, 'Escribe el código', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return samu330.sendMessage(from, 'Escribe el texto', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Escribe correctamente el texto')
					: gtts.save(ranm, dtt, function() {
						samu330.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', duration :-999999999999999, ptt:true})
						fs.unlinkSync(ranm)
					})
					break

//********* Setting prefix
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
				  prefix = args[0]
					samu.prefix = prefix
					fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))
					reply(`Prefijo cambiado : ${prefix}`)
					break


case 'block':
  samu330.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  samu330.blockUser (`${body.slice(8)}@c.us`, "add")
  samu330.sendMessage(from, `Usuario bloqueado`, text, {
quoted: mek
  })
  break

//membuka blokir
case 'unblock':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  samu330.blockUser (`${body.slice(9)}@c.us`, "remove")
  samu330.sendMessage(from, `Usuario desbloqueado`, text)
  break


//*********

				case 'tiktokstalk':
					try {
						if (args.length < 1) return samu330.sendMessage(from, 'Escribe el nombre de usuario', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						samu330.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Nombre de usuario invalido')
					}
					break
			
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Escribe bien el comando')
					if (!tipelist.includes(args[0])) return reply('Escribe desktop|tablet|mobile')
					if (args.length < 2) return reply('Escribe la url')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					samu330.sendMessage(from, buff, image, {quoted: mek})
					break

				//Reparado por Samu330

				case 'ttp':
					if (args.length < 1) return reply('Y el texto?')
                                        if (!isRegister) return reply(mess.only.daftarB)
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://api.xteam.xyz/ttp?file&text=${teks}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						samu330.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					//By Samu330
				case 'attp':
					if (args.length < 1) return reply('Y el texto?')
                                        if (!isRegister) return reply(mess.only.daftarB)
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://api.xteam.xyz/attp?file&text=${teks}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						samu330.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break

//*********-Tagall member
				case 'tagall':
					case 'all':
samu330.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
  teks += `┃ @${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
}
mentions('〘  *TAGALL* 〙\n┏━━━━━━━━━━━━━━━━━━━━\n┠⊷'+teks+'┃━━━━━━━━━━━━━━━━━━━━\n┃────✅Samu330🏆────\n┗━━━━━━━━━━━━━━━━━━━━', members_id, true)
break


//clear all chat
				case 'clearall':
					if (!isOwner) return reply('Estas seguro?')
					anu = await samu330.chats.all()
					samu330.setMaxListeners(25)
					for (let _ of anu) {
						samu330.deleteChat(_.jid)
					}
					reply('Se borraron todos los mensajes :)')
					break
				case 'bc':
					if (!isOwner) return reply('Okay')
					if (args.length < 1) return reply('.......')
					anu = await samu330.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await samu330.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							samu330.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*`})
						}
						reply('Anuncio dado')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*${body.slice(4)}*`)
						}
						reply('Anuncio dado')
					}
					break

//*********menaikan jabatan
      case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Con exito \n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						samu330.groupRemove(from, mentioned)
					} else {
						mentions(`Ahora @${mentioned[0].split('@')[0]} es admin del grupo!`, mentioned, true)
						samu330.groupMakeAdmin(from, mentioned)
					}
					break

  //ganti nama grup
  case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
samu330.groupUpdateSubject(idgrup, `${body.slice(9)}`)
samu330.sendMessage(from, 'Cambiar nombre del grupo', text, {
  quoted: mek
})
break

  //ganti desk
  case 'setdesk':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
samu330.groupUpdateDescription(from, `${body.slice(9)}`)
samu330.sendMessage(from, 'Cambiar descripción del grupo', text, {
  quoted: mek
})
break

//*********menurunkan jabatan
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Admin quitado con exito\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						samu330.groupRemove(from, mentioned)
					} else {
						mentions(`Un admi menos @${mentioned[0].split('@')[0]} por gei!`, mentioned, true)
						samu330.groupDemoteAdmin(from, mentioned)
					}
					break

//*********menambah member
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Ingresa el número')
					if (args[0].startsWith('08')) return reply('Usa el código de país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						samu330.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar al miembro probablemente este bloqueado por el bot')
					}
					break

//*********mengeluarkan member
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						samu330.groupRemove(from, mentioned)
					} else {
						mentions(`Se elimino a : @${mentioned[0].split('@')[0]}`, mentioned, true)
						samu330.groupRemove(from, mentioned)
					}
					break

//*********list admin grup
				case 'listadmins':
				  case 'listadmin':
				    case 'adminlist':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de administradores de *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break

//*********ganti pp bot
case 'setppbot':
  samu330.updatePresence(from, Presence.composing)
  if (!isOwner) return reply(mess.only.ownerB)
  const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek
  const cuk = await samu330.downloadAndSaveMediaMessage(botpp)
  await samu330.updateProfilePicture(botNumber, cuk)
  reply('Gracias por el nuevo perfil')
  break

//*********Mengambil link grup
    case 'linkgroup':
    case 'linkgc':
        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins) return reply(mess.only.admin)
        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        linkgc = await samu330.groupInviteCode(from)
        reply('https://chat.whatsapp.com/'+linkgc)
                    break

//*********Mengeluarkan bot
      case 'leave':
      if (!isGroup) return reply(mess.only.group)
      if (isGroupAdmins || isOwner) {
      samu330.groupLeave(from)
                    } else {
      reply(mess.only.admin)
                    }
                    break

//*********Convert stiker to image
				case 'toimg':
					if (!isQuotedSticker) return reply('Responde sticker')
					if (!isRegister) return reply(mess.only.daftarB)
					reply(mess.wait)
					imgmed = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					medimg = await samu330.downloadAndSaveMediaMessage(imgmed)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${medimg} ${ran}`, (err) => {
						fs.unlinkSync(medimg)
						if (err) return reply('No se pudo hacer :(')
						buffer = fs.readFileSync(ran)
						samu330.sendMessage(from, buffer, image, {quoted: mek, caption: 'NyanBot', key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "❣Sam y Perry❣", "jpegThumbnail": fs.readFileSync(`./NyanBot.jpg`)}}       })
						fs.unlinkSync(ran)
					})
					break




//*********Simsimi talk
				case 'simi':
					if (args.length < 1) return reply(`Hola ${pushname}`)
					teks = body.slice(6)
					try { 
					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=${teks}&APIKEY=${xKey}`, {method: 'get'})
					if (anu.error) return reply('Escribe el texto bien')
					reply(anu.jawaban)
					} catch {
					  reply(mess.ferr)
					}
					break

case 'bot':
					if (args.length < 1) return reply(`Bot ${pushname}`)
					teks = body.slice(5)
					try { 
					anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
					if (anu.error) return reply('No lo se')
					reply(anu.jawaban)
					} catch {
					  reply(mess.ferr)
					}
					break

//*********Verifkasi
  case 'reg':
if (isRegister) return reply('Tu cuenta ya estaba verificada')
const namaUser = `${pushname}`
const umurUser = `${sender}`
const serialUser = createSerial(20)
veri = sender
if (isGroup) {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  hasil = `〘  *Vericación* 〙
Código : *${serialUser}*

◦ *Nombre* : *${namaUser}*
◦ *Número* : *${sender.split("@")[0]}*
`
reply(hasil)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
} else {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  hasil = `〘  *Verificación* 〙
Código : *${serialUser}*

◦ *Nombre* : *${namaUser}*
◦ *Número* : *${sender.split("@")[0]}*
`
reply(hasil)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
}
tm = `verificación completa usa ${prefix}Menu para ver la lista`
reply(tm)
break

//*********
case 'closegc':
  samu330.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  var nomor = mek.participant
  const close = {
text: `Grupo cerrado por @${nomor.split("@s.whatsapp.net")[0]}\n ahora solo los admins pueden escribir`,
contextInfo: {
  mentionedJid: [nomor]
}
  }
  samu330.groupSettingChange (from, GroupSettingChange.messageSend, true);
  reply(close)
  break

//*********
case 'opengc':
  case 'bukagc':
samu330.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
  text: `Grupo abierto por @${sender.split("@")[0]}\n ahora todos pueden hablar`,
  contextInfo: {
mentionedJid: [sender]
  }
}
samu330.groupSettingChange (from, GroupSettingChange.messageSend, false)
samu330.sendMessage(from, open, text, {
  quoted: mek
})
break

//*********-mengahapus pesan bot
case 'delete':
  case 'del':
if (!isGroup)return reply(mess.only.group)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroupAdmins)return reply(mess.only.admin)
try {
samu330.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Solo puedo borrar mensajes míos')
}
break

//*********ganteng cekkkk
  case 'gantengcek':
if (args.length < 1) return reply('Ingresa el nombre')
ganteng = body.slice(12)
const gan = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const teng = gan[Math.floor(Math.random() * gan.length)]
samu330.sendMessage(from, 'Gantengcek : *'+ganteng+'*\n\nPorcentaje : '+ teng+'%', text, {
  quoted: mek
})
break

//*********Cantik cekk
  case 'cantikcek':
if (args.length < 1) return reply('Escribe el nombre')
cantik = body.slice(12)
const can = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const tik = can[Math.floor(Math.random() * can.length)]
samu330.sendMessage(from, 'Cantikcek *'+cantik+'*\n\nPorcentaje : '+ tik+'%', text, {
  quoted: mek
})
break
//update creado 100% por Samu330
				case 'update':
					if (!isOwner) return reply(mess.only.ownerB)
					let handler = async (m, { conn, text }) => {
  					if (global.conn.user.jid == conn.user.jid) {
   					let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
    					require('fs').readdirSync('samu.js').map(v=>global.reload('', v))
    					reply(stdout.toString())
  						}
					}
					break

				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya esta activo')
						welkom.push(from)
						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						reply('Se activo con exito')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						reply('Se desactivo con exito')
					} else {
						reply('1 para activar, 0 desactivar')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Tag target')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await samu330.getProfilePicture(id)
						buffer = await getBuffer(pp)
						samu330.updateProfilePicture(botNumber, buffer)
						mentions(`La foto de perfil se actualizó correctamente usando la foto de perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Error')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await samu330.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							samu330.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('No se encontro')
					}
					break


				default:
				if (body.startsWith(`${prefix}${command}`)) {
  reply(`        ────────────────\nHola *${pushname}* !!!\nEse comando no esta en mi lista : *${prefix}${command}*\nUsa esto para ver el menu: *${prefix}Menu*\n        ────────────────`)
				}
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'green'))
		}
	})
}
starts()
