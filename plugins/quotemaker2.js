let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.quotemaker2 seperti aku bercinta dengan pacarku'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/quotemaker?apikey=LuckyBotz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `By Lucky Botz`, m, false)
}
handler.help = ['quotemaker2'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(quotemaker2)$/i
handler.limit = true
module.exports = handler
