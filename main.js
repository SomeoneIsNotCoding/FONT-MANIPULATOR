noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
dif=0;



function setup(){
video=createCapture(VIDEO);
video.position(242,270);

canvas=createCanvas(700,480);
canvas.position(1000,270)

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}






function modelLoaded(){
    console.log('MODEL IS READY')
}
function gotPoses(results){
    if(results.length>0){
       console.log(results); 

       noseX=results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       leftWristX=results[0].pose.leftWrist.x;
       rightWristX=results[0].pose.rightWrist.x;
       dif=round(leftWristX-rightWristX);
    }
}

function draw(){
background("midnightblue")
stroke('white');
textAlign(CENTER,CENTER);
textSize(dif)
text('ASHTON',noseX,noseY);
document.getElementById("size").innerHTML="Size of the font is "+ dif+" px";
}