let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/instagram2?apikey=LuckyBotz&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { account, caption, media } = json.result
await conn.sendFile(m.chat, media, 'tt.mp4', `
*Name:* ${account.username}
*full name:* ${account.full_name}
*Caption:* ${caption}
*Lucky_Botz*`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['instagram2 <url>']
handler.tags = ['downloader']
handler.command = /^(ig2|igdl2|instagram2)$/i
handler.limit = true
module.exports = handler