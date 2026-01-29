// app.js
const homeEl = document.getElementById("home");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");

const categorySelect = document.getElementById("categorySelect");
const countSelect = document.getElementById("countSelect");
const timeSelect = document.getElementById("timeSelect");

const startBtn = document.getElementById("startBtn");
const skipBtn = document.getElementById("skipBtn");
const nextBtn = document.getElementById("nextBtn");

const quizTitle = document.getElementById("quizTitle");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const scoreText = document.getElementById("scoreText");
const timeText = document.getElementById("timeText");

const questionText = document.getElementById("questionText");
const choicesEl = document.getElementById("choices");

const finalScoreEl = document.getElementById("finalScore");
const correctCountEl = document.getElementById("correctCount");
const totalCountEl = document.getElementById("totalCount");
const bestScoreEl = document.getElementById("bestScore");

const reviewBtn = document.getElementById("reviewBtn");
const retryBtn = document.getElementById("retryBtn");
const homeBtn = document.getElementById("homeBtn");
const reviewEl = document.getElementById("review");

// IMPORTANT: QUESTION_BANK must be loaded from questions.js
// Example in HTML: <script type="module" src="./questions.js"></script>
// Make sure it provides global QUESTION_BANK or import it in module version.

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;

let selectedChoiceIndex = null;
let timer = null;
let timeLeft = 0;
let timePerQ = 15;

const BEST_KEY = "quizhub_best";

function show(section) {
  homeEl.classList.add("hidden");
  quizEl.classList.add("hidden");
  resultEl.classList.add("hidden");
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

// ✅ topic instead of category
function getCategories() {
  return [...new Set(QUESTION_BANK.map((q) => q.topic))].sort();
}

function loadBest() {
  const best = Number(localStorage.getItem(BEST_KEY) || 0);
  bestScoreEl.textContent = best ? best : "-";
}

function saveBest(newScore) {
  const best = Number(localStorage.getItem(BEST_KEY) || 0);
  if (newScore > best) localStorage.setItem(BEST_KEY, String(newScore));
  loadBest();
}

function buildCategorySelect() {
  const cats = getCategories();
  categorySelect.innerHTML = "";
  cats.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    categorySelect.appendChild(opt);
  });
}

function startQuiz() {
  const category = categorySelect.value;
  const count = Number(countSelect.value);
  timePerQ = Number(timeSelect.value);

  // ✅ filter by topic instead of category
  const pool = QUESTION_BANK.filter((q) => q.topic === category);

  quizQuestions = shuffle(pool).slice(0, Math.min(count, pool.length));

  currentIndex = 0;
  score = 0;
  correctCount = 0;

  quizTitle.textContent = `Topic: ${category}`;
  scoreText.textContent = score;

  show(quizEl);
  renderQuestion();
}

function clearTimer() {
  if (timer) clearInterval(timer);
  timer = null;
  timeText.textContent = timePerQ ? String(timeLeft) : "-";
}

function startTimer() {
  clearTimer();
  if (!timePerQ) {
    timeText.textContent = "-";
    return;
  }
  timeLeft = timePerQ;
  timeText.textContent = String(timeLeft);
  timer = setInterval(() => {
    timeLeft--;
    timeText.textContent = String(timeLeft);
    if (timeLeft <= 0) {
      clearTimer();
      lockAndGoNext(true);
    }
  }, 1000);
}

function renderQuestion() {
  selectedChoiceIndex = null;
  nextBtn.disabled = true;
  choicesEl.innerHTML = "";

  const q = quizQuestions[currentIndex];

  progressText.textContent = `Question ${currentIndex + 1} / ${quizQuestions.length}`;
  progressBar.style.width = `${((currentIndex + 1) / quizQuestions.length) * 100}%`;

  questionText.textContent = q.question;

  // ✅ options instead of choices
  q.options.forEach((text, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = text;
    btn.addEventListener("click", () => selectChoice(idx));
    choicesEl.appendChild(btn);
  });

  startTimer();
}

function selectChoice(idx) {
  selectedChoiceIndex = idx;
  nextBtn.disabled = false;

  [...choicesEl.children].forEach((el, i) => {
    el.style.outline = i === idx ? "2px solid #2f6df6" : "none";
  });
}

function lockAndGoNext(auto = false) {
  clearTimer();
  const q = quizQuestions[currentIndex];

  // ✅ answer (index) instead of answerIndex
  const isCorrect = selectedChoiceIndex === q.answer;

  // Score rule
  if (!auto && selectedChoiceIndex !== null) {
    if (isCorrect) {
      score += 1;
      correctCount += 1;
    }
  }

  scoreText.textContent = score;

  currentIndex++;
  if (currentIndex >= quizQuestions.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function finishQuiz() {
  show(resultEl);
  finalScoreEl.textContent = score;
  correctCountEl.textContent = correctCount;
  totalCountEl.textContent = quizQuestions.length;

  saveBest(score);

  reviewEl.classList.add("hidden");
  reviewEl.innerHTML = "";
}

function buildReview() {
  reviewEl.innerHTML = "";
  quizQuestions.forEach((q, idx) => {
    const item = document.createElement("div");
    item.className = "reviewItem";
    item.innerHTML = `
      <div><strong>Q${idx + 1}.</strong> ${q.question}</div>
      <div class="muted">Answer: <strong>${q.options[q.answer]}</strong></div>
      <div class="muted">Explanation: ${q.explanation || "-"}</div>
    `;
    reviewEl.appendChild(item);
  });
}

startBtn.addEventListener("click", startQuiz);
skipBtn.addEventListener("click", () => lockAndGoNext(true));
nextBtn.addEventListener("click", () => lockAndGoNext(false));

reviewBtn.addEventListener("click", () => {
  if (reviewEl.classList.contains("hidden")) {
    buildReview();
    reviewEl.classList.remove("hidden");
    reviewBtn.textContent = "Hide Review";
  } else {
    reviewEl.classList.add("hidden");
    reviewBtn.textContent = "Review Answers";
  }
});

retryBtn.addEventListener("click", () => {
  show(quizEl);
  currentIndex = 0;
  score = 0;
  correctCount = 0;
  scoreText.textContent = score;
  renderQuestion();
});

homeBtn.addEventListener("click", () => show(homeEl));

buildCategorySelect();
loadBest();
