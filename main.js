video = "";
status = "";

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

}

function preload() {
    video = createVideo('scean.mp4');
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 400);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1.3);
    video.volume(1);
}