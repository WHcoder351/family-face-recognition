Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_Quality: 90
});
Camera = document.getElementById("camera");
Webcam.attach(camera);
function Picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id =  "Capture" src = " '+data_uri+' "/>';
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JrkzOmpgQ/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}