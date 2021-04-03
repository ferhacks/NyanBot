const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const util = require('util')
const fetch = require('node-fetch')
const os = require('os')
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const cd = 4.32e+7
const imgbb = require('imgbb-uploader')
const { ind } = require('./language')


//:::::LOAD SETTINGS::::::::
const settingan = JSON.parse(fs.readFileSync('./samu/config.json'))
const {
	limitawal,
	memberlimit,
	cr,
	BotPrefix,
	owner
} = settingan

//::::::::::::::::::::::::::::::::::::::
const ownerNumber = `${owner}@s.whatsapp.net`
prefix = BotPrefix
blocked = []   

//:::::FUNCIONES Y NIVEL::::::::::::::::
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

//:::::::REGISTRO::::::::::::::::::::::
const {
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser
} = require('./lib/register.js')


const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/bot/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}


const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	limitAdd
} = require('./lib/limitatm.js')


const {
	addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition,
    afkDel
} = require('./lib/afk.js')


const {
	cmdadd
} = require('./lib/totalcmd.js')
	
//::::::::V-CARD:::::::::::::::::::::
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:🐬NyanBot🐬\n' 
            + `ORG: 👑Samu330👑;\n`
            + `TEL;type=CELL;type=VOICE;waid=${owner}:${PhoneNumber('+' + owner).getNumber('international')}\n` 
            + 'END:VCARD' 

       
//::::::::::::FILES:::::::::::::::::
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))

//:::::::FUNCIONES::::::::::::
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}
//:::::::::::STIKERS::::::::::::
function addMetadata(packname, author) {	
	if (!packname) packname = 'NyanBot'; if (!author) author = 'Samu330';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
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

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 


//:::::::INICIANDO BOT::::::::::::
const samu = new WAConnection()
samu.logger.level = 'warn'
samu.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('!','red'),color(']','white'),color('qr already scan.subscribe','white'),color('YOU','red'),color('TUBE','white'),color('Samu330','cyan'))
})

