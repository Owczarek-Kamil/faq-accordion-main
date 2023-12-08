/** @format */

window.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");
  const plusIcon = "./assets/images/icon-plus.svg";
  const minusIcon = "./assets/images/icon-minus.svg";

  faqItems.forEach((faqItem) => {
    const faqQuestionWrapper = faqItem.querySelector(".faq-question-wrapper");
    const faqAnswer = faqItem.querySelector(".faq-answer");
    const faqQuestion = faqItem.querySelector(".faq-question");
    const showAnswerButton = faqItem.querySelector(".show-answer-button");
    const buttonImage = showAnswerButton.querySelector("img");

    function showAnswer() {
      faqAnswer.classList.toggle("faq-answer-expanded");
      faqQuestionWrapper.classList.toggle("faq-question-answer-expanded");
      const isExpanded = faqAnswer.classList.contains("faq-answer-expanded");
      showAnswerButton.setAttribute("aria-expanded", isExpanded);
      const currentSrc = buttonImage.getAttribute("src");
      buttonImage.src = currentSrc === plusIcon ? minusIcon : plusIcon;
    }

    faqQuestion.addEventListener("click", () => showAnswer());
    showAnswerButton.addEventListener("click", () => showAnswer());
  });
});
