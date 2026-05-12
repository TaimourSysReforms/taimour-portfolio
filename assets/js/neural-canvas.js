// ═══════════════════════════════════════════
//  NEURAL NETWORK CANVAS — Animated node mesh
// ═══════════════════════════════════════════

(function () {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, nodes = [], mouse = { x: -1000, y: -1000 };
  const NODE_COUNT = 70;
  const CONNECT_DIST = 160;
  const MOUSE_RADIUS = 220;
  const ACCENT = { r: 0, g: 240, b: 192 };

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.15;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw nodes and mouse interactions
    for (const node of nodes) {
      // Mouse proximity glow
      const mdx = node.x - mouse.x;
      const mdy = node.y - mouse.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

      let glowAlpha = 0;
      if (mDist < MOUSE_RADIUS) {
        glowAlpha = (1 - mDist / MOUSE_RADIUS) * 0.6;
        // Push nodes slightly away from mouse
        node.vx += mdx * 0.00005;
        node.vy += mdy * 0.00005;
      }

      // Draw node
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r + glowAlpha * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${0.25 + glowAlpha})`;
      ctx.fill();

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Dampen velocity
      node.vx *= 0.998;
      node.vy *= 0.998;

      // Bounce off edges
      if (node.x < 0 || node.x > W) node.vx *= -1;
      if (node.y < 0 || node.y > H) node.vy *= -1;

      // Keep in bounds
      node.x = Math.max(0, Math.min(W, node.x));
      node.y = Math.max(0, Math.min(H, node.y));
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); });
  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  resize();
  createNodes();
  draw();
})();
