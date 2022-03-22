class Bomb extends GameMaterial {
    constructor(option) {
      option.name= 'bomb'
      option.factor= option.factor || 10
      option.speed=  config.player_speed
      super(option)
      this.duration = 3
    }
    update () {
        this.duration--
    }
    draw () {
      if(this.duration > 0) {
        this.game.drawMaterial(this)
      }
    }
  }
