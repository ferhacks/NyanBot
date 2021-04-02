const a = '*```'

exports.wait = () => {
	return`*「 ⌛ WAIT ⌛ 」 EN PROCESO*`
}

exports.succes = () => {
	return`*「 ✅ SUSSES ✅ 」*`
}

exports.lvlon = () => {
	return`*「 Activado 」Niveles*`
}

exports.lvloff = () => {
	return`*「 Desactivado 」 Niveles*`
}

exports.lvlnul = () => {
	return`*SUS NIVELES SIGUEN VACÍOS*`
}

exports.lvlnoon = () => {
	return`*LOS NIVELES DE GRUPO NO SE HAN ACTIVADO*`
}

exports.noregis = () => {
	return`*「 Nombre de usuario 」*\n\n*Para registrarse use: ${prefix}reg nombre|edad* \n*ejemplo ${prefix}reg Samu|17*`
}

exports.rediregis = () => {
	return`*「 Nombre de usuario 」*\n\n*Ya está registrado en la base de datos de bot*`
}

exports.stikga = () => {
	return`*porfavor intente en unos momentos de nuevo*`
}

exports.linkga = () => {
	return`*enlace inválido*`
}

exports.groupo = () => {
	return`*「❌ ¡Este comando solo se puede usar en grupos! ❌」*`
}

exports.ownerb = () => {
	return`*「❌ ¡Este comando solo puede ser utilizado por el propietario del bot! ❌」*`
}

exports.ownerg = () => {
	return`*「❌ ¡Este comando solo puede ser utilizado por el propietario del grupo ! ❌」*`
}

exports.admin = () => {
	return`*「❌ ¡Este comando solo puede ser utilizado por administradores del grupo! ❌」*`
}

exports.badmin = () => {
	return`*「❌ ¡Este comando solo se puede usar cuando el bot es administrador! ❌」*`
}

exports.nsfwoff = () => {
	return`*✅NSFW ACTIVADO✅*`
}

exports.bug = () => {
	return`*El problema ha sido reportado al propietario del bot, informe falso no se responderá*`
}

exports.wrongf = () => {
	return`*formato/texto incorrecto en blanco*`
}

