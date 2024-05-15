import { splitText } from "../utils/splitText";
import gsap from "gsap";

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

/* gsap */
const elements = document.querySelectorAll(".element");

splitText(elements);
gsap.to(".loader .char", { y: 0, stagger: 0.02, delay: 0.3, duration: 0.2 });
