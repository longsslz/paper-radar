(() => {
  const desktop = window.matchMedia("(min-width: 761px)");
  const grids = [...document.querySelectorAll(".story")];

  const syncGrid = (grid) => {
    if (!grid) return;
    const figure = grid.querySelector(".figure-shell");
    if (!figure) return;
    if (!desktop.matches) {
      grid.style.removeProperty("--read-card-max-height");
      return;
    }
    const height = Math.ceil(figure.getBoundingClientRect().height);
    if (height > 0) grid.style.setProperty("--read-card-max-height", `${height}px`);
  };

  const syncAll = () => grids.forEach(syncGrid);
  const observer = "ResizeObserver" in window
    ? new ResizeObserver((entries) => {
        for (const entry of entries) syncGrid(entry.target.closest(".story"));
      })
    : null;

  for (const grid of grids) {
    const figure = grid.querySelector(".figure-shell");
    const image = figure?.querySelector("img");
    if (figure && observer) observer.observe(figure);
    if (image && !image.complete) image.addEventListener("load", () => syncGrid(grid), { once: true });
  }

  desktop.addEventListener("change", syncAll);
  window.addEventListener("resize", syncAll, { passive: true });
  window.addEventListener("load", syncAll, { once: true });
  document.fonts?.ready.then(syncAll);
  requestAnimationFrame(syncAll);
})();