exports.clears = () => {
	return`*Se limpio todo*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*\n\npara averiguar si usted se ha registrado ponga el mensaje de verificación que envié \n\nNOTA:\n*si aún no tienes el mensaje. significa que no ha Agregado el número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「📁 DATA 📁」*\n\nYa está registrado con los datos\n\n┏━➢nombre\n┗⊱${namaUser}\n┏━➢numero\n┗➢wa.me/${sender.split("@")[0]}\n┏━➢Edad\n┗⊱${umurUser}\n┏━➢tiempo de inscripción\n┗➢${time}\n\n┏━➢ *NS* ❉━\n┣⊱${serialUser}\n┗➢NOTE : No olvides este número porque es importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* no encontrado\n para ver la lista de comandos usa: *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*lo siento, pero ${pushname} no eres el propietario del grupo*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏➢level  : ${getLevelingLevel(sender)}*\n*┣➢tipo de comando : ${command}*\n*┗➢requisitos de nivel : ${aha}*\n\n_NOTA : CONSIGE MAS XP EN CHAT_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏➢level  : ${getLevelingLevel(sender)}*\n*┣➢tipo de comando: ${command}*\n*┗➢requisitos de nivel : ${ahb}*\n\n_NOTA :CONSIGE MAS XP EN EL CHAT_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏➢level  : ${getLevelingLevel(sender)}*\n*┣➢tipo de comando: ${command}*\n*┗➢requisitos de nivel : ${ahc}*\n\n_NOTA :CONSIGE MAS XP EN EL CHAT_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏➢level  : ${getLevelingLevel(sender)}*\n*┣➢tipo de comando: ${command}*\n*┗➢requisitos de nivel : ${ahd}*\n\n_NOTA :CONSIGE MAS XP EN EL CHAT_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏➢level  : ${getLevelingLevel(sender)}*\n*┣➢tipo de comando : ${command}*\n*┗➢requisitos de nivel : ${ahe}*\n\n_NOTA :CONSIGE MAS XP EN EL CHAT_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Lo siento ${pushname} Su nivel no es suficiente*\n\n*┏➢level  : ${getLevelingLevel(sender)}*\n*┣➢tipo de comando : ${command}*\n*┗➢requisitos de nivel: ${ahf}*\n\n_NOTA :CONSIGE MAS XP EN EL CHAT_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client , process) => { 
	return `
${a} ╭══• ೋ•✧๑🐬NyanBot🐬๑✧•ೋ •══╮${a}
${a} ⊨ *「✅ACERCA DEL USUARIO✅」*${a}
${a}︱○ *🙍🏻‍♂️nombre : ${pushname}${a}
${a}︱○ Premium : ${premi}${a}
${a}︱○ 📲numero : wa.me/${sender.split("@")[0]}${a}
${a}︱○ 💵Dinero : Rp${uangku}${a}
${a}︱○ ✨XP : ${getLevelingXp(sender)}/${reqXp} ${a}
${a}︱○ ♻level : ${getLevelingLevel(sender)}${a}
${a}︱○ Rol : ${role}${a}
${a}︱○ 💻Usuarios registrados* : ${_registered.length}${a} 
${a}︱○ ♻Nombre : ${client.user.name}${a}
${a}︱○ 🌐Navegador : ${client.browserDescription[1]}${a}
${a}︱○ 📡server : ${client.browserDescription[0]}${a}
${a}︱○ ✏version : ${client.browserDescription[2]}${a}
${a}︱○ 🚄Velocidad : ${process.uptime()}${a}
${a}︱○ 📲Celular : ${client.user.phone.device_manufacturer}${a}
${a}︱○ ✅version de wa : ${client.user.phone.wa_version}${a}

 *${prefix}info*
 *${prefix}owner*


*╔═══╗───────────╔═══╗*
*║╔═╗║───────────║╔═╗║*
*║╚══╦══╦╗╔╗╔╗─╔╗║╚═╝╠══╦═╦═╦╗─╔╗*
*╚══╗║╔╗║╚╝║║║─║║║╔══╣║═╣╔╣╔╣║─║║*
*║╚═╝║╔╗║║║║║╚═╝║║║──║║═╣║║║║╚═╝║*
*╚═══╩╝╚╩╩╩╝╚═╗╔╝╚╝──╚══╩╝╚╝╚═╗╔╝*
*───────────╔═╝║────────────╔═╝║*
*───────────╚══╝────────────╚══╝*

 ${a}○🗒✏MAKER MENU${a}
${a}┃➥${prefix}sticker${a}
${a}┃➥${prefix}sticker nobg${a}
${a}┃➥${prefix}maker${a}
${a}┃➥${prefix}qrcode${a}
${a}┃➥${prefix}ttp${a}
${a}└─────────────────


${a}○🎉FUN MENU${a}
${a}┃➥${prefix}lirik${a}
${a}┃➥${prefix}rate${a}
${a}┃➥${prefix}light${a}
${a}┃➥${prefix}glitch${a}
${a}┃➥${prefix}gtav${a}
${a}┃➥${prefix}drawing${a}
${a}┃➥${prefix}wanted${a}
${a}┃➥${prefix}wasted${a}
${a}┃➥${prefix}triggered${a}
${a}┃➥${prefix}nulis${a}
${a}┃➥${prefix}modd${a} *[VIP]*
${a}┃➥${prefix}happymod${a} *[VIP]*
${a}└─────────────────

${a}○🔐MUTES${a}
${a}┃➥${prefix}mutual${a}
${a}┃➥${prefix}next${a}
${a}└─────────────────

${a}○🎞MEDIA MENU${a}
${a}┃➥${prefix}brainly${a} *[VIP]*
${a}┃➥${prefix}imagen${a}
${a}┃➥${prefix}igstalk${a}
${a}┃➥${prefix}tiktokstalk${a} *[VIP]*
${a}┃➥${prefix}ssweb${a}
${a}┃➥${prefix}kbbi${a}
${a}└─────────────────

Por el momento no tengo un menu formal, no todos mis comandos aparecen, espera a que Samu lanze la version oficial
  
${a} THANGKS TO${a}
 ${a}│ 🔐Samu330👑${a}
 ${a}╰ NOTE : Siganme en YouTube${a}
li.✵⃘⃘⃘⃘่่่่่่่่่่่่่่่่่่่่่่่่่่͜͡✵⃘͜͡ํ่่่่่่่่่่่่่่่่่่่่่่่่่͜✵⃘่่่่่่่่่่่่่่่่่่่่่่่่่่͜͡✵⃘่่่่่่่่่่่่่่่͜͡✵⃘่่่่่่่่่่่่่่่่่่่่่่่่่͜͡✵⃘่่่่่่่่่่่่่่่่่͜͡✵⃘่่่่่่่่่่่่่่่่่่่่่่่่่͜͡✵⃘⃘่่่่่่่่่่่่่่่่่่͜͡✵⃘่่่่่่่่่่่่่่่่่่่่่่่่่่͜͡✵⃘⃘⃘⃘่่่่่่่่่่่่่่่่่͜͡✵⃘͜͡ํ่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่͜✵⃘่่่่่่่่่่่่่่่่͜͡✵⃘่่่่่่่่่่่่่่่่่่่่่่่่่่͜͡✵⃘่่่่่่่่่่่่่่่่่่่่่่่่่่͜͡✵⃘่่่่่่่่่่่่่่่่่͜͡✵⃘͜͡ํ่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่่͜✵⃘่่่่่่่่่่่่่่่่่͜͡✵.li
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「🎉 Felicitaciones 🎉」*
┏➯ *🙍🏻‍♂️Nombre* : ${pushname}
┣➯ *📲Numero* : wa.me/${sender.split("@")[0]}
┣➯ *✨Xp* : ${getLevelingXp(sender)}
┣➯ *💵Limites* : +3
┣➯ *🏆Role*: ${role}
┗➯ *✏Nivel* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Lo siento ${pushname} el límite de hoy se agoto*\n*Buy Limit para obtener límite/subir de nivel*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
su límite restante : ${limitCounts}

NOTE : para conseguir el límite. puede pasar el nivel o usar el comando buylimit`
}

exports.satukos = () => {
	return`*Añadir parámetro 1/activar o 0/desactivar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏🢣 「 ATM 」🢢━┓*\n┣🢣 *Nombre* : ${pushname}\n┣🢣 *Numero* : ${sender.split("@")[0]}\n┣🢣 *Dinero* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expira en* : 30 Dias\n*gracias por preferir nuestra version prima:3*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Caducado* :v\n*Gracias:D*`
}

exports.premon = (pushname) => {
	return`Lo siento ${pushname} USTED NO ES UN USUARIO PREMIUM`
}

