let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/random/quotesnime?apikey=LuckyBotz')
  let animes = await url.json()
let hasil = `
*By:* *${animes.result.character}*

Quotes: ${animes.result.quote}

Anime: ${animes.result.anime}
`.trim()

  m.reply(hasil)
}
handler.help = ['quoteanime']
handler.tags = ['internet']
handler.command = /^(quoteanime|quotesanime)$/i
handler.limit = true

module.exports = handler
