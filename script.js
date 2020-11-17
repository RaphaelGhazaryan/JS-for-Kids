//JavaScript for Kids




//Random insult generator 
Math.floor //rounds up number
Math.random //gives random number from 0-1


const firstWord = ['Scheiß', 'Dumm' , 'Ray' , 'Arsch'];
const secondWord = ['klo', 'kotz', 'fett', 'schakal'];
let thridWord = ['idiot', 'kopf' , 'schwein' , 'pimmel'];

thridWord.push = ('lauch'); //Why is it not adding it to the Array?

let firstWords = firstWord[Math.floor(Math.random() * 4)];
let secondWords = secondWord[Math.floor(Math.random() * 4)];
let thridWords = thridWord[Math.floor(Math.random() * thridWord.length)];


const randomInsult = `Du bist ein ${firstWords}${secondWords}${thridWords} `;
console.log(randomInsult)