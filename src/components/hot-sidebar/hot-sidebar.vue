<template>
  <div class="hot-sidebar-component">
    <header class="header">
      <hot-status v-bind:status="status"></hot-status>
    </header>
    <div class="body">
      <div v-for="item in content" :key="item.id">
        <hot-card-extract
          v-bind:approved="item.approved"
          v-bind:declared="item.declared"
          v-bind:received="item.received"
          v-bind:balance="item.balance"
          v-bind:returned="item.returned"
          v-bind:currency-symbol="item.currency.symbol"
        ></hot-card-extract>
      </div>
    </div>
  </div>
</template>

<script>
import HotStatus from '../hot-status/hot-status'
import HotCardExtract from '../hot-card-extract/hot-card-extract'

export default {
  props: {
    status: String,
    content: Array,
  },
  components: {
    HotStatus,
    HotCardExtract,
  },
}
</script>

<style lang="sass">
@import "../../styles/_variables.sass"

.hot-sidebar-component
    padding: 22px
</style>
