class Stone{
	constructor(x,y,width,height)
	{
        var options={
            'restitution':0.8,
            'friction':0.9,
             'density':12  
        
        }

		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(x,y,width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
            var angle = this.body.angle;		
			push()
			translate(rubberpos.x, rubberpos.y);
            rotate(angle);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("red");
			fill("red");
            rect(0,0,this.width,this.height);
			pop()
	}

}
