let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.logodota mamiculo'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=LuckyBotz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `dota nya ngab`, m, false)
}
handler.help = ['logodota'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logodota)$/i
handler.limit = true
module.exports = handler
