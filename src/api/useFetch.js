
import { reactive, ref } from "vue"
import axios from 'axios'
import { useCounterStore } from '../stores/counter'

export const Fetchs = (API_URL = '') => {
  const counter = useCounterStore()

  // const fetchData = reactive({ data: {} })
  const isLoad = ref(false)
  const errorMsg = ref('')

  axios
    .get(API_URL)
    .then(res => {
      isLoad.value = true
      counter.storeFetchData(res.data)
      counter.handleFetchLoad(isLoad.value)
      counter.storePoweredOffAmount()
    })
    .catch(error => {
      console.dir(error)    //用dir才看得到
      errorMsg.value = error.request.statusText
    })

  return {
    isLoad,
    errorMsg,
  }
}