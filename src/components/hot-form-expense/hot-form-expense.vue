<template>
  <div class="hot-form-expense-component">
    <header class="header">
      <button class="button button--icon" v-on:click="onToggleForm()">
        <i class="fas fa-receipt"></i>
        <span>Adicionar despesa</span>
      </button>
    </header>
    <form v-on:submit="onSubmit" class="form" v-if="showForm">
      <h2 class="form__title">Nova despesa</h2>
      <div class="form__wrapper">
        <div class="form__upload">
          <div>
            <p class="form__upload-title">Recibo, cupom ou nota fiscal*</p>

            <div class="form__upload-box">
              <label class="form__input-label-file" for="file"
                >Selecione um arquivo do seu computador</label
              >
            </div>
            <input type="file" name="" id="file" />
            <p class="form__upload-legend">
              Você pode inserir arquivos nos formatos PNG, JPG ou PDF.
            </p>
          </div>
        </div>
        <div class="form__inputs">
          <div class="form__input-container">
            <div>
              <label for="type">Tipo *</label>
              <select id="type" v-model="document.expenseTypeCode">
                <option
                  value="option"
                  v-for="option in options.expenseTypeCode"
                  :key="option"
                  name="option"
                >
                  <span>{{ option }}</span>
                </option>
              </select>
            </div>
            <div>
              <label for="currency">Moeda *</label>
              <select id="currency" v-model="document.currencyCode">
                <option
                  value="option"
                  v-for="option in options.currencyCode"
                  :key="option"
                  name="option"
                >
                  <span>{{ option }}</span>
                </option>
              </select>
            </div>
          </div>
          <div class="form__input-container">
            <div>
              <label for="notes">Descrição da despesa *</label>
              <input id="notes" v-model="document.notes" type="text" name="" />
            </div>

            <div>
              <label for="date">Data do comprovante *</label>
              <input v-model="document.cardDate" type="date" name="" iddate />
            </div>
          </div>
          <div class="form__input-container" v-if="document.currencyCode">
            <div>
              <label for="total">Valor da nota / cupom *</label>
              <input
                type="text"
                v-model="document.amountTotal"
                name=""
                id="total"
              />
            </div>
            <div>
              <label for="spent">Valor a ser considerado *</label>
              <input
                type="text"
                v-model="document.amountSpent"
                name=""
                id="spent"
              />
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <button
          class="button button--cancel"
          v-on:click="onToggleForm(), clearInputs()"
        >
          Cancelar
        </button>
        <button type="submit" class="button button--save">Salvar</button>
      </footer>
    </form>
  </div>
</template>

<script>
import { Api } from '../../services/api/api.service'

export default {
  data() {
    return {
      showForm: false,
      isValid: false,
      options: {
        expenseTypeCode: ['hotel-fee', 'food', 'transport'],
        currencyCode: ['BRL', 'USD', 'MXN'],
      },
      document: {
        expenseTypeCode: '',
        currencyCode: '',
        amountSpent: '',
        amountTotal: '',
        notes: '',
        resourceUrl: '',
        cardDate: '',
      },
    }
  },
  methods: {
    onToggleForm() {
      this.showForm = !this.showForm
    },
    async onSubmit(event) {
      event.preventDefault()
      const isValidForm = this.hasEmptyValue()

      if (isValidForm) {
        console.log('valid')
        const api = new Api({
          url: 'https://api-front-end-challenge.buildstaging.com/api',
        })
        await api.addExpense(this.document)

        this.clearInputs()
      }
    },
    clearInputs() {
      this.document = {}
    },
    hasEmptyValue() {
      const isEmpty = !Object.values(this.document).some(
        value => value !== null && value !== ''
      )
      console.log(isEmpty)
      return isEmpty
    },
  },
}
</script>

<style lang="sass">
@import "../../styles/_variables.sass"

.hot-form-expense-component
    margin: 28px

    input, select
      border: solid 1px #dfe2e6
      border-radius: 6px
      height: 36px
      padding: 6px
      outline: 0

      &:focus
        border-color: #00c9f1

      &[type="file"]
        display: none

    label
      font-weight: bold
      margin: 6px 0


    .button
        border-radius: 6px
        border-width: 1px
        border-style: solid
        cursor: pointer
        font-size: 16px
        outline: 0
        padding: 6px 12px
        transform: scale(1)
        transition: transform .3s

        &[disabled]
          opacity: 0.33
          cursor: not-allowed

        &:active
            transform: scale(0.95)

        &--cancel
            background-color: #ffffff
            border-color: #6b7480
            color: #6b7480
            margin-right: 24px

        &--save
            background-color: #51c1c3
            border-color:  #51c1c3
            color: #ffffff

        &--icon
            border-radius: 6px
            border-color: #6b7480
            background-color: #ffffff
            color: #6b7480

            i
                margin-right: 6px



    .header
        display: flex
        justify-content: flex-end

    .footer
        background-color: #ffffff
        display: flex
        justify-content: flex-end
        padding: 16px

    .form
        background-color: #fafbfc
        box-shadow: 0px 2px 4px 0px #6b7480a8
        border-radius: 6px
        margin-top: 24px
        overflow: hidden

        &__input-label-file
          background-color: #ffffff
          border: solid 1px #dfe2e6
          border-radius: 6px
          display: block
          color: #303030
          cursor: pointer
          font-weight: normal
          padding: 12px 24px
          transition: background .3s

          &:hover
            background-color: #fafbfc

        &__upload-legend
          color: #848a91
          font-size: 12px

        &__title
            font-size: 20px
            line-height: 1.5
            color: #353a40
            padding: 36px
            padding-bottom: 16px

        &__wrapper
            display: flex

        &__inputs
          display: flex
          flex-direction: column
          padding: 0 48px
          margin-bottom: 48px
          width: 50%

        &__input-container
          display: flex

          div
            display: flex
            flex-direction: column
            margin: 12px 0
            margin-left: 12px
            width: -webkit-fill-available

        &__upload
          background-color: #ffffff
          margin: 18px 0 16px 36px
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          padding: 28px
          width: 50%

          &-box
              border: dashed 1px #dfe2df
              border-radius: 3px
              margin: 12px 0
              padding: 58px 16px

          &-title
            color: #343a42
            font-size: 16px
</style>
