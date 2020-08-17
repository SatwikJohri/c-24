class Paper{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.2
        }
        this.body=Bodies.rectangle(x,y,this,width,this.height,options);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
    }
}