var today = new Date();
var hourNow = today.getHours();

var greeting;

if (hourNow <12) {
    greeting="صباح الخير";
}
else if (hourNow >18) {
    greeting="مساء الخير";
}
else {
    greeting="حياك الله";
}

document.writeln(greeting);