let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/smule?apikey=LuckyBotz&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let {audio} = json.result
await conn.sendFile(m.chat, audio, 'tt.mp3', ``, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['smule <url>']
handler.tags = ['downloader']
handler.command = /^(smule?)$/i
handler.limit = true
module.exports = handler