const fs = require('fs')
const xlsx2json = require('xlsx2json')
xlsx2json('./vmlist.xlsx').then(jsonArray => {
  fs.writeFile('./vmlist.json', JSON.stringify(jsonArray[0]), (err) => {
    err ? err : 'Succcess'
    console.log()
  })
})