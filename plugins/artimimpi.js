let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) return m.reply('Mimpi apa? ')
  let res = await fetch(global.API('rey',  '/api/primbon/artimimpi', { text: text }, 'apikey'))
  let json = await res.json()
  if (!json) throw 'eror!'
  m.reply(`${json.result.hasil}`)
}
handler.help = ['artimimpi'].map(v => v + ' [mimpi]')
handler.tags = ['kerang']
handler.command = /^(artimimpi)$/i
handler.limit = true

module.exports = handler