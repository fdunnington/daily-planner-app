//all js to go inside doc ready function to prevent errors on incompletely loaded pages
$(document).ready(function(){

    // create variables for interactive HTML elements
    const today = $("#currentDay").text(moment().format("ddd DDD MMM YYYY"));
    var save = $(".save");


    function currentTime() {
       
        let currentTime = moment().hour();
        console.log(currentTime);

        $(".timeblock").each(function(){
            let chosenTime = parseInt($(this).attr("id").split("-")[1]);
            console.log(chosenTime);

            if (currentTime < (chosenTime-1)) {
                $(this).addClass('future');
            } else if (currentTime > (chosenTime-1)) {
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
        let plannerText = $(this).parent().siblings("#plannerText").val();
        let time = $(this).parent().siblings(".time").text();

        if (plannerText === "") {
            alert("You haven't added an event to this time-period yet. Type in your event, and then hit 'save' again :)")
        };
        
        //set to local storage        
        //localStorage.setItem($(this), value);

        console.log('Save button works');
        console.log(timeblockId);
        console.log(plannerText);
        console.log(time);

        $(".notifications").addClass("show");

        //notification timeout function
        setTimeout(function(){
            $(".notifications").removeClass("show");
        },2000);

    });

    $(".trashBtn").on("click", function(){
        $("")
        console.log('Trash button works');
    });

});