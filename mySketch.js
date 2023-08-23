

let bubbles = []; // 用於存儲泡泡的數組
let colors = []; // 用於存儲淺色系的顏色

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // 定義淺色系顏色
  colors = [
    color(255, 191, 191), // 淺粉紅
    color(255, 223, 186), // 淺橙色
    color(255, 255, 186), // 淺黃色
    color(186, 255, 201), // 淺綠色
    color(186, 229, 255), // 淺藍色
    color(218, 186, 255)  // 淺紫色
  ];
}

function draw() {
  background(135, 206, 250); // 使用淺灰色作為背景

  // 更新和顯示每個泡泡
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }

  // 如果泡泡超出畫布，則刪除它
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].isOffscreen()) {
      bubbles.splice(i, 1);
    }
  }

  // 如果滑鼠被按下，創建一個新的泡泡
  if (mouseIsPressed) {
    let bubble = new Bubble(mouseX, mouseY, random(colors));
    bubbles.push(bubble);
  }
}

class Bubble {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.radius = random(10, 40);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.color = col; // 使用傳入的顏色
  }

  update() {
    // 移動泡泡
    this.x += this.speedX;
    this.y += this.speedY;

    // 隨機改變泡泡的速度
    this.speedX += random(-0.5, 0.5);
    this.speedY += random(-0.5, 0.5);
  }

  display() {
    // 繪製泡泡
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }

  isOffscreen() {
    // 檢查泡泡是否超出畫布
    return (
      this.x < -this.radius ||
      this.x > width + this.radius ||
      this.y < -this.radius ||
      this.y > height + this.radius
    );
  }
}
