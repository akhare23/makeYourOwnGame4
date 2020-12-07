const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var form, game;
var engine, world;
var tank1, tank2;
var bg;
var tankImage1,tankImage2;
var database;
var playerCount, gameState = "start";
var cannonball, cannonballPos;
var healthbar1,healthbar2,healthbar3,healthbar4,healthbar5,healthbar6;

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

    tank1 = createSprite(750,500,50,50);
    tank1.addImage("tank1", tankImage1)
    tank1.scale = 0.2;
    tank2 = createSprite(250,500,50,50);
    tank2.addImage("tank2", tankImage2);
    tank2.scale = 0.2;

   
    //chain = new Chain({x:200,y:200}, cannonball.body);
   
    
    healthbar = createSprite(750,450,20,10);
    healthbar.addImage("health", healthbar1);
    healthbar.addImage("health2",healthbar2);
    healthbar.addImage("health3",healthbar3);
    healthbar.addImage("health4", healthbar4);
    healthbar.addImage("health5",healthbar5);
    healthbar.addImage("health6",healthbar6);
    healthbar.scale = 0.1;

    healthbarSprite = createSprite(250,450,20,10);
    healthbarSprite.addImage("healthSprite", healthbar1);
    healthbarSprite.addImage("healthSprite2",healthbar2);
    healthbarSprite.addImage("healthSprite3",healthbar3);
    healthbarSprite.addImage("healthSprite4", healthbar4);
    healthbarSprite.addImage("healthSprite5",healthbar5);
    healthbarSprite.addImage("healthSprite6",healthbar6);
    healthbarSprite.scale = 0.1;
}

function draw(){
    //if(bg)
    background(255);

    Engine.update(engine);

    //cannonball.display();
    //chain.display();
   
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(cannonball.body,{x:mouseX,y:mouseY})
    

    
}
function mouseReleased(){
    chain.update();
}


