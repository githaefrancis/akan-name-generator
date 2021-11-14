$(".header-section").height($(window).height());

let femaleAkan = {
  Sunday: "Kwasi",
  Monday: "Kwadwo",
  Tuesday: "Kwabena",
  Wednesday: "Kwaku",
  Thursday: "Yaw",
  Friday: "Kofi",
  Saturday: "Kwame",
};
let maleAkan = {
  Sunday: "Akosua",
  Monday: "Adwoa",
  Tuesday: "Abenaa",
  Wednesday: "Akua",
  Thursday: "Yaa",
  Friday: "Afua",
  Saturday: "Ama",
};

let akanNames = [femaleAkan, maleAkan];
let day=16;
let month=12;
let year=1996;

let CC=19;
let MM=1;
let YY=75;
let DD=15; 
let dayOfTheWeek=(((CC/4)-2*CC-1)+(Math.floor(5*YY/4))+(Math.floor(26*(MM+1)/10))+DD)%7;
console.log(dayOfTheWeek);

document.addEventListener('DOMContentLoaded',()=>{

  
})

// let k=16;
// let m=10;
// let C=19;
// let Y=96;

// let dayOfTheWeek2=(k + Math.floor(2.6*m-0.2)-2*C + Y + Math.floor(Y/4))%7


// console.log(dayOfTheWeek2)