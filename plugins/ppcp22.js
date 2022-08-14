let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
 let url = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=LuckyBotz')
  if (!url.ok) throw await url.text()
  let json = await url.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'cowo', m)
  await conn.sendFile(m.chat, json.result.female, '', 'cewe', m)
}
handler.help = ['ppcouple2', 'ppcp2']
handler.tags = ['internet']
handler.command = /^(ppcouple2|ppcp2)$/i
handler.limit = true

module.exports = handler

