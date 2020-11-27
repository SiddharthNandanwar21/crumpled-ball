class dustbin{

	constructor(x,y,width,height){				//func setup
		var options = {
			isStatic:true
		}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);
	}

	display()	{			//func draw()
	var pos = this.body.position;
	rectMode(CENTER);
	rect(pos.x,pos.y,this.width,this.height)
	}

}