const fs = require('fs')

fs.writeFileSync('.user', process.env.PWD.slice(process.env.PWD.lastIndexOf('/') + 1))
fs.copyFileSync('tsconfig.stackblitz.json', 'tsconfig.json')
