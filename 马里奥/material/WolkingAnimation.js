
class WolkingAnimation extends MyAnimation {
    constructor(option) {
      super(option)
      this.flip = false
    }
    draw () {
      const ctx =  this.game.ctx
      if (this.flip) {
        ctx.save()
        let x = this.x + this.w / 2
        ctx.translate(x, 0)
        ctx.scale(-1, 1)
        ctx.translate(-x, 0)
        ctx.drawImage(this.texture, this.x, this.y, this.w, this.h)
        ctx.restore()
      } else {
        ctx.drawImage(this.texture, this.x, this.y, this.w, this.h)
      }
    }
    move(num) {
      this.flip = num < 0
      this.x += num
    }
  }