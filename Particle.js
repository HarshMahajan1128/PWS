class Particle {
    constructor(x, y){
        var options = {
            isStatic : false,
            restitution : 0.25,
            friction : 1,
            density : 100,
            velocityY : -100
        }
         this.body = Bodies.circle(x, y, 10, options);
         this.color = color(random(0,255),random(0,255),random(0,255));
         this.radius = 10;
         World.add(world, this.body);
          }
        display(){            
            push();
            // translate(this.body.position.x,this.body.position.y);
            noStroke();
            fill(this.color)
            ellipseMode(RADIUS);
            ellipse(this.body.position.x, this.body.position.y , this.radius, this.radius);
            pop();
        }
}