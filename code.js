var questions = [ //Questions for Quiz Page
                'How do you kill a zombie?', //0
                'How do you hide from a Zombie?', //1
                'How do you distract a Zombie?', //2
                'How do you escape a Zombie horde?', //3
                'What is the best weapon to defend yourself against a Zombie?', //4
                'You find yourself backed into a corner by a horde. What do you do?' //5
                 ];

var options = [ //Options for the Questions
            [
             'Smash its body with something', //0
             'Cut its head off', //1
             'Kill it with fire' //2
            ], //[0][0-2]
            [
             'Pretend to be a Zombie', //0
             'Cover your human smell', //1
             'Get out of its sight' //2
            ], //[1][0-2]
            [
             'Distract it with fire', //0
             'Distract it with loud noises', //1
             'Throw meat at it' //2
            ], //[2][0-2]
            [
             'Hide from the horde', //0
             'Run from the horde', //1
             'Fight yourself out of it' //2
            ], //[3][0-2]
            [
             'A sledgehammer', //0
             'These hands', //1
             'A nail gun' //2
            ], //[4][0-2]
            [
             'Fight for your life', //0
             'Shrivel into a ball and cry', //1
             'Look for an escape' //2
            ] //[5][0-2]
              ];

var randQ = 0; //Lets me use randQ in other functions

function loadQuestion() { //Randomises what question is shown on quiz page.
    randQ = Math.floor(Math.random() * questions.length);
    document.getElementById('question').innerHTML = questions[randQ];

    for (var i = 0; i < 3; i++) { //Matches the options with the question.
        document.getElementById('otext' + i).innerHTML = options[randQ][i];
    }
}


function check() { //Checks if the answer is correct

    for (var i = 0; i < 3; i++) {
        if (document.getElementById('option' + i).checked) {
            var answer = document.getElementById('option' + i).value;
        }

    }
    if (randQ == 0) {
        if (answer == 1) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }


    if (randQ == 1) {
        if (answer == 2) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }


    if (randQ == 2) {
        if (answer == 1) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }


    if (randQ == 3) {
        if (answer == 0) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }

    if (randQ == 4) {
        if (answer == 0) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }

    if (randQ == 5) {
        if (answer == 2) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }

    setTimeout( //resets the page after 3 seconds to ask the user another question.
        function () {
            window.location.href = 'quiz.html';
        }, 3000);
}

window.onload = function () { // Loads the question on quiz page.
    loadQuestion();

}
