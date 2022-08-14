let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=LuckyBotz&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let {link, title, size} = json.result
await conn.sendFile(m.chat, link, 'tt.mp4', `
*Judul:* ${title}\n*Ukuran:* ${size}\n\n*Lucky_Botz @130721*`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['ytmp42 <url>']
handler.tags = ['downloader']
handler.command = /^(ytmp42)$/i
handler.limit = true
module.exports = handler