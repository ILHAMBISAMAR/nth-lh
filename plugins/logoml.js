let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.logoml mamiculo'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=LuckyBotz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `ml nya ngab`, m, false)
}
handler.help = ['logoml'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logoml)$/i
handler.limit = true
module.exports = handler
