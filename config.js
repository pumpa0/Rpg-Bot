global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/FDnHRof3iIV1MfoW5vlMKQ', 'https://chat.whatsapp.com/FDnHRof3iIV1MfoW5vlMKQ']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '6285731855426': { // put your number here
    name: 'Owner Metro Bot/Creator games-wabot',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6285731855426': { // put your number here
    name: 'Dave',
    isDev: false, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false // if true this number will send if user use command /owner or /creator
  },
  '6285731855426': {
    name: 'Han',
    isReport: true, // if true this number will send if user use command /report or /join
  },
  '6285731855426': {
    isReport: true
  },
  '6285731855426': {} // ignore if you don't want anything, like name dll
}
global.mods = ['6285731855426'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.botwm = 'HanRpg'
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais'
}

// Sticker WM
global.packname = 'wa.me/6285731855426'
global.author = 'HanRpg'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
