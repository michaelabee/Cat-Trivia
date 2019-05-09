var Correct = 0;
var Incorrect = 0;
var unanswered = 0;

var timer = 31;
var interval = setInterval(function() {
    timer--;
    $('#time-remaining').text(timer);
    
    if (timer === 0) {
        //run a clear html function here;
        //display number correct/incorrect/unanswered
    }
}, 1000);