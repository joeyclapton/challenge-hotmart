<template>
  <div class="hot-card-extract-component">
    <header class="header">
      <p>Saldo</p>
      <p>
        <span>ARS 0,00</span>
      </p>
    </header>
    <div class="cash">
      <div class="cash__wrapper">
        <p class="cash__wrapper-label">Gastou</p>
        <p class="cash__wrapper-value">ARS 0,00</p>
      </div>
      <div class="cash__wrapper">
        <p class="cash__wrapper-label">Recebeu</p>
        <p class="cash__wrapper-value">ARS 0,00</p>
      </div>
      <p>Extrato</p>
    </div>
    <table>
      <thead>
        <tr>
          <td>Descrição</td>
          <td>Valor</td>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <th>Despesas declaradas</th>
          <th>ARS 123.213,21</th>
        </tr>
        <tr class="">
          <th>Despesas aprovadas</th>
          <th>ARS 0,00</th>
        </tr>
        <tr class="">
          <td>Despesas declaradas pelo financeiro</td>
          <td></td>
        </tr>
        <tr class="">
          <td>Pagamento realizado</td>
          <td>ARS 0,00</td>
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
export default {}
</script>

<style lang="sass">
.hot-card-extract-component
    border: solid 1px #f0f3f7
    border-radius: 6px
    padding: 20px
</style>
