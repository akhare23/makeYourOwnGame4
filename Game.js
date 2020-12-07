class Game{
    constructor(){

    }
    
    async start(){
        if(gameState === "start"){
        cannonball = new Cannonball(100,100);
       

        var playerCountRef = await database.ref("playerCount").once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
        }
        form = new Form();
        form.display();
    }
    }
    
}