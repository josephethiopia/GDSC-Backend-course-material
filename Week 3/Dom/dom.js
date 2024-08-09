const heading = document.getElementById("main_heading");
const container = document.getElementById("container");
const one = document.getElementsByClassName("li1");
const oneLi = one[0];
const lists = document.getElementById("list");
const btn = document.getElementById("btn");
// heading.setAttribute("key", "h1");
// heading.removeAttribute("class");
// const attributeValue = heading.getAttribute("id");
// console.log(attributeValue);
// container.style.text = "3px";

// const li = document.createElement("li");
// li.innerText = "Six";
// li.setAttribute("class", "li6");
// // lists.appendChild(li);
// lists.insertBefore(li, one[0]);
// lists.removeChild(oneLi);
// document.addEventListener("keydown", function (event) {
//   console.log(`ohh you pressed ${event.key} key`);
// });
btn.addEventListener("click", (event) => {
  console.log(event);
});
