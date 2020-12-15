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
var flagMouseDraggedProblem = 0;
var tankBody, tankBody2;

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
    
    tankBody = Bodies.rectangle(750,500,100,50, {isStatic:false});
    World.add(world,tankBody);
    tankBody2 = Bodies.rectangle(250,500,200,50, {isStatic:false});
    World.add(world,tankBody2);
    ground = Bodies.rectangle(500,900,1000,10, {isStatic:true});
    World.add(world,ground);
    game = new Game();
    game.start();

    
}

function draw(){
    //if(bg)
    background(255);
    //console.log(tankBody.position.y);
    Engine.update(engine);

    //cannonball.display();
    //chain.display();
    rectMode(CENTER);
    fill("black");
    rect(ground.position.x,ground.position.y,1000,10);

    
    if(playerCount === 2){
        gameState = 1;
        game.update(1);
    }
    if(gameState === 1){
        game.play();
    }
   
   
}

function mouseDragged(){
    
    if(gameState === 1){
    flagMouseDraggedProblem = 1;
    Matter.Body.setPosition(cannonball.body,{x:mouseX,y:mouseY})
    }
    

    
}
function mouseReleased(){
    if(flagMouseDraggedProblem === 1){
    chain.update();
    }
}

function ballIsTouching(){
    if(tankBody.speed>0.4){
        cannonball.reduceHealth(1);
    }
    if(tankBody2.speed>0.4){
        cannonball.reduceHealth(2);
    }
}


