let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.tolos nama'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/toloserti?apikey=Lucky44&name=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `Sudah jadi ngab`, m, false)
}
handler.help = ['tolos'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(tolos)$/i
handler.limit = true
module.exports = handler
