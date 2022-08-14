let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.pacarsertivikat nama emakmu | nama bapakmu'
  m.reply('Proses...')
  let res = `https://api.lolhuman.xyz/api/pacarserti?apikey=Lucky44&name1=${response[0]}&name2=${response[1]}`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['pacarsertivikat'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(pacarsertivikat)$/i
handler.limit = true
module.exports = handler



