//colors
var red, blue, yellow;

//circle centers
var red, blue, yellow, redX, redY, blueX, blueY, yellowX, yellowY, circleX, circleY, circleSize;



var lineColor;
    //function drawLine {mouseX,mouseY,pmouseX,pmouseY}
    //        stroke (255,0,0);
    //        line(mouseX,mouseY,pmouseX,pmouseY);
    // }


    function setup() {
        createCanvas(windowWidth,windowHeight);
        red = color(255,0,0);
        yellow = color(255,255,0);
        blue = color(0,0,225);

        lineColor = red;


        circleSize = 90;
        redX = 100;
        redY = 100;
        yellowX = 100;
        yellowY = 530;
        blueX = 100;
        blueY = 310;

        //create the three circles
        fill(red);
        ellipse(redX,redY,175,173);

        fill(yellow);

        ellipse(yellowX,yellowY,175,173);

        fill(blue)


        ellipse(blueX,blueY,175,173);
    }

    function draw(){

    //      var redLine =  disp(mouseX,mouseY,redX,redY);
    //      var yellowLine = disp(mouseX,mouseY,yellowX,yellowY);
    //      var blueLine = disp(mouseX,mouseY,blueX,blueY);
    //
    //      if(redLine < circleSize) {
    //
        if(mouseIsPressed){
            stroke(lineColor);
                line(mouseX,mouseY,pmouseX,pmouseY);
                }

    //
    //      if(yellowLine < circleSize) {
    //
    //      line(mouseX,mouseY,pmouseX,pmouseY);
    //
    //      if(blueLine < circleSize) {
    //
    //      line(mouseX,mouseY,pmouseX,pmouseY);
    }

function mousePressed(){
           var redLine =  dist(mouseX,mouseY,redX,redY);
          var yellowLine = dist(mouseX,mouseY,yellowX,yellowY);
          var blueLine = dist(mouseX,mouseY,blueX,blueY);
    //
          if(redLine < circleSize) {
lineColor = red;
                }

    //
          if(yellowLine < circleSize) {
    //
         lineColor = yellow;
          }

          if(blueLine < circleSize) {
    //
            lineColor = blue;
          }
}
