<template>
  <div class="hot-status-component">
    <div class="status">
      <p class="status__legend">Status</p>
      <p class="status__state">{{ status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: String,
  },
}
</script>

<style lang="sass">
@import "../../styles/_variables.sass"

.hot-status-component

    .status
        align-items: center
        background-color: #edfff5
        border: solid 1px #009d43
        border-radius: 6px
        display: flex
        flex-direction: column
        justify-content: center
        height: 85px
        padding: 24px
        width: 100%

        &__legend
            color: #006e2f
            font-size: $font-md
            margin: 0

        &__state
            color: #009d43
            font-size: 24px
            font-weight: bold
            margin: 0
</style>
