function loadBlocks() {
  let l = window.level
  let blocks = []
  for (let i = 0; i < Level[l - 1].length; i++) {
    let b = Block(Level[l - 1][i], g)
    blocks.push(b)
  }
  return blocks
}

function changeSpeed () {
  let speed = document.querySelector('#speed-contrl').value
  window.fps = Number(speed)
}

// 添加功能：暂停、关卡
window.addEventListener('keydown', event => {
    // 暂停
    if (event.code === 'Space') {
      window.pause = !window.pause
      log('window.pause', window.pause)
    }
    // 选择关卡
    if('123'.includes(event.key)) {
      window.level = Number(event.key)
      blocks = loadBlocks()
    }
  })

function main () {
  window.pause = false
  window.fps = 10
  window.level = 1
  // 游戏所需的所有图片
  var allImgPath = { 
    block: '../assets/block.png', 
    ball: '../assets/ball.png', 
    paddle: '../assets/paddle.png',
    bk: '../assets/bk.jfif'
  }
  g = Game(allImgPath) // 加载游戏所需的图片资源
  g.ready = function() {
    const s = scene(g) // 初始化场景
    console.log('初始化场景', s)
    g.start(s) // 开始游戏
  }
}

main()