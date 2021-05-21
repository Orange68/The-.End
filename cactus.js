class cactus
{
	constructor(x,y)
	{
		var options={
			isStatic:true

			
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var cactuspos=this.body.position;		

			push()
			translate(cactuspos.x, cactuspos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			rect(0,0,this.x, this.y);
			pop()
			
	}

}