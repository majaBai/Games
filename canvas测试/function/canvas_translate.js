
let x_shift = 20
let y_shift = 20

function translateToRight () {
  ctx.clearRect(x, y, bird.width, bird.height); // 清空上一只鸟
  x_shift += 10
  y_shift += 10
  console.log('translateToRight')
  ctx.save();
  ctx.translate(x_shift, y_shift) // 移动坐标原点
  ctx.drawImage(bird, x, y)
  ctx.restore();
}