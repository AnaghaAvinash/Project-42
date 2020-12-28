const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy,boyA,boyB,ground,drop;
var maxDrops = 100;
var drops =[];
var thunderCreatedFrame = 0;
var thunder;

function preload(){
   boyA = loadAnimation("Walking Frame/walking_8.png",
   "Walking Frame/walking_7.png","Walking Frame/walking_6.png",
   "Walking Frame/walking_5.png","Walking Frame/walking_4.png",
   "Walking Frame/walking_3.png","Walking Frame/walking_2.png",
   "Walking Frame/walking_1.png");
   thunder1 = loadImage("thunderbolt/1.png");
   thunder2 = loadImage("thunderbolt/2.png");
   thunder3 = loadImage("thunderbolt/3.png");
   thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
createCanvas(400,600);   

engine = Engine.create();
world = engine.world;

boy = createSprite(200,460,10,10);
boy.addAnimation("walking",boyA);
boyB = new Umbrella(200,345,100,10);

if(frameCount%160===0){
  for(var i=0; i<maxDrops; i++){
  drops.push(new Drops(random(0,400), random(0,400)));
      }
    }

    
}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%80===0){
    thunderCreatedFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);

   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     case 4 : thunder.addImage(thunder4);
     break;
     default : break;
   }
thunder.scale = 0.5;
   
  }
  
  if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();

 }

            
  boy.scale = 0.4;

 
  
 
  boy.display();
  boyB.display();
 
        for(var i = 0; i<maxDrops; i++){
          drops[i].showDrop();
          drops[i].updateY();
        }
       
          
            
          
        
 

  drawSprites();
 
} 
  

