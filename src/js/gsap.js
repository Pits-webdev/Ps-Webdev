import gsap from "gsap";

export const anime = () => {
  gsap.to(".char", { y: "100px", stagger: 1 });
};
