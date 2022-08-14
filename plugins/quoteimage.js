let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
  await conn.sendButtonImg(m.chat, `https://api.lolhuman.xyz/api/random/quotesimage?apikey=LuckyBotz`, 'quotes image', wm, 'Next', `.quotesimage`, m)

}
handler.help = ['quotesimage']
handler.tags = ['internet']
handler.command = /^(quotesimage|quoteimage)$/i
handler.limit = true

module.exports = handler
