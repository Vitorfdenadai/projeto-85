canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_widht = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	backgroundImgTag = new Image();
	backgroundImgTag = uploadBackground;
	backgroundImgTag.src = background_Image;

	greencar_ImgTag = new Image();
	greencar_ImgTag.onload = uploadGreenCar;
    greencar_ImgTag.src  = greencar_Image;
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.widht, canvas.height);
}

function uploadGreenCar() {
	ctx.drawImage(backgroundImgTag, greencar_x, greencar_y, canvas.widht, canvas.height);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
        console.log("When up arrow is pressed, x = " + greencar_x + "| y" + greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
        console.log("When up arrow is pressed, x = " + greencar_x + "| y" + greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
        console.log("When up arrow is pressed, x = " + greencar_x + "| y" + greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
        console.log("When up arrow is pressed, x = " + greencar_x + "| y" + greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}
