<script setup>
import { NModal, NCard } from "naive-ui"
import {
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
  onBeforeUnmount,
} from "vue"
import { useCounterStore } from "../stores/counter"
import gsap from "gsap"
// const props = defineProps({
//   showModal: {
//     type: Boolean,
//     default: false,
//   },
// })

const loadingPageRef = ref()

const canEnterVal = ref(false)

const counter = useCounterStore()

const isLoad = computed(() => {
  return counter.fetchIsLoad
})

const handleShow = (event) => {
  if (canEnterVal.value) {
    gsap.to(".loading-page", {
      display: "none",
      opacity: 0,
      duration: 1,
    })
    document.body.style.overflow = "auto"
    document.removeEventListener("keydown", handleShow)
  }
}

onMounted(async () => {
  document.addEventListener("keydown", handleShow)

  const tl = gsap.timeline()
  watch(isLoad, async (newVal, oldVal) => {
    tl.to(".loading-title", {
      backgroundImage:
        "linear-gradient(90deg,#22b8cf 0%,#22b8cf 100%,rgba(0,0,0,0.4) 0%)",
      duration: 2,
      ease: "linear",
    })
      .to(".loading-title", {
        cursor: "pointer",
        duration: 1,
        onComplete: () => {
          // 當動畫完成時，將canEnterVal.value設定為true
          canEnterVal.value = true
        },
      })
      .fromTo(
        ".enter",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          yoyo: true,
          repeat: -1,
          duration: 1.5,
          ease: "linear",
        }
      )
  })
})
</script>

<template lang="pug" scoped>
.loading-page(@click='handleShow')
  .loading-title VM List
  .enter Press any Key

</template>

<style lang="stylus" scoped>

@font-face
  font-family 'HYWenHei-85W'
  src url(@/assets/fonts/HYWenHei-85W.woff) format('woff')


.loading-page
  position fixed
  z-index 3
  size()
  flex(,,column)
  background-color #fff

  .loading-title
    size(,auto)
    flex()
    font-size 10rem
    font-family 'HYWenHei-85W'
    background-image linear-gradient(90deg,colorPrimary 0%,colorPrimary 0%,rgba(0,0,0,0.4) 0%)
    -webkit-background-clip text
    background-clip text
    -webkit-text-fill-color transparent
    text-fill-color transparent
    user-select none
    cursor wait
  .enter
    font-size 3rem
    font-family 'HYWenHei-85W'
    color colorPrimary
    margin-top -3rem
    cursor pointer
    opacity 0
    user-select none



  .loading-bar
    width 40rem
    height 2rem
    border 1px solid colorPrimary
    border-radius 1rem
    overflow hidden
    .bar
      size(0,2rem)
      background colorPrimary
</style>
