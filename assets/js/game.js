// Game States
// 'WIN' - Player robot has defeated allthe enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy robot
//'LOSE' - Player robots' health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var enemyNames = ["Roborto", 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

//In "function(enemyName)", enemyName is a PARAMETER(placeholder) while in "function('Roborto')" Roborto is a ARGUEMENT
var fight = function (enemyName) {

    // repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
        //Asks player if they would like to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


        //if player chooses to skip the fight
        if (promptFight === 'skip' || promptFight === 'SKIP') {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes(true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip the fight. Goodbye!');
                //Subtract money from the playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log('playerMoney', playerMoney)
                break;
            }
        }


        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //Checks enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //awar player money for winning
            playerMoney = playerMoney + 20;

            //leave while loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        //Log a resulting message to the console so we know that it worked
        console.log(
            enemyName + " attcked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        // Checks player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //leave while loop since player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}


for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName)
}