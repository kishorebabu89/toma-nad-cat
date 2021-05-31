var cat,mouse,catImg2,catImg1,catImg3,mouseImg1,mouseImg2,garden

function preload() {
    //load the images here
    catImg1=loadAnimation("cat1.png")
    catImg2=loadAnimation("cat2.png","cat3.png")
    catImg3=loadAnimation("cat4.png")
    mouseImg1=loadAnimation("mouse1.png")
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadAnimation("mouse4.png")
    garden=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat=createSprite(1000,600)
  cat.addAnimation("catSleeping",catImg1);
  cat.scale=0.2;
  mouse=createSprite(200,600)
  mouse.scale=0.15;
  mouse.addAnimation("mouseStanding",mouseImg1)
}

function draw() {

    background(garden);
    //Write condition here to evalute if  tomand jerry collide


    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.velocityX=0
      cat.addAnimation("lastImg",catImg3);
      cat.x=300
      cat.scale=0.2;
     cat.changeAnimation("lastImg");
     mouse.addAnimation("mouseLastImg",mouseImg3);
     mouse.scale=0.15;
     mouse.changeAnimation("mouseLastImg");
     
    }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     cat.velocityX=-5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing")
 }

}