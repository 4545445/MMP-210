var squares;

function setup() {
    // Create the canvas
    //createCanvas(720, 400);
    createCanvas(1005, 1200);
  
  //create squares array
  squares = [];

    //drawSquare(40,100,color(200, 101, 192, 127),color(127, 63, 120));

    //drawSquare(370,100,color(200, 101, 19, 127),color(127, 63, 120));
    //drawSquare(200,100);

    //draw squares with a loop
    var x = 40;
    var y = 100;
  
    for (var i = 0; i < 6; i++) {
      // drawSquare(x,y,color(200, 101, 19, 127),color(127, 63, 120));
      var sq = new ColorSquare(x, y, color(200, 101, 19, 127), color(127, 63, 120));
    sq.drawSquare();
      //save the square object into the array
      squares[i] = sq;
      x += 330;
      if (x > width) {
        x = 40;
        y += 330;
      }
    }

  } //end setup


//click the mouse
function mousePressed(){
  console.log('pressed');
  //loop through the squares array and see if they are clicked
  for(var i=0; i < squares.length;i++){
    var d = dist(mouseX,mouseY,squares[i].x+150,squares[i].y+150);
    console.log(d);
    if(d<100){
      console.log('inside square');
      //squares[i].changeColor(color(123,44,16,127));
      squares[i].changeColor(color(random(255),random(255),random(255),127));
    }
  }
}

function ColorSquare(sX, sY, fillColor, strokeColor) {
  this.x = sX;
  this.y = sY;
  this.fill = fillColor;
  this.stroke = strokeColor;

  this.drawSquare = function() {
    fill(this.fill);
    //stroke(127, 63, 120);
    stroke(this.stroke);

    // A rectangle
    rect(this.x, this.y, 300, 300);
    rect(this.x + 25, this.y + 25, 250, 250);
    rect(sX + 50, sY + 50, 200, 200);
    rect(this.x + 75, this.y + 75, 150, 150);
  }
  
  this.changeColor = function(mycol){
    //this.fill = color(123,44,67,127);
    this.fill = mycol
    //draw again
    this.drawSquare();
  }

}

function drawSquare(sX, sY, fillColor, strokeColor) {
  // Set colors
  //fill(200, 101, 192, 127);
  fill(fillColor);
  //stroke(127, 63, 120);
  stroke(strokeColor);

  // A rectangle
  rect(sX, sY, 300, 300);
  //rect(40, 77, 300, 300);
  //

  // A rectangle
  //rect(66, 102.5, 250, 250);
  rect(sX + 25, sY + 25, 250, 250);
  //

  // A rectangle
  //rect(82, 117, 220, 220);
  //

  // A rectangle
  //rect(97, 127, 190, 200);
  //

  // A rectangle
  //rect(112, 155, 160, 144);
  //

}

