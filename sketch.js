const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
function setup() {


    engine = Engine.create();
  world = engine.world;

    var canvas = createCanvas(1200,400)
    var myEngine, myWorld;
    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(740,340,450,20)
    

// level 1 blocks
    block1 = new BaseClass(563,310,40,30)
    block2 = new BaseClass(603,310,40,30)
    block3 = new BaseClass(643,310,40,30)
    block4 = new BaseClass(683,310,40,30)
    block5 = new BaseClass(723,310,40,30)
    block6 = new BaseClass(763,310,40,30)
    block7 = new BaseClass(803,310,40,30)
    block8 = new BaseClass(843,310,40,30)
    block9 = new BaseClass(883,310,40,30)
    block10 = new BaseClass(923,310,40,30)

    block11 = new BaseClass(580,278,40,30)
    block12 = new BaseClass(620,278,40,30)
    block13 = new BaseClass(660,278,40,30)
    block14 = new BaseClass(700,278,40,30)
    block15 = new BaseClass(740,278,40,30)
    block16 = new BaseClass(780,278,40,30)
    block17 = new BaseClass(820,278,40,30)
    block18 = new BaseClass(860,278,40,30)
    block19 = new BaseClass(900,278,40,30)

    block20 = new BaseClass(600,245,40,30)
    block21 = new BaseClass(640,245,40,30)
    block22 = new BaseClass(680,245,40,30)
    block23 = new BaseClass(720,245,40,30)
    block24 = new BaseClass(760,245,40,30)
    block25 = new BaseClass(800,245,40,30)
    block26 = new BaseClass(840,245,40,30)
    block27 = new BaseClass(880,245,40,30)

    block28 = new BaseClass(620,216,40,30)
    block29 = new BaseClass(660,216,40,30)
    block30 = new BaseClass(700,216,40,30)
    block31 = new BaseClass(740,216,40,30)
    block32 = new BaseClass(780,216,40,30)
    block33 = new BaseClass(820,216,40,30)
    block34 = new BaseClass(860,216,40,30)

    block35 = new BaseClass(640,185,40,30)
    block36 = new BaseClass(680,185,40,30)
    block37 = new BaseClass(720,185,40,30)
    block38 = new BaseClass(760,185,40,30)
    block39 = new BaseClass(800,185,40,30)
    block40 = new BaseClass(840,185,40,30)

    block41 = new BaseClass(660,159,40,30);
    block42 = new BaseClass(700,159,40,30);
    block43 = new BaseClass(740,159,40,30);
    block44 = new BaseClass(780,159,40,30);
    block45 = new BaseClass(820,159,40,30);

    block46 = new BaseClass(680,123,40,30);
    block47 = new BaseClass(720,123,40,30);
    block48 = new BaseClass(760,123,40,30);
    block49 = new BaseClass(800,123,40,30);

    block50 = new BaseClass(700,106,40,30);
    block51 = new BaseClass(740,106,40,30);
    block52 = new BaseClass(780,106,40,30);

    block53 = new BaseClass(720,186,40,30);
    block54 = new BaseClass(760,186,40,30)



    polygon = Bodies.circle(50,200,20)
    World.add(world, polygon);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});

}

function draw() {
    background("lightGreen")
    textSize(20)
    text("Press space to try again", 100 ,50)
    
    text(mouseX + "," + mouseY,mouseX,mouseY)
    Engine.update(engine)

    ground.display();
    ground2.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();

    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();

    block41.display();
    block42.display();
    block43.display();
    block44.display();
    block45.display();

    block46.display();
    block47.display();
    block48.display();
    block49.display();
    
    block50.display();
    block51.display();
    block52.display();

    block53.display();
    block54.display();

    //imageMode(CENTER);
   // image(polygon_img, polygon.position.x, polygon.position.y, 40,40);
    circle(polygon.position.x, polygon.position.y,40)
    slingshot.display();

    
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY})
}

function mouseReleased() {
    slingshot.fly()
}
function keyPressed() {
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}