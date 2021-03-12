const education = (prefix, botName, ownerName) => {
	return `
╔ *🔥 ${botName} 🔥*
║
➥ *〈 BOT INFO 〉*
🐬 ║
🐬 ║♡ *Prefijo* : 「  ${prefix}  」
🐬 ║♡ *Creador* : ${ownerName}
🐬 ║♡ *Version* : 0.0.2
🐬 ║
🔥>ԑ̮̑ঙ< *𝗡𝘆𝗮𝗻𝗕𝗼𝘁* >ԑ̮̑ঙ<🔥
 *〈 ABOUT 〉*
║
║≽ *${prefix}info* (error)
║ *Desc* : Informacion del bot
║──────────────╼
║≽ *${prefix}blocklist*
║ *Desc* : Usuarios bloqueados del usuario
║──────────────╼
║≽ *${prefix}chatlist* (error)
║ *Desc* : Muestra todos los chats del usuario
║──────────────╼
║≽ *${prefix}ping*
║ *Desc* : Velocidad del bot
║──────────────╼
║≽ *${prefix}bugreport* <text>
║ *Desc* : Report Bug To Owner Bot
║┷┯ *〈 EDUCATION 〉*
   ║
   ║≽ *${prefix}wiki* <query>
   ║ *Desc* : Search According to Wikipedia
   ║──────────────╼
   ║≽ *${prefix}wikien* <query>
   ║ *Desc* : Search According to Wikipedia [english]
   ║──────────────╼
   ║≽ *${prefix}nulis* <text>
   ║ *Desc* : Write a Text on Book
   ║──────────────╼
   ║≽ *${prefix}tafsirmimpi* <dream>
   ║ *Desc* : Send a Dream Interpretation
   ║──────────────╼
   ║≽ *${prefix}translate* <language_code>|<text>
   ║ *Desc* : Translating a word
   ║──────────────╼
   ║≽ *${prefix}artinama* <name>
   ║ *Desc* : Interpret Names
   ║ *${ownerName}*,
   ╚╼≽ *Developer © ${botName}`
}
exports.education = education
