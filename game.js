var readlineSync = require('readline-sync');

const name = readlineSync.question("Please provide your name: ");
readlineSync.question("Welcome, " + name + ", to Mantis 9! A distant planet, where you find yourself stranded, unfortunately.. Can you survive? Press Enter to begin: ");

const monsters = ["Giant Rock Golem", "Winged Beast", "Viscious Mut", "Savage Goul"];
const artifacts = ["Magical Healing Herb", "Magnificent Gems", "Golden Idol", "Totem of Protection"];

var backpack = [];
let playerHealth = 40;
let discover = artifacts[Math.floor(Math.random() * artifacts.length)];

const options = ["Explore", "Leave", "Evaluate"];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 6) + 5);
    const monster = monsters[Math.floor(Math.random() * monsters.length)];
    let monstersHealth = 40;
    const monsterAttack= Math.floor(Math.random() * (5 - 2 + 4) + 4);

    const index = readlineSync.keyInSelect(options, "What will you do today?");

    switch(options[index]){
        case "Leave":
            playerHealth = 0;
            console.log("You are unsure of your skills. You luckly find a rocket and depart. Farewell " + name + ".");
            break;
        case "Evaluate":
            console.log("Name: " + name + "\nHealth: " + playerHealth + "\nBackpack: " + backpack + "\nSearching for: " + discover);
            game();
            break;
        case "Explore":
            let key = Math.random();
            if (key <= .3){
                console.log("You enjoy the landscapes of this uncharted world.");
                game();
            } else if (key >= .3){
                console.log(monster + " appeared!");
            }
            while (playerHealth > 0 && monstersHealth > 0){
                const reaction = readlineSync.question("What will you do? Press 'r' to run, or 'a' to attack!");
                switch (reaction){
                    case "r":
                        const run = Math.random();
                        if(run > .5){
                            console.log("You try to escape, but " + monster + " caught you and dealt " + monsterAttack + " damage.");
                        } else{
                            console.log("You got away safely!");
                            game();
                            break;
                        }
                    case "a":
                        console.log("You size up " + monster + "...");
                        monstersHealth -= attackPower;
                        console.log("You attacked " + monster + " and dealt " + attackPower + " damage!");
                        playerHealth -= monsterAttack;
                        console.log(monster + " attacked back with " + monsterAttack + " damage!");

                        if (monstersHealth <= 0){
                            console.log("You defeated " + monster + ". Behind it you find " + discover + "!");
                            let loot = Math.random();
                            if (loot >= .3){
                                backpack.push(discover);
                                console.log("You put " + discover + " in your backpack");
                            } 
                        }else if (playerHealth <= 0){
                                console.log(monster + " got the best of you. You did not survive..");
                            }
                        break;

                }
            }
    }
}
while(playerHealth > 0){
    game();
}
