const group = (prefix, botName, ownerName) => {
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
┷┯ *〈 GROUP 〉*
   ╽
   ┠≽ *${prefix}opengc*
   ┃ *Desc* : Opening Group
   ┠──────────────╼
   ┠≽ *${prefix}closegc*
   ┃ *Desc* : Closing the Group
   ┠──────────────╼
   ┠≽ *${prefix}promote* <@tag>
   ┃ *Desc* : Promote People to be Admins Group
   ┠──────────────╼
   ┠≽ *${prefix}demote* <@tag>
   ┃ *Desc* : Demote People to be Members Group
   ┠──────────────╼
   ┠≽ *${prefix}tagall*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall2*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall3*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall4*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall5*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}add* <12542123926>
   ┃ *Desc* : Add Members
   ┠──────────────╼
   ┠≽ *${prefix}kick* <@tag>
   ┃ *Desc* : Kick Member Group
   ┠──────────────╼
   ┠≽ *${prefix}listadmins*
   ┃ *Desc* : Show List Group Admins
   ┠──────────────╼
   ┠≽ *${prefix}linkgroup*
   ┃ *Desc* : Show Group Link
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : Tell the Bot to Leave the Group
   ┠──────────────╼
   ┠≽ *${prefix}welcome* <1/0>
   ┃ *Desc* : Activating / Deactivating the Welcome Feature
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : Activating / Deactivating the NSFW Feature
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : Delete Bot Message
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : Activating / Deactivating the Simih Feature
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : Mention You
   ┠──────────────╼
   ┠≽ *${prefix}ownergroup*
   ┃ *Desc* : Shows who the Group Owner is
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.group = group
