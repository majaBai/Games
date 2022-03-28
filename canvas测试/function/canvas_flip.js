
let isRight = true

function flipBetweenLeftRight () {
  isRight = !isRight
  ctx.clearRect(x, y, bird.width, bird.height); // 清空上一只鸟
  ctx.save()
  ctx.translate(x + bird.width/ 2, y + bird.height/ 2)
  const s = isRight? 1: -1
  ctx.scale(s, 1)
  ctx.drawImage(bird, x - bird.width/ 2, y - bird.height/ 2)
  ctx.restore();
}

