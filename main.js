x=0;
y=0;
a_circle="";
b_rectangle="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    if(content == "circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing a circle";
        a_circle="set";
    }
    if(content == "rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing a rectangle";
        b_rectangle="set";
    }


} 

function setup(){
    canvas=createCanvas(900,600);
}

function draw(){
    if(a_circle == "set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn";
        a_circle="";
    }

    if(b_rectangle == "set"){
        length=Math.floor(Math.random()*100);
        breadth=Math.floor(Math.random()*90);
        rect(x,y,length,breadth);
        document.getElementById("status").innerHTML="Rectangle is drawn";
        b_rectangle="";
    }
}
