let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
  await conn.sendButtonImg(m.chat, `https://api.lolhuman.xyz/api/random2/anal?apikey=LuckyBotz`, 'walpaper hentainya kak', wm, 'Next', `.wallanal`, m)

}
handler.help = ['wallanal']
handler.tags = ['dewasa']
handler.command = /^(wallanal)$/i
handler.premium = true

module.exports = handler
