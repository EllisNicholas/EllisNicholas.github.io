let players = ["scav", "PMC", "Raiders", "Scav Bosses"]
let bosses = ["Killa", "Glukhar", "Sanitar", "Shturman", "Rashala"]

console.log("Welcome to the unforgiving lands of Tarkov! The following is the type of characters you will encounter here:")

for (let i=0; i < players.length; i++){
    console.log(i+1 + " " + players[i])
}

let yesNo = prompt("Would you like info on one of these characters?")
yesNo = yesNo.toLowerCase()
let yes = "yes"
let no = "no"
while(yesNo.toLowerCase() !== yes && yesNo.toLowerCase() !== no){
    yesNo = prompt("Please only enter yes or no. Would you like info on one of these characters?")
    yesNo = yesNo.toLowerCase()
}

while(yesNo == yes){
    let info = Number(prompt("Which character would you like more info on?"))

    while(isNaN(info) || info == ""){
        info = Number(prompt("Please enter a valid character number. Which character would you like more info on?"))
    }

    if(info == 1){
        console.log("Scavs are either AI or players. They have low tear gear but can be dangerous if you underestimate them.")
        yesNo = prompt("Would you like info on one of these characters?")
    }
    if(info == 2){
        console.log("PMCs are players. They can range from the lowest of the low gear to the highest class gear. watch out for the ones that are hiding in the bushes")
        yesNo = prompt("Would you like info on one of these characters?")
    }
    if(info == 3){
        console.log("Radiers are advanced AI. They will have high tear loot and will use more advanced tactics.")
        yesNo = prompt("Would you like info on one of these characters?")
    }
    if(info == 4){
        for(let i = 0; i < bosses.length; i++){
            console.log(i+1 + " " + bosses[i])
        }

        let bossSelect = Number(prompt("Which of the bosses would you like more info for?"))

        while(isNaN(bossSelect) || bossSelect == ""){
            bossSelect = Number(prompt("Please enter a valid boss number. Which of the bosses would you like more info for?"))
        }
        if (bossSelect == 1){
            console.log("Killa is the most aggressive of all the bosses. Once he knows your near he will charge you so you can't get away. He also has the strongest armor making him difficult to take down. He doesn't have any guards so if you can catch him off guards you can have a much easier time.")
            yesNo = prompt("Would you like info on one of these characters?")
        }
        if (bossSelect == 2){
            console.log("Glukhar always has 6 guards with him making him difficult to get to. He can have all types of amour on but is always armed with the strongest weapons of all the bosses.")
            yesNo = prompt("Would you like info on one of these characters?")
        }
        if (bossSelect == 3){
            console.log("Sanitar while not the best armed boss he will always have a ton of healing items on him that will make him difficult. He has two guards with him that are heavily geared making him very dangerous to approach.")
            yesNo = prompt("Would you like info on one of these characters?")
        }
        if (bossSelect == 4){
            console.log("Shturman is a long range expert compared  to all the other bosses. He has long range weapons that if he spots you will take you down very quickly. He also has two guards with him that are equally as dangerous from close or long range.")
            yesNo = prompt("Would you like info on one of these characters?")
        }
        if (bossSelect == 5){
            console.log("Rashala is the least dangerous compared  to the other bosses in the game. He will run away and try to hide to catch you by surprise. His 4 guards will try and hunt you down but are easy to spot since they are dressed like police.")
            yesNo = prompt("Would you like info on one of these characters?")
        }
    }
}

while (yesNo == no){
    let goodbye =("Have a safe journey!")
    console.log(goodbye)
}