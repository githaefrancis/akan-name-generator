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

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = 16;
let month = 12;
let year = 1996;

const getDayOfTheWeek = (day, month, year) => {
  let dateOfBirth = new Date(year, month - 1, day);
  return days[dateOfBirth.getDay()];
};

const fetchAkanName = (birthDay, gender) => {
  if (gender === "female") {
    return femaleAkan[birthDay];
  } else if (gender === "male") {
    return maleAkan[birthDay];
  } else {
    return "invalid input";
  }
};
const displayResponse = (responseName, birthDayOfWeek) => {
  document.querySelector("#day-display").innerHTML = birthDayOfWeek;
  let akanAnswer = document.querySelector("#akan-answer");
  akanAnswer.innerHTML = `Your Akan name is ${responseName}`;
  document.querySelector(".response").style.display = "block";
};

const getMonthMax = (month, year) => {
  if (month === 9 || month === 4 || month === 6 || month === 11) {
    return 30;
  } else if (month === 2) {
    if (year % 4 === 0 || Number.isNaN(year)) {
      return 29;
    } else {
      return 28;
    }
  } else {
    return 31;
  }
};

const validate = (e) => {
  let dayInput = parseInt(document.getElementById("day").value);
  let monthInput = parseInt(document.getElementById("month").value);
  let yearInput = parseInt(document.getElementById("year").value);

  if (e.target.nodeName.toLowerCase() === "input") {
    let inputId = e.target.id;

    if (inputId === "day") {
      isValidDay = false;
      dayValue = parseInt(e.target.value);
      document.getElementById(inputId).style.borderColor = "red";
      let maxDays = getMonthMax(monthInput, yearInput);

      if (dayValue < 1 || dayValue > maxDays) {
        errors.day = "invalid day";
      } else if (Number.isNaN(dayValue)) {
        errors.day = "<p>The day is null</p>";
      } else {
        errors.day = "";
        document.getElementById(inputId).style.borderColor = "green";
        isValidDay = true;
      }
    } else if (inputId === "month") {
      isValidMonth = false;
      dayValue = parseInt(e.target.value);
      document.getElementById(inputId).style.borderColor = "red";
      newMaxDays = getMonthMax(monthInput, yearInput);
      if (dayValue < 1 || dayValue > 12) {
        errors.month = "<p>invalid month</p>";
      } else if (Number.isNaN(dayValue)) {
        errors.month = "<p>The month is null</p>";
      } else {
        if (newMaxDays < dayInput) {
          errors.day = "<p>invalid day</p>";
          isValidDay = false;
        } else {
          errors.day = "";
          isValidDay = true;
        }
        errors.month = "";
        document.getElementById(inputId).style.borderColor = "green";
        isValidMonth = true;
      }
    } else if (inputId === "year") {
      isValidYear = false;
      dayValue = parseInt(e.target.value);
      document.getElementById(inputId).style.borderColor = "red";
      newMaxDays = getMonthMax(monthInput, yearInput);
      if (dayValue < 1800 || dayValue > 2021) {
        errors.year = "<p>invalid year</p>";
      } else if (Number.isNaN(dayValue)) {
        errors.year = "<p>The year is null</p>";
      } else {
        if (newMaxDays < dayInput) {
          errors.day = "<p>invalid day</p>";
          isValidDay = false;
        } else {
          errors.day = "";
          isValidDay = true;
        }

        errors.year = "";
        document.getElementById(inputId).style.borderColor = "green";
        isValidYear = true;
      }
    } else {
      return;
    }
  }
};
let errors = { day: "", month: "", year: "" };
let isValidDay = false;
let isValidMonth = false;
let isValidYear = false;
document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("form").addEventListener("input", (e) => {
    let errorPrompt = document.getElementById("error");
    validate(e, errorPrompt);
    if (isValidDay && isValidMonth && isValidYear) {
      document.getElementById("birthday-submit").disabled = false;
    } else {
      document.getElementById("birthday-submit").disabled = true;
    }
    errorPrompt.innerHTML = `<p>${errors.day}</p><p>${errors.month}</p><p>${errors.year}</p>`;
  });
  document
    .querySelector("#birthdaySubmit")
    .addEventListener("submit", (event) => {
      //stop the page from reloading
      event.preventDefault();

      let day = parseInt(document.querySelector("#day").value);
      let month = parseInt(document.querySelector("#month").value);
      let year = parseInt(document.querySelector("#year").value);
      let gender = document.querySelector(
        '[name="gender-radio"]:checked'
      ).value;
      let birthday = getDayOfTheWeek(day, month, year);
      let akanName = fetchAkanName(birthday, gender);

      displayResponse(akanName, birthday);
    });
  //close response modal
  document
    .querySelector("#close-response")
    .addEventListener("click", (event) => {
      document.querySelector(".response").style.display = "none";
    });
});
