// Business Logic

function player (name, score) {

  this.firstName = name;
  this.totalScore = score;

}




 var totalDice = [];

 function roll() {

  var randomGen =  Math.floor((Math.random() * 6) + 1);
  totalDice.push(randomGen);
  return totalDice;

}




var sum = 0;
 for (var i = 0; i < totalDice.length; i++) {
   sum += totalDice[i];
 }


console.log(sum);
