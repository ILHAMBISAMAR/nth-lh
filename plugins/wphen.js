let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
  await conn.sendButtonImg(m.chat, `https://api.lolhuman.xyz/api/random2/wallpaper?apikey=LuckyBotz`, 'walpaper hentainya kak', wm, 'Next', `.wphentai`, m)

}
handler.help = ['wallhentai']
handler.tags = ['dewasa']
handler.command = /^(wphentai|wallhentai)$/i
handler.premium = true

module.exports = handler
