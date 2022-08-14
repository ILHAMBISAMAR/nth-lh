let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '.attp text'
  m.reply('_Proses..._')
  let res = `https://api.lolhuman.xyz/api/hartatahta?apikey=LuckyBotz&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `*Lucky Botz @130721*`, m, false)
}
handler.help = ['tahta2 <teks>']
handler.tags = ['tools']
handler.command = /^(tahta2)$/i
handler.limit = true

module.exports = handler