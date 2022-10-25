/*quiz data */
const quizData = [
    {
        question: "Which command is used to create a new directory in terminal ?",
        a: "ls",
        b: "mkdir ",
        c: "make dir",
        correct: "b",
    },
    {
        question: "Which command is used to read inside a file ?",
        a: "touch",
        b: "read ",
        c: "cat",
        correct: "c",
    },
    {
        question: "Who is making the web standarts?",
        a: "Microsoft",
        b: "The World Wide Web Consertium ",
        c: "Powercoders",
        correct: "b",
    },
    {
        question: "Which character is used to indicate an end tag",
        a: " / ",
        b: "<",
        c: "*",
        correct: "a",
    },
    {
        question:
            "Which of the following property is used to increase or decraease the size of a font ?",
        a: "font ",
        b: "font-variant ",
        c: "font-size ",
        correct: "c",
    },
    {
        question: "What is the correct syntax for declaring a function? ",
        a: "var myFunction() ",
        b: "function myFunction() ",
        c: "function my Function() ",
        correct: "b",
    },
    {
        question: "Which is the correct syntax for displaying data in the console?",
        a: "console.log(); ",
        b: "console.log[]; ",
        c: "console.log; ",
        correct: "a",
    },
];
/*Reaching all the elements */
const question = document.getElementById("question");
const a = document.getElementById("a+");
const b = document.getElementById("b+");
const c = document.getElementById("c+");
const btn = document.getElementById("submit");
const all_answer = document.querySelectorAll(".answer");
let index = 0;
let score = 0;

//get the getSelected answer
function getSelected() {
    let answer = undefined;
    all_answer.forEach((item) => {
        if (item.checked) {
            answer = item.id;
        }
    });
    return answer;
}
//Clear all the selected answers
function clearAnswer() {
    all_answer.forEach((item) => {
        item.checked = false;
    });
}
//Load the quiz
function getquiz() {
    clearAnswer();
    question.innerText = quizData[index].question;
    a.innerText = quizData[index].a;
    b.innerText = quizData[index].b;
    c.innerText = quizData[index].c;
}
//Continue to the quiz
function startquiz() {
    btn.addEventListener("click", () => {
        let answer = getSelected();
        if (answer) {
            if (answer == quizData[index].correct) {
                score++;
                alert("Bravo");
            } else {
                alert(
                    "Wrong Answer YOU ARE NOT PERFECTIONNIST! The correct answer is: " + quizData[index].correct
                );
            }
        }
        index++;
        if (index < quizData.length) {
            getquiz();
        } else {
            //   alert("Your total score is :" + score);
            clearAnswer();
            document.getElementById("result").innerHTML =
                "Your total score is :" + score;
            //   location.reload();
        }
    });
}
getquiz();
startquiz();