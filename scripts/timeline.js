// ===== SPACE EXPLORATION TIMELINE =====
(function () {
  const events = [
    {
      year: '1957',
      emoji: '🛰️',
      title: 'Sputnik 1 Launched',
      desc: 'The Soviet Union launches the first artificial satellite. The Space Age begins with a radio beep heard around the world.'
    },
    {
      year: '1961',
      emoji: '👨‍🚀',
      title: 'First Human in Space',
      desc: 'Yuri Gagarin becomes the first human to travel to space, completing one orbit of Earth in 108 minutes aboard Vostok 1.'
    },
    {
      year: '1963',
      emoji: '👩‍🚀',
      title: 'First Woman in Space',
      desc: 'Valentina Tereshkova becomes the first woman to fly in space, orbiting Earth 48 times over 3 days aboard Vostok 6.'
    },
    {
      year: '1965',
      emoji: '🚶',
      title: 'First Spacewalk',
      desc: 'Soviet cosmonaut Alexei Leonov steps outside his spacecraft for the first time, floating in the vacuum of space for 12 minutes.'
    },
    {
      year: '1969',
      emoji: '🌕',
      title: 'Moon Landing — Apollo 11',
      desc: 'Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon. "One giant leap for mankind."'
    },
    {
      year: '1971',
      emoji: '🏠',
      title: 'First Space Station',
      desc: 'The Soviet Union launches Salyut 1, the world\'s first space station, marking humanity\'s first step toward living in space.'
    },
    {
      year: '1977',
      emoji: '🚀',
      title: 'Voyager 1 & 2 Launched',
      desc: 'NASA launches the twin Voyager probes. They are the first spacecraft to reach interstellar space and are still transmitting today!'
    },
    {
      year: '1981',
      emoji: '🛸',
      title: 'Space Shuttle First Flight',
      desc: 'Columbia becomes the first reusable spacecraft, launching on STS-1. The Shuttle program would fly 135 missions over 30 years.'
    },
    {
      year: '1990',
      emoji: '🔭',
      title: 'Hubble Space Telescope',
      desc: 'The Hubble Space Telescope is deployed, revolutionising astronomy with breathtaking images of distant galaxies and nebulae.'
    },
    {
      year: '1998',
      emoji: '🏗️',
      title: 'ISS Construction Begins',
      desc: 'The International Space Station begins construction. 16 nations collaborate on humanity\'s largest space structure, home to astronauts continuously since 2000.'
    },
    {
      year: '2004',
      emoji: '🤖',
      title: 'Mars Rovers Land',
      desc: 'NASA\'s Spirit and Opportunity rovers land on Mars, searching for signs of ancient water. Opportunity lasted 15 years — 60x its planned mission!'
    },
    {
      year: '2012',
      emoji: '🌠',
      title: 'Voyager 1 Reaches Interstellar Space',
      desc: 'Voyager 1 officially exits the Solar System, becoming the first human-made object to enter interstellar space, 18 billion km from the Sun.'
    },
    {
      year: '2015',
      emoji: '🛬',
      title: 'SpaceX Lands a Rocket',
      desc: 'SpaceX successfully lands a Falcon 9 booster for the first time, making orbital rockets reusable and transforming the economics of spaceflight.'
    },
    {
      year: '2019',
      emoji: '📸',
      title: 'First Black Hole Image',
      desc: 'The Event Horizon Telescope captures the first-ever image of a black hole — the supermassive one at the centre of galaxy M87, 55 million light-years away.'
    },
    {
      year: '2021',
      emoji: '🚁',
      title: 'First Flight on Another Planet',
      desc: 'NASA\'s Ingenuity helicopter makes the first powered, controlled flight on Mars, proving aircraft can fly in the thin Martian atmosphere.'
    },
    {
      year: '2022',
      emoji: '✨',
      title: 'James Webb Space Telescope',
      desc: 'JWST releases its first images — the deepest and sharpest infrared images of the universe ever taken, seeing galaxies from 13 billion years ago.'
    },
  ];

  const track = document.getElementById('timelineTrack');
  const leftBtn = document.getElementById('tlLeft');
  const rightBtn = document.getElementById('tlRight');
  const wrapper = track.parentElement;
  const STEP = 240;

  events.forEach(e => {
    const item = document.createElement('div');
    item.className = 'tl-item';
    item.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-card">
        <div class="tl-emoji">${e.emoji}</div>
        <div class="tl-year">${e.year}</div>
        <div class="tl-title">${e.title}</div>
        <div class="tl-desc">${e.desc}</div>
      </div>
    `;
    track.appendChild(item);
  });

  leftBtn.addEventListener('click', () => {
    wrapper.scrollBy({ left: -STEP * 2, behavior: 'smooth' });
  });
  rightBtn.addEventListener('click', () => {
    wrapper.scrollBy({ left: STEP * 2, behavior: 'smooth' });
  });
})();
