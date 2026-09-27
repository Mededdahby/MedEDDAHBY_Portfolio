(() => {
  const rotations = [[-10, 20], [-8, -70], [-10, -160], [-8, -250], [-100, 20], [80, 20]];

  document.querySelectorAll("[data-project-cube]").forEach((root) => {
    if (root.dataset.enhanced === "true") return;

    const stage = root.querySelector("[data-cube-stage]");
    const cube = root.querySelector("[data-cube-body]");
    const title = root.querySelector("[data-cube-title]");
    const link = root.querySelector("[data-cube-link]");
    const linkLabel = root.querySelector("[data-cube-link-label]");
    const hint = root.querySelector("[data-cube-hint]");
    const dots = [...root.querySelectorAll("[data-cube-dot]")];
    const dataElement = root.querySelector("[data-cube-data]");
    if (!stage || !cube || !title || !link || !linkLabel || !dataElement) return;

    const faces = JSON.parse(dataElement.textContent || "[]");
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let active = 0;
    let pointerStart = null;
    let dragging = false;
    let paused = false;
    let rotationTimer;

    const render = (offset = 0) => {
      const [rotateX, rotateY] = rotations[active];
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY + offset * 0.42}deg)`;
      cube.style.transition = dragging || reduceMotion ? "none" : "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)";
      title.textContent = faces[active].title;
      link.href = faces[active].href;
      linkLabel.textContent = faces[active].kind === "project" ? "View project" : "Explore work";
      dots.forEach((dot, index) => {
        const selected = index === active;
        dot.setAttribute("aria-current", selected ? "true" : "false");
        dot.classList.toggle("w-8", selected);
        dot.classList.toggle("bg-[#B45309]", selected);
        dot.classList.toggle("w-3", !selected);
        dot.classList.toggle("bg-[#111111]/15", !selected);
      });
      root.querySelector("[data-cube-dots]")?.setAttribute("aria-label", `Cube face ${active + 1} of ${faces.length}`);
    };

    const move = (direction) => {
      active = (active + direction + faces.length) % faces.length;
      render();
    };
    const startRotation = () => {
      clearInterval(rotationTimer);
      if (!paused && !dragging && !reduceMotion) rotationTimer = setInterval(() => move(1), 3400);
    };

    stage.addEventListener("pointerdown", (event) => {
      pointerStart = event.clientX;
      dragging = true;
      clearInterval(rotationTimer);
      stage.setPointerCapture(event.pointerId);
    });
    stage.addEventListener("pointermove", (event) => {
      if (pointerStart !== null) render(event.clientX - pointerStart);
    });
    const finishDrag = (event) => {
      if (pointerStart === null) return;
      const distance = event.clientX - pointerStart;
      pointerStart = null;
      dragging = false;
      if (Math.abs(distance) > 34) active = (active + (distance < 0 ? 1 : -1) + faces.length) % faces.length;
      render();
      startRotation();
    };
    stage.addEventListener("pointerup", finishDrag);
    stage.addEventListener("pointercancel", () => {
      pointerStart = null;
      dragging = false;
      render();
      startRotation();
    });
    stage.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    });
    root.addEventListener("mouseenter", () => { paused = true; clearInterval(rotationTimer); });
    root.addEventListener("mouseleave", () => { paused = false; startRotation(); });
    root.addEventListener("focusin", () => { paused = true; clearInterval(rotationTimer); });
    root.addEventListener("focusout", () => { paused = false; startRotation(); });
    dots.forEach((dot, index) => dot.addEventListener("click", () => { active = index; render(); startRotation(); }));

    root.dataset.enhanced = "true";
    if (hint) hint.textContent = "Drag cube";
    render();
    startRotation();
  });
})();
