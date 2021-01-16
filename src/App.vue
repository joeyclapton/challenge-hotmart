<template>
  <header class="header"></header>
  <main class="main">
    <section class="sidebar"></section>
    <section class="quick-ops">
      <hot-refound-component
        v-if="header"
        v-bind:id="header.id"
        v-bind:name="header.collaborator.name"
        v-bind:email="header.collaborator.email"
        v-bind:justification="header.justification"
        v-bind:purpose="header.purpose"
        v-bind:project="header.project.title"
        v-bind:accountabilityExtraInfo="
          header.accountabilityExtraInfo.eventDate
        "
        v-bind:amount-of-people="header.accountabilityExtraInfo.amountOfPeople"
        v-bind:cost-centers="header.costCenters"
        v-bind:date="header.accountabilityExtraInfo.eventDate"
      ></hot-refound-component>
    </section>
  </main>
</template>

<script>
import HotRefoundComponent from './components/hot-refound/hot-refound.component.vue'
import { Api } from './services/api/api.service'

export default {
  name: 'App',
  components: {
    HotRefoundComponent,
  },
  data() {
    return {
      header: null,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const api = new Api({
        url: 'https://api-front-end-challenge.buildstaging.com/api',
      })

      this.header = await api._getHeader()
    },
  },
}
</script>

<style>
body,
html {
  font-family: 'Nunito Sans', sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
}
.header {
  background-color: #053d4e;
  height: 48px;
  width: 100%;
}
.main {
  display: flex;
}
.sidebar {
  background-color: #053d4e;
  height: calc(100vh - 48px);
  width: 220px;
}
.quick-ops {
  width: calc(100% - 220px);
}
</style>
