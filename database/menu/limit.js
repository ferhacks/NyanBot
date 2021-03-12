const limit = (prefix, botName, ownerName) => {
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
┷┯ *〈 LIMIT 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Check Your Limit
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Check Your Money
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Buy Limit
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Nota: Puedes comprar un límite recolectando dinero primero. Verifique su dinero escribiendo el comando  *${prefix}bal*, el precio de 1 límite = 1000.
Nota2: Puede recolectar dinero charlando con amigos del grupo o subiendo de nivel.`
}
exports.limit = limit
