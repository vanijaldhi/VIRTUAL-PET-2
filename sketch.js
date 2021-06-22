//Create variables here
var dog;
var happydog,database,food,foodStock;
var feed, addfood,FeedTime,lastFed,food1, gameState

function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
  hdog = loadImage("happydog.png");
  milk = loadImage("Milk.png");
}

function setup() {
  createCanvas(1000, 1000);

  database = firebase.database();
  
  dog = createSprite(500,400,5,5);
  dog.addImage(dogImage);
  dog.scale = 0.3;

  var foodStock = database.ref('Food');
  foodStock.on("value",readStock,showError);
  console.log(foodStock);

  feed = createButton("Feed the Fudge");
  feed.position(800,950);
  feed.mousePressed(feedDog);

  addfood = createButton("Add Food");
  addfood.position(820,895);
  addfood.mousePressed(addFoods);

  food1 = new Food()

}

function draw() {  
   background(190,1,90);
   currentTime = hour();
   
   textSize(20);
   fill("yellow");
   stroke("black");
   text("PRESS UP ARROW KEY TO FEED OUR CUTE DOG FUDGE MILK",200,800)
   
   food1.display();

  drawSprites();
}

function readStock(data){
  food = data.val();
  console.log(food);
  food1.updateFoodStock(food);
}

function showError(){
    console.log("by");
}
function writeStock(x){
  if(x <= 0){
    x = 0;
  } 
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function feedDog(){
  dog.addImage(hdog);

  food1.updateFoodStock(food1.getFoodStock() - 1);
  database.ref('/').update({
    Food : food1.getFoodStock(),
    FeedTime : hour()
  })
}

function addFoods(){
  food++;
  database.ref('/').update({
    Food:food
  })
}

function update(state){
  database.ref('/').update({
    gameState : state
   })
}
