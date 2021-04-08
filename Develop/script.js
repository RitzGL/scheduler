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
function getElementArray(str, el){
    // store the selected elements into an array
    let elementArray = $(str).find(el);
    
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

// check if time is greater than, equal to or less than timeblock's time
function compareTime(currentTime, pageTime, textArea){
    
    if(pageTime < currentTime){
        textArea.className = "col-8 past";
    }else if(pageTime == currentTime){
        textArea.className = "col-8 present"
    }else if(pageTime > currentTime){
        textArea.className = "col-8 future"
    }
    
}

// get the <h4> elements from the page
let headerArray = getElementArray(".container","h4");

// get the <textarea> elements from the page
let textAreaArray = getElementArray(".container", "textarea");

let buttonArray = getElementArray(".container","button");

// depending on current time, change colour of timeblock
function changeTimeblockColour(){

    console.log(textAreaArray);

    // get the textContent from the elements array
    let hoursTwentyFour = getHoursFromPage(headerArray);

    let currentTime = getCurrentHour();
    // console.log(currentTime)

    for(let i=0;i<hoursTwentyFour.length; i++){
        
        hoursTwentyFour[i] = convertTo24Hr(hoursTwentyFour[i]);
        compareTime(currentTime, hoursTwentyFour[i], textAreaArray[i]);

    }

}

function storeEvent(){

    // localStorage.clear()

    let textValue = []
    for(i = 0; i < textAreaArray.length; i++){
        textValue[i] = textAreaArray[i].value
    }
    
    console.log(textValue)

    localStorage.setItem("Event",textValue)
    
}

console.log(buttonArray)

buttonArray.click(storeEvent)

displayCurrentDay();

changeTimeblockColour();


// console.log(currentHour);
// elementArray = $(".container").find("span");
// console.log(hours)
// array of span elements
// console.log(elementArray);

