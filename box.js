class Box
{
  constructor(x,y,width,height)
  {
        var options ={
          restitution: 3.0
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;

      World.add(world,this.body);
  
  }

  display()
  {
    rectMode(CENTER);
    fill("pink")
    strokeWeight(4)
    stroke("red")
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
   
  }
}


   
  





