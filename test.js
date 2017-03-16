//exercise 1
var firstNumber = 5;
var secondNumber = 7;

console.log(firstNumber + secondNumber);

var firstName = "Mr.";
var lastName = "Meeseeks";
console.log(firstName + lastName);

//exercise 2
var track = ["100m", "200m", "400m", "4 x 100m", "4x 200m"];
console.log(track);


var games = [["No Man's Sky", "Astroneer"], ["Fallout 4", "Super Mario Bros."]];
console.log(games);
console.log(games[0][0], games[0][1], games[1][0], games[1][1]);

/*var Me = {
  firstName: "Funsho",
  lastName: "Olagundoye",
  allSports: [
    "Soccer",
    "football",
    "track",
    "swimming",
  ]
};

console.log(Me);*/

//exercise 3
//var number = 9;
var number = 11;
if (number<100) {
  alert("The Answer");

} else {
  alert("Impossiburu");

};

//exercise 4
if(Math.floor(Math.random(number)*5)<100){
  alert("New Answer");
}
  else{
    alert("Oh");
  };

  //exercise 5
  if ("thesewords" === "words"){
    console.log(true);
  } else {
    console.log(false);
  };

  var myName = 'Funsho'
  if (myName.length!==5) {
    console.log('Blah');
  }
    else {console.log('Nah!');

  };
//exercise 6
//var myName  = "Frank";
function name(myName) {
    return myName;
  };

//exercise 7
function areYouTired(){
  console.log("Yes");
}
areYouTired();
//exercise 8
function doorPrize(doorNumber) {
  if(doorNumber == 1) {
    alert("Your prize is coal.")
  } else if (doorNumber == 2) {
      alert("You win shepoople")
    }
    else if (doorNumber == 3) {
      alert("You don't win")
    }
    else {
      alert("Aight")
    }
};

doorPrize(Math.floor(Math.random()*4));
