let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/random/bucin?apikey=LuckyBotz')
  let bucin1 = await url.json()
let hasil = `
*Bucin Cok*

${bucin1.result}

*${global.wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['bucin3']
handler.tags = ['internet']
handler.command = /^(bucin3)$/i
handler.limit = true

module.exports = handler
