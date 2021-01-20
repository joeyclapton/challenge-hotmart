<template>
  <div class="hot-timeline-component">
    <div class="container">
      <div class="type" v-bind:class="['type--' + type]">
        <i
          v-bind:class="[
            expenseTypeIcon ? 'fas fa-' + expenseTypeIcon : 'fas fa-users',
          ]"
        ></i>
      </div>
      <p class="type__date">{{ dateFormated }}</p>
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
import { DateFormat } from '../../services/date/date-format'
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
    expenseTypeIcon: String,
    amountSpent: Number,
    amountTotal: Number,
  },
  data() {
    return {
      dateFormated: new DateFormat({ date: this.date }).timeStampToDate(),
    }
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
@import "../../styles/_variables.sass"

.hot-timeline-component
    align-items: center
    background-color: #ffffff
    border-radius: 6px
    display: flex
    min-height: 154px
    margin: 28px
    padding: 24px

    .container
      margin: 0 36px
      min-height: 68px

      .container__title
        color: #d0d3d6
        font-size: $font-xs
        font-weight: bold
        text-transform: uppercase
        margin-bottom: 6px

    .action
      .action__legend
        font-size: $font-lg
        font-weight: bold
        color: #545b64

    .type
      align-items: center
      display: flex
      border-radius: 50%
      justify-content: center
      height: 60px
      width: 60px

      &__date
        color: #545b64
        font-size: 14px
        margin-top: 12px

      &--EXPENSE
        background-color: #e8f2fb
        .fas
          color: #0f68bd

      &--ACCOUNTABILITY_SUBMITTED, &--ACCOUNTABILITY_CREATED, &--EVALUATION
        background-color: #efebf9
        .fas
          color: #C9BCF3

    .status
      background-color: #e7f2fd
      border: solid 1px #5f6772
      border-radius: 18px
      color: #5f6772
      font-weight: bold
      padding: 6px 12px

      .status__label
        font-size: $font-xs
</style>
