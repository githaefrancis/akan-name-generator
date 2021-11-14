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
let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let day=16;
let month=12;
let year=1996;

const getDayOfTheWeek=(day,month,year)=>{
  let dateOfBirth=new Date(year,month-1,day);
  console.log(dateOfBirth);
  
  return days[dateOfBirth.getDay()];
  
}



document.addEventListener('DOMContentLoaded',()=>{


})

