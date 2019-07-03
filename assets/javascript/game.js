let obiwanImage = $("#kenobi")
let grievousImage = $("#grievous")
let emperorImage = $("#emperor")
let jarjarImage = $("#jarjar")


let obiwan = { attack: 5, counterattack: 10, health: 80 };
let grievous = { attack: 7, counterattack: 15, health: 100 };
let emperor = { attack: 8, counterattack: 17, health: 130 };
let jarjar = { attack: 10, counterattack: 20, health: 150 };

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
let opponents = []
let baseAttack;

let charSelectO = function () {
    if (characterChose === false) {
        console.log("You chose someone");
        $(".characters").insertAfter($("#enemies"))
        $(this).insertAfter($("#currentchar"))
        selectedChar = obiwan;
        opponents = [grievous, emperor, jarjar];
        characterChose = true;
        baseAttack = selectedChar.attack
    }
}
let charSelectG = function () {
    if (characterChose === false) {
        console.log("You chose someone");
        $(".characters").insertAfter($("#enemies"))
        $(this).insertAfter($("#currentchar"))
        selectedChar = grievous;
        opponents = [obiwan, emperor, jarjar];
        characterChose = true;
        baseAttack = selectedChar.attack
    }
}
let charSelectE = function () {
    if (characterChose === false) {
        console.log("You chose someone");
        $(".characters").insertAfter($("#enemies"))
        $(this).insertAfter($("#currentchar"))
        selectedChar = emperor;
        opponents = [grievous, obiwan, jarjar];
        characterChose = true;
        baseAttack = selectedChar.attack
    }
}
let charSelectJ = function () {
    if (characterChose === false) {
        console.log("You chose someone");
        $(".characters").insertAfter($("#enemies"))
        $(this).insertAfter($("#currentchar"))
        selectedChar = jarjar;
        opponents = [grievous, emperor, obiwan];
        characterChose = true;
        baseAttack = selectedChar.attack
    }
}





let enemyselectO = function () {
    if (characterChose === true) {
        if (obiwan != selectedChar) {
            defendingChar = obiwan;
            obiwanImage.insertAfter($("#defender"))
            enemyChose = true;
        }
    }
};

let enemyselectG = function () {
    if (characterChose === true) {
        if (grievous != selectedChar) {
            defendingChar = grievous;
            grievousImage.insertAfter($("#defender"))
            enemyChose = true;
        }
    }
};

let enemyselectE = function () {
    if (characterChose === true) {
        if (emperor != selectedChar) {
            defendingChar = emperor;
            emperorImage.insertAfter($("#defender"))
            enemyChose = true;
        }
    }
};

let enemyselectJ = function () {
    if (characterChose === true) {
        if (jarjar != selectedChar) {
            defendingChar = jarjar;
            jarjarImage.insertAfter($("#defender"))
            enemyChose = true;
        }
    }
};

obiwanImage.on("click", enemyselectO).on("click", charSelectO)

grievousImage.on("click", enemyselectG).on("click", charSelectG)

emperorImage.on("click", enemyselectE).on("click", charSelectE)

jarjarImage.on("click", enemyselectJ).on("click", charSelectJ)


$("#attackbutton").on("click", function () {
    defendingChar.health -= selectedChar.attack;
    selectedChar.attack += baseAttack;

    console.log(selectedChar.attack);
    console.log(defendingChar.health);

    if (defendingChar.health > 0) {
        selectedChar.health -= defendingChar.attack
    }

    displayObiwanHealth.text(obiwan.health);
    displayGrievousHealth.text(grievous.health);
    displayEmperorHealth.text(emperor.health);
    displayJarJarHealth.text(jarjar.health);


    if (emperor.health <= 0) {
        emperorImage.css("display", "none")
    }
    if (grievous.health <= 0) {
        grievousImage.css("display", "none")
    }
    if (jarjar.health <= 0) {
        jarjarImage.css("display", "none")
    }
    if (obiwan.health <= 0) {
        obiwanImage.css("display", "none")
    }
})



// add css to picked enemies
// add win and loss cons
// add reset button

// add css effects