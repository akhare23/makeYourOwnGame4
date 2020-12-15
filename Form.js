class Form{
    constructor(){
        this.title = createElement("h3");
        this.input = createInput("name");
        this.button = createButton("play");
        this.reset = createButton("reset");
    }
    display(){
        this.title.html("Welcome!");
        this.title.position(200,100);

        this.input.position(200,150);
        this.button.position(200,200);
        this.reset.position(20,20);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.title.hide();
            this.button.hide();

            cannonball.name = this.input.value();

            playerCount++;
            cannonball.index = playerCount;

            cannonball.updateCount(playerCount);
            cannonball.update()
        })
       
       this.reset.mousePressed(()=>{
        cannonball.updateCount(0);
        game.update(0);
       
        location.reload();
       })
    }

}