const help = (pushname, prefix, botName, ownerName, reqXp, uangku) => {
        return `

   ◪ *Nombre* : ${pushname}
   ◪ *XP* : ${reqXp}
   ◪ *Dinero* : ${uangku}
   ◪ *Registrado : ✔️
   

○ *Prefijo* : 「  ${prefix}  」
○ *Creador* : ${ownerName}
○ *Version* : 3


  *〈 MENU 〉*
   ◉ *${prefix}logomakermenu*
   ◉ *${prefix}imagemakermenu*
   ◉ *${prefix}stickermakermenu*
   ◉ *${prefix}searchmenu*
   ◉ *${prefix}educationmenu*
   ◉ *${prefix}kerangmenu*
   ◉ *${prefix}downloadermenu*
   ◉ *${prefix}mememenu*
   ◉ *${prefix}groupmenu*
   ◉ *${prefix}soundmenu*
   ◉ *${prefix}musicmenu*
   ◉ *${prefix}stalkmenu*
   ◉ *${prefix}wibumenu*
   ◉ *${prefix}18+menu*
   ◉ *${prefix}funmenu*
   ◉ *${prefix}todmenu*
   ◉ *${prefix}informationmenu*
   ◉ *${prefix}stayonscreenmenu*
   ◉ *${prefix}xpmenu*
   ◉ *${prefix}limitmenu*
   ◉ *${prefix}ownermenu*
   ◉ *${prefix}othermenu*
   ◉*${ownerName}*,
   ╰╼  © ${botName}
   `
}
exports.help = help
