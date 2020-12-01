class Cannonball{
    constructor(x,y){
        this.body = Bodies.circle(x,y,5);
        //this.image = loadImage("images/cannonball.png")
        World.add(world,this.body);
    }
    /*update(){
        this.body = null;
    }
    */display(){
        ellipseMode(RADIUS);
        var pos = this.body.position;
        ellipse(pos.x,pos.y,5,5);
    }
}