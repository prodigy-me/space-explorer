// ===== SOLAR SYSTEM =====
(function () {
  const planets = [
    {
      name: 'Mercury',
      emoji: '⚫',
      type: 'Rocky Planet',
      color: '#b5b5b5',
      funFact: 'Mercury has no atmosphere, so temperatures swing from -180°C at night to 430°C during the day!',
      diameter: '4,879 km',
      moons: '0',
      distance: '57.9 million km',
      year: '88 Earth days',
      extra: 'Despite being closest to the Sun, Venus is actually hotter than Mercury!'
    },
    {
      name: 'Venus',
      emoji: '🟡',
      type: 'Rocky Planet',
      color: '#e8cda0',
      funFact: 'Venus spins backwards compared to most planets, and a day on Venus is longer than its year!',
      diameter: '12,104 km',
      moons: '0',
      distance: '108.2 million km',
      year: '225 Earth days',
      extra: 'The surface pressure on Venus is 90x that of Earth — like being 900m underwater!'
    },
    {
      name: 'Earth',
      emoji: '🌍',
      type: 'Rocky Planet',
      color: '#4fc3f7',
      funFact: 'Earth is the only known planet with life. Its magnetic field shields us from deadly solar radiation.',
      diameter: '12,742 km',
      moons: '1',
      distance: '149.6 million km',
      year: '365.25 Earth days',
      extra: 'Earth\'s Moon is unusually large compared to the planet — it stabilises our axial tilt!'
    },
    {
      name: 'Mars',
      emoji: '🔴',
      type: 'Rocky Planet',
      color: '#c1440e',
      funFact: 'Mars has the tallest volcano in the Solar System — Olympus Mons, 3x the height of Everest!',
      diameter: '6,779 km',
      moons: '2',
      distance: '227.9 million km',
      year: '687 Earth days',
      extra: 'Mars dust storms can last months and cover the entire planet!'
    },
    {
      name: 'Jupiter',
      emoji: '🟠',
      type: 'Gas Giant',
      color: '#c88b3a',
      funFact: 'Jupiter\'s Great Red Spot is a storm bigger than Earth that has been raging for over 350 years!',
      diameter: '139,820 km',
      moons: '95',
      distance: '778.5 million km',
      year: '11.9 Earth years',
      extra: 'Jupiter acts as a cosmic vacuum cleaner, its gravity capturing asteroids headed for Earth!'
    },
    {
      name: 'Saturn',
      emoji: '🪐',
      type: 'Gas Giant',
      color: '#e4d191',
      funFact: 'Saturn\'s rings are made of ice and rock, and they are incredibly thin — only about 10 meters thick!',
      diameter: '116,460 km',
      moons: '146',
      distance: '1.43 billion km',
      year: '29.5 Earth years',
      extra: 'Saturn is so light that it would float if you found a bathtub big enough!'
    },
    {
      name: 'Uranus',
      emoji: '🩵',
      type: 'Ice Giant',
      color: '#7de8e8',
      funFact: 'Uranus rotates on its side — its axial tilt is 98°, possibly caused by an ancient giant collision!',
      diameter: '50,724 km',
      moons: '28',
      distance: '2.87 billion km',
      year: '84 Earth years',
      extra: 'A season on Uranus lasts about 21 years because of its extreme tilt!'
    },
    {
      name: 'Neptune',
      emoji: '🔵',
      type: 'Ice Giant',
      color: '#3f51b5',
      funFact: 'Neptune has the fastest winds in the Solar System — up to 2,100 km/h, faster than any tornado!',
      diameter: '49,244 km',
      moons: '16',
      distance: '4.5 billion km',
      year: '164.8 Earth years',
      extra: 'Neptune was the first planet predicted mathematically before it was discovered by telescope!'
    },
  ];

  const grid  = document.getElementById('planetsGrid');
  const panel = document.getElementById('planetPanel');
  const content = document.getElementById('panelContent');
  const closeBtn = document.getElementById('closePanel');

  planets.forEach(p => {
    const card = document.createElement('div');
    card.className = 'planet-card';
    card.innerHTML = `
      <span class="planet-emoji">${p.emoji}</span>
      <div class="planet-name">${p.name}</div>
      <div class="planet-type">${p.type}</div>
    `;
    card.addEventListener('click', () => openPanel(p));
    grid.appendChild(card);
  });

  function openPanel(p) {
    content.innerHTML = `
      <span class="panel-emoji">${p.emoji}</span>
      <h3>${p.name}</h3>
      <p><strong style="color:var(--accent)">Fun Fact:</strong> ${p.funFact}</p>
      <p style="margin-top:8px;font-style:italic">${p.extra}</p>
      <div class="panel-stats">
        <div class="stat-box">
          <div class="stat-label">Diameter</div>
          <div class="stat-value">${p.diameter}</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">Moons</div>
          <div class="stat-value">${p.moons}</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">From Sun</div>
          <div class="stat-value">${p.distance}</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">Year Length</div>
          <div class="stat-value">${p.year}</div>
        </div>
      </div>
    `;
    panel.classList.add('open');
  }

  closeBtn.addEventListener('click', () => panel.classList.remove('open'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') panel.classList.remove('open'); });
})();
