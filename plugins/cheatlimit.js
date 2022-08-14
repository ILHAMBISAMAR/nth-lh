let fetch = require('node-fetch')
let handler = async (m, { text }) => {
m.reply('awaokawaok:v, Beli bang pake xp jangan curang🗿\n\n1 Limit = 7500 Exp')

}
handler.help = ['cheatlimit']
handler.tags = ['xp']
handler.command = /^cheatlimit$/i

module.exports = handler