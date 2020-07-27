import request from 'request'
import fs from 'fs'
import setWallpaper from './setWallpaper'
import path from 'path'
import { localDataLocation } from './localDataLocation'
const listLocation = 'https://raw.githubusercontent.com/limhenry/earthview/master/earthview.json'
const dataloc = localDataLocation()
export default (cb) => {
  const downloadloc = path.join(__dirname, '/gui/wallpaper_default.jpg');
  setWallpaper(downloadloc);
  // request({
  //   url: listLocation,
  //   json: true
  // },
  // (error, response, body) => {
  //   if (!error && response.statusCode === 200) {
  //     // List loaded
  //     const list = body
  //     // Choose random image (+data)
  //     const listObj = list[Math.round(Math.random() * list.length)]
  //     const url = listObj.image
  //     // const downloadloc = `${dataloc}/${url.split('/')[url.split('/').length - 1]}`
  //     // const downloadloc = `./images/bg.jpg`
  //     const downloadloc = path.join(__dirname, '/gui/wallpaper_default.jpg');
  //     setWallpaper(downloadloc, () => {});
  //     // fs.createWriteStream(downloadloc)
  //     // console.log('wallpaper download')
  //     // request(url, { encoding: 'binary' }, function (error, response, body) {
  //     //   if (!error) {
  //     //     fs.writeFile(downloadloc, body, 'binary', async function (err) {
  //     //       if (!err) {
  //     //       console.log('download complete')
  //           // Image downloaded
  //           // Set as wallpaper
  //           // process.stdout.write('your output to command prompt console or node js ');
  //           // process.stdout.write(downloadloc)
  //           // console.log(downloadloc)
  //           // setWallpaper(downloadloc, (err) => {
  //           //   if (!err) {
  //           //     console.log('wallpaper set')
  //           //     //Remove file
  //           //     fs.unlink(downloadloc, (err) => {
  //           //       if (err) {
  //           //         console.error(err)
  //           //         return
  //           //       }
  //           //       console.log('wallpaper file removed')
  //           //       // file removed, wallpaper set successfully!
  //           //       // remove old data
  //           //       try {
  //           //         fs.unlinkSync(`${dataloc}/imageData.json`)
  //           //       } catch (err) {
  //           //         console.error("unable to unlink json body")
  //           //       }
  //           //     })
  //           //   }
  //           // })

  //           // }
  //         // })
  //       // }
  //   //   })
  //   }
  // })

}
