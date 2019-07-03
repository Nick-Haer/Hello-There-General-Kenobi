let obiwanImage = $("#kenobi")
let grievousImage = $("#grievous")
let emperorImage = $("#emperor")
let jarjarImage = $("#jarjar")


let obiwan = { attack: 7, counterattack: 8, health: 90 };
let grievous = { attack: 8, counterattack: 10, health: 115 };
let emperor = { attack: 9, counterattack: 12, health: 125 };
let jarjar = { attack: 10, counterattack: 14, health: 140 };

let displayObiwanHealth = $("#ohealth")
let displayGrievousHealth = $("#ghealth")
let displayEmperorHealth = $("#ehealth")
let displayJarJarHealth = $("#jhealth")

displayObiwanHealth.text(obiwan.health);
displayGrievousHealth.text(grievous.health);
displayEmperorHealth.text(emperor.health);
displayJarJarHealth.text(jarjar.health);

let characterChose = false;
let enemyChose = false;
let selectedChar;
let defendingChar;
let defeatedOpponents = []
let baseAttack;

let charSelectO = function () {
    if (characterChose === false) {
        console.log("You chose someone");
        $(".characters").insertAfter($("#enemies")).css("background", "red")
        $(this).insertAfter($("#currentchar")).css("background", "white")
        selectedChar = obiwan;
        characterChose = true;
        baseAttack = selectedChar.attack
    }
}
let charSelectG = function () {
    if (characterChose === false) {
        console.log("You chose someone");
        $(".characters").insertAfter($("#enemies")).css("background", "red")
        $(this).insertAfter($("#currentchar")).css("background", "white")
        selectedChar = grievous;
        characterChose = true;
        baseAttack = selectedChar.attack
    }
}
let charSelectE = function () {
    if (characterChose === false) {
        console.log("You chose someone");
        $(".characters").insertAfter($("#enemies")).css("background", "red")
        $(this).insertAfter($("#currentchar")).css("background", "white")
        selectedChar = emperor;
        characterChose = true;
        baseAttack = selectedChar.attack
    }
}
let charSelectJ = function () {
    if (characterChose === false) {
        console.log("You chose someone");
        $(".characters").insertAfter($("#enemies")).css("background", "red")
        $(this).insertAfter($("#currentchar")).css("background", "white")
        selectedChar = jarjar;
        characterChose = true;
        baseAttack = selectedChar.attack
    }
}





let enemyselectO = function () {
    if (characterChose === true && enemyChose === false) {
        if (obiwan != selectedChar) {
            defendingChar = obiwan;
            obiwanImage.insertAfter($("#defender")).css("background", "black")
            $("#kt").css("color", "white")
            $("#ohealth").css("color", "white");
            enemyChose = true;
        }
    }
};

let enemyselectG = function () {
    if (characterChose === true && enemyChose === false) {
        if (grievous != selectedChar) {
            defendingChar = grievous;
            grievousImage.insertAfter($("#defender")).css("background", "black")
            $("#gt").css("color", "white")
            $("#ghealth").css("color", "white");
            enemyChose = true;
        }
    }
};

let enemyselectE = function () {
    if (characterChose === true && enemyChose === false) {
        if (emperor != selectedChar) {
            defendingChar = emperor;
            emperorImage.insertAfter($("#defender")).css("background", "black")
            $("#et").css("color", "white")
            $("#ehealth").css("color", "white");
            enemyChose = true;
        }
    }
};

let enemyselectJ = function () {
    if (characterChose === true && enemyChose === false) {
        if (jarjar != selectedChar) {
            defendingChar = jarjar;
            jarjarImage.insertAfter($("#defender")).css("background", "black")
            $("#jt").css("color", "white")
            $("#jhealth").css("color", "white");
            enemyChose = true;
        }
    }
};

obiwanImage.on("click", enemyselectO).on("click", charSelectO)

grievousImage.on("click", enemyselectG).on("click", charSelectG)

emperorImage.on("click", enemyselectE).on("click", charSelectE)

jarjarImage.on("click", enemyselectJ).on("click", charSelectJ)


function determineChar (x) {
   return x.counterattack === 8 ? "Kenobi" 
    : x.counterattack === 10 ? "Grievous"
    : x.counterattack === 12 ? "The Emperor"
    : "Darth JarJar";
}


$("#attackbutton").on("click", function () {
    defendingChar.health -= selectedChar.attack;

    $("#displayattack").text(`You attacked ${determineChar(defendingChar)} for ${selectedChar.attack} damage`)

    $("#displaycounter").text(`${determineChar(defendingChar)} attacked you for ${defendingChar.counterattack} damage`)

    selectedChar.attack += baseAttack;

    if (defendingChar.health > 0) {
        selectedChar.health -= defendingChar.counterattack
    }

    displayObiwanHealth.text(obiwan.health);
    displayGrievousHealth.text(grievous.health);
    displayEmperorHealth.text(emperor.health);
    displayJarJarHealth.text(jarjar.health);


    if (emperor.health <= 0) {
        emperorImage.css("display", "none")
        enemyChose = false;
        if (!defeatedOpponents.includes("e"))
        defeatedOpponents.push("e")
    }
    if (grievous.health <= 0) {
        grievousImage.css("display", "none")
        enemyChose = false;
        if (!defeatedOpponents.includes("g"))
        defeatedOpponents.push("g")
    }
    if (jarjar.health <= 0) {
        jarjarImage.css("display", "none")
        enemyChose = false;
        if (!defeatedOpponents.includes("j"))
        defeatedOpponents.push("j")
    }
    if (obiwan.health <= 0) {
        obiwanImage.css("display", "none")
        enemyChose = false;
        if (!defeatedOpponents.includes("o"))
        defeatedOpponents.push("o")
    }

    if (selectedChar.health <= 0) {
        alert("Game over!");
        $("#restart").css("display", "block")
        
    }

    if (defeatedOpponents.length === 3 && selectedChar.health > 0) {
        alert("Congratulations! You have brought peace and order to the galaxy");
        $("#restart").css("display", "block")
    }
})

$("#restart").on("click", function (){
obiwan = { attack: 7, counterattack: 8, health: 90 };
grievous = { attack: 8, counterattack: 10, health: 115 };
emperor = { attack: 9, counterattack: 12, health: 125 };
jarjar = { attack: 10, counterattack: 14, health: 140 };

displayObiwanHealth.text(obiwan.health);
displayGrievousHealth.text(grievous.health);
displayEmperorHealth.text(emperor.health);
displayJarJarHealth.text(jarjar.health);

characterChose = false;
enemyChose = false;

selectedChar = "#";
defendingChar = "#";

defeatedOpponents = []
baseAttack = 0;

$(".characters").insertAfter($("#pickrow")).css("display", "inline-block")

$("#displaycounter").text("")
$("#displayattack").text("")

$("#restart").css("display", "none")

$(".characters").css("background", "white")

$(".nametext").css("color", "black");

$("#ohealth").css("color", "black");
$("#ghealth").css("color", "black");
$("#ehealth").css("color", "black");
$("#jhealth").css("color", "black");
})


// add css to picked enemies

// add css effects