class Chain{
    constructor(pointB,bodyA){
        var options = {
            bodyA:bodyA,
            pointB:pointB
        }
        this.pointB = pointB;
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    update(){
        if(gameState === 1){
        this.chain.bodyA = null;
        }
    }
    display(){
        if(this.chain.bodyA!== null){
        var body = this.chain.bodyA.position;
        var point = this.pointB;
        push();
        stroke("black");
        strokeWeight(7);
        line(body.x,body.y,point.x,point.y);
        pop();
        }
    }
}