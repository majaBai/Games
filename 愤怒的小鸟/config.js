// 配置文件
// 游戏所需的所有图片
function loadAnimation(count, path, k) {
  let o = {}
  for(let i = 0; i < count; i++) {
    let key = `${k}${i}`
    let value = path.replace('${i}', i)
    o[key] = value
  }
  return o
}
var allImgPath = { 
  cloud: '../assets/shoot-plane/cloud.png', 
  bullet: '../assets/shoot-plane/bullet.png', 
  player: '../assets/shoot-plane/player.png',
  enemy: '../assets/shoot-plane/enemy.png',
  bk: '../assets/birds/bird-sky.png',
  fire: '../assets/shoot-plane/bomb.png',
  bomb: '../assets/shoot-plane/bomb.png',
  g0: '../assets/birds/g0.png',
  g1: '../assets/birds/g1.png',
  g2: '../assets/birds/g2.png',
  p0: '../assets/birds/p0.png',
  p1: '../assets/birds/p1.png',
  // p2: '../assets/birds/p2.png',
  // p3: '../assets/birds/p3.png',
  ...loadAnimation(7, '../assets/birds/images/b${i}.png', 'b'),
}
const config = {
    // player_speed: 10,
    // bullet_speed: 5,
    // cloud_speed: 1,
    // enemy_speed: 1,
    // pause: false, // 暂停游戏
    fps: 40, // 帧率
    // level: 1, // 关卡
    // fire_v: 0.01, // 爆炸火花加速度
    bird_speed: {
      label: '小鸟飞行速度',
      value: 0.5
    },
    jump_height:  {
      label: '小鸟跳跃高度',
      value: 4
    },
    pipe_speed:  {
      label: '管子移动速度',
      value: 1
    },
    groud_speed: {
      label: '地面移动速度',
      value: 1
    }
  }