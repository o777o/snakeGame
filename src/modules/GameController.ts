import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameController {
  food: Food
  scorePanel: ScorePanel
  snake: Snake
  direction = 'ArrowRight'
  isLive = true

  constructor(maxLevel?: number, scoreUp?: number) {
    const maxWeight = document.getElementById('stage')!.clientWidth
    const maxHeight= document.getElementById('stage')!.clientWidth
    
    this.food = new Food(maxWeight, maxHeight)
    this.scorePanel = new ScorePanel(maxLevel, scoreUp)
    this.snake = new Snake(maxWeight, maxHeight)

    this.init()
  }

  init() {
    const virtualKeyboards = document.getElementsByTagName('i')
    for (let i = 0; i < virtualKeyboards.length; i++) {
      virtualKeyboards[i].addEventListener('click', () => {
        this.keydownHandler({
          key: virtualKeyboards[i].id
        })
      })
    }

    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.food.change(this.snake.bodies)
    this.run()
  }

  keydownHandler(event: { key: string }) {
    let { key } = event
    switch (key) {
      case 'ArrowUp':
        if (this.direction === 'ArrowDown') key = 'ArrowDown'
        break;
      case 'ArrowDown':
        if (this.direction === 'ArrowUp') key = 'ArrowUp'
        break;
      case 'ArrowLeft':
        if (this.direction === 'ArrowRight') key = 'ArrowRight'
        break;
      case 'ArrowRight':
       if (this.direction === 'ArrowLeft') key = 'ArrowLeft'
        break;
    }
    this.direction = key
  }

  run() {
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case 'ArrowUp':
        Y -= 10
        break;
      case 'ArrowDown':
        Y += 10
        break;
      case 'ArrowLeft':
        X -= 10
        break;
      case 'ArrowRight':
        X += 10
        break;
    }

    try {
      if (X === this.food.X && Y === this.food.Y) {
        this.scorePanel.changeScore()
        this.snake.addBody()
        
        this.snake.X = X
        this.snake.Y = Y

        this.food.change(this.snake.bodies)
      } else {
        this.snake.X = X
        this.snake.Y = Y
      }
    } catch (error) {
      alert((error as Error).message + ' Game Over!')
      this.isLive = false
      window.location.reload()
    }

    this.isLive && setTimeout(() => this.run(), 300 - (this.scorePanel.level - 1) * 30)
  }

}

export default GameController