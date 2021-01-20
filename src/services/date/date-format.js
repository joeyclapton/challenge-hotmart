export class DateFormat {
  constructor({ date } = {}) {
    this.date = date
  }

  /**
   * @public
   * @description - formata timestamp para data
   */
  timeStampToDate() {
    if (!this.date) return

    const d = new Date(Number(this.date)).toISOString().split(':')[0].split('-')
    return `${d[2].replace(/T(\w+)/g, '')}/${d[1]}/${d[0]}`
  }
}
