// ===== STARFIELD CANVAS =====
(function () {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');

  let stars = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x:       Math.random() * W,
        y:       Math.random() * H,
        r:       Math.random() * 1.5 + 0.3,
        alpha:   Math.random(),
        delta:   (Math.random() * 0.004 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
        speed:   Math.random() * 0.05 + 0.01
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Subtle nebula glow blobs
    const blobs = [
      { x: W * 0.2, y: H * 0.3, r: 300, color: 'rgba(79,195,247,0.025)' },
      { x: W * 0.8, y: H * 0.6, r: 350, color: 'rgba(180,123,255,0.025)' },
      { x: W * 0.5, y: H * 0.85, r: 250, color: 'rgba(79,195,247,0.02)' },
    ];
    blobs.forEach(b => {
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, b.color);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    });

    stars.forEach(s => {
      s.alpha += s.delta;
      if (s.alpha >= 1) { s.alpha = 1; s.delta = -Math.abs(s.delta); }
      if (s.alpha <= 0) { s.alpha = 0; s.delta =  Math.abs(s.delta); }

      // Slow drift upward
      s.y -= s.speed;
      if (s.y < -2) { s.y = H + 2; s.x = Math.random() * W; }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,230,255,${s.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  createStars(320);
  draw();

  window.addEventListener('resize', () => {
    resize();
    createStars(320);
  });
})();
