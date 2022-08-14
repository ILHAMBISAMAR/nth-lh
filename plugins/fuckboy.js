let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.fuckboy nama'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/fuckboy?apikey=LuckyBotz&name=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `Sudah jadi ngab`, m, false)
}
handler.help = ['fuckboy'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(fuckboy)$/i
handler.limit = true
module.exports = handler
