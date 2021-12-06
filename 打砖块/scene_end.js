const sceneEnd = function (g) {
    const s = {
        g
    }
    s.update = function () {
    }
    s.draw = function () {
      g.drawBk()
      g.drawEndTip('游戏结束')
    }
    
    return s
}