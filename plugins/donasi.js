let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let hasil = `
*––––––『 DONATE 』––––––*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
•Dana: [081333254382]
•Gopay: [081333254382]
•Ovo: [081333254382]
└────

┌〔 Donasi • Pulsa 〕
•Telkomsel: [081333254382]
•Tri: [0895622103754]
└────
Berapapun donasi kalian akan sangat berarti 👍

Terimakasih:)

Contact person Owner:
https://wa.me/62895622103754

My Instagram:
https://instagram.com/ilham.bsmr
*${global.wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['donasi', 'donate']
handler.tags = ['info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
