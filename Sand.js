class Sand{
    constructor(x,y,radius){
        var options={
            restitution:1.3,
            friction:5,
            density:1 
        } 
        this.x=x;
        this.y=y;
        this.r=r 
        this.body=Bodies.circle(this.x,this.y(this.r-20)/2,options);
        World.add(world,this.body);
        }
    
        //display for displaying shape over the engine body
        display(){
           //create a shape & store in a var engine body position
           var pos=this.body.position;
           //capture engine body angle
           var angle=this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("red");
        strokeWeight(4);
        fill("red");
        rectMode(CENTER);
        ellipse(0,0,this.r,this.r);
        //rect(0,0,this.width, this.height);
        pop();
        }
};