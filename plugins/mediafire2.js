let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=LuckyBotz&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { filename, filetype, filesize, uploaded, link } = json.result
await conn.sendFile(m.chat, link, 'tt.mp4', `
*File name:* ${filename}
*File type:* ${filetype}
*Ukuran file:* ${filesize}
*Upload:* ${uploaded}
*Lucky_Botz*`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['mediafire2 <url>']
handler.tags = ['downloader']
handler.command = /^(mediafire2)$/i
handler.limit = true
module.exports = handler