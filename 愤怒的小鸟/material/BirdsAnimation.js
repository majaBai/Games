
class BirdsAnimation extends MyAnimation {
    constructor(option) {
      option.name= 'bird'
      super(option)
      this.flip = false
      this.vy = 0.5
      this.fall = true
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
    move( deraction, num) {
        this.fall = false
        if (deraction === 'x') {
            this.flip = num < 0
            this.x += num
            if (this.x > this.game.canvas.width - this.w ) this.x = this.game.canvas.width - this.w
            if (this.x < -this.w / 3) this.x = -this.w / 3
        } else {
            this.y += num
            if (this.y > 600 - this.h / 2) this.y = 600 - this.h / 2
            if (this.y < 0) this.y = 0
        }
    }
    jump () {
        this.fall = false
        this.y -= 15
    }
    startfall () {
        this.fall = true
    }
    update () {
        if (this.fall) {
            this.y += this.vy
            this.vy += 0.5
        } else {
            this.vy = 0.5
        }
        if (this.y >= 570) {
            this.y = 570
            // 旋转有问题
            const ctx =  this.game.ctx
            ctx.save()
            let x = this.x + this.w / 2
            let y = this.y + this.h / 2
            ctx.translate(x, y)
            // ctx.scale(-1, 1)
            // ctx.translate(-x, 0)
            ctx.rotate(45 * Math.PI/180)
            ctx.drawImage(this.texture, this.x, this.y, this.w, this.h)
            ctx.restore()
        }
        this.curIndx = (this.curIndx + 1) % this.framesCount
        this.texture = this.frames[this.curIndx]
    }
  }