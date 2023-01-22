let output = document.getElementById('output');

let d = new Date();
let day = d.getDay();

let change;

switch(day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

output.innerHTML = day; 

let myChange = document.querySelector(".text");
myChange.style.color = "green";
let myChange2 = document.querySelector("h1");
myChange2.style.color = "darkblue";
let myChange3 = document.querySelector("#output");
myChange3.style.color = "red";

const element = document.getElementById("money");
element.innerHTML = "They Are Spying On You!!";

if (day == "Sunday") {
    document.querySelector(".text").style.color = "red";
}
else if (day == "Monday") {
    document.querySelector(".grid-box").style.color = "green";
}
else if (day == "Tuesday") {
    document.querySelector(".menu-item").style.color = "darkblue";
}
else if (day == "Wednesday") {
    document.querySelector(".grid-box").style.color = "yellow";
}
else if (day == "Thursday") {
    document.querySelector(".text").style.color = "orange";
}
else if (day == "Friday") {
    document.querySelector(".menu-item").style.color = "purple";
}
else if (day == "Saturday") {
    document.querySelector(".grid-box").style.color = "darkgray";
}