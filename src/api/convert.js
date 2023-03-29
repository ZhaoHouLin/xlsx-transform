const fs = require('fs')
const axios = require("axios")
const iconv = require('iconv-lite')
const url = 'http://192.168.68.70:8080/vminfo.asp'

axios.get(url, {
  responseType: 'arraybuffer'
}).then((res) => {
  let originalData = iconv.decode(res.data, 'Big5')

  let arrangeData = originalData.replace(/<table width="100%" border="1" cellpadding="0">/g, '').replace(/<\/tbody><\/table>/g, '').replace(/<tbody><tr>/g, '').replace(/\r\n/g, '').split('          </tr>')

  let jsonData = arrangeData.map((element) => {
    const data = {
      'VM名稱': '',
      'VM IP': '',
      '開關機狀態': '',
      'VM所在平台': '',
      'VM附註': '',
      'OS版本': ''
    }
    let itemName = element.split('</td>').map((item, idx) => {
      if (idx == 0) {
        data['VM名稱'] = item.split('align="center">')[1]
      }
      if (idx == 1) {
        data['VM IP'] = item.split('align="center">')[1]
      }
      if (idx == 2) {
        data['開關機狀態'] = item.split('align="center">')[1]
      }
      if (idx == 3) {
        data['VM所在平台'] = item.split('align="center">')[1]
      }
      if (idx == 4) {
        data['VM附註'] = item.split('align="center">')[1]
      }
      if (idx == 5) {
        data['OS版本'] = item.split('align="center">')[1]
      }
    })
    // console.log(data)
    return data
  })
  jsonData.shift()

  fs.writeFile('./VMdata.json', JSON.stringify(jsonData), (err) => {
    err ? err : 'Succcess'
  })


})



// fs.readFile('./htmltag.txt', (err, data) => {
//   if (err) throw err
//   const originalData = data.toString()

//   let arrangeData = originalData.replace(/<table width="100%" border="1" cellpadding="0">/g, '').replace(/<\/tbody><\/table>/g, '').replace(/<tbody><tr>/g, '').replace(/\r\n/g, '').split('          </tr>')

//   let jsonData = arrangeData.map((element) => {
//     const data = {
//       'VM名稱': '',
//       'VM IP': '',
//       '開關機狀態': '',
//       'VM所在平台': '',
//       'VM附註': '',
//       'OS版本': ''
//     }
//     let itemName = element.split('</td>').map((item, idx) => {
//       if (idx == 0) {
//         data['VM名稱'] = item.split('align="center">')[1]
//       }
//       if (idx == 1) {
//         data['VM IP'] = item.split('align="center">')[1]
//       }
//       if (idx == 2) {
//         data['開關機狀態'] = item.split('align="center">')[1]
//       }
//       if (idx == 3) {
//         data['VM所在平台'] = item.split('align="center">')[1]
//       }
//       if (idx == 4) {
//         data['VM附註'] = item.split('align="center">')[1]
//       }
//       if (idx == 5) {
//         data['OS版本'] = item.split('align="center">')[1]
//       }
//     })
//     // console.log(data)
//     return data
//   })
//   jsonData.shift()

//   fs.writeFile('./VMdata.json', JSON.stringify(jsonData), (err) => {
//     err ? err : 'Succcess'
//   })

// })


// fs.open('./input/123.txt', 'r+', (err, fd) => {
//   if (err) throw err
//   console.log('OK')
// })