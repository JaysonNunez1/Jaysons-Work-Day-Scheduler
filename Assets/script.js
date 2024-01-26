$(document).ready(function() {
})
//Variables in container
const currentDay = $('#currentDay');
const HourContainers = $('div[id^="hour"]');
const SaveButton = $('.saveBtn');
const today = dayjs();

//puts the current date in the header
currentDay.text(today.format('dddd,MMMM D'));

//function that loads data from local storage
function LoadsFromLocalStorage(){
  hourContainers.each(function(){
    const hourDivID = $(this).attr('id');
    const EventName = localStorage.getItem(hourDivID);
    $(this).find('textarea').val(EventName);
  })
}
//Function to save ID of parent div to localstorage
function SaveToLocalStorage () {
  SaveButton.click(function(){
    const hourDivID = $(this).closest('div').attr('id');
    const textInput = $(this).siblings('textarea');
    const eventName = textInput.val().trim();
    localStorage.setItem(hourDivID,eventName);
  })
}

if (eventName !== '') {
  alert(eventName + 'successfully saved to schedule.');
} else {
  alert('Event/appointment successfully cleared from schedule.')
}

//dayjs plugin
dayjs.extend(window.dayjs_plugin_advancedFormat);
  
//Function that changes the format of each of the cointainers
function applyTimeFormatting(){
  HourContainers.each(function(){
    const classHour = $(this).attr('id').slice(-2);
    const currentHour = today.format('HH');
    //conditional statement to compare the hours of each class with the current hour
    if (classHour < currentHour){
      $(this).addClass('past');
    } else if (classHour === currentHour){
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
  
  LoadsFromLocalStorage();
  SaveToLocalStorage();
  applyTimeFormatting();
}