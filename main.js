img = "";
function preload(){
  img = loadImage("p137img.jpg")
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#5b19ff");
    text("sheep", 135, 75);
    noFill();
    stroke("#5b19ff")
    rect(130, 60, 200, 350 );

    fill("#5b19ff");
    text("cow", 320, 50);
    noFill();
    stroke("#5b19ff")
    rect(300, 40, 270, 390 );
}

