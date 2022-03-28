
let isScale = false

function scale () {
  isScale = !isScale
  const s = isScale? 2: 1
  ctx.clearRect(x, y, bird.width*s, bird.height*s); // 清空上一只鸟
  ctx.save()
  ctx.translate(x + bird.width/ 2, y + bird.height/ 2)
  ctx.scale(s, s)
  ctx.drawImage(bird, x - bird.width/ 2, y - bird.height/ 2)
  ctx.restore();
}