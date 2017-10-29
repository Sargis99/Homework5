
 const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
/*
const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};
const colorAr = ['red','blue','green', 'orange','pink', 'brown', 'aqua','BlueViolet ','BurlyWood ','Chartreuse','Chocolate','Crimson','LawnGreen'];
const speed = [-5,-4,-3,-2,-1,1,2,3,4,5];
  const createPoint = function(num, canvasWidth, canvasHeight){
	  const a = [];
	  const r = function(n){
		if(n<=0){
			return "";
		}  
		const b = speed[rand(10)];
		a.push({
			x: rand(canvasWidth - 60),
			y: rand(canvasHeight - 60),
			width: 60,
			height:	60,
			xDelta: b,
			yDelta: b,
			color: colorAr[rand(13)-1]
		})
		r(n-1);
	  }
	  r(num);
	  return a;
  };
*/
//////////////////////////
const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};
const colorAr = ['red','blue','green', 'orange','pink', 'brown', 'aqua','BlueViolet ','BurlyWood ','Chartreuse','Chocolate','Crimson','LawnGreen'];
const speed = [-5,-4,-3,-2,-1,1,2,3,4,5];
  const createPoint = function(num, canvasWidth, canvasHeight){
	  const a = [];
	  const r = function(n){
		if(n<=0){
			return "";
		}  
		const b = speed[rand(10)];
		a.push({
			x: rand(canvasWidth - 60),
			y: rand(canvasHeight - 60),
			width: 60,
			height:	60,
			xDelta: b,
			yDelta: b,
			color: colorAr[rand(13)-1]
		})
		r(n-1);
	  }
	  r(num);
	  return a;
  };
  const point = createPoint(5, canvas.width,canvas.height);
  const draw = function(){  
context.clearRect(0,0,canvas.width,canvas.height);
	  const drawEvery = function(arr,i){
		  if(i === arr.length){
			  return "";
		  }
		  context.fillStyle = arr[i].color;
		context.fillRect(arr[i].x,arr[i].y, arr[i].width,arr[i].height);
		  drawEvery(arr,i+1);
	  };
	  drawEvery(point,0);
  };
 
  
  const updateData = function(){
	  const forevery = function(arr, i){
		  if(i === arr.length){
			  return "";
		  }
		  if(arr[i].x >= canvas.width-arr[i].width){
			arr[i].xDelta = -arr[i].xDelta;
			arr[i].color = colorAr[rand(13)-1];
			//const c = rand(30);
			arr[i].width = 20;
			arr[i].height = 20;
		}else if(arr[i].x<=0){
			arr[i].xDelta = -arr[i].xDelta;
			arr[i].color = colorAr[rand(13)-1];
			//const k = rand(30);
			arr[i].width = 30;
			arr[i].height = 30;
		}
		if(arr[i].y >= canvas.height-arr[i].height){
			arr[i].yDelta = -arr[i].yDelta;
			arr[i].color = colorAr[rand(13)-1];
			arr[i].width = 20;
			arr[i].height = 20;
		}else if(arr[i].y<=0){
			arr[i].yDelta = -arr[i].yDelta;
			arr[i].color = colorAr[rand(13)-1];
						arr[i].width = 40;
			arr[i].height = 40;
		}
		arr[i].x =	 arr[i].x + arr[i].xDelta;
		arr[i].y = arr[i].y + arr[i].yDelta;
		
		forevery(arr,i+1);
	  };
	  forevery(point,0);
  };

const loop = function(){
    
    draw();
    updateData();
    window.requestAnimationFrame(loop);
  };
  
  loop();

  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
