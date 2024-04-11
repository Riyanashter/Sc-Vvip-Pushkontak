module.exports = async(x, nx, store) => {
try {
  const type = Object.keys(nx.message)[0]
  const body = (nx.mtype === 'conversation') ? nx.message.conversation : (nx.mtype == 'imageMessage') ? nx.message.imageMessage.caption : (nx.mtype == 'videoMessage') ? nx.message.videoMessage.caption : (nx.mtype == 'extendedTextMessage') ? nx.message.extendedTextMessage.text : (nx.mtype == 'buttonsResponseMessage') ? nx.message.buttonsResponseMessage.selectedButtonId : (nx.mtype == 'listResponseMessage') ? nx.message.listResponseMessage.singleSelectReply.selectedRowId : (nx.mtype == 'templateButtonReplyMessage') ? nx.message.templateButtonReplyMessage.selectedId : (nx.mtype === 'messageContextInfo') ? (nx.message.buttonsResponseMessage?.selectedButtonId || nx.message.listResponseMessage?.singleSelectReply.selectedRowId || nx.text) : ''
  const prefix = /^[.#!/^]/.test(body) ? body.match(/^[.#!/^]/gi) : '#'
  const isCmd = body.startsWith(prefix)
  const botNumber = await x.decodeJid(x.user.id)
  const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
  const from = nx.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const sender = isGroup ? (nx.key.participant ? nx.key.participant : nx.participant) : nx.key.remoteJid
  const senderNumber = sender.split('@')[0]
  const args = body.trim().split(/ +/).slice(1)
  const text = q = args.join(" ")
  const isBot = botNumber.includes(senderNumber)
  const groupMetadata = isGroup? await x.groupMetadata(nx.chat).catch(e => {}) : ""
  const pwkdnwn = isGroup? await groupMetadata.participants : ""
  const groupAdmins = isGroup? await pwkdnwn.filter(v => v.admin !== null).map(v => v.id) : ""
  const isBotAdmins = isGroup ? groupAdmins.includes(x.number) : false
  const isAdmins = isGroup ? groupAdmins.includes(sender) : false
  const jam = moment.tz('Asia/Jakarta').format("HH:mm:ss")
  const quoted = nx.quoted ? nx.quoted : nx
  const mime = (quoted.msg || quoted).mimetype || ''
  const isImage = (type == 'imageMessage')
  const isPremium = prem.includes(nx.sender)
  const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
  const isOwner = ownerNumber.includes(senderNumber) || isBot

if (isCmd) {
  x.readMessages([nx.key])
  console.log(require("chalk").black(require("chalk").bgGreen(`Command ${prefix+command} `)), require("chalk").black(require("chalk").bgWhite(`Dari ${nx.pushName}`)))
}

const reply = (teks) => {
  x.sendMessage(from, { text: teks }, { quoted: nx })
}

let list = []
for (let i of [`${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`]) {
list.push({
displayName: `Creator ${global.namaBot}`,
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:Creator ${global.namaBot}\n
FN:Creator ${global.namaBot}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
END:VCARD`
})
}


switch (command) {
case "menu": {
  const noOwne = global.nomorOwner + "@s.whatsapp.net"
  const timestamp = speed()
  const latensi = speed() - timestamp
  const textcap = `*⊷ SCRIPT BY : BNG YAN*
*⊷ BOT NAME : BNG*
*⊷ PENGGUNA NAME : ${nx.pushName}*
*⊷ BUY SC : 6285783128015*
*⊷ BUY BOT : 6285783128015*
*⊷ SPEED : ${latensi.toFixed(4)} 𝘋𝘦𝘵𝘪𝘬*
*⊷ TANGGAL : ${tanggal(new Date())}*
*⊷ RUNTIME : ${runtime(process.uptime())}*

	*MENU OWNER*
*⥁* ${prefix}addprem
*⥁* ${prefix}delprem
*⥁* ${prefix}listprem
*⥁* ${prefix}hidetag

	*STORE PANEL*
*⥁* ${prefix}payment
*⥁* ${prefix}proses
*⥁* ${prefix}done

	*PUSHKONTAK MENU*
*⥁* ${prefix}join *linkgc*
*⥁* ${prefix}jpm
*⥁* ${prefix}cekidgc
*⥁* ${prefix}pushkontakgc
*⥁* ${prefix}pushkontakid
*⥁* ${prefix}savecontactid
*⥁* ${prefix}savecontactgc

	*DOWNLOAD MENU*
*⥁* ${prefix}dtiktok *link*
*⥁* ${prefix}dytmp3 *link*
*⥁* ${prefix}dytmp4 *link*
*⥁* ${prefix}playmp3
*⥁* ${prefix}playmp4

	*OTHER MENU*
*⥁* ${prefix}hidetag *teks*
*⥁* ${prefix}owner
*⥁* ${prefix}sticker
*⥁* ${prefix}toimg
*⥁* ${prefix}telegraph
*⥁* ${prefix}remini
*⥁* ${prefix}qc

MASUK GC JB | BNG YAN
https://chat.whatsapp.com/JEv6I4aOCLvANcrLZS567B`
  x.sendMessage(from, { image: { url: `https://files.catbox.moe/x7osbn.jpg` }, caption: textcap, fileLength: "1000000000000000", mentions: [sender, noOwne] }, { quoted: nx })
}
break
case 'payment':{
const owned = `${global.ownerNumber}@s.whatsapp.net`
let rsm = `*-------「 PAYMENT BY BNG YAN 」 -------*

UNTUK QRIS SILAHKAN SCAN FOTO DI ATAS

DANA : 085758118796
OVO : 
GOPAY : 085783128015

*KETIK .proses AGAR PESANAN ANDA LANGSUNG*
*KAMI PROSES*`
x.sendMessage(from, { image: { url: `https://telegra.ph/file/5705bcc173e50daaef0d5.jpg` }, caption: `${rsm}` }, { quoted: nx })
}
break
case 'done':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal`);
let barang = t[0];
let nominal = t[1];
reply(`*━━ TRANSAKSI BERHASIL BY BNG YAN ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* Rp${nominal}_
 _• *Nama Store:* BNG YAN

*TERIMA KASIH TELAH ORDER DI BNG YAN*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
case 'proses':{
reply('*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YAH BANG*')
x.sendMessage("6285783128015@s.whatsapp.net", { text: "BANG YAN ADA YANG MESEN NIH CEPETAN PROSES NANTI BUYER NGAMOK", contextInfo:{ forwardingScore: 9999, isForwarded: true }})
}
break
case "listpremium": {
  teks = "*List Premium*\n\n"
  for (let kayla of prem) {
    teks += `- ${kayla}\n`
  }
  teks += `\n*Total : ${prem.length}*`
  x.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: nx, contextInfo: { "mentionedJid": prem } })
}
break
case "addprem": {
  if (!isOwner) return reply("Khusus Pembeli Bot Di Mas BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  if (!q) return reply("Masukkan Nomor Yang Mau Di Jadikan User Premium")
  let prrkek = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
  let ceknya = await x.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  prem.push(prrkek)
  fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
  reply(`Nomor ${prrkek} Telah Menjadi User Premium!`)
}
break
case "delprem": {
  if (!isOwner) return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  if (!q) return reply("Masukkan Nomor Yang Mau Di Hapus User Premium")
  let ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
  let unp = prem.indexOf(ya)
  prem.splice(unp, 1)
  fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
  reply(`Nomor ${ya} Telah Di Hapus Dari User Premium!`)
}
break
case "playmp4": {
  if (!isPremium && !isOwner) return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  if (!q) return reply("Enter the Song Title!")
  let ytplay4 = await ytPlayMp4(q)
  x.sendMessage(from, { video: { url: ytplay4.url[0] }, caption: `Youtube Play Video\n\nTitle: ${ytplay4.title}\nChannel: ${ytplay4.channel}\nViews: ${ytplay4.views}` }, { quoted: nx })
}
break
case "playmp3": {
  if (!isPremium && !isOwner) return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  if (!q) return reply("Enter the Song Title!")
  let ytplay3 = await ytPlayMp3(q)
  x.sendMessage(from, { audio: { url: ytplay3.url[0] }, mimetype: "audio/mp4", ptt: false }, { quoted: nx })
}
break
case "dytmp4": {
  if (!isPremium && !isOwner) return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  if (!q) return reply("Link Not Found !")
  let ytdownload4 = await ytDonlodMp4(q)
  x.sendMessage(from, { video: { url: ytdownload4.url[0] }, caption: `Youtube Download Video\n\nJudul: ${ytdownload4.title}\nChannel: ${ytdownload4.channel}\nUpload: ${ytdownload4.published}\nViews: ${ytdownload4.views}` }, { quoted: nx })
}
break
case "dytmp3": {
  if (!isPremium && !isOwner) return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  if (!q) return reply("Link Not Found !")
  let ytdownload3 = await ytDonlodMp3(q)
  x.sendMessage(from, { audio: { url: ytdownload3.url[0] }, mimetype: "audio/mp4", ptt: false }, { quoted: nx })
}
break
case "dtiktok": {
  if (!isPremium && !isOwner) return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  if (!q) return reply(`Penggunaan Salah Contoh .${command} https://vm.tiktok.com/ZSLdF9NYN`)
  let tiktod = await Tiktok(q)
  let tekstik = `Downloader Tiktok

Nickname: ${tiktod.author.nickname}
Unique Id: ${tiktod.author.unique_id}
Region: ${tiktod.region}
Desc: ${tiktod.desc}
Duration: ${tiktod.duration}`
  let tikvid = await x.sendMessage(from, { video: { url: tiktod.download.nowm }, caption: tekstik }, { quoted: nx })
  x.sendMessage(from, { audio: { url: tiktod.download.music }, mimetype: "audio/mp4", ptt: false }, { quoted: tikvid })
}
break
case "remini": {
  if (!isPremium && !isOwner) return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  if (!/image/.test(mime)) return reply("Reply Foto Nya Dengan Teks " + prefix + command)
  const media = await quoted.download()
  const proses = await remini(media, "enhance")
  x.sendMessage(from, { image: proses, caption: "Sukses Kak" }, { quoted: nx })
}
break
case "hidetag": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  if (!text) return reply("Teks Nya Mana Kak?")
  global.texthidetag = text
  x.sendMessage(from, { text : global.texthidetag , mentions: pwkdnwn.map(a => a.id)}, { quoted: nx })
}
break
case "join": {
  if (!isOwner) return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  if (!text) return reply("where's the link bro?")
  if (!text.includes("chat.whatsapp.com")) return reply("link not listed !")
  let ano = text.split("https://chat.whatsapp.com/")[1]
  x.groupAcceptInvite(ano)
  reply(`Success bro`)
}
break
case "cekidgc": {
  if (!isOwner) return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  x.showGroups(nx)
}
break
case "savecontactgc": {
  if (!isPremium && !isOwner) {
    return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  } else {
    if (!isGroup) {
      return reply("Khusus Dalam Group Yah BNG YAN")
    } else {
      const { participants } = await x.groupMetadata(from)
      x.saveContacts(nx, participants)
    }
  }
}
break
case "savecontactid": {
  if (!isPremium && !isOwner) {
    return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  } else {
    if (!q) {
      return x.reply(nx, "BOT BY BNG YAN\nSAVE CONTACTS ID\n\n" + "*Pastikan format yang anda berikan valid*\n*Contoh*: .savecontactsid 286472837748382882@g.us")
    } else {
      const prtpnt = await x.groupMetadata(q)
      x.saveContacts(nx, prtpnt.participants)
    }
  }
}
break
case "pushkontakgc": {
  if (!isPremium && !isOwner) {
    return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  } else {
    if (!isGroup) {
      return reply("Khusus Dalam Group")
    } else {
      if (!q) {
        await x.reply(nx, "BOT BY BNG YAN\nPUSH CONTACTS\n\n" + `*Format Yang Anda Berikan Tidak Valid*\n*Contoh*: .${command} Hallo Kak|5`)
      } else {
        x.pushContacts(nx, nx.chat, q)
      }
    }
  }
}
break
case "pushkontakid": {
  if (!isPremium && !isOwner) {
    return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  } else {
    if (!q) {
      return x.reply(nx, "BOT BY BNG YAN\nPUSH CONTACTS ID\n\n" + "*Pastikan Format Yang Anda Berikan Valid*\n*Contoh*: .pushcontactsid Hallo Kak|5|82738282837389173@g.us")
    } else {
      const isMeki = q.split("|")[2]
      if (!isMeki) {
        return x.reply(nx, "BOT BY BNG YAN\nPUSH CONTACTS ID\n\n" + "*Pastikan format yang anda berikan valid*\n*Contoh*: .pushcontactsid Hallo Kak|5|82738282837389173@g.us")
      } else {
        x.pushContacts(nx, isMeki, q)
      }
    }
  }
}
break
case "jpm": {
  if (!isOwner) {
    return reply("Khusus Pembeli Bot Di BNG YAN Jika Minat Bisa Ketik Hubungi wa.me/6285783128015")
  } else {
    if (isGroup) {
      return reply("Khusus Private Chat")
    } else {
      if (!q) {
        await x.reply(nx, "BOT BY BNG YAN\nCHAT ALL GROUP\n\n" + `*Format Yang Anda Berikan Tidak Valid*\n*Contoh*: ${prefix+command} Hallo Kak|5`)
      } else {
        x.sendChatAllGroup(nx, q)
      }
    }
  }
}
break
case "telegraph": {
  try {
    let mee = await x.downloadAndSaveMediaMessage(quoted)
    let mem = await uptotelegra(mee)
    reply(util.format(mem))
  } catch (err) {
    reply(`Reply Image Nya Bang`)
  }
}
break
case "toimg": {
  if (!quoted) return reply(`Balas sticker dengan caption *${prefix+command}*`)
  if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix+command}*`)
  let media = await x.downloadAndSaveMediaMessage(quoted)
  let ran = `${Math.floor(Math.random() * 100000)}.png`
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) return x.sendMessage(from, { text: util.format(err) }, { quoted: nx })
    let buffer = fs.readFileSync(ran)
    x.sendMessage(from, { image: buffer }, { quoted: nx })
    fs.unlinkSync(ran)
  })
}
break
case "sticker": {
  if (/image/.test(mime)) {
    let media = await quoted.download()
    let encmedia = await x.sendStimg(from, media, nx, { packname: "", author: x.name })
    await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return reply(`Reply Gambar/Video Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
    let media = await quoted.download()
    let encmedia = await x.sendStvid(from, media, nx, { packname: "", author: x.name })
    await fs.unlinkSync(encmedia)
  } else {
    reply(`Reply Gambar/Video Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
  }
}
break
case "qc": {
  if (!q) return reply(`Command ${prefix+command} text`)
  try {
    var linkppuserp = await x.profilePictureUrl(nx.sender, 'image')
  } catch {
    var linkppuserp = 'https://telegra.ph/file/e323980848471ce8e2150.png'
  }
  const json = { 
    "type": "quote", 
    "format": "png", 
    "backgroundColor": 
    "#FFFFFF", 
    "width": 512, 
    "height": 768, 
    "scale": 2, 
    "messages": [{ 
      "entities": [], 
      "avatar": true, 
      "from": { 
        "id": 1, 
        "name": nx.pushName, 
        "photo": { 
          "url": linkppuserp 
        }
      }, 
      "text": q, 
      "replyMessage": {}
    }]
  }
  const response = axios.post('https://bot.lyo.su/quote/generate', json, {
    headers: {'Content-Type': 'application/json'}
  }).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    var opt = { packname: "", author: x.name }
    x.sendStimg(from, buffer, nx, opt)
  })
}
break
case "owner": {
  x.sendMessage(from, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, contextInfo: { forwardingScore: 9999999,  isForwarded: true, mentionedJid: [sender] }}, { quoted: nx })
}
break
default:
}
} catch (e) {
console.log(util.format(e))
}
}

const file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update File ${__filename}`))
  delete require.cache[file]
  require(file)
})