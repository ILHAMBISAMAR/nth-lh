let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.fuckgirl nama'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/fuckgirl?apikey=LuckyBotz&name=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `Sudah jadi ngab`, m, false)
}
handler.help = ['fuckgirl'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(fuckgirl)$/i
handler.limit = true
module.exports = handler
