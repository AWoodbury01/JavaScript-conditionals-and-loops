var likesToTravel = true;

if(likesToTravel === true){
    console.log("Bon voyage!");
} else {
    console.log("Enjoy your couch");
}

var favoriteFood = "bbq";

if(favoriteFood === "fried pickles" || favoriteFood === "pepperoni rolls") {
    console.log("Congratulations, You have excellent taste!")
} else{
    console.log("Clearly you have not tried fried pickles or pepperoni rolls")
}

//Check Your Math
if(1+1 > 5){
    console.log("True fact!");
} else{
    console.log("LIES!")
}

//Dog people vs Cat people
var likesDogs = true;

if(likesDogs === true){
    console.log("You're a dog person");
} else{
    console.log("You're a cat person");
}

//Generation gaps
var birthYear = 1988;

if(birthYear <= 1988){
    console.log("You're a Millennium");
}

//Greetings
var personObject = {
    firstName:"Ashon",
    preferredLanguage:"English",
}

if(personObject.preferredLanguage === "English"){
    console.log("Hello,", personObject.firstName);
}

//Grandma's kitchen
var time = "7:30 AM";
var isHungry = true;

if(time === "7:30 AM" && isHungry === true){
    console.log("Time for breakfast");
} else if(time === "12:00 PM" && isHungry === true){
    console.log("Time for lunch");
} else if(time === "7:00 PM" || time === "8:00 PM" && isHungry === true){
    console.log("Time for dinner");
} else if(isHungry === true){
    console.log("Time for a snack");
} else{
    console.log("Have a cookie anyway!");
}

//Student grades
var grade = 70;

if(grade >= 0 && grade <= 69){
    console.log("You got an F");
} else if(grade >= 70 && grade <= 76){
    console.log("You got a D");
} else if(grade >= 77 && grade <= 84){
    console.log("You got a C");
} else if(grade >= 85 && grade <= 92){
    console.log("You got a B");
} else if(grade >= 93 && grade <= 100){
    console.log("You got an A");
}