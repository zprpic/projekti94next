const { readFile } = require("fs");

//started operating process
console.log("First!");
setTimeout(() => {
  console.log("Second!");
}, 0);
readFile("content/first.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else if (data) {
    console.log(`Third! Data: ${data} - But actually LAST!`);
  }
});
setTimeout(() => {
  console.log("Fourth!");
}, 0);
console.log("Fifth!");
//completed and exiting operating process
