function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(255);
  for (var posy = 5; posy <= 500; posy = posy + 10) {
    fill(random(255), random(255), random(255));
    ellipse(posx, posy, 10, 10);
    for (var posx = 5; posx <= 500; posx = posx + 10) {
      ellipse(posx, posy, 10, 10);
    }
  }
}
