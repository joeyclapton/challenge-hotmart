<template>
  <div class="hot-form-expense-component">
    <header class="header">
      <button class="button button--icon" v-on:click="onToggleForm()">
        <i class="fas fa-receipt"></i>
        <span>Adicionar despesa</span>
      </button>
    </header>
    <form v-on:submit="onSubmit" class="form" v-if="showForm">
      <h2 class="form__title">Adicionar despesa</h2>
      <div class="form__wrapper">
        <div>
          <h3>Envie o comprovante</h3>
          <p>
            Você pode inserir arquivos nos formatos PNG, JPG ou PDF. Tamanho
            máximo: 1MB
          </p>
        </div>
        <div>
          <div>
            <label for="">Tipo *</label>
            <select v-model="document.expenseTypeCode">
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
            <label for="">Moeda *</label>
            <select v-model="document.currencyCode">
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
        <div>
          <div>
            <label for="">Descrição da despesa *</label>
            <input v-model="document.notes" type="text" name="" id="" />
          </div>
          <p>
            {{ document.notes }}
          </p>
          <div>
            <label for="">Data do comprovante *</label>
            <input v-model="document.cardDate" type="date" name="" id="" />
          </div>
        </div>
        <div>
          <div>
            <label for="">Valor da nota / cupom *</label>
            <input type="text" v-model="document.amountTotal" name="" id="" />
          </div>
          <div>
            <label for="">Valor a ser considerado *</label>
            <input type="text" v-model="document.amountSpent" name="" id="" />
          </div>
        </div>
      </div>
      <footer class="footer">
        <button class="button button--cancel" v-on:click="onToggleForm()">
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
      this._clearInputs()
    },
    async onSubmit(event) {
      event.preventDefault()
      const api = new Api({
        url: 'https://api-front-end-challenge.buildstaging.com/api',
      })
      await api.addExpense(this.document)
      this._clearInputs()
    },
    _clearInputs() {
      this.document = {}
    },
  },
}
</script>

<style lang="sass">
.hot-form-expense-component
    margin: 28px

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
        border-radius: 6px
        display: flex
        justify-content: flex-end
        padding: 16px

    .form
        &__title
            font-size: 20px
            line-height: 1.5
            color: #353a40

        &__wrapper
            display: flex
</style>
