const adult = (prefix, botName, ownerName) => {
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
║
┷┯ *🔥 18+ 🔥*
   ║
   ║≽ *${prefix}randomhentai*
   ║ *Desc* : Envío de imágenes hentai al azar
   ║──────────────╼
   ║≽ *${prefix}nsfwtrap*
   ║ *Desc* : Envío de imagen de captura NSFW aleatoria
   ║──────────────╼
   ║≽ *${prefix}nsfwneko*
   ║ *Desc* : Envío de una imagen NSFW aleatoria de Neko
   ║ *${ownerName}*,
   ╚≽ *Developer © ${botName}`
}
exports.adult = adult
