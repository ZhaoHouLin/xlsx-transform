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
      formData['VM名稱'] = item['VM']
      formData['VM IP'] = item['Primary IP Address']
      formData['開關機狀態'] = item['Powerstate']
      formData['VM所在平台'] = item['VI SDK Server']
      formData['VM附註'] = item['Annotation']
      formData['OS版本'] = item['OS according to the configuration file']
      return formData
    })
    FetchData.data = result
  }

  // const storeFetchData = (data) => {
  //   const result = data.map((item) => {
  //     const formData = {
  //       'VM名稱': item['VM名稱'],
  //       'VM IP': item['VM IP'],
  //       '開關機狀態': item['開關機狀態'],
  //       'VM所在平台': item['VM所在平台'],
  //       'VM附註': item['VM附註'],
  //       'OS版本': item['OS版本']
  //     }
  //     return formData
  //   })
  //   FetchData.data = result
  // }

  const storePoweredOffAmount = () => {
    const poweredOffArr = []
    FetchData.data.map((item) => {
      if (item['開關機狀態'] == 'poweredOff') poweredOffArr.push(item)
    })
    poweredOffAmount.value = poweredOffArr.length
  }

  return { FetchData, storeFetchData, poweredOffAmount, storePoweredOffAmount }
})
