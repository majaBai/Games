
class MyAnimation {
    constructor(option) {
      this.init(option)
    }
    init (option) {
      this.game = option.game
      this.scale = option.scale || 1 // 控制图片大小
      this.x = option.x
      this.y = option.y
      this.frames = []
      this.framesCount = option.framesCount
      for(let i = 0; i < this.framesCount; i++) {
          const f = this.game.textureByName(`${option.img_path}${i}`).img
          this.frames.push(f)
      }
      this.curIndx = 0
      this.texture = this.frames[this.curIndx] // 当前帧的图片
      this.w = this.texture.width * this.scale
      this.h = this.texture.height * this.scale
    }
    update () {
        this.curIndx = (this.curIndx + 1) % this.framesCount
        this.texture = this.frames[this.curIndx]
    }
    draw () {
     this.game.drawMaterial(this)
    }
  }