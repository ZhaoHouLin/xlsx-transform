<script setup>
import { NButton, NModal, NCard, NText, NH4, NH5, NH6 } from "naive-ui"
import { ref } from "vue"
import InfoIcon from "./icons/IconInfo.vue"

const showModal = ref(false)
</script>
<template lang="pug">
.info-log(@click='showModal = true')
  InfoIcon

NModal(v-model:show="showModal"
    class="custom-card"
    preset="card"
    title="CDC虛擬機清單 v1.0.0 更新日誌"
    size="huge"
    :bordered="false"
)
  //- .author
    a.created(href = "mailto: fixer2@cdc.gov.tw")
      h4 updated by 
        span ZZ

  .content
    NH4( type="primary") - 2023/06/28
      //- NText 2023/06/28 - 增加完全比對的搜尋功能
    NH5(prefix="bar" type="primary" ) 增加完全比對的搜尋功能
    NH5(prefix="bar" type="primary" ) 增加更新日誌
    NH6(prefix="bar" type="info") 
      a.created(href = "mailto: fixer2@cdc.gov.tw")
        h6 updated by 
          span ZZ
  

  //- NCard(
  //-   style="width: 600px"
  //-   title="更新日誌"
  //-   :bordered="false"
  //-   size="huge"
  //-   role="dialog"
  //-   aria-modal="true")

</template>

<style lang="stylus">
.info-log
  position fixed
  z-index 2
  // border 1px solid #000
  size(48px)
  margin 1rem
  right 0
  color #22b8cf
  cursor pointer

.custom-card
  size(60%)

.n-card-header__main
  color #22b8cf !important
  font-size 32px
.n-h5
  margin 1rem

.n-h6
  a
    text-decoration none
    color #222
</style>
