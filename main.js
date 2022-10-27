var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition;

function start()
{
    document.getElementById("textbox").innerHTML = "";

    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var Content = event.results[0][0].transcript;

    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    speak();
}

camera = document.getElementById("camera");

Webcam.set({
    width: 360,

    height: 250,

    image_format: 'png',

    png_quality: 90
});

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;
    
    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);
    
    Webcam.attach(camera);
}