let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/random/faktaunik?apikey=LuckyBotz')
  let cerpen = await url.json()
let hasil = `
*Fakta Unik*

${cerpen.result}

*${global.wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['fakta']
handler.tags = ['internet']
handler.command = /^(fakta)$/i
handler.limit = true

module.exports = handler
