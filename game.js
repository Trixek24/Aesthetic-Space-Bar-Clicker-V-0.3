//Game Functionality//

var score = 0;
var ppc = 1;
var sound = new Audio('Keypress.wav');
var soundisplaying = true;

window.addEventListener("keyup", my_keyup);

function my_keyup(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

if(keyPressed == "32") 
{
    if(soundisplaying == true){
    sound.play();
    console.log("sound is playing");
    }
    console.log("SpaceBar was pressed");
    document.getElementById("score").innerHTML = "$"+score;
    score = score + ppc;
    console.log("Score = " + score);
    localStorage.setItem("score",score)
    
}
}

function audio()
{
    if(soundisplaying == true){
        soundisplaying = false;
        console.log("sound is not playing");
        document.getElementById("sound_btn").style.backgroundImage = "url('audio-off.png')";
    }
}

function ppcDefine(){
    document.getElementById("ppc").innerHTML = ppc;
}

function plus1Point()
{
    if(score >= 250)
    {
        ppc = ppc + 1;
        document.getElementById("ppc").innerHTML = ppc;
        console.log("Points Per Second is "+ ppc);
        score = score - 250;
        return;
    }
    else
    {
        console.log("Score Requirement not reached")
        return;
    }

}

function plus2Point()
{
    if(score >= 500)
    {
        ppc = ppc + 2;
        document.getElementById("ppc").innerHTML = ppc;
        console.log("Points Per Second is "+ ppc);
        score = score - 500;
        return;
    }
    else
    {
        console.log("Score Requirement not reached")
        return;
    }

}
function plus5Point()
{
    if(score >= 1000)
    {
        ppc = ppc + 5;
        document.getElementById("ppc").innerHTML = ppc;
        console.log("Points Per Second is "+ ppc);
        score = score - 1000;
        return;
    }
    else
    {
        console.log("Score Requirement not reached")
        return;
    }

}
//color changing//
function red()
{
    document.body.style.backgroundColor = "red";
}
function yellow()
{
    document.body.style.backgroundColor = "yellow";
}
function blue()
{
    document.body.style.backgroundColor = "blue";
}
function orange()
{
    document.body.style.backgroundColor = "orange";
}
function green()
{
    document.body.style.backgroundColor = "green";
}
function pink()
{
    document.body.style.backgroundColor = "pink";
}
function purple()
{
    document.body.style.backgroundColor = "purple";
}
function black()
{
    document.body.style.backgroundColor = "black";
}
function Default()
{
    document.body.style.backgroundColor = "grey";
}
