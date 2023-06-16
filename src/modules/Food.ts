class Food {
  element: HTMLElement

  constructor(public maxWeight: number, public maxHeight: number) {
    this.element = document.getElementById('food')!
  }

  get X () {
    return this.element.offsetLeft
  }

  get Y () {
    return this.element.offsetTop
  }

  change(snake: HTMLCollection) {
    let left = Math.floor(Math.random() * this.maxWeight / 10) * 10
    let top = Math.floor(Math.random() * this.maxHeight / 10) * 10

    for (let i = 0; i < snake.length; i++) {
      if ((snake[i] as HTMLElement).offsetLeft === left && (snake[i] as HTMLElement).offsetTop === top) {
        this.change(snake)
        return
      }
    }

    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

export default Food