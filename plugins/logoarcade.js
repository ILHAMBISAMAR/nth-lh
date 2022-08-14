let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.logoarcade Text1 | text2'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/photooxy2/arcade8bit?apikey=LuckyBotz&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logoarcade'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logoarcade)$/i
handler.limit = true
module.exports = handler



