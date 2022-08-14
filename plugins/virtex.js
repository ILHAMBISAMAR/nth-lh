let axios = require("axios");
let handler = async (m, { conn, command }) => {
   await m.reply('Searching...') 
   axios.get(`https://raw.githubusercontent.com/ImByu/Api-Github/main/virus/${command}.json`).then ((res) => {
let hasil = `
*JIKA LAG JANGAN SALAH KAN BOT*

${res.data}
`.trim()
    conn.reply(m.chat, hasil, m)
  })
}
handler.help = ['virtex1', 'virtex2', 'virtex3']
handler.tags = ['premium']
handler.command = /^(virtex1|virtex2|virtex3)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler