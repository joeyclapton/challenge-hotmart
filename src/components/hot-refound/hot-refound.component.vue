<template>
  <div class="hot-refound-component">
    <header class="header">
      <h2 class="header__title">Reembolso #{{ id }}</h2>
    </header>

    <section class="list__container">
      <ol class="list">
        <li class="list__item">
          <span class="list__item-label">Nome </span>
          <span class="list__item-info">{{ name }}</span>
        </li>
        <li class="list__item">
          <span class="list__item-label">E-mail </span>
          <span class="list__item-info">{{ email }}</span>
        </li>
        <li class="list__item">
          <span class="list__item-label">Justicativa </span>
          <span class="list__item-info">{{ justification }}</span>
        </li>
        <li class="list__item">
          <span class="list__item-label">Finalidade </span>
          <span class="list__item-info">{{ purpose }}</span>
        </li>
        <li class="list__item">
          <span class="list__item-label">Projetos </span>
          <span class="list__item-info">{{ project }}</span>
        </li>
        <li class="list__item">
          <span class="list__item-label">Data </span>
          <span class="list__item-info">{{ date }}</span>
        </li>
        <li class="list__item">
          <span class="list__item-label">Quantidade </span>
          <span class="list__item-info"
            >{{ amountOfPeople }}
            {{ amountOfPeople == 1 ? 'pessoa' : 'pessoas' }}
          </span>
        </li>
      </ol>
      <div class="divider"></div>
      <ol class="list">
        <p class="list__title">Centro de custo</p>
        <li class="list__item" v-for="cost in costCenters" :key="cost.id">
          <span class="list__item-info list__item-info--reset-margin"
            >{{ cost.percentage }}%
          </span>
          <span class="list__item-info">{{ cost.reviser.name }}</span>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    email: String,
    justification: String,
    purpose: String,
    costCenters: Array,
    project: String,
    date: String,
    amountOfPeople: String,
    flag: String,
  },
}
</script>

<style lang="sass">
.hot-refound-component
  background-image: linear-gradient(to right, #00d7ce 3%, #00c5fc)
  border-radius: 12px
  height: fit-content
  padding: 24px 48px
  margin: 32px

  .header
    &__title
      color: #ffffff
      font-size: 20px

  .divider
    background-color: #ffffff
    width: 1px

  .list__container
    display: flex
    justify-content: space-between
    margin-top: 32px

    .list
      list-style: none
      padding: 0
      width: 45%

      &__title
        font-size: 14px
        color: #ffffff


      &__item
        margin: 6px 0

      &__item-label
        color: #ffffff
        display: inline-block
        font-size: 14px
        min-width: 120px
        text-align: right

      &__item-info
        color: #ffffff
        font-size: 14px
        font-weight: 600
        line-height: 1.71
        margin-left: 24px

        &--reset-margin
          margin: 0
</style>
