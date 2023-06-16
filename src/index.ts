import './style/index.scss'
import './style/iconfont/iconfont.css'
import GameController from './modules/GameController'

const button = document.getElementById('start')!

button.addEventListener('click', function() {
  const level = +(document.getElementById('config-level') as HTMLInputElement).value
  const score = +(document.getElementById('config-score') as HTMLInputElement).value
  
  new GameController(level, score)
})





