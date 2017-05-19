var state = {
  	current: 1,
	score: 0
}

var questions = {
	items:[
	{question: '"Snakes. Why did it have to be snakes?"'},
	{question: "Five"},
	{question: "Ralph Fiennes was not in Raiders of the Lost Ark"},
	{question: "A submarine"},
	{question: "Top men"}
	]
}

function correct (state) {
	(state.score)++;
  console.log(state.score);
}

function current (state) {
	(state.current)++;
  console.log(state.current);
}

function reset (state) {
	state.current = 1;
	state.score = 0;
}

function checkItem (state, questions, targetItem) {
	questions.items.forEach(function(item, index) {
		if (item.question == targetItem) {
			correct(state);
			current(state);
		};
	})
}

$(function() {
	$('form').on('click', 'button.answers', function(event) {
		event.preventDefault();
		console.log('You clicked me');
		$(this).toggleClass('clicked');
		var quizItem = $(this).closest('form').find('.clicked');
		checkItem(state, questions, quizItem.text());
		alert('Your score is ' + state.score);
		$(this).closest('div').addClass('hidden');
	});
	$()
});

	//function renderQuestions (state, element) {
//	if (state.current === 1) {}
//	}
//	else if (state.current === 2) {
//
//	}
//	else if (state.current === 3) {
//
//	}
//	else if (state.current === 4) {
//
//	}
//	else if (state.current === 5 ) {
//
//	}
//	else {
//
//	}
//
