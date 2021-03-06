<template>
  <div class="topbar"></div>
  <main class="main">
    <div class="loader__container" v-if="loading">
      <span class="loader"></span>
    </div>

    <section class="menu"></section>
    <section class="quick-ops">
      <div class="breadcrumbs">
        <hot-breadcrumb v-bind:breadcrumbs="breadcrumbs"></hot-breadcrumb>
      </div>
      <div class="quick-ops__wrapper" v-if="header && sidebar && timeline">
        <div class="refound-container">
          <hot-refound
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
          ></hot-refound>
          <hot-form-expense></hot-form-expense>
          <hot-timeline
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
            v-bind:expense-type-icon="item.expenseTypeIcon"
            v-bind:name="item.author ? item.author.name : ''"
          >
          </hot-timeline>
        </div>
        <section class="sidebar">
          <hot-sidebar
            status="Disponível"
            v-bind:content="sidebar.content"
          ></hot-sidebar>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import HotRefound from './components/hot-refound/hot-refound'
import hotSidebar from './components/hot-sidebar/hot-sidebar'
import HotTimeline from './components/hot-timeline/hot-timeline'
import HotFormExpense from './components/hot-form-expense/hot-form-expense'
import HotBreadcrumb from './components/hot-breadcrumb/hot-breadcrumb'

import { Api } from './services/api/api.service'

export default {
  name: 'App',
  components: {
    HotRefound,
    HotTimeline,
    hotSidebar,
    HotFormExpense,
    HotBreadcrumb,
  },
  data() {
    return {
      header: null,
      timeline: null,
      sidebar: null,
      loading: true,
      breadcrumbs: [
        { id: 0, label: 'Dashboard' },
        { id: 1, label: 'QuickOps' },
        { id: 2, label: 'Current' },
      ],
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
      this.loading = false
    },
  },
}
</script>

<style lang="sass">

@import "styles/_variables.sass"
@import "styles/loader.sass"

*
  box-sizing: border-box
  font-family: 'Nunito Sans', sans-serif
  margin: 0
  padding: 0

html,
body
  height: 100%

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

    @media screen and(max-width: $media-lg)
      display: none

  .main
    display: flex
    min-height: 100%

  .menu
    background-color: #053d4e
    width: 220px
    @media screen and(max-width: $media-lg)
      display: none

  .quick-ops
    background-color: #f4f6fa
    width: calc(100% - 220px)
    @media screen and(max-width: $media-lg)
      margin-top: 48px
      width: 100%

  .quick-ops__wrapper
    display: flex
    @media screen and(max-width: $media-lg)
      width: 100%

    @media screen and(max-width: $media-md)
      flex-direction: column

  .refound-container
    width: calc(100% - 392px)
    @media screen and(max-width: $media-md)
      width: 100%

  .breadcrumbs
    align-items: center
    background-color: #f0f3f7
    display: flex
    padding: 0 32px
    height: 48px
    width: 100%
    @media screen and(max-width: $media-lg)
      position: fixed
      top: 0
      z-index: 1

  .sidebar
    background-color: #ffffff
    width: 392px
    transition: width 0.4s
    @media screen and(max-width: $media-md)
      width: 100%
</style>
