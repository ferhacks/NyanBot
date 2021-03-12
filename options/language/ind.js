exports.wait = () => {
        return `⌛ Sedang di Prosess ⌛`
}

exports.timeEnd = () => {
        return `Se acabó el tiempo`
}

exports.succsess = () => {
        return `✔️ Berhasil ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *la nivelación está activa*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *disable leveling*`
}

exports.levelnol = () => {
        return `*LEVEL KAKAK MASIH* 0 °-°`
}

exports.stick = () => {
        return `[❗] Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌`
}

exports.Iv = () => {
        return `❌ Link tidak valid ❌`
}

exports.group = () => {
        return `[❗] Perintah ini hanya bisa di gunakan dalam group! ❌`
}

exports.ownerG = () => {
        return `[❗] Perintah ini hanya bisa di gunakan oleh owner group! ❌`
}

exports.ownerB = () => {
        return `[❗] Perintah ini hanya bisa di gunakan oleh owner bot! ❌`
}

exports.admin = () => {
        return `[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌`
}

exports.Badmin = () => {
        return `[❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 BELUM REGISTER 」──\nHola!\nAún no te has registrado, registremos primero... \n\nCommand : ${prefix}register nama|umur\nContoh : ${prefix}register Nazwa|16`
}

exports.daftarD = () => {
        return `*「 SUDAH REGISTER 」*\n\n*te has registrado en la base de datos del bot*`
}

exports.wrongf = () => {
        return`*Formato incorrecto / texto en blanco*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRO 」*\n\nPara saber si se ha registrado, consulte el mensaje que le envié \n\nNOTA:\n*si no ha recibido el mensaje. significa que no ha guardado su número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DATA REGISTER 」*\n\nte has registrado con los datos: \n\n◪ *DATA* \n  │ \n  ├─ ❏ Name : ${namaUser} \n  ├─ ❏ Number : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Register Time : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : \n NO OLVIDE ESTE NÚMERO PORQUE ES IMPORTANTE:v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* no encontrado, intenta escribir *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*maaf tapi ${pushname} bukan owner script*`
}

exports.limitend = (pushname) => {
        return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
        return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nama* : ${pushname}\n  ❏ *Nomer* : ${sender.split("@")[0]}\n  ❏ *Uang* : ${uangkau}`
}
