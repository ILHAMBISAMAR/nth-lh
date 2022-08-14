let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let hasil = `
*––––––『 SEWA 』––––––*
Open Sewa Bot WhatsApp
(Games-Wabot With Library: Baileys Multi Device)

Keunggulan:
• Fast Respon Karena Multi Device
• Dijalankan Dengan Nodejs Menggunakan Remote Desktop Protocol(RDP)

Fitur:
Game, RPG, Downloader, Internet, Fun, Dll

Price:
Rp. 10.000
30 Day(1 Group)

Rp. 5.000
30 Day( Premium )

Rp. 5.000
Money(500 M)

Rp. 5.000
Exp(30 juta)

Payment:
- Dana
- Gopay
- Qris(+Pajak ±1k)
- Pulsa(+5k)

Minat?
Hubungi:
https://wa.me/62895622103754

Note: 
• Harap Baca Syarat & Ketentuan Pengguna Bot pada Bot WhatsApp
*${global.wm}*
`.trim()

  m.reply(hasil)
}
handler.help = ['sewabot']
handler.tags = ['main', 'info']
handler.command = /^(sewa|sewabot)$/i

module.exports = handler
