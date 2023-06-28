<script setup>
import { RouterLink, RouterView } from "vue-router"
import { NConfigProvider } from "naive-ui"
import DataTable from "./components/DataTable.vue"
import InfoLog from "./components/InfoLog.vue"
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
</script>

<template lang="pug">
n-config-provider(:theme-overrides='themeOverrides' )
  InfoLog
  DataTable
//- RouterView
</template>

<style lang="stylus" scoped></style>
