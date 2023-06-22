var score = 0;
var ppc = 1;

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

if(keyPressed == "32")
{
    console.log("SpaceBar was pressed");
    document.getElementById("score").innerHTML = score;
    score = score + ppc;
    console.log("Score = " + score);
    localStorage.setItem("score",score)
}
}

function ppcDefine(){
    document.getElementById("ppc").innerHTML = ppc;
}

function plus1Point()
{
    if(score >= 500)
    {
        ppc = ppc + 1;
        document.getElementById("ppc").innerHTML = ppc;
        console.log("Points Per Second is "+ ppc)
        score = score - 500;
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