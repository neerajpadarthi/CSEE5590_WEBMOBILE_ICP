$(document).ready(function () {
    $("#r").click(function () {
        var equation = document.getElementById("equation");
        equation.innerHTML="";
        check("r");
    });
    $("#p").click(function () {
        var equation = document.getElementById("equation");
        equation.innerHTML="";
        check("p");
    });
    $("#s").click(function () {
        var equation = document.getElementById("equation");
        equation.innerHTML="";
        check("s");
    });
});


function check(c1) {

    var equation = document.getElementById("equation");

    var comp = Math.random();
    if (comp <= 0.30) {
        c2 = "r";
    } else if ( comp>0.30 & comp <= 0.67) {
        c2 = "p";
    } else {
        c2 = "s";
    }

    if (c1 === c2) {

        equation.innerHTML="Tie";
    }

    else if (c1 === "r") {

        if (c2 === "s") {
            equation.innerHTML="Rock wins"+ "!!! " +"You Win";
        }
        else {
            equation.innerHTML="Paper wins"  + "!!! " + "You Lost";
        }
    }

    else if (c1 === "p") {

        if (c2 === "r") {
            equation.innerHTML="Paper wins"  + "!!! " +  "You Win!";
        }
        else {
            equation.innerHTML="Scissor wins"+ "!!! " + "You Lost";
        }
    }

    else if (c1 === "s") {

        if (c2 === "r") {
            equation.innerHTML="Rock wins"  + "!!! " +  "You Lost";
        }
        else {
            equation.innerHTML="Scissor wins"  + "!!! " +   "You Win";
        }
    }
}
