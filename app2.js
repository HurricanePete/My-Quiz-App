var state = {
	current: 1,
	score: 0
}

var questions = {
	items: [
	question1 = {
		question: '"When Indiana Jones first looks into the Well of the Souls, what does he say about the animals he sees on the floor?"',
		answerOne: '"Dogs! I friggin\' love dogs!"',
		answerTwo: '"Huh. I didn\'t know they had beavers in Egypt."',
		answerThree: "There were no animals in the Well of the Souls",
		correct: '"Snakes. Why did it have to be snakes?"'
	},
	question2 = {
		question: 'The Staff of Ra is meant to be how many kadams tall?',
		answerOne: 'Twelve',
		answerTwo: 'Six',
		answerThree: 'Eight',
		correct: 'Five'
	},
	question3 = {
		question: 'Beloved actor Ralph Fiennes has played Lord Voldemort in Harry Potter and has recently taken on the mantle of M in the newest James Bond movie. What character does he play in Raiders of the Lost Ark?',
		answerOne: 'Sallah',
		answerTwo: 'Marcus Brody',
		answerThree: 'Dr. Rene Belloq',
		correct: 'Ralph Fiennes was not in Raiders of the Lost Ark'
	},
	question4 = {
		question: 'After escaping with the ark onto Katanga\'s ship, Indiana and Marion are intercepted by what Nazi vehicle?',
		answerOne: 'They aren\'t intercepted while on the ship',
		answerTwo: 'A battleship',
		answerThree: 'A fighter plane',
		correct: 'A submarine'
	},
	question5 = {
		question: 'Who takes possession of the Ark at the end of the film?',
		answerOne: 'Archaeologists',
		answerTwo: 'Indiana Jones and Marcus Brody',
		answerThree: 'The Ark doesn\'t make it back',
		correct: 'Top men'
	}
	]
}

function correct (state) {
	(state.score)++;
  console.log("state.score equals " + state.score);
}

function current (state) {
	(state.current)++;
  console.log("state.current equals " + state.current);
}

function checkItem (state, questions, targetItem, element) {
		if (question1.correct === targetItem) {
			correct(state);
			//element.html('<button class="answers correct">' + '<span>' + question1.correct + '</span>' + '</button>');
		}
		else if (question2.correct === targetItem) {
			correct(state);
			//element.html('<button class="answers correct">' + '<span>' + question2.correct + '</span>' + '</button>');
		}
		else if (question3.correct === targetItem) {
			correct(state);
			//element.html('<button class="answers correct">' + '<span>' + question3.correct + '</span>' + '</button>');
		}
		else if (question4.correct === targetItem) {
			correct(state);
			//element.html('<button class="answers correct">' + '<span>' + question4.correct + '</span>' + '</button>');
		}
		else if (question5.correct === targetItem) {
			correct(state);
			//element.html('<button class="answers correct">' + '<span>' + question5.correct + '</span>' + '</button>');
		}
		alert('Correct!');
	}

function wrongItem (state, questions) {
	if (state.current === 1) {
		alert('That is incorrect, the correct answer is ' + question1.correct);
	}
	else if (state.current === 2) {
		alert('That is incorrect, the correct answer is ' + question2.correct);
	}
	else if (state.current === 3) {
		alert('That is incorrect, the correct answer is ' + question3.correct);
	}
	else if (state.current === 4) {
		alert('That is incorrect, the correct answer is ' + question4.correct);
	}
	else if (state.current === 5) {
		alert('That is incorrect, the correct answer is ' + question5.correct);
	}
}

function questionRender (state, questions, element) {
	var questionItem = function() {
		if (state.current === 2) {
			return '<h2>Question 2</h2>' + '<h3>' + question2.question + '</h3>';
		}
		else if (state.current === 3) {
			return '<h2>Question 3</h2>' + '<h3>' + question3.question + '</h3>';
		}
		else if (state.current === 4) {
			return '<h2>Question 4</h2>' + '<h3>' + question4.question + '</h3>';
		}
		else if (state.current === 5) {
			return '<h2>Question 5</h2>' + '<h3>' + question5.question + '</h3>';
		}
		else if (state.current === 6) {
			return '<h2>' + '</h2>' + '<h3>' + '</h3>';
		}
	};
	element.html(questionItem);
}

