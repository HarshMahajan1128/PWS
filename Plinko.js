class Plinko {
    constructor(x, y){
        var options = {
            isStatic : true,
            restitution : 0.5,
            friction : 1,
            density : 1
        }
         this.body = Bodies.circle(x, y, 10, options);
         this.radius = 10;
         World.add(world, this.body);
          }
        display(){
            push();
            ellipseMode(RADIUS);
            ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
            pop();
        }
}