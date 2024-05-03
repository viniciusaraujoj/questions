const btns = document.querySelectorAll(".question-btn");
const questionText = document.querySelectorAll(".question-text");

btns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    questionText[index].classList.toggle("show-question");

    btns[index].firstChild.nextSibling.classList.toggle("rotate-arrow");
  });
});
