// JavaScript for Kids
const secondsInAMinute = 60;
var minutesInAHour = 60;
var secondsInAHour = secondsInAMinute * minutesInAHour;
console.log(secondsInAHour);

var hoursInADay = 24;
var secondsInADay = hoursInADay * secondsInAHour;
console.log(secondsInADay);

var daysInAYear = 364;
var secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);

function AgeInSeconds(Age) {
  AgeInSeconds = Age * secondsInAYear;
  return console.log(`You are ${AgeInSeconds} seconds  old !!!`);
}
AgeInSeconds(21);
