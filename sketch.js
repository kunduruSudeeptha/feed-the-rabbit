var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;


function preload(){
  gardenImg=loadImage("garden.png");
  rabbitImg=loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leavesImg=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit=createSprite(180,340,30,30);
rabbit.scale=0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges=createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  rabbit.x=World.mouseX
  rabbit.x=apple.x

  var select_sprites=Math.round(random(1,2))
  if (frameCount%80==0){
    if (select_sprites==1){
      console.log(createApples)
    }
    else {
      console.log(createLeaves)
    }
  }
}

function createApples(){
  
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.velocityY=-4
  apple.y=Math.round(random(10,60))
}

function  createLeaves(){
  leaves=createSprite(random(50,350),40,10,10)
  leaves.addImage(leavesImg)
  leaves.velocityY=-4
  leaves.y=Math.round(random(10,60))

}

