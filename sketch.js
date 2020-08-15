//Create variables here
var dog,dogimg,happyDog;
var database;
var foodS, foodStock;
function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg1png");
  dogImg = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200,11,11)
  
}


function draw() {  
background(46,139,87);
  drawSprites();
fill("red");
  textSize("34");
  text(foodStock,110,110);
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
}



function writeStock() {
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}