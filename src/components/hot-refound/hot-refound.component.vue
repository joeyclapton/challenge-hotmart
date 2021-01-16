<template>
  <div class="hot-refound">
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
        <p>Centro de custo</p>
        <li class="list__item" v-for="item in costCenters" :key="item.id">
          <span class="list__item-info">{{ item.percentage }}%</span>
          <span class="list__item-info">{{ item.reviser.name }}</span>
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

<style scoped>
.hot-refound {
  background-image: linear-gradient(to right, #00d7ce 3%, #00c5fc);
  border-radius: 12px;
  padding: 16px 48px;
  margin: 32px;
}
.header__title {
  color: #ffffff;
  font-size: 20px;
}
.list__container {
  display: flex;
  justify-content: space-between;
}
.list {
  list-style: none;
  padding: 0;
}
.list__item {
  margin: 6px 0;
}
.list__item-label {
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  min-width: 120px;
  text-align: left;
}
.list__item-info {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.71;
}
</style>
