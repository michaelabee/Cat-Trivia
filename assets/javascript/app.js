$(document).ready(function(){

var Correct = 0;
var Incorrect = 0;
var unanswered = 0;


var answer= $('#answer');
console.log(answer);
// for (var i=0; i<answer.length; i++) {
//     console.log(answer[i]);
// }

var timer = 31;
var interval = setInterval(function() {
    timer--;
    $('#time-remaining').text(timer);
    
    if (timer === 0) {
        gradePage();
        timer = 0;
    }
}, 1000);

setTimeout(function() {
    alert("Time's Up!"); 
},31000);


//HAYDENS LIVE CODE HERE 

var questions = [
	{
		question:"What is the most popular cat name in America?",
		a:"Fluffy",
		b:"Luna",
		c:"Oliver",
		d:"Chester",
		name:"q1",
		correct:"c",
    },
    {
        question:"The world's wealthiest cat, Blackie, had a net worth of how much?",
        a:"1 Million Dollars",
        b:"13 Million Dollars",
        c:"500,000 Dollars",
        d:"1 Billion Dollars",
        name:"q2",
        correct:"b",

    },
    {
        question:"Which of the following plants is NOT toxic to cats?",
        a:"Boston Fern",
        b:"Jade",
        c:"ALoe Vera",
        d:"Easter Lily",
        name:"q3",
        correct:"a",

    },
    {
        question:"Hissing is a sign of what?",
        a:"Stress",
        b:"Agression",
        c:"Excitement",
        d:"Anger",
        name:"q3",
        correct:"a",

    },
    {
        question:"How heavy was the fattest domestic cat ever recorded?",
        a:"36 pounds",
        b:"40 pounds",
        c:"47 pounds",
        d:"55 pounds",
        name:"q3",
        correct:"c",

    }
	];

	var generateQuestion = function(obj){

		//We want to get here:
		// <form>
		// <h2>Question 1:</h2>
		// <div><input type="radio" name="gender" value="male" checked>Answer 1</div> 
		// <input type="radio" name="gender" value="female">Answer 2
		// <input type="radio" name="gender" value="other">Answer 3
		// </form> 

		var form = $("<form>");
		var question = $('<h2>').text(obj.question);
		var aDiv = $('<div>');
		var bDiv = $('<div>');
		var cDiv = $('<div>');
		var dDiv = $('<div>');
		var a = $('<input type="radio">').attr('name', obj.name);
		aDiv.append(a);
		aDiv.append(obj.a);
		var b = $('<input type="radio">').attr('name', obj.name);
		bDiv.append(b);
		bDiv.append(obj.b);
		var c = $('<input type="radio">').attr('name', obj.name);
		cDiv.append(c);
		cDiv.append(obj.c);
		var d = $('<input type="radio">').attr('name', obj.name);
		dDiv.append(d);
		dDiv.append(obj.d);

		if(obj.correct === "a"){
			a.attr('correct', "true");
		}else if(obj.correct === "b"){
			b.attr('correct', "true");
		}else if(obj.correct === "c"){
			c.attr('correct', "true");
		}else if(obj.correct === "d"){
			d.attr('correct', "true");
		}

		form.append(question);
		form.append(aDiv, bDiv, cDiv, dDiv);

		$('.questions').append(form);
	}

	var gradeQuestion = function(obj){
		//check if there are any radios that have been clicked
		//if it has been checked
		//find checked radio, check for correct="true" attr
		console.log("gradeQuestion()", obj);
		var output = 0;
		obj.find('input').each(function(){
		 	if($(this).is(':checked')) {
		 		console.log("FOUND CHECKED");
		  		if($(this).attr('correct') === "true"){
		  			console.log('returning + 1');
		  			output =  1;//you did it!
		  		} else{
		  			console.log('returning - 1');
		  			output= -1;//WRONG
		  		}
		  	}	
		});
		return output;
	}

	var gradePage = function(){
		console.log("gradePage");
		var score = 0;
		$('form').each(function(){
			console.log("adding ",parseInt(gradeQuestion($(this))), " to score");
			score += parseInt(gradeQuestion($(this)));
		})
		console.log(score);
        return score;
    
	}

    generateQuestion(questions[0]);
    generateQuestion(questions[1]);
    generateQuestion(questions[2]);
    generateQuestion(questions[3]);
    generateQuestion(questions[4]);
	$('.my-button').click(gradePage);







})


