class player{
    constructor(x, y){
        var options = {
            restitution:1.0,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 15, options);
        this.radius = 25;
        this.color = color(random(0, 255), random(0, 255), random(255));
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    fill(this.color);
    stroke(this.color);
    ellipse(pos.x, pos.y, this.radius);
}
}