// display the current day on the screen
function displayCurrentDay(){
    // get the moment object, and format it with .format
    let currentDay = moment().format("dddd, MMM Do");
    // select currentDay id, set its content to 'now' variable
    $('#currentDay').text(currentDay);
}

// return the current hour from the moment.js API
function getCurrentHour(){
    // get current hour from moment.js for comparison
    let currentHour = moment().format("h");
    return currentHour;
}

// get an array of selected elements 
function getSpanArray(){
    // store the selected elements into an array
    let elementArray = $(".container").find("span");
    
    return elementArray;
}

// populate and return an array of strings
// representing the hours on the page
function getHoursFromSpan(elementArray){
    let hours = [];
    // getting the text content of these elements into my hours[]
    for(let i = 0; i < elementArray.length; i++){

        hours[i] = elementArray[i].lastChild.textContent;

    }
    return hours;
}

function castStringToNumber(str){
    let number = parseInt(str, 10)
    return number;
}

// convert whatever value from 12-hour clock, to 24-hour clock
function convertTime(time){
    return time + 12;
}

// revert time from 24-hour clock, to 12-hour time
function revertTime(time){
    return time - 12;
}

// check if time is greater than, or less than timeblock's time
function compareTime(currentTime, timeblockTime){
    // timeblockTime is an array, remember this
}

displayCurrentDay();
let spanElements = getSpanArray();
let myHours = getHoursFromSpan(spanElements);

console.log("hours from the page:", myHours)
let myConvertedHours = []
for(let i=0;i<myHours.length; i++){
    myHours[i] = castStringToNumber(myHours[i])
}

for(let i = 0; i < myHours.length; i++){
   myConvertedHours[i] = convertTime(myHours[i])
}

console.log("(hopefully) converted hours", myConvertedHours)
// console.log(currentHour);
// elementArray = $(".container").find("span");
// console.log(hours)
// array of span elements
// console.log(elementArray);

