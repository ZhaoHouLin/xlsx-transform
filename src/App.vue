<script setup>
import { RouterLink, RouterView } from "vue-router"
import { NConfigProvider, NModal } from "naive-ui"
import DataTable from "./components/DataTable.vue"
import InfoLog from "./components/InfoLog.vue"
import { useCounterStore } from "./stores/counter"
import LoadingPage from "./components/LoadingPage.vue"
const color_primary = "#22b8cf"

const themeOverrides = {
  common: {
    primaryColor: color_primary,
    hoverColor: color_primary,
  },
  Input: {
    borderHover: color_primary,
    borderFocus: color_primary,
  },
}

const counter = useCounterStore()
</script>

<template lang="pug">
n-config-provider(:theme-overrides='themeOverrides' )
  LoadingPage
  InfoLog
  DataTable
//- RouterView
</template>

<style lang="stylus" scoped></style>
