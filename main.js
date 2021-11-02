const form = document.querySelector("form");
const wtf = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(wtf.value);
  console.log(email.value);
  console.log(text.value);

  wtf.value = "";
  email.value = "";
  text.value = "";
});
