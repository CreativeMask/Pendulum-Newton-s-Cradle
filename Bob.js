class bob
{
	constructor(x,y,radius)
	{
		var options={
			'isStatic':false,
			'restitution':1.1,
			'friction':2.2,
			'density':1.0

			
			}
		this.body=Bodies.circle(x, y, radius, options);
		World.add(world, this.body);
		this.radius = radius;

	}
	display()
	{
			
				
		
		
			ellipseMode(CENTER)
			fill("silver");
        	ellipse(this.body.position.x, this.body.position.y, this.radius);
		
			
	}

}