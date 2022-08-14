let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/quotes/islami?apikey=LuckyBotz')
  let islam = await url.json()
let hasil = `
*quotes islam*

${islam.result}

*${global.wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['quoteislam']
handler.tags = ['internet']
handler.command = /^(quoteislam)$/i
handler.limit = true

module.exports = handler
