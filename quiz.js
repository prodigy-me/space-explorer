// ===== SPACE IQ QUIZ =====
(function () {
  const questions = [
    {
      q: 'What is the closest planet to the Sun?',
      options: ['Venus', 'Mercury', 'Mars', 'Earth'],
      answer: 1,
      explanation: 'Mercury is the closest planet to the Sun, at an average distance of about 57.9 million km.'
    },
    {
      q: 'Which planet has the most moons in our Solar System?',
      options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      answer: 1,
      explanation: 'Saturn leads with 146 confirmed moons, just edging out Jupiter\'s 95!'
    },
    {
      q: 'What is a light-year?',
      options: ['A unit of time', 'The distance light travels in one year', 'The brightness of a star', 'The age of a star'],
      answer: 1,
      explanation: 'A light-year is the distance light travels in one year — about 9.46 trillion kilometres!'
    },
    {
      q: 'Which space telescope was launched in 2021 and began science operations in 2022?',
      options: ['Hubble', 'Chandra', 'James Webb', 'Spitzer'],
      answer: 2,
      explanation: 'The James Webb Space Telescope (JWST) was launched in December 2021 and released its first images in July 2022.'
    },
    {
      q: 'What is the name of our galaxy?',
      options: ['Andromeda', 'Triangulum', 'Milky Way', 'Sombrero'],
      answer: 2,
      explanation: 'We live in the Milky Way galaxy, a barred spiral galaxy about 100,000 light-years across.'
    },
    {
      q: 'Which planet is known as the "Red Planet"?',
      options: ['Mercury', 'Venus', 'Jupiter', 'Mars'],
      answer: 3,
      explanation: 'Mars gets its reddish colour from iron oxide (rust) on its surface.'
    },
    {
      q: 'What is the point of no return around a black hole called?',
      options: ['Singularity', 'Event Horizon', 'Schwarzschild Radius', 'Photon Sphere'],
      answer: 1,
      explanation: 'The event horizon is the boundary around a black hole beyond which nothing — not even light — can escape.'
    },
    {
      q: 'Who was the first human to walk on the Moon?',
      options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'Michael Collins'],
      answer: 2,
      explanation: 'Neil Armstrong was the first human to walk on the Moon on July 20, 1969, during the Apollo 11 mission.'
    },
    {
      q: 'How long does light from the Sun take to reach Earth?',
      options: ['About 1 second', 'About 1 minute', 'About 8 minutes', 'About 8 hours'],
      answer: 2,
      explanation: 'Light from the Sun takes approximately 8 minutes and 20 seconds to travel the ~150 million km to Earth.'
    },
    {
      q: 'What percentage of the Solar System\'s mass does the Sun make up?',
      options: ['50%', '75%', '90%', '99.86%'],
      answer: 3,
      explanation: 'The Sun contains about 99.86% of all the mass in the Solar System!'
    },
  ];

  const box     = document.getElementById('quizContent');
  let current   = 0;
  let score     = 0;
  let answered  = false;

  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  const shuffled = shuffle(questions);

  function renderQuestion() {
    answered = false;
    const q = shuffled[current];
    box.innerHTML = `
      <div class="quiz-meta">Question ${current + 1} of ${shuffled.length}</div>
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-opt" data-index="${i}">${opt}</button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
    `;
    box.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(btn, q));
    });
  }

  function handleAnswer(btn, q) {
    if (answered) return;
    answered = true;
    const chosen = parseInt(btn.dataset.index);
    const allBtns = box.querySelectorAll('.quiz-opt');
    allBtns.forEach(b => b.classList.add('disabled'));

    if (chosen === q.answer) {
      score++;
      btn.classList.add('correct');
      document.getElementById('quizFeedback').innerHTML = `<span style="color:var(--green)">✅ Correct!</span> ${q.explanation}`;
    } else {
      btn.classList.add('wrong');
      allBtns[q.answer].classList.add('correct');
      document.getElementById('quizFeedback').innerHTML = `<span style="color:var(--red)">❌ Not quite.</span> ${q.explanation}`;
    }

    const nextBtn = document.createElement('button');
    nextBtn.className = 'quiz-next';
    nextBtn.textContent = current + 1 < shuffled.length ? 'Next Question →' : 'See Results 🎉';
    nextBtn.addEventListener('click', () => {
      current++;
      if (current < shuffled.length) {
        renderQuestion();
      } else {
        showResult();
      }
    });
    box.appendChild(nextBtn);
  }

  function showResult() {
    const pct = Math.round((score / shuffled.length) * 100);
    let msg, color;
    if (pct === 100)      { msg = 'Perfect! You\'re a cosmic genius! 🌌'; color = 'var(--gold)'; }
    else if (pct >= 80)   { msg = 'Stellar performance! 🌟';             color = 'var(--green)'; }
    else if (pct >= 60)   { msg = 'Not bad, space cadet! 🚀';            color = 'var(--accent)'; }
    else if (pct >= 40)   { msg = 'Keep exploring — the universe awaits! ☄️'; color = 'var(--muted)'; }
    else                  { msg = 'Houston, we need more studying! 📡';   color = 'var(--red)'; }

    box.innerHTML = `
      <div class="quiz-result">
        <div class="quiz-score" style="color:${color}">${score} / ${shuffled.length}</div>
        <p>${msg}</p>
        <p style="margin-bottom:24px;font-size:0.9rem;color:var(--muted)">You answered ${pct}% correctly.</p>
        <button class="quiz-restart" id="restartQuiz">🔄 Try Again</button>
      </div>
    `;
    document.getElementById('restartQuiz').addEventListener('click', () => {
      current = 0; score = 0;
      renderQuestion();
    });
  }

  renderQuestion();
})();
