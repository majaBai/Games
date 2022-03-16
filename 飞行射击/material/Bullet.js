class Bullet extends GameMaterial {
  constructor(option) {
    option.name= 'bullet'
    option.factor= 50
    option.speed=  config.player_speed
    super(option)
    this.killed = false
  }
  update (idx) {
      this.checkCollide(idx)
      if (this.killed) return
      this.y -= this.speed
      this.speed = config.bullet_speed
  }
  draw () {
    this.game.drawMaterial(this)
  }
  checkCollide (idx) {
    const item = this
    const enemy = this.game.scene.elements.filter(e => e.option.name === "enemy")
    for(let i = 0; i < enemy.length; i++) {
        if (rectIntersects(enemy[i], item)) {
            this.killed = true
            break
        }
    }
    console.log('bullet check colllide', this.killed)
    if (item.killed) {
        item.game.scene.removeElement(idx)
    }
}
}