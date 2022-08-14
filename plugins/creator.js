const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Lucky;;;'
                    + 'FN:Lucky Ofc\n' // full name
                    + 'item1.X-ABLabel:Mau masukin bot ke gc Lu chat Gw\n'
                    + 'URL;Web gwejh: Lucky.github.io\n'
                    + 'EMAIL;Email Owner: ilham.bismar12@gmail.com\n'
                    + 'ORG:LuckyOfc;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=62895622103754:+62895622103754\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Lucky Ofc', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler




