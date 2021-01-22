var  bullet,wall;
var speed,weight;

var damage;
var thickness;
function setup() {
  createCanvas(1600,400);
  
  speed = random(-55)- (-90);
  weight = random(400-1500); 
  thickness = random(22-83)
  bullet = createSprite(50,200,10,10);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  wall.shapeColor= color(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(255,10,255);  
  bullet.display()
  wall.display()

  if (wall.x - bullet.x <= bullet.width/2 + wall.width/2){
    
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    bullet.velocityX=0;

 if(damage<10){
   bullet.shapeColor = color(0,255,0)

 }
else if(damage>10){
  bullet.shapeColor= color(255,0,0);


  }
}
  drawSprites();
}