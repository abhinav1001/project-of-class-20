var car;
var wall;
function setup() {
  createCanvas(1600,400);
  car=createSprite(1400, 200, 10, 150);
  wall=createSprite(400,200,50,50);
}

function draw() {
  background("blue");  
  car.velocityX=-5;
  car.shapeColor="red";
  wall.shapeColor="green";
  if(car.x-wall.x<car.width/2+wall.width/2
    && wall.x-car.x<wall.width/2+car.width/2
    && car.y-wall.y<car.height/2+car.height/2
    && wall.y-wall.y<car.height/2+car.height/2){
      car.shapeColor="yellow";
      wall.shapeColor="orange";
    car.velocityX=0;  
  }

  drawSprites();
  
}