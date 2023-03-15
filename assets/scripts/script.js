//all js to go inside doc ready function to prevent errors on incompletely loaded pages
$(document).ready(function(){


    // create variables for interactive HTML elements
    $("#currentDay").text(moment().format("ddd MMM YYYY"));
   

    function currentTime() {
       
        let currentTime = moment().hour();
       
        $(".timeblock").each(function(){
            let chosenTime = parseInt($(this).attr("id").split("-")[1]);

            if (currentTime < (chosenTime)) {
                $(this).addClass('future');
            } else if (currentTime > (chosenTime)) {
                $(this).addClass('past');
            } else {
                $(this).addClass('present');
            };
        });
    };
    currentTime();

 
    //eventListeners

    $(".saveBtn").on("click", function(){

        let timeblockId = $(this).parent().parent().attr("id");
        let plannerText = $(this).parent().siblings(".plannerText").val();
        
        
        //set to local storage unless no event input in text area       
        if (plannerText === "") {
            alert("You haven't added an event to this time-period yet. Type in your event, and then hit 'save' again :)")
        } else {
            localStorage.setItem(timeblockId, plannerText);
            $("#notifications").text("Item added to your local storage")
            $("#notifications").slideDown(1000);
        };

        //notification timeout function
        setTimeout(function(){
            $("#notifications").slideUp(1000);
        },3000);

    });


    $(".trashBtn").on("click", function(){ //deletes entry from local storage and text area
        let timeblockId = $(this).parent().parent().attr("id");
        let plannerText = $(this).parent().siblings(".plannerText").val();
        localStorage.removeItem(timeblockId, plannerText) //removes plannerText value from local storage
        $(this).parent().siblings(".plannerText").val(''); //clears textarea of 'this' timeblock
        
        if (plannerText === "") {
            alert("Nothing to delete")
        } else {
            $("#notifications").text("Item deleted")
            $("#notifications").slideDown(1000);
        };

        //notification timeout function
        setTimeout(function(){
            $("#notifications").slideUp(1000);
        },3000);

    });

    $(".completedBtn").on("click", function(save){ //strikesthrough text
        $(this).parent().siblings(".plannerText").toggleClass("strikethrough");
        
    });
    

    //allows for continual refreshment ofcurrent time
    
    function updateTime() {
        setInterval(currentTime, 15000);
    };
    updateTime();

    //render locally stored events even on refresh
    $("#timeblock-0 .plannerText").val(localStorage.getItem("timeblock-0"));
    $("#timeblock-1 .plannerText").val(localStorage.getItem("timeblock-1"));
    $("#timeblock-2 .plannerText").val(localStorage.getItem("timeblock-2"));
    $("#timeblock-3 .plannerText").val(localStorage.getItem("timeblock-3"));
    $("#timeblock-4 .plannerText").val(localStorage.getItem("timeblock-4"));
    $("#timeblock-5 .plannerText").val(localStorage.getItem("timeblock-5"));
    $("#timeblock-6 .plannerText").val(localStorage.getItem("timeblock-6"));
    $("#timeblock-7 .plannerText").val(localStorage.getItem("timeblock-7"));
    $("#timeblock-8 .plannerText").val(localStorage.getItem("timeblock-8"));
    $("#timeblock-9 .plannerText").val(localStorage.getItem("timeblock-9"));
    $("#timeblock-10 .plannerText").val(localStorage.getItem("timeblock-10"));
    $("#timeblock-11 .plannerText").val(localStorage.getItem("timeblock-11"));
    $("#timeblock-12 .plannerText").val(localStorage.getItem("timeblock-12"));
    $("#timeblock-13 .plannerText").val(localStorage.getItem("timeblock-13"));
    $("#timeblock-14 .plannerText").val(localStorage.getItem("timeblock-14"));
    $("#timeblock-15 .plannerText").val(localStorage.getItem("timeblock-15"));
    $("#timeblock-16 .plannerText").val(localStorage.getItem("timeblock-16"));
    $("#timeblock-17 .plannerText").val(localStorage.getItem("timeblock-17"));
    $("#timeblock-18 .plannerText").val(localStorage.getItem("timeblock-18"));
    $("#timeblock-19 .plannerText").val(localStorage.getItem("timeblock-19"));
    $("#timeblock-20 .plannerText").val(localStorage.getItem("timeblock-20"));
    $("#timeblock-21 .plannerText").val(localStorage.getItem("timeblock-21"));
    $("#timeblock-22 .plannerText").val(localStorage.getItem("timeblock-22"));
    $("#timeblock-23 .plannerText").val(localStorage.getItem("timeblock-23"));


});
