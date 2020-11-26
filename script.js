// JavaScript for Kids
const secondsInAMinute = 60;
var minutesInAHour = 60;
var secondsInAHour =  secondsInAMinute * minutesInAHour;
console.log(secondsInAHour);

var hoursInADay = 24 ; 
var secondsInADay = hoursInADay * secondsInAHour;
console.log(secondsInADay);

var daysInAYear= 364;
var secondsInAYear = secondsInADay * daysInAYear ;
console.log(secondsInAYear);

function AgeInSeconds(Age) {
    AgeInSeconds = Age*secondsInAYear; 
    return console.log (`You are ${AgeInSeconds} seconds  old !!!`)
    
}
AgeInSeconds(21);


// Programming challenge 1 
scores = {
    raphael:0,
    david:0,

}
scores.raphael += 2; 

console.log(scores);



var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
   };

   delete myCrazyObject["some array"].number ; //why is it not working ?

console.log (myCrazyObject)


// Programming challenge 2 

var animals = ["Cat", "Fish","Lemur", "Komodo Dragon"];
let awesomeanimals = []
for (let rep = 0; rep < animals.length;rep ++) {
    awesomeanimals.push ('Awesome ' + animals[rep]);
}
console.log(awesomeanimals)



const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alphabetRandom = alphabet[Math.floor(Math.random() * alphabet.length)];
const randomAlphabet = `Dein Glücksbuchstabe is ${alphabetRandom}`;
console.log(randomAlphabet);