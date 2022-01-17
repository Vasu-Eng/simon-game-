var pattern = [];
var user_in =[];
var flag = 0;

$(document).on("keydown", function (e) {
   if(e.key =="r" && flag ==1) {
    flag = 0;   
    $("h1").html("Level - "+ (pattern.length + 1));
    playContinue();}
    setTimeout(function(){ startGame(e.key);},200);
});
// user input 
$(".btn").on("click", function () {
    react(IdtoNum(this.id));
    user_in.push(IdtoNum(this.id));
    console.log("user_in :");
    console.log(user_in);
    if( user_in.length === pattern.length){
    setTimeout(function(){
        animation(arrayEquals(pattern,user_in));
    },400);
    }
});    

function startGame(pressedKey) {
    if (pressedKey == "a") {
        // starting the game 
        pattern =[];
        $("h1").html("Level - "+ (pattern.length + 1));
        playContinue();
    }
}

function animation(bool){ 
if (bool == false){
    $("h1").html("Game-over! press R key to restart");
    $("body").addClass("game-over");
    playsound("wrong");
    setTimeout( function(){
    $("body").removeClass("game-over");
    },100);
    flag =1;
    pattern =[];
    user_in =[];
   }
else{
    $("h1").html("Level - "+ (pattern.length + 1));
    playContinue();
} 
}

function playContinue(){
     user_in =[];
    var newStep = random(4);
        pattern.push(newStep);
        react(newStep);
        console.log("pattern :");
        console.log(pattern);
}


function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}
function random(val) {
    var num = Math.random();
    num = num * val;
    num = Math.floor(num) + 1;
    return num;
}
function react(key) {
    switch (key) {
        case 1 ://Green
            $("#green").addClass("pressed");
            playsound("green");
            setTimeout(function () {
                $("#green").removeClass("pressed");
            }, 100);
            break;
        case 2://Red
            $("#red").addClass("pressed");
            playsound("red");
            setTimeout(function () {
                $("#red").removeClass("pressed");
            }, 100);
            break;
        case 3://Blue
            $("#blue").addClass("pressed");
            playsound("blue");
            setTimeout(function () {
             $("#blue").removeClass("pressed");
            }, 100);
            break;
         case 4://yellow
            $("#yellow").addClass("pressed");
            playsound("yellow");
            setTimeout(function () {
                $("#yellow").removeClass("pressed");
            }, 100);
            break;
    }
}

function IdtoNum(id){
 if(id == "green")return 1;
 if(id == "red")return 2;
 if(id == "blue")return 3;
 if(id == "yellow")return 4;
}
function playsound(id){
    var audio = new Audio("sounds/"+id+".mp3");
    audio.play();
    return 0;
}

