const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var chain;
var form, game;
var engine, world;
var tank1, tank2;
var bg;
var tankImage1,tankImage2;
var database;
var playerCount, gameState = "start";
var cannonball, cannonballPos;
var healthbar, healthbarSprite;
var healthbar1,healthbar2,healthbar3,healthbar4,healthbar5,healthbar6;
var players;

function preload(){

   // bg = loadImage("images/");

   tankImage1 = loadImage("images/tank.png");
   tankImage2 = loadImage("images/tank2.png");

   healthbar1 = loadImage("images/healthbar.png");
   healthbar2 = loadImage("images/healthbar2.png");
   healthbar3 = loadImage("images/healthbar3.png");
   healthbar4 = loadImage("images/healthbar4.png");
   healthbar5 = loadImage("images/healthbar5.png");
   healthbar6 = loadImage("images/healthbar6.png");


}

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    database = firebase.database();
    

    game = new Game();
    game.start();

    
}

function draw(){
    //if(bg)
    background(255);

    Engine.update(engine);

    //cannonball.display();
    //chain.display();

    if(playerCount === 2){
        gameState = 1;
        game.update(1);
    }
    if(gameState === 1){
        game.play();
    }
   
   
}

function mouseDragged(){
    Matter.Body.setPosition(cannonball.body,{x:mouseX,y:mouseY})
    

    
}
/*function mouseReleased(){
    chain.update();
}
*/

