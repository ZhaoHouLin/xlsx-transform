import { defineStore } from 'pinia'
import { ref, reactive } from "vue"

export const useCounterStore = defineStore('counter', () => {
  // const { isLoad, FetchData, errorMsg, poweredOffAmount } = useFetch("http://localhost:3000/")

  const FetchData = reactive({ data: [] })

  const poweredOffAmount = ref()

  const storeFetchData = (data) => {
    const result = data.map((item) => {
      const formData = {
        'VM名稱': '',
        'VM IP': '',
        '開關機狀態': '',
        'VM所在平台': '',
        'VM附註': '',
        'OS版本': ''
      }
      formData['VM名稱'] = item['A']
      formData['VM IP'] = item['W']
      formData['開關機狀態'] = item['B']
      formData['VM所在平台'] = item['BV']
      formData['VM附註'] = item['BL']
      formData['OS版本'] = item['BP']
      return formData
    })
    result.shift()
    FetchData.data = result
  }

  const storePoweredOffAmount = () => {
    const poweredOffArr = []
    FetchData.data.map((item) => {
      if (item['開關機狀態'] == 'poweredOff') poweredOffArr.push(item)
    })
    poweredOffAmount.value = poweredOffArr.length
  }

  return { FetchData, storeFetchData, poweredOffAmount, storePoweredOffAmount }
})
