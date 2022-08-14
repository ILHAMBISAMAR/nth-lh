let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.logoaov mamiculo'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=LuckyBotz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `AOV nya ngab`, m, false)
}
handler.help = ['logoaov'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logoaov)$/i
handler.limit = true
module.exports = handler
