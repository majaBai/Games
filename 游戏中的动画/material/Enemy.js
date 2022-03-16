
class Enemy extends GameMaterial {
    constructor(option) {
        option.name= 'enemy'
        option.factor= 20
        option.speed= config.enemy_speed
        super(option)
        this.killed = false
    }
    update (idx) {
        this.checkCollide(idx)
        if (this.killed) return
        this.y += this.speed
        if (this.y >= this.game.canvas.height + this.h) {
            this.y = -this.h / 2
        }
    }
    checkCollide (idx) {
        const item = this
        const bullets = this.game.scene.elements.filter(e => e.option.name === "bullet")
        let ruined_bullet
        for(let i = 0; i < bullets.length; i++) {
            if (rectIntersects(bullets[i], item)) {
                this.killed = true
                ruined_bullet = bullets[i]
                break
            }
        }
        if (item.killed) {
            item.game.scene.removeElementById(idx) // 移除敌机
            item.game.scene.removeElement(ruined_bullet) // 移除敌机
            const x = item.x 
            const y = item.y
            const bomb = new Bomb({game:item.game, x, y})
            item.game.scene.addElement(bomb)
            if (item.game.scene.elements.filter(item => item.name === 'enemy').length === 0 ) {
                setTimeout(()=> {
                    const end = new SceneEnd({g: item.game, text:'Win!! press r restart'})
                    item.game.replaceScene(end)
                }, 800)
            }
        }
    }
    draw () {
        if (this.killed) return
        this.game.drawMaterial(this)
    }
}