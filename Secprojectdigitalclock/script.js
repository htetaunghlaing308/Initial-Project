
function updateDynamic (){
    let date = new Date();

// for time 
let hour;
let minute;
let second;
let ampm;
// for date 

let curdate;
let month_arr = [  "January",  "February",  "March",  "April",  "May",  "June",  "July","August",  "September",  "October", "November","December"]
let curyear = date.getFullYear();
let curmonth = month_arr[date.getMonth()];
let day_arr = [  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"]
let curday = day_arr[date.getDay()]

// time function
if (date.getHours() >= 12){
    ampm = "PM";
}else {
    ampm = "AM";
}

if(date.getHours() > 12) {
    let realtime =  date.getHours() - 12;
    hour = "0" + realtime;
}else if (date.getHours() === 0){
    hour = 1;
}else {
    hour = "0" + date.getHours();
}

if (date.getMinutes() < 10){
    minute = "0" + date.getMinutes();
}else{
    minute = date.getMinutes();
}

if (date.getSeconds() < 10){
    second = '0' + date.getSeconds();
}else {
    second = date.getSeconds();
}

// date function

if(date.getDate() < 10){
    curdate = "0" + date.getDate();
}else{
    curdate = date.getDate();
}



let timeDiv = document.querySelector(".HMS");
timeDiv.innerHTML = `<p>${hour} : ${minute} : ${second} <span> ${ampm} </span> </p>`

document.querySelector(".DMY").innerHTML = `<p>${curdate} / ${curmonth} / ${curyear} ${curday}</p>`
}

setInterval(updateDynamic,1000);

