var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  Milk=loadImage("Images/Milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  
  milk = createSprite(200,200,10,10);
  milk.addImage(Milk);
  milk.scale = 0.12;

 Feedmilk = createButton('feedDog');
 Feedmilk.position(700,95);
 Feedmilk.mousePressed(Feedmilk);
 addFood = createButton('Add Food');
 addFood.position(800,95);
 
}

function draw() {
  background(46,139,87);
  drawSprites();
}





//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
