let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/random/pantun?apikey=LuckyBotz')
  let pantun = await url.json()
let hasil = `
*Pantun*

${pantun.result}

*${global.wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['pantun2']
handler.tags = ['internet']
handler.command = /^(pantun2)$/i
handler.limit = true

module.exports = handler
