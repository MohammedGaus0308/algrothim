var fixR,movingR;
var box1,box2,box3,box4;
function setup() {
  createCanvas(1000,400);
 fixR= createSprite(400, 300, 50, 50);
 fixR.shapeColor="red";
 movingR= createSprite(500,300,40,40);
 movingR.shapeColor="blue";
 box1=createSprite(100,200,30,30);
 box1.shapeColor="yellow";
 box1.velocityX=1;
 box2=createSprite(700,200,30,30);
 box2.shapeColor="green";
 box2.velocityX=-1;
 box3=createSprite(900,100,20,20)
 box3.shapeColor="pink";
 box3.velocityY=1;
box4=createSprite(900,300,20,20);
box4.shapeColor="orange";
box4.velocityY=-1
}

function draw() {
  background("black");  
  movingR.x=mouseX;
  movingR.y=mouseY;

  console.log(fixR.x - movingR.x);
  if(movingR.x-fixR.x<movingR.width/2+fixR.width/2
    &&fixR.x-movingR.x<fixR.width/2+movingR.width/2
    &&movingR.y-fixR.y<movingR.height/2+fixR.height/2
    &&fixR.y-movingR.y<fixR.height/2+movingR.height/2){
    movingR.shapeColor="purple";
    fixR.shapeColor="purple";
  }
  else{
    movingR.shapeColor="blue";
    fixR.shapeColor="red";
  }

  if(box1.x-box2.x<box1.width/2+box2.width/2
    &&box2.x-box1.x<box1.width/2+box2.width/2)
{
  box1.velocityX=box1.velocityX*(-1);
  box2.velocityX=box2.velocityX*(-1);
}
if(box3.y-box4.y<box3.height/2+box4.height/2
  &&box4.y-box3.y<box3.height/2+box4.height/2)
{
box3.velocityY=box3.velocityY*(-1);
box4.velocityY=box4.velocityY*(-1);
}
  drawSprites();
}