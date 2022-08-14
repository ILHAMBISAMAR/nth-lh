let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    conn.sendBut(m.chat, `_*${global.db.data.users[who].limit}*_ _*Limit Tersisa ಥ_ಥ, limit akan di reset setiap harinya jam 07:00, jika ingin unlimited ketik .sewa*_`, wm, 'BELI', '.buy',m)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler
