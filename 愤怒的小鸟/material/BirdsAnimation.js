
class BirdsAnimation extends MyAnimation {
    constructor(option) {
      option.name= 'bird'
      super(option)
      this.flip = false
      this.vy = 0.5
      this.fall = true
      this.rotation = 0
    }
    draw () {
        const ctx =  this.game.ctx
            // ctx.save()
            // let w2 = this.w / 2
            // let h2 = this.h / 2
            // ctx.translate(this.x + w2, this.x + h2)
            // if (this.flip) ctx.scale(-1, 1)
            // ctx.rotate(this.rotation)
            // ctx.translate(-w2, -h2)
            // ctx.drawImage(this.texture, this.x, this.y, this.w, this.h)
            // ctx.restore()
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
    move( direction, num, status) {
        this.fall = status === 'up'
        console.log('status', status,  this.fall)
        this.flip = num < 0
        this.x += num
        if (this.x > this.game.canvas.width - this.w ) this.x = this.game.canvas.width - this.w
        if (this.x < -this.w / 3) this.x = -this.w / 3
        // if (direction === 'x') {
        //     this.flip = num < 0
        //     this.x += num
        //     if (this.x > this.game.canvas.width - this.w ) this.x = this.game.canvas.width - this.w
        //     if (this.x < -this.w / 3) this.x = -this.w / 3
        // } else {
        //     this.y += num
        //     if (this.y > 600 - this.h / 2) this.y = 600 - this.h / 2
        //     if (this.y < 0) this.y = 0
        // }
    }
    jump (status) {
        // this.fall = status === 'up'
        this.fall = false
        this.y -= 15
        if (this.y < 0) this.y = 0
        // this.rotation = -45
    }
    update () {
        console.log('update this.fall', this.fall)
        if (this.fall) {
            this.y += this.vy
            this.vy += 0.5
        } else {
            this.vy = 0.5
        }
        this.curIndx = (this.curIndx + 1) % this.framesCount
        this.texture = this.frames[this.curIndx]
    }
  }