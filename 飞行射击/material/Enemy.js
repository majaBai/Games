class Enemy extends GameMaterial {
    constructor(option) {
        option.name= 'enemy'
        option.factor= 20
        option.speed= config.enemy_speed
        super(option)
    }
    update () {
        this.y += this.speed
        if (this.y >= this.game.canvas.height + this.h) {
            this.y = -this.h / 2
        }
    }
    draw () {
        this.game.drawMaterial(this)
    }


}