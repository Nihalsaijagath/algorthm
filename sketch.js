
var fixedRect,movingRect;



function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(500, 300, 50, 100);
  movingRect.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2
  &&movingRect.x-fixedRect.x<fixedRect.width/2 + movingRect.width/2
  &&fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2
  &&movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  drawSprites();
}