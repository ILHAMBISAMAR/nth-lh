let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastnambang)
    let _timers = (25000000 - __timers)
    let timers = clockString(_timers) 
    let botol = global.botwm
    let minsm = `${Math.floor(Math.random() * 1000000)}`.trim()
    let minim = `${Math.floor(Math.random() * 100)}`.trim() 
    let minam = `${Math.floor(Math.random() * 2)}`.trim() 
    let minkm = `${Math.floor(Math.random() * 5)}`.trim() 
    let minbm = `${Math.floor(Math.random() * 10)}`.trim()
    let minbmm = `${Math.floor(Math.random() * 2)}`.trim()
    let minbmmm = `${Math.floor(Math.random() * 1)}`.trim() 

   if ( user.pickaxe > 0 ) {
    if (new Date - user.lastnambang > 25000000) {
      user.exp += minsm * 1
      user.voucher += minim * 1
      user.ruby += minam * 1
      user.legendary += minkm * 1
      user.mythic += minbm * 1
      user.superior += minbmm * 1
      user.zamrud += minbmmm * 1
      user.lastnambang = new Date * 1
            
    m.reply(`Kamu Menambang Di ${pickRandom(['⛰️Lembah', '⛰️Goa mletre', '🏞️Sungai Selandia', '⛰️Goa texas', '...'])}\n*⚒️Hasil Tambang Vip 🎉*\n📉Exp: *${minsm}*\n🎟Voucher: *${minim}*\n👑 Superior Crate: *${minbmm}*\n🎁Mythic: *${minbm}*\n🧰Legendary: *${minkm}*\n*_Dan Juga Kamu Mendapatkan Hadiah legenda Tambahan =_*\n💍 Ruby: *${minam}*\n🔮 Zamrud: *${minbmmm}*`)
      } else conn.reply( m.chat, `Tunggu 🕓${timers} lagi, untuk menambang`, m)
    } else conn.reply( m.chat, `Kamu Tidak Mempunyai *⛏️Pickaxe* untuk menambang\nBuat Lah Pickaxe menggunakan string kayu dan batu!`,m )
  }

handler.help = ['nambangprem']
handler.tags = ['rpg']
handler.command = /^nambangprem/i
handler.premium = true
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}