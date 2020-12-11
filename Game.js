class Game{
    constructor(){

    }
    
    async start(){
        if(gameState === "start"){
        cannonball = new Cannonball(100,100);
        

        var playerCountRef = await database.ref("playerCount").once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            cannonball.getCount()
        }
        form = new Form();
        form.display();

        }
    tank1 = createSprite(750,500,50,50);
    tank1.addImage("tank1", tankImage1)
    tank1.scale = 0.2;
    tank2 = createSprite(250,500,50,50);
    tank2.addImage("tank2", tankImage2);
    tank2.scale = 0.2;

   
    chain = new Chain({x:200,y:200}, cannonball.body);
   
    
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
    update(state){
        database.ref("/").update({
            gameState:state,
        })
    }
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val();
        })
    }
    play(){
       
        cannonball.updatePlayerData();
        Cannonball.getAllPlayerInfo();
        console.log(players);
        
        chain.display();
        cannonball.display();
        
        drawSprites();
    }
    
}