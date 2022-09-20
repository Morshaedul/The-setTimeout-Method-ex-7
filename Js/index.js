setTimeout(function() {myFunc("param1", "param2")}, 2000);

function myFunc(p1, p2) {
  document.getElementById("demo").innerHTML = "Parameters: " + p1 + " " + p2;
}



// var date =new Date();
// var currentDate=date.getFullYear();
// var Date=date.getDay();
// document.write(currentDate);
// document.write(date);