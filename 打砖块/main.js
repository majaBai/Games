// 改变小球速度
function changeSpeed () {
  let speed = document.querySelector('#speed-contrl').value
  window.fps = Number(speed)
}

function main () {
  window.pause = false
  window.fps = 30 // 小球速度
  window.level = 1 // 游戏关卡
  // 游戏所需的所有图片
  var allImgPath = { 
    block: '../assets/hit-block/block.png', 
    ball: '../assets/hit-block/ball.png', 
    paddle: '../assets/hit-block/paddle.png',
    bk: '../assets/hit-block/bk.png'
  }
  // g = new Game(allImgPath)
  g = Game.instance(allImgPath) // 单例
  g.ready = function() {
    // const s = new SceneTitle(g)
    const s = SceneTitle.new(g) // 初始化场景
    g.start(s)
  }
}

main()