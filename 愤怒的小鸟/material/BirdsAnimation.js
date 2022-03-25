
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
            ctx.save()
            let w2 = this.w / 2
            let h2 = this.h / 2
            ctx.translate(this.x + w2, this.y + h2)
            if (this.flip) ctx.scale(-1, 1)
            ctx.rotate(this.rotation * Math.PI/180)
            ctx.translate(-w2, -h2)
            ctx.drawImage(this.texture, 0, 0)
            ctx.restore()
    }
    move(num, status) {
        this.fall = status === 'up'
        this.rotation = 0
        console.log('status', status,  this.fall)
        this.flip = num < 0
        this.x += num
        if (this.x > this.game.canvas.width - this.w ) this.x = this.game.canvas.width - this.w
        if (this.x < -this.w / 3) this.x = -this.w / 3
    }
    jump (status) {
        // this.fall = status === 'up'
        this.rotation = status === 'up' ? 0 : -45
        this.y -= 15
        if (this.y < 0) this.y = 0
    }
    update () {
        console.log('update this.fall', this.fall)
        if (this.fall) {
            this.y += this.vy
            this.vy += 0.5
            if (this.rotation < 45) this.rotation = this.rotation + 5 <= 45 ? this.rotation + 5 : 45
        } else {
            this.vy = 0.5
        }
        if (this.y >= 470) this.y = 470
        if (this.y <= 0) this.y = 0
        if (this.x >= this.game.canvas.width - this.w ) this.x = this.game.canvas.width - this.w
        if (this.x <= -this.w / 3) this.x = -this.w / 3
        this.curIndx = (this.curIndx + 1) % this.framesCount
        this.texture = this.frames[this.curIndx]
    }
  }