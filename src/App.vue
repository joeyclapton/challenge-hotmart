<template>
  <div class="topbar"></div>
  <main class="main">
    <div class="loader__container" v-if="!(header && timeline && sidebar)">
      <span class="loader"></span>
    </div>

    <section class="menu"></section>
    <section class="quick-ops">
      <div class="breadcrumbs"></div>
      <div class="quick-ops__wrapper" v-if="header && timeline && sidebar">
        <div class="refound-container">
          <hot-refound-component
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
        <section class="sidebar">
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

.loader__container
  position: absolute
  left: 220px
  right: 0px
  top: 48px
  bottom: 0
  display: flex

.loader
  width: 175px
  height: 80px
  display: block
  margin: auto
  background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0)
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px
  background-repeat: no-repeat
  position: relative
  box-sizing: border-box

  &::after
    content: ''
    left: 68px
    right: 0
    bottom: 20px
    position: absolute
    width: 36px
    height: 36px
    border-radius: 50%
    border: 5px solid transparent
    border-color: #FF3D00 transparent
    box-sizing: border-box
    animation: rotation 1s linear infinite

@keyframes rotation
  0%
    transform: rotate(0deg)

  100%
    transform: rotate(360deg)

#app
  height: 100%

  .topbar
    background-color: #053d4e
    height: 48px
    width: 100%

  .main
    display: flex
    min-height: 100%

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
