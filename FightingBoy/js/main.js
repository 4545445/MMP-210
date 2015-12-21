//Creating sprite 
var mouse_moved = false;
var touch_started = false;
var player_sprite_sheet;
var tile_sprite_sheet;
var explode_sprite;
var player_walk;
var player_stand;
var player_sprite;
var tile_frames;

// Normally you would put this in a .json file, but I'm putting it here
var player_frames = [
  {"name":"Frame01", "frame":{"x":0, "y": 0, "width": 70, "height": 94}},
  {"name":"Frame02", "frame":{"x":71, "y": 0, "width": 70, "height": 94}},
  {"name":"Frame03", "frame":{"x":142, "y": 0, "width": 70, "height": 94}},
  {"name":"Frame04", "frame":{"x":0, "y": 95, "width": 70, "height": 94}},

];