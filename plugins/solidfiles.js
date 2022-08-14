let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/solidfiles?apikey=LuckyBotz&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { title, size, uploaded, link } = json.result
await conn.sendFile(m.chat, link, 'file.zip', `
*File name:* ${title}
*File type:* ${size}
*Ukuran file:* ${uploaded}
*Lucky_Botz*`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['solidfiles <url>']
handler.tags = ['downloader']
handler.command = /^(solidfiles)$/i
handler.limit = true
module.exports = handler