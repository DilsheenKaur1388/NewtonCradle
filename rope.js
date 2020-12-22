class rope{
	constructor(body1,body2,offsetX)
	{
	//	//	this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			length : 100,
			stiffness: 0.03,
	pointB:{x:offsetX, y:0}
		}
		this.offsetX=offsetX
	
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);


		line(pointA.x, pointA.y,pointB.x+this.offsetX,pointB.y);
	}

}