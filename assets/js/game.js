// Game States
// 'WIN' - Player robot has defeated allthe enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy robot
//'LOSE' - Player robots' health is zero or less





var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//You can also log multiple values atonce like this: console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto",'Amy Android','Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

//In "function(enemyName)", enemyName is a PARAMETER(placeholder) while in "function('Roborto')" Roborto is a ARGUEMENT
var fight = function (enemyName) {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Asks player if they would like to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    if (promptFight === 'fight' || promptFight === 'FIGHT') {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //Checks enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        //Log a resulting message to the console so we know that it worked
        console.log(
            enemyName + " attcked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Checks player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }


        //if player chooses to skip the fight
    } else if (promptFight === 'skip' || promptFight === 'SKIP') {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerName + ' has decided to skip the fight. Goodbye!');
            //Subtract money from the playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no(false), ask question again by running fight() again
        else {
            fight();
        }
        

    } else {
        window.alert('You neeed to pick a valid option. Try again!')
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i])
}