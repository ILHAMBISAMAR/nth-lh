let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.attp text'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/attp?apikey=LuckyBotz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', ``, m, false)
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i
handler.limit = true

module.exports = handler
