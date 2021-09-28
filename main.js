{
	window.onload = main;


	function main(){
	
		
		const canvas = document.getElementById('mycanvas');
		const stage = new createjs.Stage('mycanvas');
		createjs.Ticker.addEventListener("tick", function(){
			if(canvas.height != innerHeight)
				canvas.height = innerHeight;
			if(canvas.width != innerWidth)
				canvas.width = innerWidth;
			stage.update();
		});
		
		
		setInterval(function(){
			const shape = new createjs.Shape();
			shape.graphics.beginFill('white');
      		shape.graphics.drawCircle(0,0,5*Math.random());
			shape.x = canvas.width*Math.random();
			shape.y = canvas.height*Math.random();
			shape.alpha = 0;
      		stage.addChild(shape);
			const r = 70*Math.random();
			const deg = 2*Math.PI*Math.random();
			const dx = r*Math.cos(deg);
			const dy = r*Math.sin(deg);
			const nx = shape.x;
			const ny = shape.y;
			createjs.Tween.get(shape)
							.to({alpha:Math.random()*0.4, x:dx/2+nx, y:dy/2+ny}, 1000*Math.random()+500)
							.to({alpha:0, x:dx+nx, y:dy+ny}, 1000*Math.random()+500)
							.call(function(){stage.removeChild(shape)});
		}, 10);
		
		
		
		setInterval(function(){
			const fish = new createjs.Shape();
			fish.graphics.beginFill('white');
			fish.graphics.drawRoundRect(0, 0, 100, 50, 30, 10);
			fish.graphics.beginFill('black');
			fish.graphics.drawCircle(25, 20, 5);
			fish.graphics.beginFill('white')
			fish.graphics.moveTo(100,25);
			fish.graphics.lineTo(125,50);
			fish.graphics.lineTo(125,0);
			fish.graphics.lineTo(100,25);
			fish.graphics.endFill();
			fish.x = canvas.width;
			fish.y = canvas.height*Math.random();
			fish.scaleX = Math.random();
			fish.scaleY = fish.scaleX;
			fish.alpha = fish.scaleY;
			stage.addChild(fish);
			createjs.Tween.get(fish)
							.to({x:-200}, 4000*Math.random()+2000/fish.alpha)
							.call(function(){stage.removeChild(fish)});
		}, 500);
	
	}

}