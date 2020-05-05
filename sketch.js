var car, wall;
var speed, weight, deformation;

function setup() {
  createCanvas(1600, 400);
  
  //speed and weight
  speed = random(55, 90);
  weight = random(400, 1500);
  
  //sprites
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);

  car.shapeColor = "white";
}

function draw() {
  background(0, 255, 255);

  //touch and collide func call 
  touch(car, wall);
  collide(car,wall);

  if(mouseDown("leftButton")){

	  car.x = 50;
	  car.shapeColor = "white";

	  speed = random(55, 90);
  	  weight = random(400, 1500);
  }
  
	//if touching...
	  if (car.touch === wall) {
		  
		//car pos
		car.x = wall.x-((wall.width/2)+(car.width/2));
		
		//deformation
		deformation = (0.5 * weight * speed * speed) / 22500;
		
		//color
		if (deformation < 100){
		  car.shapeColor = "green";
		}
		else if (deformation > 180){
		  car.shapeColor = "red";
		}
		else{
		  car.shapeColor = "yellow";
		}
	  } else
		car.velocityX = speed;
	
  drawSprites();
}

//collision detect
function touch(sprite1, sprite2) {
  if ((sprite1.width / 2 + sprite2.width / 2 <= Math.abs(sprite1.x - sprite2.x)) ||
    (sprite1.height / 2 + sprite2.height / 2 <= Math.abs(sprite1.y - sprite2.y))) {
    sprite1.touch = "none";
  } else {
    sprite1.touch = sprite2;
  }
}

//collide if touching
function collide(sprite1,sprite2) {
	touch(sprite1,sprite2);
	if(sprite1.touch === sprite2){
		sprite1.velocityX = sprite2.velocityX;
		sprite1.velocityY = sprite2.velocityY;
	}
}