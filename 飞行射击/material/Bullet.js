class Bullet extends GameMaterial {
  constructor(option) {
    option.name= 'bullet'
    option.factor= 50
    option.speed=  config.player_speed
    super(option)
  }
  update () {
      this.y -= this.speed
      this.speed = config.bullet_speed
  }
  draw () {
    this.game.drawMaterial(this)
  }
}