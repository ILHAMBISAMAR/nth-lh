let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/random/katabijak?apikey=LuckyBotz')
  let bijak = await url.json()
let hasil = `
*Kata Bijak*

${bijak.result}

*${global.wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['katabijak2']
handler.tags = ['internet']
handler.command = /^(katabijak2)$/i
handler.limit = true

module.exports = handler
