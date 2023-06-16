class ScorePanel {
  score = 0
  level = 1
  scoreSpan: HTMLElement
  levelSpan: HTMLElement
  maxLevel: number
  scoreUp: number

  constructor(maxLevel: number = 10, scoreUp: number = 10) {
    this.scoreSpan = document.getElementById('score')!
    this.levelSpan = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.scoreUp = scoreUp
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelSpan.innerHTML = ++this.level + ''
    }
  }

  changeScore() {
    this.scoreSpan.innerHTML = ++this.score + ''
    if (this.score % this.scoreUp === 0) this.levelUp()
  }
}

export default ScorePanel