const selectedQuestions = qAndA.sort(function() {
    return (Math.random() - Math.random())
}).slice(0, 5);
let score = 0;
let qIndex = 0;

const scoreQuestion = (ans) => {
    if (ans == selectedQuestions[qIndex].answer) {
        score += 2;
    }
    qIndex += 1;
};
const renderSuccess = () => {
    console.log("Your watch ends here...final score is " + score + " of 10")
    $('.question-number').text('');
    $('.question-question').text('');
    $('.opt1').text('');
    $('.opt2').text('');
    $('.opt3').text('');
    $('.opt4').text('');
    if (score >= 6) {
        $("<p>You have proven yourself...<br/> Here's a sword in your honor</p>").appendTo('.question-question');
        $('<img src="https://media.giphy.com/media/3oKIPCEiWSBnOxsFOg/giphy.gif">').appendTo('.question-options');
    } else {
        $('<p>Like Jon Snow...you know nothing (about Game of Thrones) </p>').appendTo('.question-question');
        $('<img src="https://media.giphy.com/media/13f5iwTRuiEjjW/giphy.gif">').appendTo('.question-options');
    }
}

const renderQuestion = (quesIndex) => {
    let question = selectedQuestions[quesIndex];
    $('.question-number').text('');
    $('.question-question').text('');
    $('.opt1').text('');
    $('.opt2').text('');
    $('.opt3').text('');
    $('.opt4').text('');
    $('.question-number').text('Question ' + (quesIndex + 1));
    $('.question-question').text(question.question);
    question.options.forEach((element, i) => {
        let opt = '.opt' + (i + 1);
        let radioBut = $('<input type="radio" name="answer" value=' + element + ' />');
        let radioLabel = $('<label for=' + element + ' >' + element + ' </label>');
        radioBut.appendTo(opt);
        radioLabel.appendTo(opt);
    });
    $(".question-options input:radio[name='answer']").click(function() {
        if (qIndex == (selectedQuestions.length - 1)) {
            scoreQuestion(this.value)
            renderSuccess()
        } else {
            scoreQuestion(this.value)
            renderQuestion(qIndex)
        }
    });
};

$(document).ready(function() {
    renderQuestion(qIndex);
});