import { anime } from "./gsap";

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
