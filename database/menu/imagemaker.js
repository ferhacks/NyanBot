const imagemaker = (prefix, botName, ownerName) => {
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
╿
┷┯ *〈 IMAGE MAKER 〉*
   ╽
   ┠≽ *${prefix}bpink* <text>
   ┃ *Desc* : Make BlackPink Image
   ┠──────────────╼
   ┠≽ *${prefix}snowwrite* <text|text>
   ┃ *Desc* : Make Snowwrite Image
   ┠──────────────╼
   ┠≽ *${prefix}3dtext* <text>
   ┃ *Desc* : Make 3D Text Image
   ┠──────────────╼
   ┠≽ *${prefix}firetext* <text>
   ┃ *Desc* : Make Fire Text Image
   ┠──────────────╼
   ┠≽ *${prefix}glitch* <text|text>
   ┃ *Desc* : Make Glitch Image
   ┠──────────────╼
   ┠≽ *${prefix}shadow* <text>
   ┃ *Desc* : Make Shadow Image
   ┠──────────────╼
   ┠≽ *${prefix}burnpaper* <text>
   ┃ *Desc* : Make Burn Papper Image
   ┠──────────────╼
   ┠≽ *${prefix}coffee* <text>
   ┃ *Desc* : Make Coffee Image
   ┠──────────────╼
   ┠≽ *${prefix}lovepaper* <text>
   ┃ *Desc* : Make Love Papper Image
   ┠──────────────╼
   ┠≽ *${prefix}woodblock* <text>
   ┃ *Desc* : Make Wood Block Image
   ┠──────────────╼
   ┠≽ *${prefix}qowheart* <text>
   ┃ *Desc* : Make Quotes On Wood Hearts Image
   ┠──────────────╼
   ┠≽ *${prefix}mutgrass* <text>
   ┃ *Desc* : Make Message Under The Grass Image
   ┠──────────────╼
   ┠≽ *${prefix}undergocean* <text>
   ┃ *Desc* : Make Message Underground Ocean Image
   ┠──────────────╼
   ┠≽ *${prefix}woodenboards* <text>
   ┃ *Desc* : Make Wooden Boards Image
   ┠──────────────╼
   ┠≽ *${prefix}wolfmetal* <text>
   ┃ *Desc* : Make Wolf Metal Image
   ┠──────────────╼
   ┠≽ *${prefix}metalictglow* <text>
   ┃ *Desc* : Make Metalic Text Glow Image
   ┠──────────────╼
   ┠≽ *${prefix}8bit* <text|text>
   ┃ *Desc* : Make 8 Bit Image
   ┠──────────────╼
   ┠≽ *${prefix}herrypotter* <text>
   ┃ *Desc* : Make Herry Potter Image
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.imagemaker = imagemaker
