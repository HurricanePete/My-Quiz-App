var state = {
	current: 1,
	score: 0,
	screen: 'questionScreen'
}

var questions = {
	items: [
	question1 = {
		question: 'When Indiana Jones first looks into the Well of the Souls, what does he say about the animals he sees on the floor?',
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
}

function current (state) {
	(state.current)++;
}

function reset (state) {
	state.current = 1,
	state.score = 0,
	state.screen = 'questionScreen'
}

function screen (state) {
	state.screen = 'questionScreen';
}

function otherScreen (state) {
	state.screen = 'status';
}

function checkItem (state, questions, targetItem, element) {
	for (i = 0; i < 5; i++) {
		if (questions.items[i].correct === targetItem) {
			correct(state);
		}
	};
}

function questionRender (state, questions, element) {
	var questionItem = function() {
		for (i = 1; i < 6; i++) {
			if (state.current === i) {
				return '<h2>Question ' + i + '</h2>' + '<h3>' + questions.items[i-1].question + '</h3>';
			};
		}
		if (state.current === 6) {
			return '<h2>' + '</h2>' + '<h3>' + '</h3>';
		}
	}
	element.html(questionItem);
}

function answerRender (state, questions, element, element2) {
	var answerItem = function () {
		if (state.current === 1) {
			return '<button class="answers wrong">' + '<span>' + question1.answerOne + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question1.answerTwo + '</span>' + '</button>' +
				'<button class="answers rightAnswer">' + '<span>' + question1.correct + '</span>' + '</button>' +
				'<button class="answers wrong">' + '<span>' + question1.answerThree + '</span>' + '</button>';
		}
		else if (state.current === 2) {
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
		else if (state.current === 6 && state.score < 1) {
			return '<span><h2 class="page">Catastrophe! Your score is ' + state.score + ' out of 5. Give it another try!</h2></span><hr>' + '<div class="page">' + '<img class="page score-image" src="low-score.jpg">' + '</div>'; 
		}
		else if (state.current === 6 && state.score === 0) {
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
		element.html('<div class="nav-button">' + '<button class="reset"><span>Start Over</span></button>' + '</div>');
	}
}

function startGame (state, element) {
	if (state.current === 1) {
		element.html('<button class="reset"><span>Start Over</span></button>' + '<div class="scoring">' + '<span class="current place">Question 1 of 5</span>' + '<br>' + '<hr>' +
			'<span class="current score">0 of 5 Correct</span>' + '</div>' + '<button class="next-question"><span>Next Question</span></button>');
	}
}

function correctStatusRender (state, questions, target) {
	target.closest('body').find('.pop-up').toggleClass("hidden");
	target.closest('body').find('.my-form').toggleClass("hidden");
	target.closest('body').find('.pop-up').html('<span class="status">' + 'Correct!</span>');
}

function incorrectStatusRender (stat, questions, target) {
	target.closest('body').find('.pop-up').toggleClass("hidden");
	target.closest('body').find('.my-form').toggleClass("hidden");
	if (state.current === 1) {
	target.closest('body').find('.pop-up').html(
		'<span class="status">' + 'Incorrect! The correct answer is ' + question1.correct + '</span>');
	}
	else if (state.current === 2) {
	target.closest('body').find('.pop-up').html(
		'<span class="status">' + 'Incorrect! The correct answer is ' + question2.correct + '</span>');
	}
	else if (state.current === 3) {
	target.closest('body').find('.pop-up').html(
		'<span class="status">' + 'Incorrect! The correct answer is ' + question3.correct + '</span>');
	}
	else if (state.current === 4) {
	target.closest('body').find('.pop-up').html(
		'<span class="status">' + 'Incorrect! The correct answer is ' + question4.correct + '</span>');
	}
	else if (state.current === 5) {
	target.closest('body').find('.pop-up').html(
		'<span class="status">' + 'Incorrect! The correct answer is ' + question5.correct + '</span>');
	}
}

function questionOrAnswer (state, questions, elementQ, elementA, elementS, elementE, target) {
	if (state.screen === 'questionScreen') {
		questionRender(state, questions, elementQ);
		answerRender(state, questions, elementA);
		scoringRender(state, elementS);
		endGame(state, elementE);
	} 
	else if (state.screen === 'status') {
		correctStatusRender(state, questions, target);
	}
}

function revert (target) {
	target.closest('body').find('.pop-up').addClass("hidden");
	target.closest('body').find('.my-form').removeClass("hidden");
}

$(function() {
	$('form').on('click', 'button.rightAnswer', function(event) {
		event.preventDefault();
		$(this).toggleClass('clicked');
		var quizItem = $(this).closest('form').find('.clicked');
		otherScreen(state);
		checkItem(state, questions, quizItem.text(), $('.rightAnswer'));
		correctStatusRender(state, questions, $(this));
	});
	$('form').on('click', 'button.wrong', function(event) {
		event.preventDefault();
		otherScreen(state);
		incorrectStatusRender(state, questions, $(this));
	});
	$('div.navigation').on('click', 'button.next-question', function(event) {
		event.preventDefault();
		current(state);
		screen(state);
		revert($(this));
		questionOrAnswer(state, questions, $('.question-title'), $('.my-form'), $('.scoring'), $('.navigation'), $(this));
	});
	$('div.navigation').on('click', 'button.reset', function(event) {
		event.preventDefault();
		reset(state);
		questionOrAnswer(state, questions, $('.question-title'), $('.my-form'), $('.scoring'), $('.navigation'), $(this));
		revert($(this));
		startGame(state, $('.navigation'));
	})
});