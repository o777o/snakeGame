class Snake {
  snakeContent: HTMLElement
  head: HTMLElement
  bodies: HTMLCollection


  constructor(public maxWeight: number, public maxHeight: number) {
    this.snakeContent = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    this.bodies = this.snakeContent.getElementsByTagName('div')
  }

  get X () {
    return this.head.offsetLeft
  }

  get Y () {
    return this.head.offsetTop
  }

  set X (value: number) {
    if (value === this.X) return
    // if (this.bodies[1]) {
    //   if (value === (this.bodies[1] as HTMLElement).offsetLeft) {
    //     if (this.X > (this.bodies[1] as HTMLElement).offsetLeft) {
    //       value = this.X + 10
    //     } else {
    //       value = this.X - 10
    //     }
    //   }
    // }

    if (value < 0 || value > this.maxWeight - 10) {
      throw new Error('蛇撞墙了！')
    }

    this.moveBody()
    this.head.style.left = value + 'px'

    this.checkSnake()
  }

  set Y (value: number) {
    if (value === this.Y) return
    // if (this.bodies[1]) {
    //   if (value === (this.bodies[1] as HTMLElement).offsetTop) {
    //     if (this.Y > (this.bodies[1] as HTMLElement).offsetTop) {
    //       value = this.Y + 10
    //     } else {
    //       value = this.Y - 10
    //     }
    //   }
    // }


    if (value < 0 || value > this.maxHeight - 10) {
      throw new Error('蛇撞墙了！')
    }

    this.moveBody()
    this.head.style.top = value + 'px'

    this.checkSnake()
  }

  addBody() {
    this.snakeContent.insertAdjacentHTML('beforeend', '<div></div>')
  }

  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      (this.bodies[i] as HTMLElement).style.left = (this.bodies[i - 1] as HTMLElement).offsetLeft + 'px';
      (this.bodies[i] as HTMLElement).style.top = (this.bodies[i - 1] as HTMLElement).offsetTop + 'px'
    }
  }

  checkSnake() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      const currentBody = this.bodies[i] as HTMLElement
      if (this.X === currentBody.offsetLeft && this.Y === currentBody.offsetTop) {
        throw new Error('撞到自己了！')
      }
    }
  }
}

export default Snake