let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/instagramreel?apikey=LuckyBotz&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { title, like, owner, view, link } = json.result
await conn.sendFile(m.chat, link, 'tt.mp4', `
*Judul:* ${title}
*full name:* ${owner}
*like:* ${like}
*view:* ${view}
*Lucky_Botz*`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['instagramreel <url>', 'igreel <url>']
handler.tags = ['downloader']
handler.command = /^(igreel|instagramreel)$/i
handler.limit = true
module.exports = handler