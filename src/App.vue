<template>
  <div class="topbar"></div>
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
            v-bind:amount-of-people="
              header.accountabilityExtraInfo.amountOfPeople
            "
            v-bind:cost-centers="header.costCenters"
            v-bind:date="header.accountabilityExtraInfo.eventDate"
          ></hot-refound-component>
          <hot-form-expense-component></hot-form-expense-component>

          <div v-if="timeline">
            <hot-timeline-component
              v-for="item in timeline.content"
              :key="item.id"
              v-bind:type="item.cardType"
              v-bind:notes="item.notes"
              v-bind:date="item.cardDate"
              v-bind:status="item.status"
              v-bind:currency-code="item.currencyCode"
              v-bind:amount-total="item.amountTotal"
              v-bind:amount-spent="item.amountSpent"
              v-bind:expense-type-code="item.expenseTypeCode"
            >
            </hot-timeline-component>
          </div>
        </div>
        <section v-if="sidebar" class="sidebar">
          <hot-sidebar-component
            status="Disponível"
            v-bind:content="sidebar.content"
          ></hot-sidebar-component>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import HotRefoundComponent from './components/hot-refound/hot-refound.component'
import hotSidebarComponent from './components/hot-sidebar/hot-sidebar.component'
import HotTimelineComponent from './components/hot-timeline/hot-timeline.component'
import HotFormExpenseComponent from './components/hot-form-expense/hot-form-expense.component'

import { Api } from './services/api/api.service'

export default {
  name: 'App',
  components: {
    HotRefoundComponent,
    HotTimelineComponent,
    hotSidebarComponent,
    HotFormExpenseComponent,
  },
  data() {
    return {
      header: null,
      timeline: null,
      sidebar: null,
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
      this.timeline = await api._getTimeline()
      this.sidebar = await api._getSidebar()
    },
  },
}
</script>

<style lang="sass">
*
  box-sizing: border-box
  font-family: 'Nunito Sans', sans-serif
  margin: 0
  padding: 0

html,
body
  height: 100%

#app
  overflow: hidden

  .topbar
    background-color: #053d4e
    height: 48px
    width: 100%

  .main
    display: flex

  .menu
    background-color: #053d4e
    width: 220px

  .quick-ops
    background-color: #f4f6fa
    width: calc(100% - 220px)

  .quick-ops__wrapper
    display: flex

  .refound-container
    width: calc(100% - 392px)

  .breadcrumbs
    background-color: #f0f3f7
    height: 48px
    width: 100%

  .sidebar
    background-color: #ffffff
    width: 392px
    transition: width 0.4s
</style>
