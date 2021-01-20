<template>
  <div class="hot-card-extract-component">
    <header class="header">
      <p class="header__title">Saldo</p>
      <p class="header__value">
        <span>{{ currencySymbol }} {{ balance }},00</span>
      </p>
    </header>
    <div class="divider"></div>
    <div class="cash">
      <div class="cash__wrapper">
        <div class="cash__icon">
          <i class="fas fa-arrow-up"></i>
        </div>
        <div>
          <p class="cash__wrapper-label">Gastou</p>
          <p class="cash__wrapper-value">
            {{ currencySymbol }} {{ returned }},00
          </p>
        </div>
      </div>
      <div class="divider divider--small"></div>
      <div class="cash__wrapper">
        <div class="cash__icon">
          <i class="fas fa-arrow-down"></i>
        </div>
        <div>
          <p class="cash__wrapper-label">Recebeu</p>
          <p class="cash__wrapper-value">
            {{ currencySymbol }} {{ received }},00
          </p>
        </div>
      </div>
    </div>
    <p class="table__title">Extrato</p>
    <table class="table">
      <thead>
        <tr>
          <td>Descrição</td>
          <td>Valor</td>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <th>Despesas declaradas</th>
          <th>{{ currencySymbol }} {{ declared }}</th>
        </tr>
        <tr class="">
          <td>Despesas declaradas pelo trooper</td>
          <td></td>
        </tr>
        <tr class="">
          <th>Despesas aprovadas</th>
          <th>{{ currencySymbol }} {{ approved }},00</th>
        </tr>
        <tr class="">
          <td>Despesas aprovadas pelo financeiro</td>
          <td></td>
        </tr>
        <tr class="">
          <th>Pagamento realizado</th>
          <th class="table--highlight">{{ currencySymbol }} 0,00</th>
        </tr>
        <tr class="">
          <td>Pagamento realizado pelo financeiro</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    declared: Number,
    approved: Number,
    received: Number,
    currencySymbol: Number,
    balance: Number,
    returned: Number,
  },
}
</script>

<style lang="sass">
.hot-card-extract-component
    border: solid 1px #f0f3f7
    border-radius: 6px
    padding: 20px
    margin-top: 28px

    .divider
      background-color: #f0f3f7
      height: 2px
      margin: 24px auto
      width: 80%

      &--small
        height: 40px
        margin: 6px
        width: 2px

    .cash
      display: flex
      justify-content: center

      &__icon
        border: 1px solid #d0d3d6
        border-radius: 50%
        margin-right: 12px
        padding: 2px 8px

        .fas
          color: #d0d3d6
          font-size: 12px

      &__wrapper
        align-items: center
        display: flex
        justify-content: center
        margin: 0 6px

    .header
      &__title
        color: #6b7480
        font-size: 14px
        text-transform: uppercase
        text-align: center

      &__value
        color: #053d4e
        font-size: 24px
        font-weight: bold
        text-align: center
        margin-top: 12px

    .table
      &__title
        border-bottom: 1px solid #f0f3f7
        margin-bottom: 24px
        margin-top: 48px
        padding-bottom: 12px

      th, td
        text-align: left

      thead
        td
          color: #053d4e

      tbody
        th
          color: #053d4e
          font-size: 14px
          padding: 8px 8px 0 0

          &.table--highlight
            color: #4acc82

        td
          color: #9ea4ac
          font-size: 12px
</style>
