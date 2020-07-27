import setRandomWallPaper from './setRandomWallPaper'
import * as m from 'menubar'
import fs from 'fs'
import path from 'path'
import { localDataLocation, applocation } from './localDataLocation'
import AutoLaunch from 'auto-launch'
exports.setRandomWallPaper = setRandomWallPaper
const dataloc = localDataLocation()
const apploc = applocation()
// Create menubar GUI (./gui/index.html)
const mb = m.menubar({
  webPreferences: {
    nodeIntegration: true,
    webSecurity: false
  },
  transparent: true,
  icon: path.join(__dirname, '/gui/iconTemplate.png'),
  width: 300,
  height: 200,
  resizable: false,
  frame: false,
  preloadWindow: true, // Faster at click
  index: `file://${__dirname}/gui/index.html`
})

const updateMapData = () => {
  fs.readFile(`${dataloc}/imageData.json`, (err, data) => {
    if (err) {
      console.log(err)
      if (err.code === 'ENOENT') {
        mb.window.webContents.executeJavaScript(`updateMapData('null')`)
      }
    }
    mb.window.webContents.executeJavaScript(`updateMapData('${data}')`)
  })
}

const AutoLauncher = new AutoLaunch({
  name: 'PrettyGAN',
  path: apploc
})

const quit = () => {
  mb.window.close()
  process.exit()
}

mb.on('ready', function ready () {
  // Up 'n running!
  updateMapData()
  mb.window.on('focus', () => { // Run some checks everytime the window is openend
    updateMapData()
    mb.window.webContents.executeJavaScript('checks()')
  })
  mb.window.webContents.on('new-window', function (e, url) { // Fix links to open in system browser
    e.preventDefault()
    require('electron').shell.openExternal(url)
    mb.window.hide()
  })
})
exports.updateMapData = updateMapData
exports.quit = quit
exports.AutoLauncher = AutoLauncher
