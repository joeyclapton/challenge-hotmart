export class Api {
  constructor({ url } = {}) {
    this.url = url
  }

  /**
   * @private
   * @description - retorna informações do header
   * @returns {Object} - informações do header
   */
  async _getHeader() {
    const api = this.url
    const response = await fetch(`${api}/header`)
      .then(response => response.json())
      .catch(err => console.error('Erro:', err))

    return response
  }

  /**
   * @private
   * @description - retorna informações da timeline
   * @returns {Object} - informações da timeline
   */
  async _getTimeline() {
    const api = this.url
    const response = await fetch('/timeline')
      .then(response => response.json())
      .catch(err => console.error('Erro: ', err))

    return response
  }

  /**
   * @private
   * @description - retorna informações da sidebar
   * @returns {Object} - informações da sidebar
   */
  async _getSidebar() {
    const api = this.url
    const response = await fetch('/sidebar')
      .then(response => response.json())
      .catch(err => console.error('Erro: ', err))

    return response
  }

  /**
   * @private
   * @description - retorna informações da sidebar
   * @returns {Object} - informações da sidebar
   */
  async addExpense({
    expenseTypeCode,
    currencyCode,
    amountSpent,
    amountTotal,
    notes,
    resourceUrl,
    cardDate,
  }) {
    const api = this.url
    const data = arguments[0]

    const response = await fetch('/expense/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then(response => response.json())
      .catch(err => console.error('Erro: ', err))

    return response
  }
}
