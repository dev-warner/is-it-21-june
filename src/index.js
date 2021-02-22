const answerContainer = document.querySelector(".js-answer");
const JUNE_21 = new Date("2021 06 21");

function is_it_pints_time() {
  const proposed_pint_time = new Date();

  return JUNE_21.toISOString() <= proposed_pint_time.toISOString();
}

function set_answer(is_it) {
  const answer = is_it ? "Yes 🎉" : "No 😷";

  document.title = `Is it June 21st? ${answer}`;
  answerContainer.textContent = answer;
}

function loop() {
  set_answer(is_it_pints_time());
}

setInterval(() => loop());
