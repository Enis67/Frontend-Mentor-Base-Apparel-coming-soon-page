const btn = document.querySelector("#arrow-new");
const error = document.querySelectorAll(".nested-bot > *");

console.log(error);
console.log(btn);

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// was kommt ins spiel?
// placeholder, error-icon, wrong-small, border-red
// remove klassen bei error-icon und wrong-small auf display: inline block ändern
//  placeholer in input ändern
// Border-Eigenschaft hinzufügen an input

btn.addEventListener("click", () => {
  const placeholder = document.querySelector("#email-input");
  const input = document.querySelector("input");
  const icon = document.getElementById("error-icon");
  const wrongSmall = document.getElementById("wrong-small");

  if (placeholder.value === "" || !validateEmail(placeholder.value)) {
    placeholder.setAttribute("placeholder", "janeappleseed#email.com");
    input.style.border = "2px solid red";
    input.style.color = "black";
    icon.classList.remove("remove");
    wrongSmall.classList.remove("remove");
  } else if (placeholder.value !== "") {
    input.style.border = "";
    input.style.color = "";
    icon.classList.add("remove");
    wrongSmall.classList.add("remove");
  }
});
