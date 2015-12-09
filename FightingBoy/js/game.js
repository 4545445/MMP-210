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

var settings;//well be loaded in the JSON file
function preload() {
    // Load the json for the tiles sprite sheet
  settings = loadJSON('JSON/game.json');
}//preload 

function setup() {
  createCanvas(800, 400);
    
  player_sprite_sheet= loadSpriteSheet(settings.player_sprite.path, settings.player_sprite.widthfile, settings.player_sprite.height, settings.player_sprite.numberofframes);
    console.log('spritepath',settings.player_sprite.path);
     //2 Player walk animation passing in a SpriteSheet
  player_walk = loadAnimation(player_sprite_sheet);

    
  // Create the Player sprite and add it's animations
  player_sprite = createSprite(settings.player_start.x,settings.player_start.y,settings.player_start.width,settings.player_start.height);
  player_sprite.addAnimation('walk', player_walk);
//  player_sprite.addAnimation('stand', player_stand);

}

function draw() {
  clear();

  //draw the sprite
  drawSprites();
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