samu.on('credentials-updated', () => {
	const authInfo = samu.base64EncodedAuthInfo()
   console.log(color('credentials updated!','red'))
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && samu.loadAuthInfo('./session.json')
samu.on('connecting', () => {
	console.log(color('Bot Conecting...','red'))
})
samu.on('open', () => {
	console.log(color('Bot Conected...','green'))
})
samu.connect({timeoutMs: 30*1000})

//:::::::BIENVENIDA AALOS GRUPOS:::::::::::::::
samu.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await samu.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await samu.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hola @${num.split('@')[0]}\nBienvenido a *${mdata.subject}* Pasatela bien:D`
				let buff = await getBuffer(ppimg)
				samu.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await samu.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Adios @${num.split('@')[0]} te cuidas, aqui nadie te extrañara:3`
				let buff = await getBuffer(ppimg)
				samu.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	
	//:::::::ACTUALIZAR::::::::::::::::
	samu.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	//::::::::ACTUALIZAR MENSAJES:::::
	samu.on('chat-update', async (mek) => {
		try {
             if (!mek.hasNewMessage) return
            mek = JSON.parse(JSON.stringify(mek)).messages[0]
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
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = samu.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = samu.contacts[sender] != undefined ? samu.contacts[sender].vname || samu.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await samu.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            //::::::::::::::COMANDOS::::::::::::::::
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBadWord = isGroup ? badword.includes(from) : false
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPrem = prem.includes(sender) || isOwner
			const isAfkOn = checkAfkUser(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				samu.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				samu.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? samu.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : samu.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    samu.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			samu.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			samu.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}
	        //::::::::::::::::::::::::::::::::::::::::::::::::::::::


				
			var per = '*[░░░░░░░░░] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[▓░░░░░░░░░] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[▓▓░░░░░░░░] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[▓▓▓░░░░░░░] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[▓▓▓░░░░░░░] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[▓▓▓▓▓░░░░░] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[▓▓▓▓▓▓░░░░] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[▓▓▓▓▓▓▓░░░] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[▓▓▓▓▓▓▓▓░░] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[▓▓▓▓▓▓▓▓▓░] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[▓▓▓▓▓▓▓▓▓▓] ${resl}%*`
			} 
				
				
			//auto Expired
			expiredCheck()
			
			//function rank 
			const levelRole = getLevelingLevel(sender)
   	     var role = 'Aprendiz'
   	     if (levelRole <= 3) {
   	         role = 'novato'
   	     } else if (levelRole <= 5) {
   	         role = 'private'
   	     } else if (levelRole <= 7) {
   	         role = 'corporal'
   	     } else if (levelRole <= 8) {
   	         role = 'Sargento'
   	     } else if (levelRole <= 9) {
   	         role = 'sargento I'
   	     } else if (levelRole <= 10) {
   	         role = 'sargento II'
   	     } else if (levelRole <= 11) {
   	         role = 'sargento II'
   	     } else if (levelRole <= 12) {
   	         role = 'Sargento de primera clase I'
   	     } else if (levelRole <= 13) {
   	         role = 'Sargento de primera clase II'
   	     } else if (levelRole <= 14) {
   	         role = 'Sargento de primera clases III'
   	     } else if (levelRole <= 14) {
   	         role = 'Sargento de primera clases IV'
   	     } else if (levelRole <= 15) {
   	         role = 'Sargento maestro I'
   	     } else if (levelRole <= 16) {
   	         role = 'Sargento maestro II'
   	     } else if (levelRole <= 17) {
   	         role = 'Sargento maestro III'
   	     } else if (levelRole <= 18) {
   	         role = 'Sargento maestro IV'
   	     } else if (levelRole <= 19) {
   	         role = 'Sargento maestro V'
   	     } else if (levelRole <= 20) {
   	         role = '2nd Lt I'
   	     } else if (levelRole <= 21) {
   	         role = '2nd Lt II'
   	     } else if (levelRole <= 22) {
   	         role = '2nd Lt III'
   	     } else if (levelRole <= 23) {
   	         role = '2nd Lt IV'
   	     }
   
			var premi = '*X*'
			if (isPrem) {
				premi = '*✓*'
			} 
			if (isOwner) {
				premi = '*owner*'
			}
				
				
	        //:::::::::FUNCIONES DE NIVEL::::::::::
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //::::::::::::LIMIT CHECKER:::::::::::::::::
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return samu.sendMessage(from,`Lo siento, pero es necesario limites para usar este comando.\n\n_Nota: Puedes reclamar tu limite gratias con el comando: *${prefix}buylimit* para subir de nivel_`, text,{ quoted: mek})
                            samu.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
		
			//::::::FIN DE LIMITES:::::::
            const isLimit = (sender) =>{ 
          	if (isOwner ) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    samu.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   //autoleave, si el grupo no cuenta con el limite de personas requeridas:3
     	       if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`Lo siento, pero este grupo no cuenta con los miembros suficientes para usar a NyanBot, minimo deben ser ${memberlimit}`)
						setTimeout( () => {
 	                           samu.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								samu.updatePresence(from, Presence.composing)
								reply("1 segundo")
							}, 4000)
								setTimeout( () => {
								samu.updatePresence(from, Presence.composing)
								reply("2 segundos")
							}, 3000)
								setTimeout( () => {
								samu.updatePresence(from, Presence.composing)
								reply("3 segundos")
							}, 2000)
								setTimeout( () => {
								samu.updatePresence(from, Presence.composing)
								reply("4 segundos")
							}, 1000)
								setTimeout( () => {
								samu.updatePresence(from, Presence.composing)
								reply("5 segundos")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 		//Malas palabras xd, puedes elegir entre 'groupLeave' o 'groupRemove'
 	   	if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    try { 
                        reply("HEI NO SE PERMITEN INSULTOS!! 😠")
                        setTimeout( () => {
 	                           samu.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								samu.updatePresence(from, Presence.composing)
								reply("1 segundo")
							}, 4000)
								setTimeout( () => {
								samu.updatePresence(from, Presence.composing)
								reply("2 segundos")
							}, 3000)
								setTimeout( () => {
								samu.updatePresence(from, Presence.composing)
								reply("3 segundos")
							}, 2000)
								setTimeout( () => {
								samu.updatePresence(from, Presence.composing)
								reply("5 segundo")
							}, 1000)
								setTimeout( () => {
								samu.updatePresence(from, Presence.composing)
								reply("*「 ❌ANTI BADWORD❌ 」*\nEliminado por p*to!")
							}, 0)
                        } catch { samu.sendMessage(from, `mmmm Afortunadamente no soy administrador, si lo fuera... *kick*!`, text , {quoted : mek}) }
                } else {
                    return reply( "Por favor, cuida de Mi 😇")
                }
            }
        }
 
				//function antilink 
				if (messagesC.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te perdono, solo por que eres un Administrador, si no lo fueras *TE ELIMINO*😙')
					samu.updatePresence(from, Presence.composing)
					if (messagesC.includes("#unadmin")) return reply("#unadmin recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Grupo de Enlaces Detectado lo siento ${sender.split("@")[0]} usted será expulsado del grupo en 5 segundos`)
						setTimeout( () => {
						samu.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						samu.updatePresence(from, Presence.composing)
						reply("1 segundo")
					}, 4000)
						setTimeout( () => {
						samu.updatePresence(from, Presence.composing)
						reply("2 segundos")
					}, 3000)
						setTimeout( () => {
						samu.updatePresence(from, Presence.composing)
						reply("3 segundos")
					}, 2000)
						setTimeout( () => {
						samu.updatePresence(from, Presence.composing)
						reply("4 segundos")
					}, 1000)
						setTimeout( () => {
						samu.updatePresence(from, Presence.composing)
						reply("5 segundos")
					}, 0)
				}
 	       
 	     
 	          //::::::::MONEY:::::::::::
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 10) + 290
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        }
	
			 //feature total command
			 if (isCmd) cmdadd()

			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;36m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;33m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;36m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;33m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) { 
				//comandos
				case 'xd':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=apivinz`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soal)
					tebak = `➸ Responder : *${anu.result.jawaban}*`
					setTimeout( () => {
					samu.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					samu.sendMessage(from, '_10 Segundos..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					samu.sendMessage(from, '_20 Segundos..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					samu.sendMessage(from, '_30 Segundos..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					samu.sendMessage(from, ngebuff, image, { caption: '_Adivina bro!!! no puedo contestar donaciones:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
				break
				case 'meme':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					nganu = await fetchJson(`https://vinz.zeks.xyz/api/meme`)
					buper = await getBuffer(nganu.result)
					samu.sendMessage(from, buper, image, {quoted: mek})
					await limitAdd(sender)
				break		
				case 'ttp':
				if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply('Escribe el texto')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://api.xteam.xyz/ttp?file&text=${teks}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						exec(`webpmux -set exif ${addMetadata('TtpSamu330', 'NyanBot')} ${rano} -o ${rano}`, async (error) => {
							if (error) return reply(mess.error.stick)
							samu.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
					})
					
					break
		case 'apk':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '...............\n'
				for (let i of data.result) {
					teks += `*🌐Nombre del APK* : ${i.title}\n*💻Link* : ${i.url}\n*🐬Rating* : ${i.rating}\n...............\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'pornhub':
                	if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(9)
					var porn = gh.split(" ")[0];
					var hub = gh.split(" ")[1];
					if (args.length < 1) return reply(`「❗」Ejemplo : ${prefix}pornhub Samu 330`)
					reply(ind.wait())
					alan = await getBuffer(`https://vinz.zeks.xyz/api/pornhub?text1=${porn}&text2=${hub}`)
					samu.sendMessage(from, alan, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'light':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (args.length < 1) return reply(ind.wrongf())
					ligh = body.slice(11)
					if (ligh.length > 10) return reply('nmms🙄 maximo 9 caracteres')
					reply(ind.wait())
					lawak = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${ligh}&apikey=apivinz`)
			    	samu.sendMessage(from, lawak, image, {quoted: mek})
			   	 await limitAdd(sender)
		  	  break
					
				case 'sombra':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (args.length < 1) return reply(ind.wrongf())
					sam = body.slice(7)
					if (sam.length > 6) return reply('nmms🙄 maximo 9 caracteres')
					reply(ind.wait())
					lawak = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sam}`)
			    	samu.sendMessage(from, lawak, image, {quoted: mek})
			   	 await limitAdd(sender)
		  	  break
			case '8bit':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(6)
					var samu = gh.split(" ")[0];
					var xd = gh.split(" ")[1];
					if (args.length < 1) return reply(`「❗」Ejemplo : ${prefix}glitchtext Samu 330`)
					reply(ind.wait())
					buffer = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${samu}&text2=${xd}`)
					samu.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
                case 'glitch':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(12)
					var gli = gh.split(" ")[0];
					var tch = gh.split(" ")[1];
					if (args.length < 1) return reply(`「❗」Ejemplo : ${prefix}glitchtext Samu 330`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					samu.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'tarea':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`🤔y el texto? Ejemplo: ${prefix}tarea Querido diario...`)
					nul = body.slice(7)
					reply('「❗」Wait:D')
					tak = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nul}&apikey=apivinz`)
					samu.sendMessage(from, tak, image, {quoted: mek, caption: '*Es mejor que lo escribas tú mismo, che fojo🤣*'})
					await limitAdd(sender)			
				//premiom
				case 'checkprem':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*「 PREMIUM EXPIRED 」*\n\n✅ *ID*: ${sender.split('@')[0]}\n✅ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
				break
				
				//qr 
				case 'qr':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return samu.sendMessage(from, 'AGREGE UNA URL O UN TEXTO PARA PODER HACER EL CODIGO QR', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					samu.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
			case 'lirik':
  				if (!isRegistered) return reply(ind.noregis())
  				if (isLimit(sender)) return reply(ind.limitend(pusname))
  				tels = body.slice(7)
  				try {
  				anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${tels}`, {
				method: 'get'
  				})
  				reply(anu.result.lirik)
  
  				} catch {
    				reply(`ERROR`)
 				 }
  			break
                case 'chord':
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=BotWeA`)
                samu.sendMessage(from, anu.result, text, {quoted:mek})
                break
				case 'modd':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(6)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*✅Nombre: ${data.result[0].title}\n*🙍🏻‍♂️publisher*: ${hepi.publisher}\n*📲mod info:* ${hepi.mod_info}\n*📁Tamaño*: ${hepi.size}\n*♻latest version*: ${hepi.latest_version}\n*🧬Genero*: ${hepi.genre}\n*✏link:* ${hepi.link}\n*🏆download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			samu.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Name*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			samu.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				//freerestapi 
				case 'igstalk':
                   if (!isRegistered) return reply(ind.noregis())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `✏Fullname : ${hmm.data.fullname}\n📲Seguidores : ${hmm.data.follower}\n🏆Seguidos : ${hmm.data.following}\n🗒Privado : ${hmm.data.private}\n✅Verified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    samu.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
					break 
				//daftar 
				case 'reg':
				case 'registrar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('😑La edad debe ser un número!!')
                if (namaUser.length >= 30) return reply(`¿por qué su nombre es tan largo? es un nombre o un tren🙄`)
                if (umurUser > 40) return reply(`su edad es demasiada xd, máximo 40 años`)
                if (umurUser < 12) return reply(`es demasiado niño jajaja, de seguro juegas freefire JAJAJA.... mínimo 12 años🤣`)
                try {
					ppimg = await samu.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await samu.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'red'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'blue'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await samu.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'red'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'blue'))
                }
				break
				//terhambar 
				case 'maker':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split(" ")[0];
					var wm = gh.split(" ")[1];
					const pref = `Uso: \n${prefix}maker Texto Marca de agua\n\n✏Ejemplo :\n${prefix}maker NyanBot Samu330`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					samu.sendMessage(from, buffer, image, {caption: '📁', quoted: mek})
					await limitAdd(sender)
					break
				//fadli 
				case 'imagen':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					samu.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(7)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					samu.sendMessage(from, pok, image, { quoted: mek, caption: `*🧬Samu330*`})
					await limitAdd(sender)
					break 
				case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					samu.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					samu.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				//jojo 
				case 'stickerhide':
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						samu.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'emoji':
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${args[0]}&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				samu.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
				case 'tiktok':
				if (!isPrem) return reply(ind.premon(pushname))
				anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args[0]}`, {method : 'get' })
				if (anu.error) return reply(anu.error)
					teks = `*De* : ${anu.result.from}\n*Título* : ${anu.result.title}\n*Subida* : ${anu.result.uploaded}`
					thumb = await getBuffer(anu.result.thumb)
					samu.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.url)
					samu.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				case 'quotes':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break		
				case 'info':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Ingresar número\nEjemplo : ${prefix}info 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(5)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
				break 
				case 'beritahoax':
                     if (!isRegistered) return reply(ind.noregis())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    samu.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Foto* : ${i.image}\n*Titulo* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
				case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Y la URL? che morro meko')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${args[0]}&apikey=apivinz`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*✅Title* : ${anu.title}\n*📁Size* : ${anu.size}\n*✏url* ${anu.url_video}`
					thumb = await getBuffer(anu.thumbnail)
					samu.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					samu.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
				break 
				case 'ytmp3':
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isPrem) return reply(ind.premon(pushname))
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Y la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${args[0]}&apikey=apivinz`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*✅Title* : ${anu.title}\n*📁Size* : ${anu.size}\n*✏url* ${anu.url_audio}`
					thumb = await getBuffer(anu.thumbnail)
					samu.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					samu.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('el texto donde esta?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return samu.sendMessage(from, '10 caracteres maximo', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    samu.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
				break
			    case 'fototiktok':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
				break
				//mhazria  
				case 'ssweb':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Y el url donde esta')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					samu.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'map':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               	 anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
               	 buffer = await getBuffer(anu.gambar)
              	  samu.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
				break
                case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('¿Qué quieres buscar?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
				break
				//auto respond 
				case 'ping':
          		if (!isRegistered) return reply(ind.noregis())
           		 await samu.sendMessage(from, `Pong xd!!!!\n🚄Speed: ${processTime(time, moment())} _Second_`)
					break
               case 'help': 
				case 'menu':
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					//const anos = samu.user.os_version
					//const merek = clien
					await costum(ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, samu, process,kyun), text, tescuk, cr)
					break
				case 'info':
					me = samu.user
					uptime = process.uptime()
					teks = `*✏Nombre del bot* : ${me.name}\n*🙍🏻‍♂️Dueño* : *👑𝗦𝗮𝗺𝘂𝟯𝟯𝟬☪*\n*💻AUTHOR* : Samu330\n*📲Numero del Bot* : @${me.jid.split('@')[0]}\n*🗒Prefijo* : ◜${prefix}◞\n*🔐Contactos bloqueados* : ${blocked.length}\n*🕐Esta activo desde hace* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					samu.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					samu.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'donasi':
				case 'donate':
				if (!isRegistered) return reply(ind.noregis())
					samu.sendMessage(from, donasi(), text)
					break
				case 'admin':
         	   case 'owner':
         	   case 'creator':
                  samu.sendMessage(from, {displayname: "Samu330", vcard: vcard}, MessageType.contact, { quoted: mek})
                  samu.sendMessage(from, '*El número de mi dueño >_<, no spam o te bloqueo*',MessageType.text, { quoted: mek} )
					break    
				case 'leaderboard':
				case 'lb':
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD MONEY* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Money*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimo ${len} usuarios para poder acceder a la base de datos`)
                }
				break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break 
				case 'giftlimit': 
				if (!isOwner,!isPrem) return reply(ind.premon(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`límite mínimo de regalo es 1`)
                if (isNaN(jmla)) return reply(`El límite debe ser un número`)
                if (!nomerr) return reply(`formato equivocado\nintroducir los parámetros correctos\nEjemplo : ${prefix}giftlimit @+529984907794 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `Limites de regalo limita con éxito: ${createSerial(8)} En ${moment().format('DD/MM/YY HH:mm:ss')}
*「 LÍMITE DE CUOTA DE REGALO 」*
• User : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Lo siento, número ${nomerr} no aparece en la base de datos!`)
                        }
                break
				case 'premlist':
	            case 'listprem':
	                if (!isRegistered) return reply( ind.noregis())
	                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	                let nomorList = 0
	                const deret = getAllPremiumUser()
	                const arrayPremi = []
	                for (let i = 0; i < deret.length; i++) {
	                    const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	                    arrayPremi.push(getAllPremiumUser()[i])
	                    nomorList++
	                    listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
	                }
	                await reply(listPremi)
	            break
				case 'mutual':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Este comando no se puede utilizar en grupos!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Este comando no se puede utilizar en grupos!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('el monto debe ser un número!!')
                if (jumblah < 100 ) return reply(`transferencia mínima 100`)
                if (checkATMuser(sender) < jumblah) return reply(`Su dinero no es suficiente para hacer una transferencia`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('14694222222@s.whatsapp.net', fee)
                reply(`*「 Hecho 」*\n\nListo:3\nDe : +${sender.split("@")[0]}\nPara : +${tujuan}\nimporte de transferencia : ${jumblah}\nImpuestos : ${fee}`)
                break
					
					
case 'wasted':
				  case 'was':
				if(!isRegistered) return reply(ind.noregis())
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  nyan = await client.downloadAndSaveMediaMessage(ger)
				  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", nyan)
				  teks = `${anu.display_url}`
				  ranp = getRandom('.gif')
				  rano = getRandom('.webp')
				  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
				  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				fs.unlinkSync(ranp)
				if (err) return reply(ind.stikga())
				nobg = fs.readFileSync(rano)
				samu.sendMessage(from, nobg, sticker, {
				  quoted: mek
				})
				fs.unlinkSync(rano)
				  })
				
				} else {
				  reply('Envia la foto!')
				}
				break 

case 'drawing':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  nyan = await samu.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", nyan)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 samu.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Manda la foto:v')
}
break


case 'wanted':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  owgi = await client.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
				 samu.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Envia la foto, con el comando')
				}
				break
			case 'crossgun':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  owgi = await client.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
				 samu.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Envia el link despues del comando')
				}
				break

case 'gtav':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				  reply(ind.wait())
				  owgi = await client.downloadAndSaveMediaMessage(ted)
				  tels = body.slice(7)
				  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
				  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
				 samu.sendMessage(from, hehe, image, {quoted:mek})
				} else {
				  reply('Envia la foto')
				}
				break
		
			case 'triggered':
				case 'ger':
				 if (!isRegistered) return reply(ind.noregis())
				           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				           reply(ind.wait())
				         owgi = await client.downloadAndSaveMediaMessage(ger)
				           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
				        teks = `${anu.display_url}`
				         ranp = getRandom('.gif')
				        rano = getRandom('.webp')
				        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
				       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        if (err) return reply(imd.stikga())
                        nobg = fs.readFileSync(rano)
                        samu.sendMessage(from, nobg, sticker, {quoted: mek})
                        fs.unlinkSync(rano)
                })
            
                     } else {
                         reply('Envia la foto foto!')
                  }
                     break


case 'tourl':
 if (!isRegistered) return reply(ind.noregis())
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(ind.wait())
         owgi = await samu.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
reply(teks)
}
break
					
			case 'dompet':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
			case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('El límite debe ser un número!!')
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Siento que tu dinero no fuera suficiente. por favor, recoger y comprar más tarde`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PAGO EXITOSO 」*\n\n*Remitente* : Admin\n*Recepción de la hora* : ${pushname}\n*compra nominal* : ${payout} \n*precio límite* : ${koinPerlimit}/limit\n*El resto de tu dinero* : ${checkATMuser(sender)}\n\nproceso exitoso con número de pago\n${createSerial(15)}`)
				} 
				break
				//no rest api 
				case 'slap':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['perro','tu cerdo','cachorro','eres idiota de nuevo','tu cara es un mono','estás soltero solo de nuevo en la estúpida casa','así que quieres tener un novio, solo enfrenta al mono fuera de la jaula','eres guapo cuando eres tóxico','pantek','hijo de puta','te hago llorar','eres todo maricón','mira en los cachorros que leen','guapo solo recoge chicas a la parrilla','eres hermoso beb tonterías, un niño cocodrilo','niño dajjal','puki you','un perro te invita','un fantasma tiene miedo de ser ngentod','no está tan mal para romperse','toda tu polla','chico tú toda la polla','3 días más']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					samu.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						samu.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
					if (!isPrem) return reply(ind.premon(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Preguntas:* ${Y.pertanyaan}\n\n*➸ Respuestas:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					samu.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 				
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await samu.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
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
						reply('Etiqueta a una foto, para ver que es lo que dice')
					}
					await limitAdd(sender)
				break
				case 's': 
				case 'stiker':
				case 'sticker': 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await samu.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Samu330')} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									samu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await samu.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falló, en el momento de convertir ${tipe} tu sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('StMvSamu330', 'NyanBot:3')} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									samu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await samu.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(ind.wait())
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('ERROR-Intenta de nuevo.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('StNoBgSm330', 'NyanBot')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									samu.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//samu.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await samu.downloadAndSaveMediaMessage(encmedia)
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
								Samu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Etiqueta un gif o imagen y escribe: *${prefix}sticker* `)
					}
					break
				case 'tts':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return samu.sendMessage(from, 'Se requiere código de idioma!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return samu.sendMessage(from, 'Ingresa texto', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('El texto es muy largo')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('fallo:(')
							samu.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
				break
				case 'simi':
					if (args.length < 1) return reply('Pon un texto')
					teks = body.slice(5)
					anu = await simih(teks) 
					reply(anu)
				break 
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('*𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿* !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						samu.sendMessage(from, buffer, image, {quoted: mek, caption: '7u7 '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return samu.sendMessage(from, 'Pon nombre del usuario ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						samu.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('posible username erroneo??')
					}
					await limitAdd(sender)
				break
				//group feature 
				case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await samu.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					samu.sendMessage(from, options, text)
					await limitAdd(sender)
					break
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('¿A Quién quiere añadir?')
					if (args[0].startsWith('08')) return reply('Usar el código de pais')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						samu.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Error, posiblemente tenga privada su cuenta')
					}
				break 
				case 'level':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣➣ *Nombre* : ${pushname}\n┣➣ Numero : wa.me/${sender.split("@")[0]}\n┣➣ User XP :  ${userXp}/${requiredXp}\n┣➣ User Level : ${userLevel}\n┗━━━━━━━━━━━━ 🔐Samu330👑━━━━━`
                costum(resul, text, tescuk, per)
				break 
				case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`El ${pushname} evento minero no activado por el propietario`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`porque usted es nuestro propietario del equipo de bots, enviar ${one}Xp para ti`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*Bien* ${pushname} Usted consigue *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break  
			case 'closegc':
  if (!isGroup) return reply(ind.groupo())
  if (!isGroupAdmins) return reply(ind.admin())
  if (!isBotGroupAdmins) return reply(ind.badmin())
  var nomor = mek.participant
  const close = {
text: `Grupo cerrado por @${nomor.split("@s.whatsapp.net")[0]}\n ahora solo los admins facheros pueden escribir`,
contextInfo: {
  mentionedJid: [nomor]
}
  }
  samu.groupSettingChange (from, GroupSettingChange.messageSend, true);
  reply(close)
  break

case 'opengc':
  case 'bukagc':
  if (!isGroup) return reply(ind.groupo())
  if (!isGroupAdmins) return reply(ind.admin())
  if (!isBotGroupAdmins) return reply(ind.badmin())
open = {
  text: `Grupo abierto por @${sender.split("@")[0]}\n ahora todos pueden usar el bot`,
  contextInfo: {
mentionedJid: [sender]
  }
}
samu.groupSettingChange (from, GroupSettingChange.messageSend, false)
samu.sendMessage(from, open, text, {
  quoted: mek
})
break
				case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                samu.groupUpdateSubject(from, `${body.slice(9)}`)
                samu.sendMessage(from, 'Exito, Grupo Renombrado', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                samu.groupUpdateDescription(from, `${body.slice(9)}`)
                samu.sendMessage(from, 'Exito, Descripcion cambiada', text, {quoted: mek})
					break
           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 Etiqueta a alguien!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Su posición se elimina*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						samu.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Oye @${mentioned[0].split('@')[0]} Ya no eres mas un administrador🏃`, mentioned, true)
						samu.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 Etiqueta a alguien!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Felicidades ahora eres administrador (x_x) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						samu.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Felicidades🥳 @${mentioned[0].split('@')[0]} *Ahora eres administrador* (+_+)`, mentioned, true)
						samu.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 Etiqueta a alguien!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Se a expulsado 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						samu.groupRemove(from, mentioned)
					} else {
						mentions(`Se ha expulsado a un pedazo de aborto, ahre:D @${mentioned[0].split('@')[0]} ??`, mentioned, true)
						samu.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Todo meko este we JAJAJA🤣')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*weeee aaaa que pend***, LA BIENVENIDA YA ESTA ACTIVADA🙄* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('Bienvenida activada')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('Bienvenida desactivada')
					} else {
						reply(ind.satukos())
					}
					break 
					case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Ya activo !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Simi activado')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Simi desactivado')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('No activo')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('NSFW activado')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('NSFW desactivado')
					} else {
						reply(ind.satukos())
					}
				break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                if (isLevelingOn) return reply('*función de nivel ya estaba activo antes*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === 'disable') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				break 
				case 'nobadword':
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*La función BadWord ya estaba activa antes*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
				case 'linkgc':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await samu.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    samu.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'all':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `✏┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'all2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'all3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					samu.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'delete':
				case 'del':
				case 'd':
				samu.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				break 
		case 'addbadword':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Enviar comando ${prefix}addbadword [palabras groseras]. ejemplo ${prefix}addbadword Puta`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Plabara añadida con exito!')
                    break
                case 'delbadword':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Enviar comando ${prefix}delbadword [Groseria]. Ejemplo ${prefix}delbadword puta`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Groseria eliminada!')
                    break 
                case 'listbadword':
                    let lbw = `Lista de groserias\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `◦ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
                
                	
				//admin feature 
				case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					samu.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    samu.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`respuesta convertida con éxito a : ${cr}`)
					await limitAdd(sender)
					break 
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *A quien le quieres robar la foto para el bot:3!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await samu.getProfilePicture(id)
						buffer = await getBuffer(pp)
						samu.updateProfilePicture(botNumber, buffer)
						mentions(`Foto de perfil actualizada correctamente usando foto de perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
			  	case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Que')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Ya activo* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*Evento activado*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*Evento desactivado*')
					} else {
						reply(ind.satukos())
					}
					break 
				case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.ownerg())
					if (args.length < 1) return reply('Y tu')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*wee ash, ya esta activado we* !!!')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*Anti link activado*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*Anti link desactivado*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'block':
					samu.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					samu.blockUser (`${body.slice(8)}@c.us`, "add")
					samu.sendMessage(from, `Aceptar comando, bloquear wa.me${body.slice(8)}@c.us`, text)
				break
				case 'unblock':
					samu.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.group())
					if (!isOwner) return reply(ind.ownerb())
					samu.blockUser (`${body.slice(10)}@c.us`, "remove")
					samu.sendMessage(from, `Aceptar el mando, desbloquear wa.me/${body.slice(10)}`, text)
				break 
				case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    samu.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Derechos de autor de la imagen Getty Images Image caption: ${prefix}setbotpp o etiqueta una imagen de las que se han enviado`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu.downloadAndSaveMediaMessage(enmedia)
					await samu.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil😗')
					break 
				case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await samu.downloadAndSaveMediaMessage(mek)
                         await samu.updateProfilePicture (from, media)
                        reply('Foto de grupo cambiada')
					break				
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'Chao a todos, morros mecos').then(() => samu.groupLeave(from))
					break 
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await samu.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await samu.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							samu.sendMessage(_.jid, buff, image, {caption: `❮Escribe el texo\n\n${body.slice(4)}`})
						}
						reply('Anuncio dado ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('Anuncio dado ')
					}
					break
					case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await samu.chats.all()
					samu.setMaxListeners(25)
					for (let _ of anu) {
						samu.deleteChat(_.jid)
					}
					reply(ind.clears())
				break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    prefix = args[0]
                    reply(`Prefijo cambiado ${prefix}`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('El límite debe ser un número')
                    memberlimit = args[0]
                    reply(`Change Member limit To ${memberlimit} SUCCESS!✅`)
				break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await samu.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							samu.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDel Grupo : ${groupName}\nRemitente : wa.me/${(sender.split('@')[0])}\nMensaje : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP NyanBot🐬 」*\n\n💻Mensaje Del grupo : ${groupName}\n📲Remitente : wa.me/${(sender.split('@')[0])}\n🙍🏻‍♂️Mensaje : ${body.slice(6)}`)
						}
						reply('Con exito')
					}
					break 
				case 'addprem':
				if (!isOwner) return reply(ind.ownerb())
				expired = "30d"
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0]))
				break
				
				case 'delprem':
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
 			   for( var i = 0; i < arr.length; i++){ 
 		       if ( arr[i] === mente) { 
    		      	  arr.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(arr))
       			 }
 			    }
				reply(ind.dellprem(args[0]))
				break 
				case 'eval':
				if (!isOwner) return reply(ind.ownerb())
                if (!q) return reply(ind.wrongf())
                try {
         	           let evaled = await eval(q)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	          await reply(evaled)
          		//	samu.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
       	         } catch (err) {
        	            console.error(err)
          	          await reply('Error!')
  	   	       }
        	    break 
        		case 'listonline': 
        		if (!isOwner) return reply(ind.ownerb())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(samu.chats.get(ido).presences), samu.user.jid]
			    samu.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
			case '=>':
				const cmd = body.slice(4)
				exec(cmd, (err, stdout) => {
					if (err) return samu.sendMessage(from, `root@Nfz.01:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						samu.sendMessage(from, stdout, text)
					}
				})
				break
				//tools 
			case 'tomp3':
				samu.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('es un video?:V')
				reply(ind.wait())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await samu.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Perdon hubo un error:(')
					buffer = fs.readFileSync(ran)
					samu.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
					fs.unlinkSync(ran)
				})
				break 
			case 'slowmo':
				if (!isRegistered) return reply(ind.noregis())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await samu.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				samu.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break

			case 'tupai':
				if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
			case 'gemok':
				if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
			case 'bass':                 
				if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await samu.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						samu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'getsticker':
				case 'gets':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					samu.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				case 'liststicker':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					samu.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('Reply stiker')
					svst = body.slice(12)
					if (!svst) return reply('¿Cuál es el nombre del stiker??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await samu.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					samu.sendMessage(from, `Pegatina añadida con éxito\nComprobar por medio de ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
				case 'addvn':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedAudio) return reply('Responder bloque vn!')
					svst = body.slice(7)
					if (!svst) return reply('Nombre del vn?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await samu.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					samu.sendMessage(from, `vn Añadido con exito\nComprueba con el comando ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
				case 'getvn':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					samu.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listvn':
				case 'vnlist':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					samu.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedImage) return reply('Responde a una foto weon!')
					svst = body.slice(10)
					if (!svst) return reply('Nombre de la foto?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await samu.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					samu.sendMessage(from, `Foto añadida con exito\nComprueba con el comando ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimage':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					samu.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					samu.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedVideo) return reply('Responde a un video, aborto!')
					svst = body.slice(10)
					if (!svst) return reply('Nombre del video?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await samu.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					samu.sendMessage(from, `Se añadio video con exito\nComprueba con el comando${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					samu.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					samu.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break	
				
				default:
			if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Lo siento*${pushname}*, Comando *${prefix}${command}* no encontrado, para ver la lista de comandos porfavor escriba: *${prefix}menu*!`)
                  }
            if (/^>/.test(pes)) {
	            let txt = pes.replace(/^>/, '')
	            let type = Function
	            if (/await/.test(pes)) type = (async () => {}).constructor
	            let func = new type('print', 'samu', 'MessageType', 'mek', 'text', 'from', 'image', 'os', 'fetch', txt)
	            console.log('[EvalF]', func.toString())
	            let output
	            try {
	                output = await func((...args) => {
	                    console.log('[EvalP]', ...args)
	                    samu.sendMessage(from, util.format(...args), MessageType.extendedText, {
	                        quoted: mek
	                    })
	                }, samu, MessageType, mek, text, from, await image, os, fetch)
	                console.log('[EvalO]', output)
	                samu.sendMessage(from, util.format(output), MessageType.extendedText, {
	                    quoted: mek
	                })
	            } catch (e) {
	                console.error('[EvalE]', e)
	                samu.sendMessage(from, util.format(e), MessageType.extendedText, {
	                    quoted: mek
	                })
	            }
            }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

starts()
