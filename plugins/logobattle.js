let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.logobattlefield Text1 | text2'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=LuckyBotz&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logobattlefield'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logobattlefield)$/i
handler.limit = true
module.exports = handler



