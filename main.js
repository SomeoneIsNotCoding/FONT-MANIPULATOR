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
        }
    }
    
    function draw(){
    background("midnightblue")
    }