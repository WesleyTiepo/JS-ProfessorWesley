let cor;

let posicaoX;
let posicaoY;

let posicaoX2;
let posicaoY2;



function setup() {
  createCanvas(800, 700);
  background("black");
  
  cor = [random(0,255), random(0,255), random(0,255)];
  posicaoX = 0;
  posicaoY = random(height);
  
  posicaoX2 = 0;
  posicaoY2 = random(height);
}

function draw() {
  
  circle(posicaoX, posicaoY, 70);
  fill(cor[0], cor[1], cor[2]);
  
  posicaoX = posicaoX + random(0,3);
  posicaoY = posicaoY + random(-3, 3);
  
  circle(posicaoX2, posicaoY2, 70);
  fill(cor[0], cor[1], cor[2], random(0,100));
  stroke("white")
  
  posicaoX2 = posicaoX2 + random(0,3);
  posicaoY2 = posicaoY2 + random(-3, 3);
  
  if(posicaoX>800){
    posicaoX = 0;
    posicaoY = random(height);
  }
  
  
  if(posicaoX2>800){
    posicaoX2 = 0;
    posicaoY = random(height);
  }
  
  if(mouseIsPressed){
    cor = [random(0,255), random(0,255), random(0,255)];
  }
}
