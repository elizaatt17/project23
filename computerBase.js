class ComputerBase{
constructor(x,y,width,height){
    var optiopns={
 isStatic:true       
    };
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("./assets/base2.png");
World.add(world,this.body);
}


display(){
    var pos=this.body.position;
    var angle=this.body.angle;

  push();
  translate(pos.x,pos.y);
  rotate(angle);
  imageMode(center);
  this.image(this.image,0,0,this.width,this.height);

  pop();
    
}



