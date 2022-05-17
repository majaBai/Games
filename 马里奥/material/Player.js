class Player extends GameMaterial {
    constructor(option) {
        option.name= 'player'
        option.factor= 10
        option.speed= config.player_speed
        super(option)
        this.lastFireTime = ''
        this.killed = false
    }
    moveLeft () {
        this.x -= this.speed
        this.x = this.x >= 0? this.x : 0
    }
    moveRight () {
        this.x += this.speed
        this.x = this.x <= this.game.canvas.width - this.w? this.x : this.game.canvas.width - this.w
    }
    moveUp () {
        this.y -= this.speed
        this.y = this.y >= 0 ? this.y : 0
    }
    moveDown () {
        this.y += this.speed
        this.y = this.y <= this.game.canvas.height - this.h? this.y : this.game.canvas.height - this.h
    }
    update (idx) {
        this.checkCollide(idx)
        if (this.killed) return
        this.speed = config.player_speed
    }
    draw () {
        this.game.drawMaterial(this)
    }
    fire () {
        let now = Date.now()
        if (this.lastFireTime && now - this.lastFireTime < 300) return
        this.lastFireTime = now
        const b = new Bullet({game:this.game, x: this.x + this.w/2, y:this.y})
        this.game.scene.addElement(b)
    }
    checkCollide (idx) {
        const item = this
        const enemy = this.game.scene.elements.filter(e => e.option.name === "enemy")
        for(let i = 0; i < enemy.length; i++) {
            if (rectIntersects(enemy[i], item)) {
                this.killed = true
                break
            }
        }
        if (item.killed) {
            item.game.scene.removeElement(idx) // 玩家阵亡
            const x = item.x 
            const y = item.y
            const bomb = new Bomb({game:item.game, x: x - item.w/2, y: y - item.h / 2, factor: 5 })
            item.game.scene.addElement(bomb)
            setTimeout(() => {
                const end = new SceneEnd({g: item.game, text:'game over, press r restart!'})
                item.game.replaceScene(end)
            }, 1000)
        }
    }
}