let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/quotes/dilan?apikey=LuckyBotz')
  let dilan = await url.json()
let hasil = `
*quotes Dilan*

${dilan.result}

*${global.wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['quotedilan']
handler.tags = ['internet']
handler.command = /^(quotedilan)$/i
handler.limit = true

module.exports = handler
