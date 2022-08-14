let handler = async(m, { conn, text, message }) => {
	   let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
	    if (!text) throw `tag orang yang mau di demote`
		await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
handler.help = ['demote'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(demote)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler

const jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}