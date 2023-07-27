var express = require('express')
var router = express.Router()

const fs = require('fs')
const XLSX = require("xlsx")

// const filePath = 'D:/VMList-xlsx/vmlist.xlsx'
const filePath = 'C:/Web/CDC-VM-List-data/vmlist.xlsx'



const workbook = XLSX.readFileSync(filePath)
const ws = workbook.Sheets[workbook.SheetNames[0]]
const jsa = XLSX.utils.sheet_to_json(ws, { range: 'A1:CC700' })

fs.watch(filePath, (event, filename) => {
  console.log(filename)
  if (filename) {
    const workbook = XLSX.readFileSync(filePath)
    const ws = workbook.Sheets[workbook.SheetNames[0]]
    const jsa = XLSX.utils.sheet_to_json(ws, { range: 'A1:CC700' })

    router.get('/', function (req, res, next) {
      console.log(jsa.length)
      res.json(jsa)
    })
  }
})

router.get('/', function (req, res, next) {
  console.log('2', jsa.length)
  res.json(jsa)
})

module.exports = router
