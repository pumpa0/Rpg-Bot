let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let event = require('../event.json')
let tags = {
  'rpg': 'Epic RPG',
}
const defaultMenu = {
  before: `
Hai saya %me

*› Total Partisipasi👤:* %totalreg
*›* Event:
${event.ev == '' ? 'Tidak Ada event yang berlaku' : '' || event.ev}
*› Github:*
%github
%readmore`.trimStart(),
  header: '*%category*',
  body: ' %cmd %islimit %isPremium',
  footer: ``,
  after: `*Jangan lupa support creator dengan Cara donasi!💠*`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    const freply = {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {



					"productMessage": {

						"product": {

							"productImage": {

								"url": "https://mmg.whatsapp.net/d/f/AlNR_wCNI-WCnL4QWyE-I71kUKSCWBbq9f4XN2E9Hc-1.enc",

								"mimetype": "image/jpeg",

								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",

								"fileLength": "43344",

								"height": 1080,

								"width": 1080,

								"mediaKey": "cX+6c20dws6B++0slmMNXcCk7omK+zvheoN6087j9nl=",

								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",

								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",

								"mediaKeyTimestamp": "1612168223",

								"jpegThumbnail": global.thumbnail ? global.thumbnail : Buffer.alloc(0)

		},

							"productId": "3872465552870232",

							"title": `BOT WHATSAPP`,

							"description" : `SC BY RIZKY`,

	"productImageCount": 1

						},

						"businessOwnerJid": "6282328303332@s.whatsapp.net"}}}    
let urlyyt = ['https://youtu.be/shw7xIzGX5o','https://youtu.be/aKtb7Y3qOck','https://youtu.be/yJg-Y5byMMw','https://youtu.be/3nQNiWdeH2Q']
let urlyt = urlyyt[Math.floor(Math.random() * urlyyt.length)]

    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = await conn.getProfilePicture(conn.user.jid).catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
   /* conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m).catch(_ => conn.reply(m.chat, text.trim(), m))*/
    conn.sendMessage(m.chat, text.trim(), 'extendedTextMessage', { detectLinks: false, thumbnail: pp, quoted: freply, contextInfo : { mentionedJid: conn.parseMention(text),

    externalAdReply: {

                    title: `BOT WHATSAPP GAME`,

                    body: `${ucapan()}`,

                    mediaType: 2,

                    thumbnailUrl: await conn.getProfilePicture(conn.user.jid),

                    mediaUrl: urlyt

                }
    }
    })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 12) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 19) {
    res = "Selamat Malam"
  }
  return res
}
