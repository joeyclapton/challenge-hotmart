<template>
  <div class="hot-timeline-component">
    <div class="container">
      <div class="type" v-bind:class="['type--' + type]"></div>
      <p>{{ date }}</p>
    </div>
    <div class="container">
      <div class="action">
        <p class="container__title">Tipo</p>
        <p class="action__legend">
          {{ getTypeText() }}
        </p>
      </div>
    </div>
    <div class="container" v-if="amountSpent || amountTotal">
      <p class="container__title">Valor</p>
      <strong>
        <span>{{ currencyCode }} {{ amountSpent }}</span>
      </strong>
      <p>Valor da nota: {{ currencyCode }} {{ amountTotal }}</p>
    </div>
    <div class="container" v-if="notes">
      <p class="container__title">Observação</p>
      <p>{{ notes }}</p>
    </div>
    <div class="container" v-if="status">
      <p class="container__title">Status</p>
      <div class="status">
        <p class="status__label">{{ status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    date: Number,
    notes: String,
    status: String,
    name: String,
    email: String,
    currencyCode: String,
    expenseTypeCode: String,
    amountSpent: Number,
    amountTotal: Number,
  },
  methods: {
    getTypeText(
      type = this.type,
      name = this.name,
      expenseTypeCode = this.expenseTypeCode
    ) {
      const descriptions = {
        EVALUATION: `Aprovação da Solicitação ${name}`,
        ACCOUNTABILITY_SUBMITTED: `Solicitação Concluída por ${name}`,
        ACCOUNTABILITY_CREATED: `Solicitação Concluída por ${name}`,
        EXPENSE: `${expenseTypeCode}`,
      }

      return descriptions[type]
    },
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

    .container

      &__title
        color: #d0d3d6
        font-size: 12px
        font-weight: bold
        text-transform: uppercase
        margin-bottom: 6px

    .action
      &__legend
        font-size: 20px
        font-weight: bold
        color: #545b64

    .type
      border-radius: 50%
      height: 60px
      width: 60px

      &--EXPENSE
        background-color: #e8f2fb

      &--ACCOUNTABILITY_SUBMITTED, &--ACCOUNTABILITY_CREATED
        background-color: #efebf9

      &--EVALUATION
        background-color: #f0f3f7

    .status
      background-color: #e7f2fd
      border: solid 1px #5f6772
      border-radius: 18px
      color: #5f6772
      font-weight: bold
      padding: 6px 12px

      &__label
        font-size: 12px
</style>
