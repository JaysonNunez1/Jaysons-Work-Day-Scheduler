$(document).ready(function() {
})

const currentDay = $('#currentDay');
const HourContainers = $('div[id^="hour"]');
const SaveButton = $('.saveBtn');
const today = dayjs();

currentDay.text(today.format('dddd,MMMM D'));

function LoadsFromLocalStorage(){
  hourContainers.each(function(){
    const hourDivID = $(this).attr('id');
    const EventName = localStorage.getItem(hourDivID);
    $(this).find('textarea').val(EventName);
  })
}

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


dayjs.extend(window.dayjs_plugin_advancedFormat);
  



function applyTimeFormatting(){
  HourContainers.each(function(){
    const classHour = $(this).attr('id').slice(-2);
    const currentHour = today.format('HH');
    if (classHour < currentHour){
      $(this).addClass('past');
    } else if (classHour === currentHour){
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
}


LoadsFromLocalStorage();
SaveToLocalStorage();
applyTimeFormatting();
  
  