
let isRotate = false

function rotateUp () {
  isRotate = !isRotate
  ctx.clearRect(x, y, bird.width, bird.height); // 清空上一只鸟
  ctx.save()
  ctx.translate(x + bird.width/ 2, y + bird.height/ 2)
  const rotation = isRotate ? -45 : 0
  ctx.rotate(rotation * Math.PI / 180)
  ctx.drawImage(bird, x - bird.width/ 2, y - bird.height/ 2)
  ctx.restore();
}