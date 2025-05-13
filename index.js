// This block gets the time to use in the following code
var today = new Date();
var hourNow = today.getHours();
// Declaring the greeting
var greeting;
// Changing the content of the greeting message depending on
// the time that was given by the Date() block
if (hourNow <12) {
    greeting="صباح الخير";
}
else if (hourNow >18) {
    greeting="مساء الخير";
}
else {
    greeting="حياك الله";
}
// A built-in function that writes the greeting on the webpage
document.write(greeting);
