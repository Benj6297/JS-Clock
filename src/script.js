function displayTime () {
// explain please 
  const timeNow = new Date()
  

  let hourOfDay = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();
  let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let today = weekDay[timeNow.getDay()];
  // explain please  weekDay[3] 
  let months = timeNow.toLocaleString("default", {month: "long"});
  console.log(months)
  let year = timeNow.getFullYear();
  let period = "AM";

  if (hourOfDay < 12) {
    hourOfDay -= 12;
    period = "AM";
  }

  if (hourOfDay => 12) {
    hourOfDay = 12; 
    period = "PM"
  }
hourOfDay = hourOfDay < 10 ? "0" + hourOfDay : hourOfDay;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
let currentTime = hourOfDay + ":" + minutes + ":" + seconds + ":" + period
// explain please
document.getElementById('Clock').innerHTML =  currentTime + " " + today +" " + months + " " + year;
}
displayTime();
