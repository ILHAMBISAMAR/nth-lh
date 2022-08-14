let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/random/katabucin?apikey=LuckyBotz')
  let bucin2 = await url.json()
let hasil = `
*Bucin Cok*

${bucin2.result}

*${global.wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['bucin2']
handler.tags = ['internet']
handler.command = /^(bucin2)$/i
handler.limit = true

module.exports = handler
