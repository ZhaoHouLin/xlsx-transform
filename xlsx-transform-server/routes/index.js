var express = require('express')
var router = express.Router()

const fs = require('fs')
const xlsx2json = require('xlsx2json')

const filePath = './data/vmlist.xlsx'

fs.watch(filePath, (event, filename) => {
  console.log(filename)
  if (filename) {
    xlsx2json(filePath).then(jsonArray => {
      router.get('/', function (req, res, next) {
        res.json(jsonArray[0])
      })
    })
  }
})

xlsx2json(filePath).then(jsonArray => {
  router.get('/', function (req, res, next) {
    res.json(jsonArray[0])
  })
})


module.exports = router
