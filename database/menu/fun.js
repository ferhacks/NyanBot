const fun = (prefix, botName, ownerName) => {
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
┷┯ *〈 FUN 〉*
   ║≽ *${prefix}alay* <text>
   ║ *Desc* : Changing Words Into Alay
   ║──────────────╼
   ║≽ *${prefix}bucin*
   ║ *Desc* : Send a Random Slave of Love
   ║──────────────╼
   ║≽ *${prefix}trust*
   ║ *Desc* : Send a Random Truth
   ║──────────────╼
   ║≽ *${prefix}dare*
   ║ *Desc* : Send a Random Dare
   ║──────────────╼
   ║≽ *${prefix}simi* <text>
   ║ *Desc* : Talk to Simi
   ║ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.fun = fun
