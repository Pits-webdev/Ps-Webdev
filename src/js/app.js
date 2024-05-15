import { splitText } from "../utils/splitText";
import gsap from "gsap";
import { scroll } from "../utils/lenis";

/* handleMobile */
const menuBtn = document.querySelector("#menu_btn");
const mobile = document.querySelector("#mobile");

let mobileOpen = false;

menuBtn.addEventListener("click", () => {
  mobileOpen
    ? menuBtn.classList.remove("active") &
      mobile.classList.replace("block", "hidden")
    : menuBtn.classList.add("active") &
      mobile.classList.replace("hidden", "block");

  mobileOpen = !mobileOpen;
});

/* lenis scroll */
scroll();

/* gsap */
const elements = document.querySelectorAll(".element");
splitText(elements);

const tl = gsap.timeline();
tl.to(".logo_loader", { y: 0, delay: 0.1, duration: 0.2 });
tl.to(".loader .char", { y: 0, stagger: 0.05, delay: 0.3, duration: 0.2 });
tl.to(".page_loader", { y: "-100%", duration: 0, delay: 1.2 });
