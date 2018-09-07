$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
// timer here. Did not work in other locations.
				if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
// Avoid using the symbol ' in questions as it breaks the display.
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What is the name of the show about "NOTHING"?',
	possibleAnswers : ['A. Cody & Zack ',
				 'B. Blossom',
				 'C. Seinfeld',
				 'D. MASH'],
	flags : [false, false, true, false],
	answer : 'C. Seinfeld'
};

var q2 = {
	question: 'The show "Friends" ran for how many seasons?',
	possibleAnswers: ['A. 8',
				 'B. 11',
				 'C. 10',
				 'D. 14'],
	flags : [false, false, true, false],
	answer : 'C. 10'
};

var q3 = {
	question : 'What was Leah Reminis name in the show "King of Queens?',
	possibleAnswers : ['A. Michelle',
				 'B. Sherona',
				 'C. Dani',
				 'D. Carrie'],
	flags : [false, false, false, true],
	answer : 'D. Carrie'
};

var q4 = {
	question : 'In the show The Fresh Prince of Bel Air, Will Smith moves to Bel Air from what area of the United States?',
	possibleAnswers : ['A. Orange County',
				 'B. Philadelphia',
				 'C. New Jersey',
				 'D. Brooklyn'],
	flags : [false, true, false, false],
	answer : 'B. Philadelphia'
};

var q5 = {
	question : 'Who provided the voice for the super-smart lab mouse Brain on the WB animated series "Pinky and the Brain" from 1995 to 1998?',
	possibleAnswers : ['A. Maurice LaMarche',
				 'B. Billy Crystal',
				 'C. Anthony Hopkins',
				 'D. Joey Triviani'],
	flags : [true, false, false, false],
	answer : 'A. Maurice LaMarche'
};

var q6 = {
	question : 'Which of these was not the name of a character on the television series "Buffy the Vampire Slayer?',
	possibleAnswers : ['A. Rupert Giles',
				 'B. Xander Harris',
				 'C. Willow Rosenberg',
				 'D. Evelyn Ryan'],
	flags : [false, false, false, true],
	answer : 'D. Evelyn Ryan'
};

var q7 = {
	question : ' I was the friendly neighbor of Tim Taylor. He often came to me for advice. Who am I?',
	possibleAnswers : ['A. Lois Griffin',
				 'B. Darlene',
				 'C. Al',
				 'D. Wilson'],
	flags : [false, false, false, true],
	answer : 'D. Wilson'
};

var q8 = {
	question : 'On the hit series "Roseanne", what is the family last name?',
	possibleAnswers : ['A. Tanner',
				 'B. Conner',
				 'C. Edelman',
				 'D. Robinson'],
	flags : [false, true, false, false],
	answer : 'B. Conner'
};

var q9 = {
	question : 'Which police drama starring Dennis Franz and David Caruso began its remarkable twelve season run in September of 1993?',
	possibleAnswers : ['A. Law & Order-SVU',
				 'B. Matlock ',
				 'C. NYPD Blue',
				 'D. L.A. Law' ],
	flags : [false, false, true, false],
	answer : 'C. NYPD Blue'
};

var q10 = {
	question : ' I am the friend who is the neat freak. I am also a professional chef. Who am I?',
	possibleAnswers : ['A. Rachel',
				  'B. Phoebe',
				  'C. Monica',
				  'D. Ugly Naked Guy'],
	flags : [false, false, true, false],
	answer : 'C. Monica'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


});