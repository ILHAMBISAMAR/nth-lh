let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.attp text'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/nulis?apikey=LuckyBotz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', ``, m, false)
}
handler.help = ['nulis <teks>']
handler.tags = ['nulis']
handler.command = /^nulis$/i
handler.limit = true

module.exports = handler
