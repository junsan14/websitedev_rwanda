// app.js
const homeEl = document.getElementById("home");
const quizEl = document.getElementById("quiz");

const topicSelect = document.getElementById("topicSelect");
const countSelect = document.getElementById("countSelect");
const startBtn = document.getElementById("startBtn");
const homeBtn = document.getElementById("homeBtn");

const quizTitle = document.getElementById("quizTitle");
const progressText = document.getElementById("progressText");

const qTitle = document.getElementById("qTitle");
const qPrompt = document.getElementById("qPrompt");
const starterCode = document.getElementById("starterCode");

const studentCode = document.getElementById("studentCode");

const answerBtn = document.getElementById("answerBtn");
const nextBtn = document.getElementById("nextBtn");

const answerArea = document.getElementById("answerArea");
const answerCode = document.getElementById("answerCode");
const explanationText = document.getElementById("explanationText");

let quizQuestions = [];
let currentIndex = 0;

function show(section) {
  homeEl.classList.add("hidden");
  quizEl.classList.add("hidden");
  section.classList.remove("hidden");
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getTopics() {
  return [...new Set(QUESTION_BANK.map((q) => q.topic))].sort();
}

function buildTopicSelect() {
  const topics = getTopics();
  topicSelect.innerHTML = "";
  topics.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    topicSelect.appendChild(opt);
  });
}

function startQuiz() {
  const topic = topicSelect.value;
  const count = Number(countSelect.value);

  const pool = QUESTION_BANK.filter((q) => q.topic === topic);
  quizQuestions = shuffle(pool).slice(0, Math.min(count, pool.length));

  currentIndex = 0;
  quizTitle.textContent = `Topic: ${topic}`;

  show(quizEl);
  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[currentIndex];

  progressText.textContent = `Question ${currentIndex + 1} / ${quizQuestions.length}`;

  qTitle.textContent = q.title;
  qPrompt.textContent = q.prompt;
  starterCode.textContent = q.starter;

  // reset editor
  studentCode.value = "";

  // hide answer until student clicks
  answerArea.classList.add("hidden");
  answerBtn.textContent = "Show Answer";
  nextBtn.disabled = true;

  answerCode.textContent = q.answer;
  explanationText.textContent = q.explanation || "";
}

function toggleAnswer() {
  const isHidden = answerArea.classList.contains("hidden");
  if (isHidden) {
    answerArea.classList.remove("hidden");
    answerBtn.textContent = "Hide Answer";
    nextBtn.disabled = false; // require answer view before moving on
  } else {
    answerArea.classList.add("hidden");
    answerBtn.textContent = "Show Answer";
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= quizQuestions.length) {
    // finished -> go home (simple)
    show(homeEl);
    return;
  }
  renderQuestion();
}

startBtn.addEventListener("click", startQuiz);
homeBtn.addEventListener("click", () => show(homeEl));
answerBtn.addEventListener("click", toggleAnswer);
nextBtn.addEventListener("click", nextQuestion);

buildTopicSelect();
show(homeEl);
