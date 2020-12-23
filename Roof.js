class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.image=loadImage("roof.jpg")
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER)
        strokeWeight(4);
        stroke("blue");
        fill("blue");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

        image(this.image,600,200,this.width, this.height)
    }
}