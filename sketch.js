var bgimage;
var cat,mouse;

function preload() {
    //load the images here
    bgimage = loadImage("garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    catImage2 = loadAnimation("cat2.png,cat3.png,cat4.png");
    mouseImage2 = loadAnimation("mouse2.png,mouse3.png,mouse4.png");
     catImage3 = loadAnimation("cat4.png");
     mouseImage3 = loadAnimation("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(600,400,80,80);
cat.addAnimation(catImage1,catImage2);
mouse = createSprite(200,300,50,50);
mouse.addAnimation(mouseImage1,mouseImage2);


}

function draw() {

    background("bgimage");
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    cat.velocityX = 0;
    cat.addAnimation("catRunning",catImage2);
    cat.changeAnimation("catRunning");
   
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImage2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;


}

if (keyCode === LEFT_ARROW){
    cat.addAnimation("catmoving",catImage2);
    cat.changeAnimation("catmoving");
    cat.frameDelay = 25;
}
}
