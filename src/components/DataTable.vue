<script setup>
import { computed, onMounted, ref } from "vue"
import {
  NDataTable,
  NStatistic,
  NNumberAnimation,
  NPageHeader,
  NGrid,
  NGi,
  NAffix,
  NInput,
  NIcon,
} from "naive-ui"

import { useFetch, useSearch } from "../api"
import { useCounterStore } from "../stores/counter"

const counter = useCounterStore()

const numberAnimationInstRef = ref(null)

const searchVal = ref("")

const data = computed(() => {
  if (searchVal) {
    return useSearch(searchVal.value, counter.FetchData.data)
  } else {
    return counter.FetchData.data
  }
})

const poweredOffAmount = computed(() => {
  return counter.poweredOffAmount
})

const poweredOnAmount = computed(() => {
  return counter.FetchData.data.length - counter.poweredOffAmount
})

const dataTableInst = ref(null)
// const pagination = ref({ pageSize: 30 })

const columns = [
  {
    title: "VM名稱",
    key: "VM名稱",
    // resizable: true,
    minWidth: 200,
    maxWidth: 400,
    defaultSortOrder: "ascend",
    sorter: "default",
  },
  {
    title: "VM IP",
    key: "VM IP",
    defaultSortOrder: "ascend",
    sorter: "default",
    minWidth: 200,
    maxWidth: 400,
  },
  {
    title: "開關機狀態",
    key: "開關機狀態",
    defaultSortOrder: "ascend",
    sorter: "default",
    minWidth: 120,
    maxWidth: 400,
  },
  {
    title: "VM所在平台",
    key: "VM所在平台",
    minWidth: 200,
    maxWidth: 400,
  },
  {
    title: "VM附註",
    key: "VM附註",
    // resizable: true,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    title: "OS版本",
    key: "OS版本",
    defaultSortOrder: "ascend",
    sorter: "default",
    minWidth: 300,
    maxWidth: 400,
  },
]

const handleSearchVal = () => {
  useSearch(searchVal.value, counter.FetchData.data)
}

onMounted(() => {
  useFetch("http://192.168.68.71:3094/")
  // counter.storeFetchData(vmlist)
  // counter.storePoweredOffAmount()
})
</script>

<template lang="pug">
.header
  a.created(href = "mailto: fixer2@cdc.gov.tw")
    h4 created by 
     span ZZ
  .title
    a(href="") 疾病管制署虛擬機清單
  .info 
    .total.item 
      h4 虛擬機目前總數:
      h3 {{ counter.FetchData.data.length }}
    .powered-on.item 
      h4 開機狀態數量:
      h3 {{ poweredOnAmount }}
    .powered-off.item 
      h4 關機狀態數量:
      h3 {{ poweredOffAmount }}
    .search.item
      h4 搜索任意項:
      n-input(v-model:value="searchVal" round placeholder="請輸入" @change='handleSearchVal' @keyup='handleSearchVal' size="small")


n-data-table(ref='dataTableInst' :columns="columns" :data="data" :max-height="480")
//- n-data-table(ref='dataTableInst' :columns="columns" :data="data" :pagination="pagination")

</template>

<style lang="stylus" scoped>
.header
  padding 1rem
  // border 1px solid #000
  .item
    flex(space-between,flex-start,column)
    size(,60px)
    // border 1px solid #000
    h4
      font-size 1rem
    h3
      font-size 1.6rem

  .title
    a
      text-decoration none
      font-size 2rem
      color #22b8cf
  .info
    flex()
    // flex(space-between,,)
    margin-top 1rem
    input
      height 16px
    .total h3
      color #22b8cf
    .powered-on h3
      color #8ce99a
    .powered-off h3
      color #ff004c
  .created
    position absolute
    right 1rem
    bottom 2px
    text-decoration none
    color color_black
    h4
      font-weight normal
      span
        font-weight 900

.n-data-table
  padding 0 1rem
  box-sizing border-box
</style>
