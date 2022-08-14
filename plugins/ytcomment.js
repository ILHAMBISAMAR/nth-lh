let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.ytcomment nama emakmu | komentar'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/ytcomment?apikey=LuckyBotz&username=${response[0]}&comment=${response[1]}&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['ytcomment'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(ytcomment)$/i
handler.limit = true
module.exports = handler



