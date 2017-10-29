  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
    const backImage = new Image();
  backImage.src = 'https://lh3.googleusercontent.com/7vamGYyJM801nNMAnQOR26r-_L39aoX4cmwchwcqnWzBPYXdkxulg9AXimaR60ZAcLGEpsFTo_LTNpwv=h1264';
  
  const bobopupush = new Image();
  bobopupush.src = 'http://cartoon-clipart.disneyimage.com/_/rsrc/1305215725365/tom-and-jerry-clip-art/tom-and-jerry-8.gif';
  
  const badGuyImg2 = new Image();
  badGuyImg2.src = 'http://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG63.png';
  const gameOver = new Image();
  gameOver.src = 'http://www.desicomments.com/wp-content/uploads/2017/02/Tom-Holding-Jerry-Tail.jpg';
  
	const floorY = canvas.height - 200;
  
  const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
  }; 
  
    const gameData = {
    hero: {
      x: 50,
      y: floorY,
      img: bobopupush,
      width: 80,
      height: 70,
      xD: 0,
      yD: 0
    },  
	a: [],
	score: 1
  };
    const hero = gameData.hero;
	const a = gameData.a;

  const createPoint = function(num, canvasWidth, canvasHeight){
    const r = function(n){
      if(n<=0){
        return "";
      }  
      a.push({
        x: rand(canvasWidth - 150),
        y: rand(canvasHeight - 150),
        img: badGuyImg2,
        width: 150,
        height: 150,
        xDelta: 5,
        yDelta: 5,
      })
      r(n-1);
    }
    r(num);
    return a;
  };
  const point = createPoint(1, canvas.width,canvas.height);
  
  
  const draw = function(){  
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(backImage, 0, 0, canvas.width, canvas.height);
    const drawEvery = function(arr,i){
      if(i === arr.length){
        return "";
      }
      ctx.drawImage(arr[i].img, arr[i].x, arr[i].y,arr[i].width, arr[i].height); 
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
      }else if(arr[i].x<=0){
        arr[i].xDelta = -arr[i].xDelta;
      }
      if(arr[i].y >= canvas.height-arr[i].height){
        arr[i].yDelta = -arr[i].yDelta;
      }else if(arr[i].y<=0){
        arr[i].yDelta = -arr[i].yDelta;
      }
      arr[i].x = arr[i].x + arr[i].xDelta;
      arr[i].y = arr[i].y + arr[i].yDelta;
      gameData.score +=1;
      forevery(arr,i+1);
    };
    forevery(point,0);
	    if(gameData.score % 1000 === 0) {
      gameData.a.push(createPoint(1, canvas.width, canvas.height)[0]);
    }
  };
  const loop = function(){
    draw();	
    updateData();
    window.requestAnimationFrame(loop);
  };
  
  loop();
  
  const draw1 = function() {
    ctx.drawImage(hero.img, hero.x, hero.y, hero.width, hero.height); 
  };
  
  const updateData1 = function() {
   const check = function(ar, i) {
       if(i >= ar.length) {
         return;
       } 
  
      if(ar[i].x+ar[i].width>=hero.x && ar[i].x<=hero.x+hero.width &&
          ar[i].y+ar[i].height>=hero.y && ar[i].y<=hero.y+hero.height) {
             ctx.drawImage(gameOver, 0, 0, canvas.width, canvas.height);
     alert('Game Over ');
          }
          
      if(ar[i].x+100>=hero.x && ar[i].x<=hero.x+hero.width &&
          ar[i].y+100>=hero.y && ar[i].y<=hero.y) {
             ctx.drawImage(gameOver, 0, 0, canvas.width, canvas.height);
     alert('Game Over ');
          }
       
       check(ar, i + 1);
     };
     
     check(point, 0);
    };
  
  
  const loop1 = function() {
	
   
    draw1();
    updateData1();
    requestAnimationFrame(loop1);

  };
  
  loop1();
  
  const leftKey = 37;
  const upKey = 38;
  const rightKey = 39;
  const downKey = 40;
  
  document.addEventListener('keydown', function(event) {
  
    if(event.keyCode === rightKey) {
      hero.x = hero.x + 15;
      if(hero.x >= canvas.width) {
        hero.x = 0-hero.width;
      }
    } 
    else if(event.keyCode === leftKey) {
      hero.x = hero.x - 15; 
      if(hero.x <= 0-hero.width) {
        hero.x = canvas.width;
      }     
    }
    else if(event.keyCode === upKey) {
      if(hero.y>= 0 && hero.y<= canvas.height-hero.height) {
        hero.y= hero.y - 15;
      }		
      else if(hero.y<3){hero.y=3;}
    }
    else if(event.keyCode === downKey){
      if(hero.y>= 0 && hero.y<= canvas.height-hero.height) {
        hero.y= hero.y +  15;      }
      else if(hero.y>=canvas.height-hero.height){hero.y=canvas.height-hero.height;}
    }
  }, false);