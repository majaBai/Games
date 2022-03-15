class GameMaterial {
    constructor (option) {
      // game, name, x, y, factor, speed
      this.option = option
      this.init()
    }
    init() {
      this.game = this.option.game
      this.texture = this.game.textureByName(this.option.name).img
      this.x = this.option.x
      this.y = this.option.y
      this.w = this.texture.width/(this.option.factor || 1)// 由于找的图片不合适，太大，故缩小
      this.h = this.texture.height/(this.option.factor || 1)
      this.speed = this.option.speed || 0
      this.i = null
    }
    static new (option) {
      const i = this.i || new this(option)
      if(!this.i) this.i = i
      return i
    }
  }
