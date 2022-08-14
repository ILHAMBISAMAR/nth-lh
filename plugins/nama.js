let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/random/nama?apikey=LuckyBotz')
  let nama = await url.json()
let hasil = `
Nama: ${nama.result}
`.trim()

  m.reply(hasil)
}
handler.help = ['namarandom']
handler.tags = ['internet']
handler.command = /^(namarandom)$/i
handler.limit = true

module.exports = handler
