console.log(qAndA);
const selectedQuestions = qAndA.slice(0, 4);
let quesCounter = 0;
let selectedOptions = [];
let index = 0;
const quiz = document.querySelector("#quiz");

nextQuestion();

$('#next').click(function() {
    chooseOption();
    if (isNaN(selectedOptions[quesCounter])) {
        alert('Please select an option');
    } else {
        quesCounter++;
        nextQuestion();
    }
    $('#prev').click(function() {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });

    function createElement(index) {
        let element = $('<div>', { id: 'question' });
        let header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        let question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        let radio = radioButtons(index);
        element.append(radio);

        return element;
    }

    function radioButtons(index) {
        let radioItems = $('<ul>');
        let item;
        let input = '';
        for (let i = 0; i < allQuestions[index].options.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += allQuestions[index].options[i];
            item.append(input);
            radioItems.append(item);
        }
        return radioItems;
    }

    function chooseOption() {
        selectedOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }

    function nextQuestion() {
        quizSpace.fadeOut(function() {
            $('#question').remove();
            if (quesCounter < allQuestions.length) {
                let nextQuestion = createElement(quesCounter);
                quizSpace.append(nextQuestion).fadeIn();
                if (!(isNaN(selectedOptions[quesCounter]))) {
                    $('input[value=' + selectedOptions[quesCounter] + ']').prop('checked', true);
                }
                if (quesCounter === 1) {
                    $('#prev').show();
                } else if (quesCounter === 0) {
                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                let scoreRslt = displayResult();
                quizSpace.append(scoreRslt).fadeIn();
                $('#next').hide();
                $('#prev').hide();
            }
        });
    }

    function displayResult() {
        let score = $('<p>', { id: 'question' });
        let correct = 0;
        for (let i = 0; i < selectedOptions.length; i++) {
            if (selectedOptions[i] === allQuestions[i].answer) {
                correct++;
            }
        }
        score.append('You scored ' + correct + ' out of ' + allQuestions.length);
        return score;
    }
});