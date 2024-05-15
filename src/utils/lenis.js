import Lenis from "lenis";

export const scroll = () => {
  const lenis = new Lenis({
    lerp: 0.1,
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", (e) => {
    //todo
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
};
