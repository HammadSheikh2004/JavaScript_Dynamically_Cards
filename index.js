let title = ["Css", "JS", "Java", "Jquery", "Python", "Ruby",];
let description = [
    "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",

    "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",

    "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",

    "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.",

    "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",

    "Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity."
];


let dynamic = document.querySelector(".container");
for (let i = 0; i < title.length; i++) {
    let fetch = document.querySelector(".container").innerHTML;
    dynamic.innerHTML = `<div id="cards ${i}" class="boxes">
    <div class="box-content">
        <h2>${title[i]}</h2>
        <p>${description[i]}</p>

     </div>
    </div>` + fetch;

    let bgImg = document.getElementById(`cards ${i}`);
    bgImg.style.backgroundImage = `url("img/${title[i]}.jpg")`


}