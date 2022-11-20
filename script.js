let daily = document.querySelector(".daily-button");
let weekly = document.querySelector(".weekly-button");
let monthly = document.querySelector(".monthly-button");
let day = document.querySelectorAll(".daily");
let week = document.querySelectorAll(".weekly");
let month = document.querySelectorAll(".monthly");

let index = 0;
let length1 = day.length;
let length2 = week.length;
let length3 = month.length;
daily.addEventListener("click", function (e) {
  for (index = 0; index < length1; index++) {
    day[index].style.display = "block";
  }
  for (index = 0; index < length2; index++) {
    week[index].style.display = "none";
  }
  for (index = 0; index < length3; index++) {
    month[index].style.display = "none";
  }
});
weekly.addEventListener("click", function (e) {
  for (index = 0; index < length1; index++) {
    day[index].style.display = "none";
  }
  for (index = 0; index < length2; index++) {
    week[index].style.display = "block";
  }
  for (index = 0; index < length3; index++) {
    month[index].style.display = "none";
  }
});
monthly.addEventListener("click", function (e) {
  for (index = 0; index < length1; index++) {
    day[index].style.display = "none";
  }
  for (index = 0; index < length2; index++) {
    week[index].style.display = "none";
  }
  for (index = 0; index < length3; index++) {
    month[index].style.display = "block";
  }
});
