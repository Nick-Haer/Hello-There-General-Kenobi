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


let charSelect = function () {

    if (characterChose === true && enemyChose === false) {
        if ((obiwan != selectedChar) && ($(this).attr("id") === "kenobi")) {
            defendingChar = obiwan;
            obiwanImage.insertAfter($("#defender")).css("background", "black")
            $("#kt").css("color", "white")
            $("#ohealth").css("color", "white");
        }
        else if ((grievous != selectedChar) && ($(this).attr("id") === "grievous")) {
            defendingChar = grievous;
            grievousImage.insertAfter($("#defender")).css("background", "black")
            $("#gt").css("color", "white")
            $("#ghealth").css("color", "white");
        } 
        else if ((emperor != selectedChar) && ($(this).attr("id") === "emperor")) {
            defendingChar = emperor;
            emperorImage.insertAfter($("#defender")).css("background", "black")
            $("#et").css("color", "white")
            $("#ehealth").css("color", "white")
        } 
        else if ((jarjar != selectedChar) && ($(this).attr("id") === "jarjar")) {
            defendingChar = jarjar;
            jarjarImage.insertAfter($("#defender")).css("background", "black")
            $("#jt").css("color", "white")
            $("#jhealth").css("color", "white");
        }
        enemyChose = true;
    }

    if (characterChose === false) {
        console.log("You chose someone");
        $(".characters").insertAfter($("#enemies")).css("background", "red")
        $(this).insertAfter($("#currentchar")).css("background", "white")
        if ($(this).attr("id") === "kenobi") {
            selectedChar = obiwan;
        }
        else if ($(this).attr("id") === "grievous") {
            selectedChar = grievous;
        }
        else if ($(this).attr("id") === "emperor") {
            selectedChar = emperor;
        }
        else if ($(this).attr("id") === "jarjar") {
            selectedChar = jarjar;
        }
        characterChose = true;
        baseAttack = selectedChar.attack
    }
}

obiwanImage.on("click", charSelect);

grievousImage.on("click", charSelect);

emperorImage.on("click", charSelect);

jarjarImage.on("click", charSelect);


function determineChar(x) {
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

$("#restart").on("click", function () {
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