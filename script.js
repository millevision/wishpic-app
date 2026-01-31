// WishPic – 9 question flow (vanilla JS)

const questions = [
  "What best describes your team or organization?",
  "What is your main ambition right now?",
  "If things go well, what should be true in 12–24 months?",
  "What matters most to get right?",
  "What is the biggest obstacle today?",
  "What other obstacles are slowing you down?",
  "What is already in motion?",
  "What feels unclear or risky?",
  "What would success make possible next?"
];

let step = 0;
const answers = [];

const app = document.getElementById("app");

function renderQuestion() {
  app.innerHTML = `
    <div class="wishpic-form">
      <div class="progress">${step + 1} / ${questions.length}</div>
      <h2>${questions[step]}</h2>
      <textarea id="answer" rows="4" placeholder="Write a short, concrete answer…"></textarea>
      <button id="next" disabled>
        ${step === questions.length - 1 ? "See the result" : "Next"}
      </button>
    </div>
  `;

  const textarea = document.getElementById("answer");
  const button = document.getElementById("next");

  textarea.addEventListener("input", () => {
    button.disabled = textarea.value.trim() === "";
  });

  button.addEventListener("click", () => {
    answers[step] = textarea.value.trim();
    step++;

    if (step < questions.length) {
      renderQuestion();
    } else {
      renderResult();
    }
  });
}

function renderResult() {
  app.innerHTML = `
    <div class="wishpic-result">
      <h1>Your WishPic</h1>
      ${answers
        .map(
          (a, i) =>
            `<p><strong>${i + 1}.</strong> ${a}</p>`
        )
        .join("")}
      <p class="note">(Visual map comes next)</p>
    </div>
  `;
}

// start app
renderQuestion();
