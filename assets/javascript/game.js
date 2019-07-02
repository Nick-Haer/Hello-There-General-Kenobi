let obiwan = {attack: 5, counterattack: 10, health: 80};
let grievous = {attack: 7, counterattack: 15, health: 100};
let emperor = {attack: 9, counterattack: 17, health: 130};
let jarjar = {attack: 5, counterattack: 20, health: 150};

let chose = false;





$(".characters").on("click", function () {
    if (chose === false) {
        console.log("You chose someone");
        $(this).appendTo($("#currentchar"))
        $(this).css("display", "block")
        chose = true;
    }

})