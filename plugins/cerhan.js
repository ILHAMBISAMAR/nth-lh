let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/ceritahoror?apikey=LuckyBotz')
  let cerhan = await url.json()
let hasil = `
${cerhan.result.title}
${cerhan.result.desc}
${cerhan.result.story}

*${global.wm}*
`.trim()

  m.reply(hasil)
}

handler.help = ['ceritahantu']
handler.tags = ['internet', 'fun', 'quotes']
handler.command = /^(ceritahantu|cerhan)$/i
handler.limit = true

module.exports = handler