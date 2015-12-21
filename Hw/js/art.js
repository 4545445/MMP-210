function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);

  //top box
  strokeWeight(1);
  stroke('black');
  fill('peru');
  rect(50,50,125,20);

  //inside black box
  strokeWeight(1);
  stroke('black');
  fill('black');
  rect(65,70,125-30,150);

  //bottom box
  strokeWeight(1);
  stroke('black');
  fill('peru');
  rect(50,70+150,125,40);

  strokeWeight(4);
  stroke('peru');
  line(65,70,65,70+150);
  var x = 65+(125-30)/2;
  line(x,70,x,70+150);
  x = 65+(125-30);
  line(x,70,x,70+150);

  line(65,70,x,70);
  line(65,70+150/2,x,70+150/2);
  line(65,70+150,x,70+150);


  } //end setup
