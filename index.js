function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss [<small>]A[</small>]")}`;

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = `${newYorkTime.format("h:mm:ss [<small>]A[</small>]")}`;

  let koreaElement = document.querySelector("#korea");
  let koreaDateElement = koreaElement.querySelector(".date");
  let koreaTimeElement = koreaElement.querySelector(".time");
  let koreaTime = moment().tz("Asia/Seoul");

  koreaDateElement.innerHTML = koreaTime.format("MMMM Do YYYY");
  koreaTimeElement.innerHTML = `${koreaTime.format("h:mm:ss [<small>]A[</small>]")}`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = "Hello";
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
