class Drop{
    constructor (x,y,r){
   var options = {
    isStatic:false,
    restitution:0.3,
    density:1.2,
    friction:0.1
   }
   this.x=x
   this.y=y
   this.r=r
   this.body = Bodies.circle(this.x,this.y,this.r/2,options)   
   World.add(world, this.body);  

}
display()
{
    var droppos = this.body.position;
    push()
    translate(droppos.x, droppos.y);
    rectMode(CENTER)
    strokeWeight(1);
    fill(13, 20, 229)
    ellipse(0,0,this.r, this.r)
    
    
}
};
