let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/tiktokmusic?apikey=LuckyBotz&url=${args[0]}`
  conn.sendFile(m.chat, res, 'neko.mp3', ``, m, false)
}
handler.help = ['tiktokmp3 <url>', 'ttmp3 <url>']
handler.tags = ['downloader']
handler.command = /^(tiktokmp3|(ttmp3)?)$/i
handler.limit = true
module.exports = handler