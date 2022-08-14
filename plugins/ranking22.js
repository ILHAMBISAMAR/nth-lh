let fetch = require('node-fetch')
let fs = require('fs')
let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
let userslevel = sortedlevel.map(v => v[0])                 
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
  let res = `https://api.lolhuman.xyz/api/rank?apikey=LuckyBotz&img=${await conn.profilePictureUrl(m.sender).catch(_ => '')}&background=https://telegra.ph/file/9992b41755aebf50da6ab.jpg&username=${user.name}&level=${user.level}&ranking=${userslevel.indexOf(m.sender) + 1}&currxp=${user.exp}&xpneed=999999999`
  conn.sendFile(m.chat, res, 'neko.jpg', `rank kamu`, m, false)
}
handler.help = ['ranked']
handler.tags = ['main']
handler.command = /^(ranked)$/i
module.exports = handler
