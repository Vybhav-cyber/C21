var fixed_rect, moving_rect;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixed_rect = createSprite(200,200,50,100);
  moving_rect = createSprite(300,200, 50, 100);
  
  moving_rect.shapeColor = "orange";
  fixed_rect.shapeColor = "orange";
  
}

function draw() {
  background(255,255,255);  

  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY;
  console.log(moving_rect.x - fixed_rect.x);
  
  if(isTouching(moving_rect, fixed_rect)){
    moving_rect.shapeColor = "blue";
    fixed_rect.shapeColor = "blue";
  }
  else{
    moving_rect.shapeColor = "orange";
    fixed_rect.shapeColor = "orange";

  }

  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object2.y - object1.y < object2.height/2 + object1.height/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    ){
    //moving_rect.shapeColor = "blue";
  //fixed_rect.shapeColor = "blue";
return true;
}
  else{
    //moving_rect.shapeColor = "orange";
    //fixed_rect.shapeColor = "orange";
  return false;
  }

}

