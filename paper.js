class Paper  
{
	constructor(x,y)
	{
		var options={
            isStatic:false,
			restitution:0.3,
            	friction:0,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(x, y, 20,options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		
             var angle=this.body.angle;
			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER);
			
			
			
				strokeWeight(4);
				fill(225)
			rotate(angle);
				angleMode(RADIANS);
				image(this.image,0,0,this.r,this.r);
				pop()
				
	}
}