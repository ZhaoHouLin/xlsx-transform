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
  NButton,
} from "naive-ui"

import { useFetch, useSearch, useSearchExactMatch } from "../api"
import { useCounterStore } from "../stores/counter"

const counter = useCounterStore()

const numberAnimationInstRef = ref(null)

const searchVal = ref("")
const searchResultLength = ref(0)
const searchStatus = ref(true)

const data = computed(() => {
  if (searchVal && searchStatus.value) {
    return useSearch(searchVal.value, counter.FetchData.data)
  } else if (searchVal && !searchStatus.value) {
    return useSearchExactMatch(searchVal.value, counter.FetchData.data)
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

// const fetch = useFetch("https://vm-list.cdc.gov.tw/")

// const isLoad = computed(
//   () => useFetch("https://vm-list.cdc.gov.tw/").isLoad.value
// )

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
    className: "defaultStyle",
  },
  {
    title: "VM IP",
    key: "VM IP",
    defaultSortOrder: "ascend",
    sorter: "default",
    minWidth: 200,
    maxWidth: 400,
    className: "defaultStyle",
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
    defaultSortOrder: "ascend",
    sorter: "default",
    className: "defaultStyle",
  },
  {
    title: "VM附註",
    key: "VM附註",
    // resizable: true,
    minWidth: 100,
    maxWidth: 200,
    defaultSortOrder: "ascend",
    sorter: "default",
    className: "defaultStyle",
  },
  {
    title: "OS版本",
    key: "OS版本",
    defaultSortOrder: "ascend",
    sorter: "default",
    minWidth: 300,
    maxWidth: 400,
    className: "defaultStyle",
  },
]

const handleSearchVal = () => {
  useSearch(searchVal.value, counter.FetchData.data)
  searchResultLength.value = useSearch(
    searchVal.value,
    counter.FetchData.data
  ).length
}

const handleSearchValExactMatch = () => {
  useSearchExactMatch(searchVal.value, counter.FetchData.data)
  searchResultLength.value = useSearchExactMatch(
    searchVal.value,
    counter.FetchData.data
  ).length
}

const searchTypeBtn = ref(null)

const handleSearchStatus = () => {
  searchStatus.value = !searchStatus.value
  searchStatus.value ? handleSearchVal() : handleSearchValExactMatch()
  console.dir(searchTypeBtn.value)
}

const rowClassName = (row) => {
  // console.log(row)
  if (row["開關機狀態"] == "poweredOff") {
    return "powered-off"
  }
  return "powered-on"
}

onMounted(() => {
  useFetch(`http://localhost:666/`)
})
</script>

<template lang="pug">
.header
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
      .normal(v-if="searchStatus")
        h4 任意搜尋: 
        .input
          n-input(v-model:value="searchVal" round placeholder="請輸入" @change='handleSearchVal' @keyup='handleSearchVal' size="small")
          NButton(@click="handleSearchStatus" ref='searchTypeBtn') 切換完全搜尋
        h6 符合條件筆數: {{searchResultLength}}
      .exact(v-if="!searchStatus")
        h4 完全搜尋: 
        .input
          n-input(v-model:value="searchVal" round placeholder="請完整輸入" @change='handleSearchValExactMatch' @keyup='handleSearchValExactMatch' size="small")
          NButton(@click="handleSearchStatus" ref='searchTypeBtn') 切換任意搜尋
        h6 符合條件筆數: {{searchResultLength}}
    
.data-table
  n-data-table(ref='dataTableInst' :columns="columns" :data="data"  :row-class-name="rowClassName" :pagination="{ pageSize: 30 ,size:'medium'}" )
  a.created(href = "mailto: fixer2@cdc.gov.tw")
    h4 created by 
      span ZZ

</template>

<style lang="stylus" scoped>
:deep(.powered-off td)
  color #ff004c !important

:deep(.powered-on td)
  color #37b24d !important

:deep(.powered-off .defaultStyle)
  color #000000 !important
  // font-weight 900
:deep(.powered-on .defaultStyle)
  color #000000 !important
  // font-weight 900

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
      color colorPrimary
  .info
    flex()
    // flex(space-between,,)
    margin-top 1rem
    input
      height 16px
    .total h3
      color colorPrimary
    .powered-on h3
      color #8ce99a
    .powered-off h3
      color #ff004c
    .search > h6
      padding-left 4px
    .search
      // border 1px solid #000
      position relative
      margin-bottom 1rem
      h6
        margin-top 4px
        margin-left 8px
      .normal,.exact
        position absolute
        size()
        .input
          size(,32px)
          // border 1px solid #000
          flex()
      .n-button
        right 4px
        // margin-top 2px
        padding 2px 1rem
        size(auto,2rem)
        border-radius 4px
        // position absolute
        margin-left 1rem
        z-index 1
  .created
    position absolute
    left 1rem
    bottom 2px
    text-decoration none
    color color_black
    h4
      font-weight normal
      span
        font-weight 900


.data-table
  position relative
  box-sizing border-box
  .n-data-table
    padding 0 1rem
    padding-bottom 1rem
    box-sizing border-box
  .created
    // border 1px solid #000
    position absolute
    left 1rem
    bottom 1rem
    text-decoration none
    color color_black
    h4
      font-weight normal
      span
        font-weight 900

// @media screen and (max-width:1024px)
</style>
