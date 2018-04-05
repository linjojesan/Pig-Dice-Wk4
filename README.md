# Pig Dice

Pig Dice is a dice game where a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold". If the player rolls a 1, they score nothing and it becomes the next player's turn.

If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player who scores 100 or more points wins.

* If a player rolls a 1, they score nothing and it becomes the next persons turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If the player chooses to hold, their turn total is added to their score, and it becomes the next players turn.
# Specifications

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Player 1 rolls a die and gets a random number between 1-6 | User Input: "roll die"| Output: "random number is generated between 1-6" |
| **If player 1 rolls a 1 they score 0 and then player 2 rolls | User Input: Player rolls a "1" | Output: "Player 1 scores 0, Player 2 it's your turn" |
| **If player 1 rolls a number that is greater then 1, the program will add that to player 1's turn "total" or the player can choose to roll again or pass his turn to the next player.| Input: Player 1 rolls a 2| Output: 2 is added to "total" and then player rolls again."|
| **If the player does not choose to roll and decides to hold his total score stays the same until the next turn or the other player wins| Input: "hold" | output: "next players turn" |
| ** If the player scores a "total of 100 or more points than that player wins." | Input: Total equals 100 or more points | Output:  Congratulations, Player " " you have won the game!"|

# Set Up/Installation
  Clone Repository
  Open index.html in your browser

## Known Bugs

  N/A

#Technologies Used

* HTML, CSS, JS, JQuery

MIT License John Linneman & Adrian Messado(c)2018
