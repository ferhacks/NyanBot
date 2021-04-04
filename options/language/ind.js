exports.noregis = () => {
        return `*TODAVÍA NO ESTÁ REGISTRADO* \n\n *Cómo registrarse ${prefix} registrar Nombre|edad* \n *Ejemplo: ${prefix} registrar 𝐓𝐨𝐱𝐢𝐜|99*`
}

exports.rediregis = () => {
        return `*「 REGISTRADO 」*\n\n*Te has registrado en la base de datos de bot*`
}

exports.wrongf = () => {
        return`*Formato incorreto, ve el ejemplo y hazlo bien*`
}

exports.clears = () => {
        return`*Limpieza completa*`
}

exports.pc = () => {
        return`*「 REGISTRO 」*\n\nTe has registrado en la base de datos de bot \n\nNOTE:\n*si no recibiste el mensaje. significa que no ha guardado su número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRO DE DADOS 」*\n\nSe registro con los datos \n\n◪ *DADOS* \n  │ \n  ├─ ❏ Nombre : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Tiempo de registro : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : \nNo se para que sea pero es importante`
}

exports.cmdnf = (prefix, command) => {
        return`El comando *${prefix}${command}* no se encontro \ usa *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Perdón, pero ${pushname} no es el dueño del bot*`
}

exports.limitend = (pushname) => {
        return`*Hola ${pushname} el límite de hoy expira*\n*el límite se restablece a cada 24:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMITE 」*
Resto del limite: ${limitCounts}

NOTA : para aumentar el limite debe comprar limite`
}

exports.satukos = () => {
        return`Usa 1 para activar o 0 para desactivar`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nombre* : ${pushname}\n  ❏ *Número´* : ${sender.split("@")[0]}\n  ❏ *Dinero* : ${uangkau}`
}
