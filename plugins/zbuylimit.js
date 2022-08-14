const moneyperlimit = 20000
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^bely/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / moneyperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= moneyperlimit * count) {
    global.db.data.users[m.sender].money -= moneyperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.sendBut(m.chat, `-${moneyperlimit * count} Money\n+ ${count} Limit`, wm, 'Bely All', '.belyall', m)
  } else conn.sendBut(m.chat, `*Money tidak mencukupi untuk membeli ${count} limit!!*, *makanya beli money biar jadi sultan!!*`, wm, 'Klaim Harian', '.daily', m)
}
handler.help = ['bely<jumlah limit>', 'bely <jumlah limit>', 'belyall']
handler.tags = ['xp']
handler.command = /^bely([0-9]+)|bely|belyll$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler