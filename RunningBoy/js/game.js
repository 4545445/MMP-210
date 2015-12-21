//Creating sprite using sprite sheets for animation
var mouse_moved = false;
var touch_started = false;
var explode_sprite_sheet;
var player_sprite_sheet;
var tile_sprite_sheet;
var explode_sprite;
var player_walk;
var player_stand;
var player_sprite;
var tile_frames;
var bgImage;

var settings;//well be loaded in the JSON file
function preload() {
    // Load the json for the tiles sprite sheet
  settings = loadJSON('JSON/game.json');
}//preload

function setup() { var cnv = createCanvas(800, 600);
 cnv.parent("walking");


 // here we use a callback to display the image after loading
  bgImage = loadImage("images/Blue2.6.png", function(img) {
    image(img, 0, 0);
  });




  player_sprite_sheet= loadSpriteSheet(settings.player_sprite.path, settings.player_sprite.widthfile, settings.player_sprite.height, settings.player_sprite.numberofframes);
     //2 Player walk animation passing in a SpriteSheet
  player_walk = loadAnimation(player_sprite_sheet);


  // Create the Player sprite and add it's animations
  player_sprite = createSprite(settings.player_start.x+70,settings.player_start.y+204,settings.player_start.width,settings.player_start.height);
    console.log( 'player_sprite',player_sprite);
//  player_sprite.addAnimation('walk', player_walk);
    player_sprite.addAnimation('walk', 'images/newboy1.0.png','images/newboy1.0.png','images/newboy2.0.png','images/newboy3.0.png','images/newboy4.0.png','images/newboy1.0.png','images/newboy2.0.png','images/newboy3.0.png' );
    player_sprite.addAnimation('stand', 'images/newboy1.0.png');

//  player_sprite.addAnimation('stand', player_stand);

}

function draw() {
//  clear();
//    background("blue");
image(bgImage);

if (keyIsPressed === true) {
    player_sprite.changeAnimation("walk");
    if (keyCode == UP_ARROW) {
    player_sprite.position.y -=8; console.log('playeer_sprite',player_sprite.position.y);
  } else if (keyCode == RIGHT_ARROW) {
    player_sprite.position.x +=7;
  }
  } else {
    player_sprite.changeAnimation("stand");
  }



//    console.log( 'player_sprite',player_sprite);
  //draw the sprite
  drawSprites();
}


function keyPressed() {
//  if (keyCode == UP_ARROW) {
//    player_sprite.position.y -=8; console.log('playeer_sprite',player_sprite.position.y);
//  } else if (keyCode == DOWN_ARROW) {
//    player_sprite.position.y +=8;
//  }
//
  return false; // prevent default
}


function touchStarted() {
  touch_started = true;
}

function mouseMoved() {
  mouse_moved = true;
}

function isTouch() {
  return touch_started && !mouse_moved;
}
