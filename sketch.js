//Create variables here
var dog , happyDog;
var database;
var foodS , foodStock; 

var name;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  dog = createSprite(200,300);
  dog.addImage(happyDog);
  dog.scale = 0.3;
  
}


function draw() {  
background(46,139,87);

  
  drawSprites();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    }
  //add styles here
  textSize(20);
  fill("black");
  stroke("white");
 
  text("Note:Press UP_ARROW key to feed Drago Milk!",30,50);

  
  }
  function readStock(data){
    foodS = data.val();
  }
 
  function writeStock(x){
    if(x<=0){
     x=0;

    }
    else{
      x=x-1;
    }
   database.ref('/').update({
     Food:x
   })
}



