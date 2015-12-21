//global variables
var myWinWidth, myWinHeight;

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    //set the width and height of the window I will draw
    myWinHeight = 250;
    myWinWidth = 100;

    var colWidth = 160;
    var rowHeight = 290;
    var x = 20;
    var y = 20;

    for(var i=0; i<100; i++){
        drawWindow(x,y);
        x += colWidth;

        if(x > width-myWinWidth){
            x = 20;
            y += rowHeight;
        }
    }//end for loop
}//end setup

function drawWindow(startX, startY){
    fill('peru');
    rect(startX,startY,myWinWidth,myWinHeight);

    stroke('black');
  var x1,x2,y1,y2;
    x1 = startX+myWinWidth/2; //middle of window
    y1 = startY;
    x2 = startX+myWinWidth/2;
    y2 =startY + myWinHeight;
    line(x1,y1,x2,y2);

    //horizonal line across the top
    x1 = startX; //middle of window
    y1 = startY+myWinHeight*.333;
    x2 = startX+myWinWidth;
    y2 = y1;
    line(x1,y1,x2,y2);

    //horizontal line 2/3 of the way down
    x1 = startX; //middle of window
    y1 = startY+myWinHeight*.666;
    x2 = startX+myWinWidth;
    y2 = y1;
    line(x1,y1,x2,y2);

    //add box at the bottom
    x1 = startX - 20;
    y1 = startY + myWinHeight;
    rect(x1,y1,myWinWidth+40, 20);

}
