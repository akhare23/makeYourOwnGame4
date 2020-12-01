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
    display(){
        var body = this.chain.bodyA.position;
        var point = this.pointB;
        push();
        stroke("black");
        strokeWeight(7);
        line(body.x,body.y,point.x,point.y);
        pop();
    }
}