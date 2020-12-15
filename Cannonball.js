class Cannonball{
    constructor(x,y){
        this.index = null;
        this.name = "";
        this.body = Bodies.circle(x,y,5);
        this.playerHealth = 7;
        //this.image = loadImage("images/cannonball.png")
        World.add(world,this.body);
    }
   
    display(){
        push();
        ellipseMode(RADIUS);
        var pos = this.body.position;
        translate(pos.x,pos.y)
        rotate(this.body.angle);
        ellipse(0,0,5,5);
        pop();
    }
    reduceHealth(playerIndex){
        database.ref("players/player" + playerIndex).update({
            health:allPlayers[playerIndex-1].health
        })
    }
    getCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(){
        var playerRef = "players/player" + this.index;
        database.ref(playerRef).set({
            name:this.name,
            health:this.playerHealth

        })
    }
    updatePlayerData(){
        var playerRef = "players/player" + this.index;
        database.ref(playerRef).update({
        x:this.body.position.x,
        y:this.body.position.y,
        health:this.playerHealth
    })
    }
    static getAllPlayerInfo(){
        database.ref("players").on("value", (data)=>{
            players = data.val();
        })
    }
    /*read(){
        var cannonballRef = database.ref("");
        cannonballRef.on("value",function(data){
        cannonballPos = data.val();
    })
 }
 */
}