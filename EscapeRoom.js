var readlineSync = require('readline-sync');

const playerName = readlineSync.question("Please provide your name: ");
console.log(`${playerName}, welcome to the Escape Room Simulator!`);

let playerLife = true;
let hasKey = false;

while (playerLife == true){
    const menuId = readlineSync.keyIn('Press 1 to put your hand in the hole, press 2 to find the key, or, press 3 to open the door: ', {limit: '$<1-3>'});
    switch (menuId){
        case "1":
            console.log(`Oh no! You died! Better luck next time!`);
            playerLife = false;
        break;
        case "2":
            if (hasKey == false){
            console.log(`You have found the key!`);
            hasKey = true;
        } else {
            console.log(`You already have the key! Try finding the door!`);
        }
            break; 
        case "3":
            if (hasKey == true){1
            console.log(`You open the door and escape! Fresh air at last!`);
            playerLife = false;
        } else {
            console.log(`The door is locked. Find the key!`);
        }
            break;
        default:
            console.log("Nothing worked.");
            playerLife = false;
    }
}