let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.logoff mamiculo'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=LuckyBotz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `logo epep nya`, m, false)
}
handler.help = ['logoff'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logoff)$/i
handler.limit = true
module.exports = handler
