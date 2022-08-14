let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/random/quotes?apikey=LuckyBotz')
  let quotes = await url.json()
let hasil = `
*By:* *${quotes.result.by}*

Quotes: ${quotes.result.quote}
`.trim()

  m.reply(hasil)
}
handler.help = ['quotes2']
handler.tags = ['internet']
handler.command = /^(quote2|quotes2)$/i
handler.limit = true

module.exports = handler
