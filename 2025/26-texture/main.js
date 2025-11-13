document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('fabric');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Cloth parameters
  const spacing = 20;
  const cols = Math.floor(canvas.width / spacing);
  const rows = Math.floor(canvas.height / spacing / 1.25);
  const gravity = 0.2;
  const friction = 1;
  const stiffness = 0.4;

  const points = [];
  const constraints = [];

  class Point {
    constructor(x, y, pinned = false) {
      this.x = x;
      this.y = y;
      this.oldx = x;
      this.oldy = y;
      this.pinned = pinned;
    }

    update() {
      if (this.pinned) return;
      const vx = (this.x - this.oldx) * friction;
      const vy = (this.y - this.oldy) * friction;
      this.oldx = this.x;
      this.oldy = this.y;
      this.x += vx;
      this.y += vy + gravity;
    }

    constrain() {
      if (this.x > canvas.width) this.x = canvas.width;
      if (this.x < 0) this.x = 0;
      if (this.y > canvas.height) this.y = canvas.height;
      if (this.y < 0) this.y = 0;
    }
  }

  class Constraint {
    constructor(p1, p2) {
      this.p1 = p1;
      this.p2 = p2;
      this.length = spacing;
    }

    solve() {
      const dx = this.p2.x - this.p1.x;
      const dy = this.p2.y - this.p1.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const diff = (this.length - dist) / dist * stiffness;
      const offsetX = dx * diff * 0.5;
      const offsetY = dy * diff * 0.5;

      if (!this.p1.pinned) {
        this.p1.x -= offsetX;
        this.p1.y -= offsetY;
      }
      if (!this.p2.pinned) {
        this.p2.x += offsetX;
        this.p2.y += offsetY;
      }
    }
  }

  for (let y = 0; y <= rows; y++) {
    for (let x = 0; x <= cols; x++) {
      const pinned = y === 0 && (x % 5 === 0 || x === cols);
      const p = new Point(x * spacing, y * spacing, pinned);
      points.push(p);

      if (x > 0) constraints.push(new Constraint(p, points[points.length - 2]));
      if (y > 0) constraints.push(new Constraint(p, points[x + (y - 1) * (cols + 1)]));
    }
  }

  let draggingPoint = null;

  function getMousePos(e) {
    const scaleX = canvas.width / canvas.clientWidth;
    const scaleY = canvas.height / canvas.clientHeight;
    return {
      x: (e.clientX - canvas.offsetLeft) * scaleX,
      y: (e.clientY - canvas.offsetTop) * scaleY,
    };
  }

  canvas.addEventListener('mousedown', (e) => {
    const { x, y } = getMousePos(e);
    draggingPoint = points.find(p => Math.hypot(p.x - x, p.y - y) < spacing * 0.8);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (draggingPoint) {
      const { x, y } = getMousePos(e);
      draggingPoint.x = x;
      draggingPoint.y = y;
    }
  });

  canvas.addEventListener('mouseup', () => {
    draggingPoint = null;
  });

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    points.forEach(p => p.update());
    for (let i = 0; i < 4; i++) constraints.forEach(c => c.solve());
    points.forEach(p => p.constrain());

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 10;
    constraints.forEach(c => {
      ctx.moveTo(c.p1.x, c.p1.y);
      ctx.lineTo(c.p2.x, c.p2.y);
    });
    ctx.stroke();

    requestAnimationFrame(update);
  }

  update();
});
