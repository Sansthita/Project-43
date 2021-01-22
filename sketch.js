const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var crow, crow_image, player, player_img, tree_image;

 var drops = []
function preload(){
  player_img = loadImage("boy_1.png");
  tree_image = loadImage("tree.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    crow = new Crow(200, 50, 20, 20);
   // drop = new Droppings(200, 50);
    player = createSprite(200, 470, 70, 70);
  player.addImage(player_img);
  player.scale = 0.5;

  for (var i=0; i<1000; i++){
    droppings = new Droppings(random(50, 400), 50);
    drops.push(droppings);
  }
}

function draw(){
    background("white");
    Engine.update(engine);
    crow.display();
   // drop.display();
    for (var j=0; j<1000; j++){
      drops[j].display();
    }

        image(tree_image, 200, 50, 500, 500);
    drawSprites();
}