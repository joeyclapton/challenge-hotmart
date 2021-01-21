<template>
  <nav class="hot-breadcrumb-component">
    <p
      class="label"
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="breadcrumb.id"
    >
      <span
        class="label__text"
        v-bind:class="{ active: index == breadcrumbs.length - 1 }"
      >
        {{ breadcrumb.label }}
      </span>
      <span class="label__divider" v-if="index != breadcrumbs.length - 1">
        /
      </span>
    </p>
  </nav>
</template>

<script>
export default {
  props: {
    breadcrumbs: Array,
    active: String,
  },
}
</script>

<style lang="sass">
@import "../../styles/_variables.sass"

.hot-breadcrumb-component
    display: flex

    .label
        color: #51c1c3
        cursor: pointer
        font-size: $font-md

        &__text
            &.active
                color: $color-slate-grey
                cursor: default
                font-weight: bold

        &__divider
            margin: 0 16px
</style>
