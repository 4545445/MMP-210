function preload() {
  //
  //  There are two different ways to load a SpriteSheet
  //     1. Given width, height that will be used for every frame and the
  //        number of frames to cycle through. The sprite sheet must have a
  //        uniform grid with consistent rows and columns.
  //     2. Given an array of frame objects that define the position and
  //        dimensions of each frame.  This is Flexible because you can use
  //        sprite sheets that don't have uniform rows and columns.
  //
  //    Below demonstrates both methods:

  // Load the json for the tiles sprite sheet
  settings_frames = loadJSON('assets/Game.json');

  // Load the explode sprite sheet using frame width, height and number of frames
  explode_sprite_sheet = loadSpriteSheet('assets/explode_sprite_sheet.png', 171, 158, 11);


  // Load tiles sprite sheet from frames array
  tile_sprite_sheet = loadSpriteSheet('assets/tiles_spritesheet.png', tile_frames);

  // Exploding star animation
  explode_animation = loadAnimation(explode_sprite_sheet);



}





  //1 Load player sprite sheet from frames array
  player_sprite_sheet = loadSpriteSheet('assets/player_spritesheet.png', player_frames);

 //2 Player walk animation passing in a SpriteSheet
  player_walk = loadAnimation(player_sprite_sheet);

  //2a An animation with a single frame for standing
  player_stand = loadAnimation(new SpriteSheet('assets/player_spritesheet.png',
    [{"name":"player_stand", "frame":{"x":284, "y": 95, "width": 70, "height": 94}}]));
// Create the Player sprite and add it's animations
  player_sprite = createSprite(100, 284, 70, 94);//3
  player_sprite.addAnimation('walk', player_walk); //4
  player_sprite.addAnimation('stand', player_stand);//4a







  background(0);

  // Draw the ground tiles
  for (var x = 0; x < 840; x += 70) {
    tile_sprite_sheet.drawFrame('snow.png', x, 330);
  }

  // Draw the sign tiles
  tile_sprite_sheet.drawFrame('signExit.png', 700, 260);
  tile_sprite_sheet.drawFrame('signRight.png', 0, 260);

  // Mobile friendly controls
  var eventX;
  if (isTouch()) {
    eventX = touchX;
  } else {
    eventX = mouseX;
  }

  //if mouse is to the left
  if(eventX < player_sprite.position.x - 10) {
    player_sprite.changeAnimation('walk');
    // flip horizontally
    player_sprite.mirrorX(-1);
    // move left
    player_sprite.velocity.x = - 2;
  }
  else if(eventX > player_sprite.position.x + 10) {
    player_sprite.changeAnimation('walk');
    // flip horizontally
    player_sprite.mirrorX(1);
    // move right
    player_sprite.velocity.x = 2;
  }
  else {
    player_sprite.changeAnimation('stand');
    //if close to the mouse, don't move
    player_sprite.velocity.x = 0;
  }
