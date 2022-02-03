function setup(){
    canvas = createCanvas(550,550);
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas.position(560,110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialised!');
}

function gotPoses(){
    if(result.length > 0){
        console.log(results);
    }
}