function answerRender (state, questions, element, element2) {
	var answerItem = function () {
		if (state.current === 2) {
			return '<button class="answers wrong">' + '<span>' + question2.answerOne + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question2.answerTwo + '</span>' + '</button>' +
				'<button class="answers rightAnswer">' + '<span>' + question2.correct + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question2.answerThree + '</span>' + '</button>';
		}
		else if (state.current === 3) {
			return '<button class="answers wrong">' + '<span>' + question3.answerOne + '</span>' + '</button>' +
				'<button class="answers rightAnswer">' + '<span>' + question3.correct + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question3.answerTwo + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question3.answerThree + '</span>' + '</button>';
		}
		else if (state.current === 4) {
			return '<button class="answers rightAnswer">' + '<span>' + question4.correct + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question4.answerOne + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question4.answerTwo + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question4.answerThree + '</span>' + '</button>';
		}
		else if (state.current === 5) {
			return '<button class="answers wrong">' + '<span>' + question5.answerOne + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question5.answerTwo + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question5.answerThree + '</span>' + '</button>' +
				'<button class="answers rightAnswer">' + '<span>' + question5.correct + '</span>' + '</button>';
		}
		else if (state.current === 6 && state.score === 5) {
			return '<span><h2 class="page">You\'ve made Dr. Jones proud, your score is ' + state.score + ' out of 5</h2></span><hr>' + '<div class="page">' + '<img class="page score-image" src="proud.jpg">' + '</div>'; 
		}
		else if (state.current === 6 && state.score >= 3) {
			return '<span><h2 class="page">Well done. You are a budding cinephile and your score is ' + state.score + ' out of 5</h2></span><hr>' + '<div class="page">' + '<img class="page score-image" src="well.jpg">' + '</div>'; 
		}
		else if (state.current === 6 && state.score > 1) {
			return '<span><h2 class="page">It was close, but you survived. Your score is ' + state.score + ' out of 5</h2></span><hr>' + '<div class="page">' + '<img class="page score-image" src="boulder.jpg">' + '</div>'; 
		}
		else if (state.current === 6 && state.score <= 1) {
			return '<span><h2 class="page">Catastrophe! Your score is ' + state.score + ' out of 5. Give it another try!</h2></span><hr>' + '<div class="page">' + '<img class="page score-image" src="low-score.jpg">' + '</div>'; 
		}
	};
	element.html(answerItem);
}

function scoringRender (state, element) {
		element.html('<span class="current place">Question ' + state.current + ' of 5</span>' + '<br>' + '<hr>' +
	'<span class="current score">' + state.score + ' of 5 Correct</span>');
}

function endGame (state, element) {
	if (state.current > 5) {
		element.html('<div class="nav-button">' + '<button href="https://hurricanepete.github.io/My-Quiz-App/" class="reset "><span>Start Over</span></button>' + '</div>');
	};
}

$(function() {
	$('form').on('click', 'button.rightAnswer', function(event) {
		event.preventDefault();
		console.log('You clicked me');
		$(this).toggleClass('clicked');
		var quizItem = $(this).closest('form').find('.clicked');
		checkItem(state, questions, quizItem.text(), $('.rightAnswer'));
		scoringRender(state, $('.scoring'));
		current(state);
		scoringRender(state, $('.scoring'));
		questionRender(state, questions, $('.question-title'));
		answerRender(state, questions, $('.my-form'));
		endGame(state, $('.navigation'));
	});
	$('form').on('click', 'button.wrong', function(event) {
		wrongItem(state, questions);
		current(state);
		questionRender(state, questions, $('.question-title'));
		answerRender(state, questions, $('.my-form'));
		endGame(state, $('.navigation'));
	});
	$('div.navigation').on('click', 'button.next-question', function(event) {
		current(state);
		scoringRender(state, $('.scoring'));
		questionRender(state, questions, $('.question-title'));
		answerRender(state, questions, $('.my-form'));
		endGame(state, $('.navigation'));
	});
});