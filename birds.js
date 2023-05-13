class Bird {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = img;
  }
  
  move(x, y) {
    this.x += x;
    this.y += y;
  }
  
  display() {
    image(this.image, this.x, this.y, this.width, this.height);
  }
  
  isTouching(pipe) {
    let birdLeft = this.x - 30;
    let birdRight = this.x + 30;
    let birdTop = this.y - 30;
    let birdBottom = this.y + 30;
    
    let pipeLeft = pipe.x - 50;
    let pipeRight = pipe.x + 50;
    let pipeTop = pipe.y - 50;
    let pipeBottom = pipe.y + 50;
    
    if (birdRight >= pipeLeft && birdLeft <= pipeRight && 
      birdBottom >= pipeTop && birdTop <= pipeBottom) {
      return true;
    } else {
      return false;
    }
  }
}


