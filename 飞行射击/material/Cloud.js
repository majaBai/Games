class Cloud extends GameMaterial {
    constructor(option) {
        option.name= 'cloud'
        option.factor= 5
        option.speed= config.cloud_speed
        super(option)
    }
    update () {
        this.y += this.speed
        if (this.y > this.game.canvas.height) {
            this.init()
        }
    }
    draw () {
        this.game.drawMaterial(this)
    }
}