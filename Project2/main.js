let players = ["scav", "PMC", "Raiders", "Scav Bosses"];
let bosses = ["Killa", "Glukhar", "Sanitar", "Shturman", "Rashala"];

console.log("Welcome to the unforgiving lands of Tarkov! The following is the type of characters you will encounter here:");

for (let i=0; i < players.length; i++){
    console.log(i+1 + " " + players[i]);
}

let myBtn = document.getElementById("myButton").onclick = displayChar;

function displayChar() {
    let btnInput =document.getElementById("input").value;
    let btnNum = 0;
    btnNum = Number(btnInput);

    if (btnNum === 2) {
       let charInfo = "Scavengers: Scavs are either AI or players. They have low tear gear but can be dangerous if you underestimate them. You will never know if they are another player or just a bot";
       document.getElementById("result").innerHTML = charInfo;
    }
    if (btnNum === 1) {
        let charInfo = "PMC: In this land they are known as the Chads and the Rats <br> The Chad will be running around with the best of the best gear. <br> The Rats will have lower teir gear. Watch out for them hiding in bushes and corners.";
        document.getElementById("result").innerHTML = charInfo;
    }
    if (btnNum === 3) {
        let charInfo = "Raiders: These are more advanced AI. They will user more advanced tactics to try and catch you off guard and will have more dangerous weapons to take you out. They will also act as guards for the Bosses";
        document.getElementById("result").innerHTML = charInfo;
    }
    if (btnNum === 4) {
        for (let i = 0; i < bosses.length; i++) {
            console.log(i + 1 + " " + bosses[i]);
        }

        let bossInfo = "1 Killa<br>2 Glukhar<br>3 Sanitar<br>4 Shturman<br> 5 Rashala";
        document.getElementById("result").innerHTML = bossInfo;

        let bossSelect = Number(prompt("Which of the bosses would you like more info for?"));

        while (isNaN(bossSelect) || bossSelect == "") {
            bossSelect = Number(prompt("Please enter a valid boss number. Which of the bosses would you like more info for?"));
        }
        if (bossSelect == 1) {
            console.log("Killa is the most aggressive of all the bosses. Once he knows your near he will charge you so you can't get away. He also has the strongest armor making him difficult to take down. He doesn't have any guards so if you can catch him off guards you can have a much easier time.");
        }
        if (bossSelect == 2) {
            console.log("Glukhar always has 6 guards with him making him difficult to get to. He can have all types of amour on but is always armed with the strongest weapons of all the bosses.");
        }
        if (bossSelect == 3) {
            console.log("Sanitar while not the best armed boss he will always have a ton of healing items on him that will make him difficult. He has two guards with him that are heavily geared making him very dangerous to approach.");
        }
        if (bossSelect == 4) {
            console.log("Shturman is a long range expert compared  to all the other bosses. He has long range weapons that if he spots you will take you down very quickly. He also has two guards with him that are equally as dangerous from close or long range.");
        }
        if (bossSelect == 5) {
            console.log("Rashala is the least dangerous compared  to the other bosses in the game. He will run away and try to hide to catch you by surprise. His 4 guards will try and hunt you down but are easy to spot since they are dressed like police.");
        }
    }
}