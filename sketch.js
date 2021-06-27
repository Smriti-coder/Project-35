var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database;
var height;


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
    
   
  }

//Function to set initial environment
function setup() {
  database = firebase.database()
  createCanvas(1500,700);

  

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  

  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value", readPosition, showError);
  

  textSize(20); 
}

// function to display UI
//commented on lines 40-42 because functions were already called
function draw() {
  background(bg);
  //updateHeight();
 // readHeight();
 // showError();

  if(keyDown(LEFT_ARROW)){
    //write code to move air balloon in left direction
    updateHeight(-5,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale -0.01;
    
    
  }
  else if(keyDown(RIGHT_ARROW)){
    //write code to move air balloon in right direction
    updateHeight(0.5,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale -0.01;
    
  }
  else if(keyDown(UP_ARROW)){
    //write code to move air balloon in up direction
    updateHeight(0,-0.5);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale -0.01;
    
  }
  else if(keyDown(DOWN_ARROW)){
    //write code to move air balloon in down direction
    updateHeight(0,0.5);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = ballon.scale -0.01;
    
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

//updateHeight is not an automatic function
function updateHeight(x,y){
  database.ref('balloon/height').set({
      'x': height.x + x ,
      'y': height.y + y
    })
      
    
    

}



//function readPosition is not an automatic function
function readPosition(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y; 
}

function showError () {
   
  console.log("Error in writing to the database");
   
}
