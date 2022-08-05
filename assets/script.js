//Displaying the month, day, and year.
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

//This is the function for time tracker for whether the current time is either present time, future time, or past time.
$(document).ready(function () 
{

    function timeTracker() 
    {
        var timeNow = moment().hour();

        $(".time-block").each(function () 
        {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            
            //if statement to determine the time block changes for the representation of past,present,future.
            if (blockTime < timeNow) 
            {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) 
            {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    //Local storage for every hour, so that the value of every hour doesnt disappear even if the html refreshes.
    $("#hour0 .description").val(localStorage.getItem("hour0"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    $("#hour20 .description").val(localStorage.getItem("hour20"));
    $("#hour21 .description").val(localStorage.getItem("hour21"));
    $("#hour22 .description").val(localStorage.getItem("hour22"));
    $("#hour23 .description").val(localStorage.getItem("hour23"));
    timeTracker();
})

//Button function that sets the local storage upon clicking the save button
$(".saveBtn").on("click", function ()
{
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})

//In addition to the button function, every time the button function is pressed, it will display that it was "saved" at a certain time for user to see and confirm that they pressed save.
var timeframe = moment().format("LLLL");
console.log(timeframe);
$(".btn").on("click",function()
{
    $("#displaymessage").text(`Saved! @ ${timeframe}`);

})