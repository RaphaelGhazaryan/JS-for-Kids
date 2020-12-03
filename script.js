// Programming challenge 1

// Add scores
scores = {
  raphael: 0,
  david: 0,
};
scores.raphael += 2;
console.log(scores);

// delete number property
var myCrazyObject = {
  name: "A ridiculous object",
  "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
  "random animal": "Banana Shark",
};

delete myCrazyObject["some array"].number; //why is it not working ?

console.log(myCrazyObject);
