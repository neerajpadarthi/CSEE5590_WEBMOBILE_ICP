$(document).ready(function () {
    $("#r").click(function () {
        // Calling function when click events and erasing text
        var equation = document.getElementById("equation");
        equation.innerHTML="";
        check("r");
    });
    $("#p").click(function () {
        // Calling function when click events and erasing text
        var equation = document.getElementById("equation");
        equation.innerHTML="";
        check("p");
    });
    $("#s").click(function () {
        // Calling function when click events and erasing text
        var equation = document.getElementById("equation");
        equation.innerHTML="";
        check("s");
    });
});


function check(c1) {

    var equation = document.getElementById("equation");

    // Using Math function to get the system options
    var comp = Math.random();
    if (comp <= 0.30) {
        c2 = "r";
    } else if ( comp>0.30 & comp <= 0.67) {
        c2 = "p";
    } else {
        c2 = "s";
    }

    if (c1 === c2) {
    // if it same it tie
        equation.innerHTML="Tie";
    }

    else if (c1 === "r") {
        // When user selected rock
        if (c2 === "s") {
            // when sys is Siccsor
            equation.innerHTML="Rock wins"+ "!!! " +"You Win";
        }
        else {
            equation.innerHTML="Paper wins"  + "!!! " + "You Lost";
        }
    }

    else if (c1 === "p") {
        // WHne user is paper
        if (c2 === "r") {
            // when sys is rock
            equation.innerHTML="Paper wins"  + "!!! " +  "You Win!";
        }
        else {
            equation.innerHTML="Scissor wins"+ "!!! " + "You Lost";
        }
    }

    else if (c1 === "s") {
// When user is Scissor
        if (c2 === "r") {
            // When user is rock
            equation.innerHTML="Rock wins"  + "!!! " +  "You Lost";
        }
        else {
            equation.innerHTML="Scissor wins"  + "!!! " +   "You Win";
        }
    }
}
