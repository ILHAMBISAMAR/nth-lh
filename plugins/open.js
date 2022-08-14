let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    try {
        let bruh = `${usedPrefix}${command} [crate] [count]\n\nContoh penggunaan: *${usedPrefix}${command} common 10*\n\nlist crate:\n*📦common*\n*🛍️uncommon*\n*🎁mythic*\n*🧰legendary*\n*👑superior*\n*🔐ancient*\n*🔐superancient*\n*📫Pet*\n*🎟voucher*`
        let user = global.db.data.users[m.sender]
        let type = (args[0] || '').toLowerCase()
        let count = isNumber(args[1]) ? (Math.round(Math.max(1, args[1]))) * 1 : 1 
        if (type === 'common') {
             if ((user.common * 1) < count) return m.reply(onKurang(type))
            let cmoney = 0, cexp = 0, ccommon = 0, cuncommon = 0, cpotion = 0 
            try {
                for (let i = 0; i < count; i++) {
                    cmoney += (random(101)) * 1                    
                    cexp += (random(201)) * 1                    
                    ccommon += (pickRandom([0, 0, 0, 1, 0, 0, 0])) * 1                      
                    cuncommon += (pickRandom([0, 0,0, 0, 0, 1, 0, 0, 0, 0])) * 1                     
                    cpotion += (pickRandom([0, 0, 1, 0, 0, 0, 0])) * 1
                }
            } finally { 
                user.common -= count * 1 
                user.money += cmoney * 1
                user.exp += cexp * 1
                user.potion += cpotion * 1
                user.common += ccommon * 1
                user.uncommon += cuncommon * 1
                m.reply(msg(type, count, cmoney, cexp, false, cpotion, false, false, false, false, ccommon, cuncommon, false))
            }
        } else if (type === 'uncommon') {
            if ((user.uncommon * 1) < count) return m.reply(onKurang(type))
            let udiamond = 0, umoney = 0, uexp = 0, umythic = 0, upotion = 0, uuncommon = 0, ucommon = 0, ukayu = 0, ustring = 0, ubatu = 0
            try {
                for (let i = 0; i < count; i++) {
                    udiamond += (pickRandom([0,0,0, 0, 0, 1, 0,0,0,0,0])) * 1
                    umoney += (random(201)) * 1
                    uexp += (random(301)) * 1
                    umythic += (pickRandom([0, 0, 0, 0,0,0,0, 1, 0, 0, 0, 0,0,0,0])) * 1
                    upotion += (pickRandom([0, 1, 0, 0, 0])) * 1
                    uuncommon += (pickRandom([0,0,0, 0,0, 1, 0, 0, 0, 0, 0, 0,0,0])) * 1
                    ucommon += (pickRandom([0,0,0,0,0,1,0,0])) * 1
                    ukayu += (pickRandom([0, 0, 1])) * 1
                    ustring += (pickRandom([0, 0, 1])) * 1
                    ubatu += (pickRandom([0, 0, 1, 0])) * 1
                }
            } finally {
                user.uncommon -= count * 1 
                user.money += umoney * 1
                user.exp += uexp * 1
                user.diamond += udiamond * 1
                user.common += ucommon * 1
                user.uncommon += uuncommon * 1
                user.potion += upotion * 1
                user.kayu += ukayu * 1
                user.batu += ubatu * 1
                user.string += ustring * 1
                m.reply(msg(type, count, umoney, uexp, false, upotion, ukayu, ubatu, ustring, false, ucommon, uuncommon, udiamond))
                if (umythic > 0) {
                    user.mythic += umythic * 1
                    m.reply(haveRare(umythic))
                }
            }
            } else if (type === 'voucher') {
            if ((user.voucher * 1) < count) return m.reply(onKurang(type))
            let aulimit = 0
            try {
                for (let i = 0; i < count; i++) {
		            aulimit += (pickRandom([3, 2, 5, 4, 7, 13, 9, 10, 1, 4, 4, 2, 2, 40, 1, 10, 7, 7, 5, 24, 40, 3, 1, 1, 50, 1, 20, 15, 8, 16, 6])) * 1
                }
            } finally {
                user.voucher -= count * 1 
		        user.limit += aulimit * 1
                m.reply(msg(type, count,  false,  false, aulimit , false, false, false, false, false, false, false, false))        
            }
        } else if (type === 'glory') {
            if ((user.glory * 1) < count) return m.reply(onKurang(type))
            let mmoney = 0, mexp = 0, mmyhtic = 0, mpotion = 0, mdiamond = 0, mlegendary = 0, mcommon = 0, muncommon = 0, mkayu = 0, mbatu = 0, mstring = 0, miron = 0, mpet = 0 
            try {
                for (let i = 0; i < count; i++) {
                    mmoney += (random(100001)) * 1
                    mexp += (random(120001)) * 1
                    mpotion += (random(10)) * 1
                    mdiamond += (pickRandom([4, 5, 6, 7, 3, 8, 9, 10])) * 1
                    mlegendary += (pickRandom([5,7,2, 8, 9, 1, 10,6,5,2, 4, 3])) * 1
                    mcommon +=  (pickRandom([0, 0, 0,0, 0, 1, 0,])) * 1
                    muncommon += (pickRandom([0, 0, 0, 1, 0, 0, 0,])) * 1
                    mkayu += (random(1000)) * 1 
                    mbatu += (random(1000)) * 1 
                    mstring += (random(1000)) * 1
                    miron += (pickRandom([0, 0, 1, 0])) * 1
                    mpet += (pickRandom([4, 3, 5, 1, 2])) * 1
                    mmyhtic += (pickRandom([7, 5, 3, 1, 6, 4, 9, 3])) * 1 
                }
            } finally {
                user.mythic -= count * 1 
                user.money += mmoney * 1 
                user.exp += mexp * 1 
                user.potion += mpotion * 1 
                user.diamond += mdiamond * 1 
                user.common += mcommon * 1 
                user.uncommon += muncommon * 1 
                user.batu += mbatu * 1 
                user.kayu += mkayu * 1
                user.string += mstring * 1 
                user.iron += miron * 1 
                m.reply(msg(type, count, mmoney, mexp, false, mpotion, mkayu, mbatu, mstring, miron, mcommon, muncommon, mdiamond))
                if (mmyhtic > 0) {
                    user.mythic += mmyhtic * 1 
                    m.reply(haveRare(mmyhtic))
                } 
                if (mlegendary > 0 || mpet > 0) {
                    user.legendary += mlegendary * 1 
                    user.pet += mpet * 1
                    m.reply(haveEpic(mlegendary, mmythic))
                }
            }        
        } else if (type === 'mythic') {
            if ((user.mythic * 1) < count) return m.reply(onKurang(type))
            let mmoney = 0, mexp = 0, mmyhtic = 0, mpotion = 0, mdiamond = 0, mlegendary = 0, mcommon = 0, muncommon = 0, mkayu = 0, mbatu = 0, mstring = 0, miron = 0, mpet = 0 
            try {
                for (let i = 0; i < count; i++) {
                    mmoney += (random(301)) * 1
                    mexp += (random(401)) * 1
                    mpotion += (random(3)) * 1
                    mdiamond += (pickRandom([0, 0, 0, 0, 1, 0, 0, 0])) * 1
                    mlegendary += (pickRandom([0,0,0, 0, 0, 1, 0,0,0,0, 0, 0])) * 1
                    mcommon +=  (pickRandom([0, 0, 0,0, 0, 1, 0,])) * 1
                    muncommon += (pickRandom([0, 0, 0, 1, 0, 0, 0,])) * 1
                    mkayu += (random(2)) * 1 
                    mbatu += (random(2)) * 1 
                    mstring += (random(2)) * 1
                    miron += (pickRandom([0, 0, 1, 0])) * 1
                    mpet += (pickRandom([0, 0, 0, 1, 0])) * 1
                    mmyhtic += (pickRandom([0, 0, 0, 1, 0, 0, 0, 0])) * 1 
                }
            } finally {
                user.mythic -= count * 1 
                user.money += mmoney * 1 
                user.exp += mexp * 1 
                user.potion += mpotion * 1 
                user.diamond += mdiamond * 1 
                user.common += mcommon * 1 
                user.uncommon += muncommon * 1 
                user.batu += mbatu * 1 
                user.kayu += mkayu * 1
                user.string += mstring * 1 
                user.iron += miron * 1 
                m.reply(msg(type, count, mmoney, mexp, false, mpotion, mkayu, mbatu, mstring, miron, mcommon, muncommon, mdiamond))
                if (mmyhtic > 0) {
                    user.mythic += mmyhtic * 1 
                    m.reply(haveRare(mmyhtic))
                } 
                if (mlegendary > 0 || mpet > 0) {
                    user.legendary += mlegendary * 1 
                    user.pet += mpet * 1
                    m.reply(haveEpic(mlegendary, mpet))
                }
            }
        } else if (type === 'legendary') {
            if ((user.legendary * 1) < count) return m.reply(onKurang(type))
            let lmoney = 0, lexp = 0, lmyhtic = 0, lpotion = 0, ldiamond = 0, llegendary = 0, lcommon = 0, luncommon = 0, lkayu = 0, lbatu = 0, lstring = 0, liron = 0, lpet = 0 
            try {
                for(let i = 0; i < count; i++) {
                    lmoney += (random(100000)) * 1 
                    lexp += (random(20000)) * 1 
                    lpotion += (random(30)) * 1 
                    ldiamond += (pickRandom([0, 0,1, 0, 0,0])) * 1 
                    lcommon += (pickRandom([0, 0, 1, 0, 0])) * 1 
                    luncommon += (pickRandom([0, 0, 0, 0, 1, 0 ,0])) * 1 
                    lkayu += (random(2)) * 1 
                    lbatu += (random(2)) * 1 
                    lstring += (random(2)) * 1 
                    liron += (random(2)) * 1 
                    lpet += (pickRandom([0, 0, 0, 1, 0])) * 1
                    lmyhtic += (pickRandom([0, 0, 1, 0, 0, 0, 0, 0, 0])) * 1 
                    llegendary += (pickRandom([0, 0, 0, 1, 0, 0, 0 ,0 ,0])) * 1 
                    
                }
            } finally {
                user.legendary -= count * 1
                user.money += lmoney * 1 
                user.exp += lexp * 1
                user.potion += lpotion * 1 
                user.kayu += lkayu * 1 
                user.batu += lbatu * 1 
                user.string += lstring * 1 
                user.iron += liron * 1 
                user.common += lcommon * 1 
                user.uncommon += luncommon * 1 
                user.diamond += ldiamond * 1 
                m.reply(msg(type, count, lmoney, lexp, false, lpotion, lkayu, lbatu, lstring, liron, lcommon, luncommon, ldiamond))
                if (lmyhtic > 0) { 
                    user.mythic += lmyhtic * 1 
                    m.reply(haveRare(lmyhtic))
                }
                if (llegendary > 0 || lpet > 0) {
                    user.legendary += llegendary * 1 
                    user.pet += lpet * 1 
                    m.reply(haveEpic(llegendary, lpet))
                }
            }
        } else if (type === 'superior') {
            if ((user.superior * 1) < count) return m.reply(onKurang(type))
            let zmoney = 0, zexp = 0, zmyhtic = 0, zpotion = 0, zdiamond = 0, zlegendary = 0, zcommon = 0, zuncommon = 0, zkayu = 0, zbatu = 0, zstring = 0, ziron = 0, zpet = 0 
            try {
                for(let i = 0; i < count; i++) {
                    zmoney += (random(10000000)) * 1 
                    zexp += (random(200000)) * 1 
                    zpotion += (random(30)) * 1 
                    zdiamond += (pickRandom([0, 0,1, 0, 0,0])) * 1 
                    zcommon += (pickRandom([0, 0, 1, 0, 0])) * 1 
                    zuncommon += (pickRandom([0, 0, 0, 0, 1, 0 ,0])) * 1 
                    zkayu += (random(2)) * 1 
                    zbatu += (random(2)) * 1 
                    zstring += (random(2)) * 1 
                    ziron += (random(2)) * 1 
                    zpet += (pickRandom([0, 0, 0, 1, 0])) * 1
                    zmyhtic += (pickRandom([0, 0, 1, 0, 0, 0, 0, 0, 0])) * 1 
                    zlegendary += (pickRandom([0, 0, 0, 1, 0, 0, 0 ,0 ,0])) * 1 
                    
                }
            } finally {
                user.superior -= count * 1
                user.money += zmoney * 1 
                user.exp += zexp * 1
                user.potion += zpotion * 1 
                user.kayu += zkayu * 1 
                user.batu += zbatu * 1 
                user.string += zstring * 1 
                user.iron += ziron * 1 
                user.common += zcommon * 1 
                user.uncommon += zuncommon * 1 
                user.diamond += zdiamond * 1 
                m.reply(msg(type, count, zmoney, zexp, false, zpotion, zkayu, zbatu, zstring, ziron, zcommon, zuncommon, zdiamond))
                if (zmyhtic > 0) { 
                    user.mythic += zmyhtic * 1 
                    m.reply(haveRare(zmyhtic))
                }
                if (zlegendary > 0 || zpet > 0) {
                    user.legendary += zlegendary * 1 
                    user.pet += zpet * 1 
                    m.reply(haveEpic(zlegendary, zpet))
                }
            }
        } else if (type === 'ancient') {
            if ((user.ancient * 1) < count) return m.reply(onKurang(type))
            let ymoney = 0, yexp = 0, ymyhtic = 0, ypotion = 0, ydiamond = 0, ylegendary = 0, ycommon = 0, yuncommon = 0, ykayu = 0, ybatu = 0, ystring = 0, yiron = 0, ypet = 0 
            try {
                for(let i = 0; i < count; i++) {
                    ymoney += (random(1000000000)) * 1 
                    yexp += (random(200000000)) * 1 
                    ypotion += (random(300)) * 1                 
                    ycommon += (pickRandom([0, 0, 1, 0, 0])) * 1 
                    yuncommon += (pickRandom([0, 0, 0, 0, 1, 0 ,0])) * 1 
                     ydiamond += (pickRandom([10000])) * 1 
                    ykayu += (random(10000)) * 1 
                    ybatu += (random(10000)) * 1 
                    ystring += (random(10000)) * 1 
                    yiron += (random(10000)) * 1 
                    ypet += (pickRandom([0, 0, 0, 1, 0])) * 1
                    ymyhtic += (pickRandom([0, 0, 1, 0, 0, 0, 0, 0, 0])) * 1 
                    ylegendary += (pickRandom([0, 0, 0, 1, 0, 0, 0 ,0 ,0])) * 1 
                    
                }
            } finally {
                user.ancient -= count * 1
                user.money += ymoney * 1 
                user.exp += yexp * 1
                user.potion += ypotion * 1 
                user.kayu += ykayu * 1 
                user.batu += ybatu * 1 
                user.string += ystring * 1 
                user.iron += yiron * 1 
                user.common += ycommon * 1 
                user.uncommon += yuncommon * 1 
                user.diamond += ydiamond * 1 
                m.reply(msg(type, count, ymoney, yexp, false, ypotion, ykayu, ybatu, ystring, yiron, ycommon, yuncommon, ydiamond))
                if (ymyhtic > 0) { 
                    user.mythic += ymyhtic * 1 
                    m.reply(haveRare(ymyhtic))
                }
                if (ylegendary > 0 || ypet > 0) {
                    user.legendary += ylegendary * 1 
                    user.pet += ypet * 1 
                    m.reply(haveEpic(ylegendary, ypet))
                }
            }
        } else if (type === 'superancient') {
            if ((user.superancient * 1) < count) return m.reply(onKurang(type))
            let qmoney = 0, qexp = 0, qmyhtic = 0, qpotion = 0, qdiamond = 0, qlegendary = 0, qzamrud = 0, qcommon = 0, quncommon = 0, qkayu = 0, qbatu = 0, qstring = 0, qiron = 0, qpet = 0 
            try {
                for(let i = 0; i < count; i++) {
                    qmoney += (random(1000000000)) * 1 
                    qexp += (random(20000000000)) * 1 
                    qpotion += (random(3000)) * 1 
                    qdiamond += (pickRandom([0, 0,1, 0, 0,0])) * 1 
                    qcommon += (pickRandom([0, 0, 1, 0, 0])) * 1 
                    quncommon += (pickRandom([0, 0, 0, 0, 1, 0 ,0])) * 1 
                    qkayu += (random(200000)) * 1 
                    qbatu += (random(200000)) * 1 
                    qstring += (random(20000)) * 1 
                    qiron += (random(20000)) * 1 
                    qpet += (pickRandom([0, 0, 0, 1, 0])) * 1
                    qmyhtic += (pickRandom([0, 0, 1, 0, 0, 0, 0, 0, 0])) * 1 
                    qlegendary += (pickRandom([1000])) * 1 
                    qzamrud += (pickRandom([0, 1, 0, 0 ,0 , 0, 0, 1, 0, 0, 0 ,0 ,0])) * 1 
                    
                }
            } finally {
                user.superancient -= count * 1
                user.money += qmoney * 1 
                user.exp += qexp * 1
                user.potion += qpotion * 1 
                user.kayu += qkayu * 1 
                user.batu += qbatu * 1 
                user.string += qstring * 1 
                user.iron += qiron * 1 
                user.common += qcommon * 1 
                user.uncommon += quncommon * 1 
                user.diamond += qdiamond * 1 
                m.reply(msg(type, count, qmoney, qexp, false, qpotion, qkayu, qbatu, qstring, qiron, qcommon, quncommon, qdiamond))
                if (qmyhtic > 0) { 
                    user.mythic += qmyhtic * 1 
                    m.reply(haveRare(qmyhtic))
                }
                if (qlegendary > 0 || zpet > 0) {
                    user.legendary += qlegendary * 1 
                    user.pet += zpet * 1 
                    m.reply(haveEpic(qlegendary, qpet))
                }
                if (qzamrud > 0) { 
                    user.zamrud += qzamrud * 1 
                    m.reply(haveLegend(qzamrud))
                }
            }
        } else if (type === 'pet') {
            let _mknp = pickRandom([1, 2, 1, 5, 3, 2, 1, 2, 4, 1, 3, 5, 2, 4, 3])
            let mknp = (_mknp * 1)
            let kucing = global.db.data.users[m.sender].kucing
            let anjing = global.db.data.users[m.sender].anjing
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let _pet = `${pickRandom(['', 'kucing', 'rubah', 'kuda', 'anjing', ''])}`.trim()
            if (user.pet > 0) { 
                user.pet -= 1
                if (_pet == 'kucing' && kucing > 0) {
                    user.potion += 2
                    user.makananpet += mknp * 1
                    m.reply(havePetandGotPet(_pet, mknp * 1, 2))
                } else if (_pet == 'kucing' && kucing == 0) {
                    user.kucing += 1
                    user.makananpet += mknp * 1
                    m.reply(gotPetandNotHavethatPet(_pet, mknp * 1))
                } else if (_pet == 'rubah' && rubah > 0) {
                    user.potion += 2
                    user.makananpet += mknp * 1
                    m.reply(havePetandGotPet(_pet, mknp, 2))
                } else if (_pet == 'rubah' && rubah == 0) {
                    user.rubah += 1
                    user.makananpet += mknp * 1
                    m.reply(gotPetandNotHavethatPet(_pet, mknp * 1))
                } else if (_pet == 'kuda' && kuda  > 0) {
                    user.potion += 2
                    user.makananpet += mknp * 1
                    m.reply(havePetandGotPet(_pet, mknp * 1, 2))
                } else if (_pet == 'kuda' && kuda == 0) {
                    user.kuda += 1
                    user.makananpet += mknp * 1
                    m.reply(gotPetandNotHavethatPet(_pet, mknp * 1))
               } else if (_pet == 'anjing' && anjing > 0) {
                    user.potion += 2
                    user.makananpet += mknp * 1
                    m.reply(havePetandGotPet(_pet, mknp * 1, 2))
               } else if (_pet == 'anjing' && anjing == 0) {
                    user.anjing += 1
                    user.makananpet += mknp * 1
                    m.reply(gotPetandNotHavethatPet(_pet, mknp * 1))
               } else if (_pet == 'naga' && naga == 0) {
                    user.naga += 1
                    user.makanannaga += mknp * 1
                    m.reply(gotPetandNotHavethatPet(_pet, mknp * 1))
               } else if (_pet == 'phonix' && phonix == 0) {
                    user.phonix += 1
                    user.makananphonix += mknp * 1
                    m.reply(gotPetandNotHavethatPet(_pet, mknp * 1))
               } else if (_pet == 'centaur' && centaur == 0) {
                    user.centaur += 1
                    user.makanancentaur += mknp * 1
                    m.reply(gotPetandNotHavethatPet(_pet, mknp * 1))
               } else if (_pet == 'griffin' && griffin == 0) {
                    user.griffin += 1
                    user.makanangriffin += mknp * 1
                    m.reply(gotPetandNotHavethatPet(_pet, mknp * 1))
               } else if (_pet == 'serigala' && serigala == 0) {
                    user.serigala += 1
                    user.makananserigala += mknp * 1
                    m.reply(gotPetandNotHavethatPet(_pet, mknp * 1))
                } else {
                    user.makananpet += mknp * 1
                    m.reply(gakDapetApa(mknp * 1))
                }
            } else m.reply('Pet Crate kamu tidak cukup')
        } else m.reply(bruh)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['open', 'gacha'].map(v => v + ' [crate] [count]')
handler.tags = ['rpg']
handler.command = /^(open|buka|gacha)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function emot(type) {
    let b = type.toLowerCase()
    let emotin = (b == 'potion' ? '🥤' : b == 'diamond' ? '💎' : b == 'zamrud' ? '🔮' : b == 'limit' ? '🎫' : b == 'common' ? '📦' : b == 'uncommon' ? '🛍️' : b == 'mythic' ? '🎁' : b == 'legendary' ? '🧰' : b == 'sampah' ? '🗑' : b == 'armor' ? '🥼' : b == 'sword' ? '⚔️' : b == 'kayu' ? '🪵' : b == 'batu' ? '🪨' : b == 'string' ? '🕸️' : b == 'kuda' ? '🐴' : b == 'centaur' ? '🐎' : b == 'griffin' ? '🦅' : b == 'serigala' ? '🐺' : b == 'naga' ? '🐉' : b == 'phonix' ? '🦜' : b == 'kucing' ? '🐱' : b == 'anjing' ? '🐕' : (b == 'makananpet' || b == 'makanannaga' || b == 'makanangriffin' || b == 'makananphonix' || b == 'makanancentaur' || b == 'makananserigala') ? '🥩' : '')
    return emotin
}

function onKurang(type) {
    return `*${emot(type)}${type}* Crate kamu tidak cukup`
}

function random(maxRandom) {
    return (Math.round(Math.random() * maxRandom)) * 1
}

function msg(crate, crate_count, money, exp, limit, potion, kayu, batu, string, iron, common, uncommon, diamond, zamrud) {
    return `Kamu telah membuka *${crate_count} ${crate} Crate ${emot(crate)}* dan mendapatkan:${!money ? '' : `\n💹 *Money:* ${money} 💲`}${!exp ? '' : `\n✨ *Exp:* ${exp}`}${!limit ? '' : `\n🎟 *Limit:* ${limit}`}${!zamrud ? '' : `\n🔮 *Zamrud:* ${zamrud}`}${!potion ? '' : `\n🥤 *Potion:* ${potion}`}${!kayu ? '' : `\n🪵 *Kayu:* ${kayu}`}${!batu ? '' : `\n🪨 *Batu:* ${batu}`}${!string ? '' : `\n🕸️ *String:* ${string}`}${!iron ? '' : `\n⛓️ *Iron:* ${iron}`}${!diamond ? '' : `\n💎 *Diamond:* ${diamond}`}${!common ? '' : `\n📦 *Common:* ${common}`}${!uncommon ? '' : `\n🛍️ *Uncommon:* ${uncommon}`}`
}

function haveRare(count) {
    return `Selamat anda mendapatkan item Rare yaitu *${count}* Mythic Crate 🎁`
}

function haveEpic(legendary_count, pet_count) {
    return `Selamat anda mendapatkan item Epic yaitu ${legendary_count > 0 ? `*${legendary_count}* Legendary Crate🧰 ` : '' } ${pet_count > 0 && legendary_count > 0 ? `dan *${pet_count}* Pet Crate 📫` :  legendary_count < 1 && pet_count > 0 ? `*${pet_count}* 📫 Pet Crate` : '' }`
}

function haveLegend(count) {
    return `Selamat anda mendapatkan item Legend yaitu *${count}* Zamrud Crate 🔮`
}

function gotPet(pet) {
    return `Selamat Anda mendapatkan pet *${emot(pet)}${pet}*`
}

function havePetandGotPet(pet, makananpet_count, potion_count) {
    return `${gotPet(pet)}, Anda sudah memiliki pet *${emot(pet)}${pet}*, Hadiahmu diganti dengan *${potion_count}* 🥤potion${makananpet_count > 0 ? ` Dan *${makananpet_count}* Makanan Pet 🥩` : ''}`
}

function gotPetandNotHavethatPet(pet, makananpet_count) {
    return `${gotPet(pet)} ${makananpet_count > 0 ? `Dan *${makananpet_count}* Makanan Pet 🥩` : ''}`
}

function gakDapetApa(makananpet_count) {
    return `${pickRandom(['Anda kurang beruntung', 'Coba buka lagi lain kali, karena gk dapet pet', 'kasian gk dapet pet', 'Mungkin lagi gk hoki dan gk dapet pet', 'wkwkkwkwke'])} Anda hanya mendapatkan *${makananpet_count}* 🥩Makanan pet'`
}

function isNumber(x) {  
    return !isNaN(x)
}
