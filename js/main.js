$(".header-section").height($(window).height());

let maleAkan = {
  Sunday: "Kwasi",
  Monday: "Kwadwo",
  Tuesday: "Kwabena",
  Wednesday: "Kwaku",
  Thursday: "Yaw",
  Friday: "Kofi",
  Saturday: "Kwame",
};
let femaleAkan = {
  Sunday: "Akosua",
  Monday: "Adwoa",
  Tuesday: "Abenaa",
  Wednesday: "Akua",
  Thursday: "Yaa",
  Friday: "Afua",
  Saturday: "Ama",
};

let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let day=16;
let month=12;
let year=1996;

const getDayOfTheWeek=(day,month,year)=>{
  let dateOfBirth=new Date(year,month-1,day);
  console.log(dateOfBirth);
  
  return days[dateOfBirth.getDay()];
  
}

const fetchAkanName=(birthDay,gender)=>{
  console.log(birthDay);
  console.log(gender);
  if(gender==="female"){
    return femaleAkan[birthDay];

  }
  else if(gender==="male"){
    return maleAkan[birthDay];
  }

  else {
    return "invalid input";
  }
}
const displayResponse=(responseName,birthDayOfWeek)=>{


  document.querySelector('#day-display').innerHTML=birthDayOfWeek;
  let akanAnswer=document.querySelector('#akan-answer');
  akanAnswer.innerHTML=`Your Akan name is ${responseName}`;
  document.querySelector('.response').style.display="block";
}

document.addEventListener('DOMContentLoaded',(event)=>{

  document.querySelector('#birthdaySubmit').addEventListener('submit',(event)=>{
    //stop the page from reloading
    event.preventDefault();
    alert('congratulations');
    let day=parseInt(document.querySelector('#day').value);
    let month=parseInt(document.querySelector('#month').value);
    let year=parseInt(document.querySelector('#year').value);
    let gender=document.querySelector('[name="gender-radio"]:checked').value;
    alert(gender);
     let birthday=getDayOfTheWeek(day,month,year);
    // console.log(day + month +year)
    let akanName=fetchAkanName(birthday,gender);

    console.log(akanName);

    displayResponse(akanName,birthday);
    });
    
});


