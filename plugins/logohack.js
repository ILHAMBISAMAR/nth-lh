let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.logohacker mamiculo'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=LuckyBotz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `hacker nya ngab`, m, false)
}
handler.help = ['logohacker'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logohacker)$/i
handler.limit = true
module.exports = handler
