
class BirdsAnimation extends MyAnimation {
    constructor(option) {
      option.name= 'bird'
      super(option)
      this.flip = false
      this.vy = 0.1
      this.fall = true
      this.rotation = 0
      this.lowest_height = 470 // 触地高度
      this.jumpHeight = config.jump_height.value
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
        if (this.checkCollide()) {
            this.game.drawTip('磕到了，好痛啊～')
        }
    }
    move(num, status) {
        this.fall = status === 'up'
        this.rotation = 0
        this.flip = num < 0
        this.x += ( num < 0 ? -config.bird_speed.value : config.bird_speed.value)
        if (this.x > this.game.canvas.width - this.w ) this.x = this.game.canvas.width - this.w
        if (this.x < -this.w / 3) this.x = -this.w / 3
    }
    jump (status) {
        this.fall = status === 'up'
        this.rotation = status === 'up' ? 0 : -45
        this.y -= this.jumpHeight
        if (this.y < 0) this.y = 0
    }
    checkCollide () {
        if (this.y >= this.lowest_height) return true
        let r = false
        const pipesElement = this.game.scene.elements.filter(item => item.name == 'pipe')
        // console.log('pipesElement',pipesElement)
        const pipes = pipesElement[0].frames
        if (pipes) {
            for (let i = 0; i < pipes.length; i++) {
                const p = pipes[i]
                const up_pipe ={x: p.x, y: p.up_y, w: p.w, h: p.h - 20}
                const down_pipe ={x: p.x, y: p.down_y, w: p.w, h: p.h - 20}
                r = rectIntersects(this, up_pipe) ||  rectIntersects(this, down_pipe)
                if (r) break
            }
        }
        return r
    }
    update () {
        if (this.fall) {
            this.y += this.vy
            this.vy += 0.1
            if (this.rotation < 45) this.rotation = this.rotation + 5 <= 45 ? this.rotation + 5 : 45
        } else {
            this.vy = 0.1
        }
        if (this.y >= this.lowest_height) this.y = this.lowest_height
        if (this.y <= 0) this.y = 0
        if (this.x >= this.game.canvas.width - this.w ) this.x = this.game.canvas.width - this.w
        if (this.x <= -this.w / 3) this.x = -this.w / 3
        this.curIndx = (this.curIndx + 1) % this.framesCount
        this.texture = this.frames[this.curIndx]
    }
  }