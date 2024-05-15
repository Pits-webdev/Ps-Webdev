export const splitText = (elements) => {
  console.log(elements);

  elements.forEach((element) => {
    let innerText = element.innerHTML;
    console.log(innerText);
    element.innerHTML = "";

    let textContainer = document.createElement("div");
    textContainer.classList.add("elemet-block");

    for (let char of innerText) {
      let span = document.createElement("span");
      span.innerText = char.trim() === "" ? "\xa0" : char;

      span.classList.add("inline-block");
      span.classList.add("char");

      textContainer.append(span);
    }

    /* add Container */
    element.appendChild(textContainer);
  });
};
