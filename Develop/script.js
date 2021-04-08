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
    let currentHour = moment().format("H");
    return currentHour;
}

// get an array of selected elements 
function getElementArray(){
    // store the selected elements into an array
    let elementArray = $(".container").find("h4");
    
    return elementArray;
}

// populate and return an array of strings
// representing the hours on the page
function getHoursFromPage(elementArray){
    let hours = [];
    // getting the text content of these elements into my hours[]
    for(let i = 0; i < elementArray.length; i++){

        hours[i] = elementArray[i].lastChild.textContent;

    }
    return hours;
}

// parsing a string to a number
function convertTo24Hr(str){
    
    // evaluate string content
    if(str.endsWith("am") || str.startsWith("12")){
        // parse string to a number
        let number = parseInt(str, 10)
        // return the number when "am" is present or value is "12"
        return number;
    }else{
        let number = parseInt(str, 10)
        // return number in 24hr format
        return number + 12;
    }
 
}

// revert time from 24-hour clock, to 12-hour time
function revertTime(time){
    return time - 12;
}

// check if time is greater than, or less than timeblock's time
function compareTime(currentTime, timeblockTime){
    // timeblockTime is an array, remember this
    if(currentTime){

    }
}

displayCurrentDay();

let elementArray = getElementArray();

console.log(elementArray)

let myHours = getHoursFromPage(elementArray);

console.log("hours from the page:", myHours)
let myConvertedHours = []


for(let i=0;i<myHours.length; i++){
    
    // this is why it was changing the values to numbers
    myHours[i] = convertTo24Hr(myHours[i])
    
    
    // attempting to copy string element
    // myHours[i].endsWith("pm")

    // str is being logged as a number here
    // console.log(str);

}
console.log(myHours)
var string = "blah";
console.log(string.endsWith("h"));

// for(let i = 0; i < myHours.length; i++){
   

// write an isAM() function returning boolean value
    // based on this, convert the numbers to 24-hr values
    // need to get the strings into homogeneous format
        // 09am <- good format, not working with minutes, remember!
        // this could be object with 2 properties

// need to get substring from single element
function isAM(element){
    let isAM;
    if(element === "am"){
        isAM = true;
    }else if(element === "pm"){
        isAM = false;
    }
    return isAM;
}



console.log("(hopefully) converted hours", myConvertedHours)
// console.log(currentHour);
// elementArray = $(".container").find("span");
// console.log(hours)
// array of span elements
// console.log(elementArray);

