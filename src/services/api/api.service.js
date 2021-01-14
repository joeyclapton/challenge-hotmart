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
}
