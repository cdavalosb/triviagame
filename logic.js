var questions = [{
	question: "Which of the following songs is a southern hip-hop hit?",
	choices: ["I've Got 5 On It", "Pop Goes The Weasel", "Neightborhood Superstars", "Ghetto Bird"],
	correctAnswer: "Neightborhood Superstars",
}, {
	question: "Which of the following bands is NOT from the United States",
	choices: ["Massive Attack", "Portishead", "Blahzay Blahzay", "The Mountain Goats"],
	correctAnswer: "Portishead",
}, {
	question: "Which of the following songs was a worldwide french pop-music hit (no option is from the US)?",
	choices: ["All options", "Sexy Boy", "Connection", "Babies"],
	correctAnswer: "Sexy Boy",
}, {
	question: "Which of the following EDM producers took the name from coding languages?",
	choices: ["Sutekh", "kid_6o6", "autechre", "_squarepusher"],
	correctAnswer: "_squarepusher",
}, {
	question: "Which of the following Beastie Boys' records is a nineties masterpiece?",
	choices: ["Hello Nasty", "All these were released in the 90s", "Ill Communication", "Check Your Head"],
	correctAnswer: "All these were released in the 90s",
}, {
	question: "One of these is a Mexican rock band from the 90s:",
	choices: ["Los Enanitos Verdes", "Soda Estereo", "Caifanes", "Aterciopelados"],
	correctAnswer: "Caifanes",
}, {
	question: "Which of the following TX rap artists is responsable for certain sound aesthetic in contemporary rap music (Danny Brown or A$AP Rocky [even Kendrick Lamar])?",
	choices: ["Mike Jones", "DJ Screw", "Paul Wall", "Big Moe"],
	correctAnswer: "DJ Screw",
}, {
	question: "Which of the following artists rapped in Janet Jackson's 'Got 'til It's Gone' from 1997?",
	choices: ["Nas", "LL Cool J", "J-Dilla", "Q-Tip"],
	correctAnswer: "Q-Tip",
}, {
	question: "Athen's indie rock band R.E.M. released their hit 'Losing My Religion' in 1997. It was a track in one of these records?",
	choices: ["Up", "Automatic for the People", "Out of Time"],
	correctAnswer: "Out of Time",
}, {
	question: "Last year we lost both George Michael and Leonard Cohen. True American songwriters.",
	choices: ["True", "False", "False"],
	correctAnswer: "False",
}];


  // $('#start').click(function() {
  //   $("#questions").fadeIn();
  //   $(this).hide();
  // });

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;



$("#timerStarts").hide();
$(".submitAnswer").hide();
$(".gameReset").hide();
$("#correctAnswers").hide();
$("#incorrectAnswers").hide();

function checkAnswer () { 
	for (var i = 0; i < questions.length; i++) {
		var userChoice = $("input[name = 'question-" + i +"']:checked");
		if (userChoice.val() == questions[i].correctAnswer) {
			correctAnswers++; 

			} else {
				incorrectAnswers++;
				
		}
	}
	$("#correctAnswers").append(" " + correctAnswers);
	$("#incorrectAnswers").append(" " + incorrectAnswers); 
};


function timer() {
	var seconds = 90;
	counter = setInterval (function() {
	$("#timerStarts").html('<h2> Time Remaining:' + seconds-- + '</h2>');
		if (seconds === -1) {
			$("#timerStarts").html("<h2> Out of Time! </h2>");
			clearInterval(counter);
			function delayScore(){
				$("#showQuestions").hide();
				$("#timerStarts").hide();
				$(".submitAnswer").hide();
				checkAnswer();
				$("#correctAnswers").show();
				$("#incorrectAnswers").show();
				$(".gameReset").show();
			}
			setTimeout(delayScore, 1000);
		}
	}, 1000);
	
};

$(".gameStart").on("click", function() {
	$(".gameStart").hide();
	displayCurrentQuestion();
	$("#timerStarts").show();
	timer();


});

function displayCurrentQuestion() {
	$(".submitAnswer").show();
	for (var i = 0; i < questions.length; i++) {
		$("#showQuestions").append("<h3>" + questions[i].question + "</h3");
		for (var j = 0; j < questions[i].choices.length; j++) {
			$("#showQuestions").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].choices[j] + '"> '+ questions[i].choices[j] );

		}
	}
	$(".submitAnswer").on("click", function() {
		$("#showQuestions").hide();
		$("#timerStarts").hide();
		$(".submitAnswer").hide();
		checkAnswer();
		clearInterval(counter);
		$("#correctAnswers").show();
		$("#incorrectAnswers").show();

	});
};