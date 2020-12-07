class Form{
    constructor(){
        this.title = createElement("h3");
        this.input = createInput("name");
        this.button = createButton("play");
    }
    display(){
        this.title.html("Welcome!");
        this.title.position(200,100);

        this.input.position(200,150);
        this.button.position(200,200);
    }
}