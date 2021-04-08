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

// get the <button> elements from the page
let buttonArray = getElementArray(".container","button");

// depending on current time, change colour of timeblock
function changeTimeblockColour(){

    // get the textContent from the elements array
    let hoursTwentyFour = getHoursFromPage(headerArray);

    let currentTime = getCurrentHour();

    for(let i=0;i<hoursTwentyFour.length; i++){
        
        hoursTwentyFour[i] = convertTo24Hr(hoursTwentyFour[i]);

        compareTime(currentTime, hoursTwentyFour[i], textAreaArray[i]);

    }

}

// store the textarea value in local storage
function storeEvent(e){
    // prevent the page from removing textarea values automatically on refresh
    e.preventDefault();

    let textValue = []

    // store textarea values into new array for storage
    for(i = 0; i < textAreaArray.length; i++){

        textValue[i] = textAreaArray[i].value

    }

    localStorage.setItem("Event",textValue)
    
}

// retrieve array of values from localStorage
function retrieveEvent(){

    // get the localStorage object, in this case a string
    let stringValue = localStorage.getItem("Event")

    return stringValue
}

// display the stored values from storage unto timeblock
function displayEvent(){

    // get the Storage object from localStorage
    let retrievedObject = retrieveEvent()

    // make new array from the Storage object (in this case a long string)
    let arrayFromObject = retrievedObject.split(",")

    // set the textarea value to the new array
    for(let i = 0; i < arrayFromObject.length; i++){

        textAreaArray[i].value = arrayFromObject[i]  

    }

}

changeTimeblockColour();

buttonArray.click(storeEvent);

displayEvent();

displayCurrentDay();


