const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var steve;
var steveFace;
var smallGombi;
var gomii;
var Gombie,Tyrant;
var GombiesStatus;
var bulletet;
var Life=10;
var bullet;
var backgroud;
//var bird2,bird3;


function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    //GetBackgroundImg();
    steveFace=loadImage("Steve with gun.png");
    smallGombi=loadImage("gombi.png");
    gomii=loadImage("gombiR.png");
    backgroud=loadImage("background.jpg")
}

function setup(){
    var canvas = createCanvas(displayWidth-30,displayHeight-30);
  
    steve= createSprite(displayWidth/2,displayHeight/2,70,70);
     steve.addImage(steveFace);
     steve.scale=0.15;
     Gombie= new Group();
     Tyrant= new Group();
    GombiesStatus= new Group();
    bulletet= new Group();
    createBullet();
}

function draw(){
    background(backgroud);   
    //steve.x=mouseX;
    //steve.y=mouseY;
    if(keyDown("w")){
       steve.y=steve.y-7
       bullet.y=bullet.y-7
    }
        if(keyDown("d")){
            steve.x=steve.x+7
            bullet.x=bullet.x+7
        }

        if(keyDown("s")){
          steve.y=steve.y+7
          bullet.y=bullet.y+7
          }
        if(keyDown("a")){
          steve.x=steve.x-7
          bullet.x=bullet.x-7
        }
        
        for(var Bhla=0;Bhla<Gombie.length;Bhla++){
          if(steve.isTouching(Gombie[Bhla])&&Gombie[Bhla]!==undefined){
            Life--;  
            console.log(Life);
                
          } 
          
                                                                                                                                                                                                               
        }
       
        for(var Dhla=0;Dhla<Gombie.length;Dhla++){
          if(bullet.isTouching(Gombie[Dhla])&&Gombie[Dhla]!==undefined){
              Gombie[Dhla].destroy();
              
                
          } 
          
                                                                                                                                                                                                               
        }
       
    spawngombi();
    sPawnZombie();
    if(keyDown("space")){
      bullet.velocityX=5;
      
  }
  if(bullet.x>displayWidth){
         createBullet();
  }
    drawSprites();
    if(Life==0){
      text("You have been slain by the Gombies:Better luck next time",displayWidth/2-50,displayHeight/2);
  }
}


function sPawnZombie(){
  if(frameCount%99==0){
     var gombi=createSprite(50,70);
       gombi.x=Math.round(random(50,displayWidth-50));
     //if(rand===1){
        gombi.velocityY=5
     //ghhhjjjkkkkkkklllkxmcnjxmk.><><><><><><><><><><><><><<><><<<><><><><><?
      //bi.velocityX=-5
    //}
     gombi.addImage(smallGombi);
     
     gombi.scale=0.5;
     Gombie.add(gombi);
    // GombiesStatus.add(gombi);
   }

  
}

function spawngombi(){
  if(frameCount%99==0){
     var gombi=createSprite(displayWidth-50,70);
       gombi.y=Math.round(random(50,displayHeight-50));
     //if(rand===1){
       // gombi.velocityY=5
     //}else{sssss
       gombi.velocityX=-5
    // }
     gombi.addImage(gomii);
     gombi.scale=0.2;
     Gombie.add(gombi);
     //GombiesStatus.add(gombi);
   }
  }

    
    function createBullet() {
       bullet= createSprite(100, 100, 5, 10);
      //.y = 360;
      //bullet.x = 50;                                           
      bullet.shapeColor = "red";
      //bullet.velocityY = -1;
      //bullet.lifetime = 1000;
      bullet.x=steve.x;
      bullet.y=steve.y;
      bulletet.add(bullet);
      
      

    }
  
    

