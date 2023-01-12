// Iteration 1: Names and Input


// Iteration 2: Conditionals

const driver = "matan";
const nav = "deniz";
const nav2 = "max";

if (driver.length > nav.length){
  console.log(`The driver has the longest name, it ${driver.length} characters`);
}
else if (nav.length > driver.length){
  console.log(`It seems that the navigator has the longest name, it has ${nav.length} characters`);
}
else if (nav.length === driver.length){
  console.log(`Wow, you both have equally long names, ${nav.length} characters!`);
}
// Iteration 3: Loops
//3.1
let nameUp = "";
  
  for (let i = 0; i < driver.length; i++){
    const addition = driver[i].toUpperCase() + ' ';
    nameUp += `${addition}`;
  };
 console.log(nameUp.trim());

//3.2
let nameBack = "";
for (let i = nav.length - 1; i >= 0; i--){
    const addition = nav[i];
    nameBack += `${addition}`;
  };
 console.log(nameBack);

//3.3 **i might ubderstood the directions wrong
let someone = nav2;
switch (someone){
  case driver:
    console.log("The driver's name goes first.");
    break;
  case nav:
    console.log("Yo, the navigator goes first definitely.");
    break;
  default:
    console.log("What?! You both have the same name?");
}