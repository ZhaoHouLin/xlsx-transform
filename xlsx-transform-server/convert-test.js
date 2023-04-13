
const fs = require('fs')
const xlsx2json = require('xlsx2json')
const XLSX = require("xlsx")
const json2xls = require('json2xls')

// const filePath = './data/vmlist.xlsx'
const filePath = 'D:/VMList-xlsx/vmlist.xlsx'

// xlsx2json(filePath).then(jsonArray => {
//   console.log(jsonArray)
// })

const workbook = XLSX.readFile(filePath)
// console.log(JSON.stringify(workbook))

// const workSheetNames = Object.keys(workbook.Sheets)
// const workSheetName = 'vMetaData'

// if (workSheetNames.includes(workSheetName)) {
//   delete workbook.Sheets[workSheetName]
//   delete workbook.SheetNames[workSheetName]
//   let indexToDelete = workbook.SheetNames.indexOf(workSheetName)
//   workbook.SheetNames.splice(indexToDelete, 1)
//   XLSX.writeFileXLSX(workbook, 'D:/VMINFO/testResult.xlsx')
// }


// const resultFilePath = 'D:/VMINFO/testResult.xlsx'
// const resultWorkbook = XLSX.readFileSync(resultFilePath)
// const ws = resultWorkbook.Sheets[resultWorkbook.SheetNames[0]]

// const filePath = 'D:/VMINFO/result.xlsx'
// const workbook = XLSX.readFileSync(resultFilePath)
const ws = workbook.Sheets[workbook.SheetNames[0]]
const jsa = XLSX.utils.sheet_to_json(ws, { range: 'A1:CC700' })
// console.log(jsa)
const result = JSON.stringify(jsa)
// console.log(jsa.length)

fs.writeFileSync('./test.json', result, (err) => {
  err ? err : 'Succcess'
})

// fs.writeFileSync('./test2.json', JSON.stringify(workbook), (err) => {
//   err ? err : 'Succcess'
// })

// xlsx2json(filePath, { Sheet: 'vInfo' }).then(jsonArray => {
//   console.log(jsonArray)

//   fs.writeFileSync('./vmlist.json', JSON.stringify(jsonArray), (err) => {
//     err ? err : 'Succcess'
//     console.log(err)
//   })
// })