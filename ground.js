class Ground {
constructur(x,y,width,height){
options = {
isStatic:true
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body)
}
display(){
 var pos = this.body.position
 rectMode(CENTER);
 strokeWeight("3")
 fill("gray");
 rect(pos.x,pos.y,this.width,this.height);
}
}
