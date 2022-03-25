class Pipe extends MyAnimation {
  constructor(option) {
    option.name= 'pipe'
    super(option)
  }
  draw () {
      const ctx =  this.game.ctx
      ctx.drawImage(this.texture, this.x, this.y, this.w, this.h)
  }
  update () {
      this.curIndx = (this.curIndx + 1) % this.framesCount
      this.texture = this.frames[this.curIndx]
      this.x -= 2
      if (this.x < -this.w) this.x = this.game.canvas.width + 100 * this.curIndx
  }
}