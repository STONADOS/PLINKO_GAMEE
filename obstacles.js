class obstacles{
    constructor(x, y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 50;
        this.image = loadImage("sprites/polygon.png")
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.radius, this.radius);
}
}