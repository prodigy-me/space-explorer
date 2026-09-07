// ===== CONCEPT FLIP CARDS =====
(function () {
  const concepts = [
    {
      icon: '⚫',
      title: 'Black Holes',
      hint: 'Tap to reveal the mystery...',
      back_title: 'What is a Black Hole?',
      back_text: 'A region in space where gravity is so intense that nothing — not even light — can escape. They form when massive stars collapse. The boundary is called the "event horizon".'
    },
    {
      icon: '🌀',
      title: 'Wormholes',
      hint: 'Tap to unlock a shortcut...',
      back_title: 'A Shortcut Through Space?',
      back_text: 'Theoretical tunnels through spacetime connecting two distant points. Einstein\'s equations allow them, but we\'ve never observed one. They might make faster-than-light travel possible — in theory!'
    },
    {
      icon: '💫',
      title: 'Neutron Stars',
      hint: 'Tap to feel the density...',
      back_title: 'The Densest Objects',
      back_text: 'When a massive star explodes, its core collapses into a neutron star. A teaspoon of neutron star material weighs about 10 million tonnes. They can spin 600 times per second!'
    },
    {
      icon: '🌌',
      title: 'Dark Matter',
      hint: 'Tap to see the invisible...',
      back_title: 'The Invisible 27%',
      back_text: 'About 27% of the universe is dark matter — we can\'t see or detect it directly, but we know it exists because of its gravitational effect on visible galaxies. A complete mystery!'
    },
    {
      icon: '⚡',
      title: 'Dark Energy',
      hint: 'Tap to discover the force...',
      back_title: 'The Universe\'s Accelerator',
      back_text: 'Dark energy makes up ~68% of the universe and is causing it to expand at an ever-increasing rate. It is one of the biggest unsolved mysteries in all of physics.'
    },
    {
      icon: '☄️',
      title: 'Supernovae',
      hint: 'Tap to see a star die...',
      back_title: 'The Biggest Explosions',
      back_text: 'A supernova is a massive stellar explosion marking the death of a large star. For a few weeks, a single supernova can outshine an entire galaxy of 100 billion stars. Heavy elements like gold are forged here!'
    },
    {
      icon: '🔆',
      title: 'Pulsars',
      hint: 'Tap to hear the beat...',
      back_title: 'Cosmic Lighthouses',
      back_text: 'Pulsars are rapidly rotating neutron stars that emit beams of electromagnetic radiation. They are so precise that astronomers use them as cosmic clocks, more accurate than atomic clocks on Earth!'
    },
    {
      icon: '🪐',
      title: 'Nebulae',
      hint: 'Tap to enter a star nursery...',
      back_title: 'Clouds of Creation',
      back_text: 'Nebulae are vast clouds of gas and dust where new stars are born. The iconic Pillars of Creation inside the Eagle Nebula shows towering columns of gas birthing new stars right now!'
    },
  ];

  const container = document.getElementById('conceptCards');

  concepts.forEach(c => {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-front">
          <span class="flip-icon">${c.icon}</span>
          <h3>${c.title}</h3>
          <p class="hint">↩ ${c.hint}</p>
        </div>
        <div class="flip-back">
          <h3>${c.back_title}</h3>
          <p>${c.back_text}</p>
        </div>
      </div>
    `;

    // Touch support for mobile
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    container.appendChild(card);
  });
})();
