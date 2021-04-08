# Scheduler

## Functionality

This simple application acts as an online day-planner, able to write/schdule events during the business hour window of any given day. The site also displays the current day and date to the user, doubling as a a pseudo-calendar. The user can write within the timblock boxes, save their entry into local storage, and reopen/refresh the page with their entry still being displayed to them.

This application makes use of the now deprecated Moment.js API, as per the client's request. 


## Issues

The scheduler does not contain a "Clear All Entries" button, so the user, if desired, will have to edit the entries manually. A minor behaviour quirk of the application; all the save buttons save the entries made in all of the text boxes into local storage, making all the timeblocks' behaviour tied to each other. Though not ideal, later releases may add more timeblocks or restrain the times shown, as the design has been implemented as dynamically as possible. 

The site will not change the colour of a given timeblock unless the save button has been clicked at least once. The bug has not been able to be patched. 

## Expected Behaviour

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Maintenance/Suggestions

Firstly, the use of deprecated API's is not good practice, given that no support is given and no active development is taking place. If the application relies heavily on an API, it's advised that the API of choice is up to date, and actively being developed. With this in mind, the API was only implemented twice on this application; when retrieving the current date and the current time. As such, implementing a newer API should not be a huge task. 

Secondly, the addition of a button to clear all entries is suggested for future releases, as it improves the ease of use. The feature would become useful when user forgets to clear a scheduled event after it passes. 

Lastly, providing the user the option to change the hours being displayed; giving them a wider range of hours, or different hours at night, would add functionality to the site. 

