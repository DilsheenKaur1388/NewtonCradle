class bob
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.5,
			friction:0.3,
			density:0.8
			
			}
		
		this.r=r
		
		this.body=Bodies.circle(x,y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
