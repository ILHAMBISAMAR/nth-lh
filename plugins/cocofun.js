let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=LuckyBotz&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { tag, likes, dislike, views, uploader, duration, nowm } = json.result
await conn.sendFile(m.chat, nowm, 'file.zip', `
*Nama:* ${uploader}
*Tag:* ${tag}
*Like:* ${likes}
*Dislike:* ${dislike}
*Viewes:* ${views}
*Durasi:* ${duration}

*By Lucky_Botz*`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['cocofun <url>']
handler.tags = ['downloader']
handler.command = /^(cocofun)$/i
handler.limit = true
module.exports = handler