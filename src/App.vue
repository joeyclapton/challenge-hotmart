<template>
  <header class="header"></header>
  <main class="main">
    <section class="menu"></section>
    <section class="quick-ops">
      <div class="breadcrumbs"></div>
      <div class="quick-ops__wrapper">
        <div class="refound-container">
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
            v-bind:amount-of-people="
              header.accountabilityExtraInfo.amountOfPeople
            "
            v-bind:cost-centers="header.costCenters"
            v-bind:date="header.accountabilityExtraInfo.eventDate"
          ></hot-refound-component>
        </div>
        <section class="sidebar"></section>
      </div>
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
      timeline: null,
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
      this.timeline = await api._getTimeline()
      this.header = await api._getHeader()
    },
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  overflow: hidden;
}
.header {
  background-color: #053d4e;
  height: 48px;
  width: 100%;
}
.main {
  display: flex;
}
.menu {
  background-color: #053d4e;
  height: calc(100vh - 48px);
  width: 220px;
}
.quick-ops {
  background-color: #f4f6fa;
  width: calc(100% - 220px);
}
.quick-ops__wrapper {
  display: flex;
}
.refound-container {
  width: calc(100% - 392px);
}
.breadcrumbs {
  background-color: #f0f3f7;
  height: 48px;
  width: 100%;
}
.sidebar {
  background-color: #ffffff;
  height: 100%;
  width: 392px;
  transition: width 0.4s;
}
</style>
