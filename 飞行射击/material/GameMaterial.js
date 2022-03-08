class GameMaterial {
    constructor (option) {
      // game, name, x, y, factor, speed
      console.log('GameImg constructor')
      this.texture = option.game.textureByName(option.name).img
      this.x = option.x
      this.y = option.y
      this.w = this.texture.width/option.factor // 由于找的图片不合适，太大，故缩小
      this.h = this.texture.height/option.factor
      this.i = null
    }
    static new (option) {
        const i = this.i || new this(option)
        if(!this.i) this.i = i
        return i
      }
  }
