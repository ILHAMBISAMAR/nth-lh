let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.logolol mamiculo'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=LuckyBotz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `lol nya ngab`, m, false)
}
handler.help = ['logolol'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logolol)$/i
handler.limit = true
module.exports = handler
