<template>
  <div class="hot-sidebar-component">
    <header class="header">
      <hot-status-component v-bind:status="status"></hot-status-component>
    </header>
    <div class="body">
      <div v-for="item in content" :key="item.id">
        <hot-card-extract-component
          v-bind:approved="item.approved"
          v-bind:declared="item.declared"
          v-bind:received="item.received"
          v-bind:currency-symbol="item.currency.symbol"
        ></hot-card-extract-component>
      </div>
    </div>
  </div>
</template>

<script>
import HotStatusComponent from '../hot-status/hot-status.component'
import HotCardExtractComponent from '../hot-card-extract/hot-card-extract.component'

export default {
  props: {
    status: String,
    content: Array,
  },
  components: {
    HotStatusComponent,
    HotCardExtractComponent,
  },
}
</script>

<style lang="sass">
.hot-sidebar-component
    padding: 22px
</style>
