let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let hasil = `
*––––––『 Jadi Botz 』––––––*

Hai 👋
mau jadi bot?
Gampang kok cuman modal 2 Hp doang udh bisa jdi bot gan !!
anda gapunya sc? tenang aja bisa pakai sc saya kok..
Saya menyediakan jasa run buat agan" yg mau punya bot sendiri yg aktif 24 jam nya !!
Keuntungan jadi Owner bot yaitu :

*bisa nyewain bot ke orang-orang*

*Harga Jasa Run Bot 24 jam :*
*25k = 1 bulan*
*45k = 2 bulan*
*80k = 4 bulan*

Bisa via dana, ovo , qris all payment

Contact person Owner:
wa.me/62895622103754 (Owner)

My Website:
https://instagram.com/ilham.bsmr

`.trim()

  m.reply(hasil)
}
handler.help = ['jadibot']
handler.tags = ['main']
handler.command = /^(jadibot)$/i

module.exports = handler
