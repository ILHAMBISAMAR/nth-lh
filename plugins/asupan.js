let fetch = require('node-fetch')                                    
let handler = async (m, { conn, usedPrefix, command }) => {          
     m.reply('tunggu...')                                            
  let res = await (await fetch('https://raw.githubusercontent.com/LuiXyz/RESTAPI/master/data/asupan.json').json()
  let json = res[Math.floor(Math.random() * res.length)]             
  conn.sendFile(m.chat, json.video, 'pan.mp4', `asupannya kak`, m, false)
}                                                                    
handler.help = ['asupan']                                            
handler.tags = ['asupan']                                             
handler.command = /^(asupan)$/i                                      
                                                                     
module.exports = handler