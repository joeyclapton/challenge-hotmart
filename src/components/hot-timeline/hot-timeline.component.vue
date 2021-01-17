<template>
  <div class="hot-timeline-component">
    <div class="">
      <p>Tipo</p>
      <p>{{ cardType }}</p>
    </div>
    <div class="">
      <p>Valor</p>
    </div>
    <div class="">
      <p>Observação</p>
    </div>
    <div class="">
      <p>Status</p>
      <div>
        <p>
          {{ status }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardType: String,
    cardDate: String,
    notes: String,
    status: String,
    name: String,
    email: String,
    amountSpent: Number,
    amountTotal: Number,
  },
}
</script>

<style lang="sass">
.hot-timeline-component
    align-items: center
    background-color: #ffffff
    border-radius: 6px
    display: flex
    justify-content: space-between
    height: 154px
    margin: 28px
    padding: 24px
</style>
