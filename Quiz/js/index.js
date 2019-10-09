const selectedQuestions = qAndA.slice(0, 4);
let score = 0;
let quesCounter = 0;
let qIndex = 0;

const scoreQuestion = (ans) => {
    if (ans == selectedQuestions[qIndex].answer) {
        score += 2;
    }
    qIndex += 1;
};
const renderSuccess = () => {
    console.log(`Your watch ends here...final score is $score of 10`)
    $('.question-number').text('');
    $('.question-question').text('');
    $('.option1').text('');
    $('.option2').text('');
    $('.option3').text('');
    $('.option4').text('');
    if (score >= 6) {
        $("<p>You have proven yourself...<br/> Here's a sword in your honor</p>").appendTo('.question-question');
        $('<img src="https://media.giphy.com/media/ehhuGD0nByYxO/giphy.gif">').appendTo('.question-options');
    } else {
        $('<p>Come back when you know more...till then</p>').appendTo('.question-question');
        $('<img src="https://media.giphy.com/media/gdMbK9Xa5bVHdv9R5x/giphy.gif">').appendTo('.question-options');
    }
}

const renderQuestion = (qIndex) => {
    let question = selectedQuestions[qIndex];
    $('.question-number').text('');
    $('.question-question').text('');
    $('.option1').text('');
    $('.option2').text('');
    $('.option3').text('');
    $('.option4').text('');
    $('.question-number').text('Question ' + (qIndex + 1));
    $('.question-question').text(question.question);
    // get question-options and populate with options as radio
    question.options.forEach((element, i) => {
        let opt = '.option' + (i + 1);
        let radioBut = $('<input type="radio" name="answer" value=' + element + ' />');
        let radioLabel = $('<label for=' + element + ' >' + element + ' </label>');
        radioBut.appendTo(opt);
        radioLabel.appendTo(opt);
    });
    $(".question-options input:radio[name='answer']").click(function() {
        if (questionIndex == (selectQuestions.length - 1)) {
            gradeQuestion(this.value)
            renderSuccess()
        } else {
            gradeQuestion(this.value)
            renderQuestion(questionIndex)
        }
    });
};

// on click on options run function gradeQuestion(e)


$(document).ready(function() {
    renderQuestion(questionIndex);
};);





// let selectedOptions = [];
// let index = 0;
// const quiz = document.querySelector("#quiz");

// nextQuestion();

// $('#next').click(function() {
//     chooseOption();
//     if (isNaN(selectedOptions[quesCounter])) {
//         alert('Please select an option');
//     } else {
//         quesCounter++;
//         nextQuestion();
//     }
//     $('#prev').click(function() {
//         chooseOption();
//         quesCounter--;
//         nextQuestion();
//     });

//     function createElement(index) {
//         let element = $('<div>', { id: 'question' });
//         let header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
//         element.append(header);

//         let question = $('<p>').append(allQuestions[index].question);
//         element.append(question);

//         let radio = radioButtons(index);
//         element.append(radio);

//         return element;
//     }

//     function radioButtons(index) {
//         let radioItems = $('<ul>');
//         let item;
//         let input = '';
//         for (let i = 0; i < allQuestions[index].options.length; i++) {
//             item = $('<li>');
//             input = '<input type="radio" name="answer" value=' + i + ' />';
//             input += allQuestions[index].options[i];
//             item.append(input);
//             radioItems.append(item);
//         }
//         return radioItems;
//     }

//     function chooseOption() {
//         selectedOptions[quesCounter] = +$('input[name="answer"]:checked').val();
//     }

//     function nextQuestion() {
//         quizSpace.fadeOut(function() {
//             $('#question').remove();
//             if (quesCounter < allQuestions.length) {
//                 let nextQuestion = createElement(quesCounter);
//                 quizSpace.append(nextQuestion).fadeIn();
//                 if (!(isNaN(selectedOptions[quesCounter]))) {
//                     $('input[value=' + selectedOptions[quesCounter] + ']').prop('checked', true);
//                 }
//                 if (quesCounter === 1) {
//                     $('#prev').show();
//                 } else if (quesCounter === 0) {
//                     $('#prev').hide();
//                     $('#next').show();
//                 }
//             } else {
//                 let scoreRslt = displayResult();
//                 quizSpace.append(scoreRslt).fadeIn();
//                 $('#next').hide();
//                 $('#prev').hide();
//             }
//         });
//     }

//     function displayResult() {
//         let score = $('<p>', { id: 'question' });
//         let correct = 0;
//         for (let i = 0; i < selectedOptions.length; i++) {
//             if (selectedOptions[i] === allQuestions[i].answer) {
//                 correct++;
//             }
//         }
//         score.append('You scored ' + correct + ' out of ' + allQuestions.length);
//         return score;
//     }
//