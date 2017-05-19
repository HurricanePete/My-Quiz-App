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

//function correct (state) {
	//(state.score)++;
 // console.log(state.score);
//}

function current (state) {
	(state.current)++;
  console.log(state.current);
}

function reset (state) {
	state.current = 1;
	state.score = 0;
}

function checkItem (state, questions, targetItem, element) {
	//questions.items.forEach(function(item, index) {
		if (question1.correct || question2.correct || question3.correct || question4.correct || question5.correct === targetItem) {
			(state.score)++;
		};
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
		else {
			//score screen render?
		}
	};
	element.html(questionItem);
}

function answerRender (state, questions, element) {
	var answerItem = function () {
		if (state.current === 2) {
			return '<button class="answers">' + '<span>' + question2.answerOne + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question2.answerTwo + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question2.correct + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question2.answerThree + '</span>' + '</button>';
		}
		else if (state.current === 3) {
			return '<button class="answers">' + '<span>' + question3.answerOne + '</span>' + '</button>' +
				'<button class="answers  ">' + '<span>' + question3.correct + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question3.answerTwo + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question3.answerThree + '</span>' + '</button>';
		}
		else if (state.current === 4) {
			return '<button class="answers">' + '<span>' + question4.correct + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question4.answerOne + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question3.answerTwo + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question3.answerThree + '</span>' + '</button>';
		}
		else if (state.current === 5) {
			return '<button class="answers">' + '<span>' + question5.answerOne + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question5.answerTwo + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question5.answerThree + '</span>' + '</button>' +
				'<button class="answers">' + '<span>' + question5.correct + '</span>' + '</button>';
		}
		else {
			//score screen render?
		}
	};
	element.html(answerItem);
}

function scoringRender (state, element) {

}


$(function() {
	$('form').on('click', 'button.answers', function(event) {
		event.preventDefault();
		console.log('You clicked me');
		$(this).toggleClass('clicked');
		var quizItem = $(this).closest('form').find('.clicked');
		checkItem(state, questions, quizItem.text());
		current(state);
		questionRender(state, questions, $('.question-title'));
		answerRender(state, questions, $('.my-form'));
	});
	$('div.navigation').on('click', 'button.reset', function(event) {
		reset(state);
		questionRender(state, questions, $('.question-title'));
		answerRender(state, questions, $('.my-form'));
	});
});