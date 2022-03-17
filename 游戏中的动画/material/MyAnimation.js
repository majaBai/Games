
class MyAnimation {
    constructor(option) {
      this.init(option)
    }
    init (option) {
      this.game = option.game
      this.frames = []
      this.framesCount = 96
      for(let i = 0; i < this.framesCount; i++) {
          const f = this.game.textureByName(`w${i}`).img
          this.frames.push(f)
      }
      this.curIndx = 0
      this.texture = this.frames[this.curIndx] // 当前帧的图片
      this.x = option.x
      this.y = option.y
      const scale = 0.3 // 控制图片大小
      this.w = this.texture.width * scale
      this.h = this.texture.height * scale
    }
    update () {
        this.curIndx = (this.curIndx + 1) % this.framesCount
        this.texture = this.frames[this.curIndx]
    }
    draw () {
     this.game.drawMaterial(this)
    }
  }