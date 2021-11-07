let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, owner }) => { 
     try {
        let __timers = (new Date - global.DATABASE._data.users[m.sender].lasfishing)
        let _timers = (3000000 - __timers) 
        let timers = clockString(_timers)
        let you = conn.getName(m.sender)
        let user = global.DATABASE.data.users[m.sender]
        
        if (global.DATABASE.data.users[m.sender].pancing > 0 ) {
        if (new Date - global.DATABASE.data.users[m.sender].lastfishing > 3000000) {
        	
        
        let ikan = `${Math.floor(Math.random() * 30)}`.trim() 
        
        let uang = `${Math.floor(Math.random() * 400)}`.trim()
        
         let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            
let legendary = (_legendary * 1)

        let mcng = `
kamu memancing dan mendapatkan ${ikan}
Dan ditukar dengan uang senilai ${uang}💰
      `
        conn.reply( m.chat, mcng, m)
         if (mythic > 0) {
                   global.DATABASE._data.users[m.sender].mythic += mythic * 1
                   conn.reply(m.chat, '*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + ' Mythic Crate🎁', m)
            }
            if (legendary > 0) {
                global.DATABASE._data.users[m.sender].legendary += legendary * 1
                conn.reply(m.chat, '*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + ' Legendary Crate🎁', m)
            }
        
         global.DATABASE._data.users[m.sender].money += uang * 1
         global.DATABASE._data.users[m.sender].lastfishing = new Date * 1
         
        	  } else m.reply(`You're already fishing, wait until ${timers}`)
           } else conn.sendButton( m.chat, `kamu tidak punya kail pancing🎣`, `Games Wa bot`, `🛒beli pancingan`, '.beli pancing', m)
           } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (owner) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
      }
      handler.help = ['mancing','fishing']
handler.tags = ['rpg']
handler.command = /^(mancing|memancing|fish)$/i 

module.exports = handler
//JANGAN DIUBAH YA YG DIBAWAH
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
