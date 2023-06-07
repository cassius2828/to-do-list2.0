// global vars

const button = document.getElementById("enter");
const input = document.getElementById("user-input");
const ul = document.querySelector("ul");
const clear = document.getElementById("clear");
const icons = document.querySelector("i");
const listItems = document.querySelectorAll("li");
const pencil = new Audio("sounds/pencil-sound.wav");

// functions

function inputLength() {
  return input.value.length;
}

function addListItem() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.addEventListener("click", markList);

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-trash-can");
  li.appendChild(icon);
  icon.addEventListener("click", () => li.remove());

  ul.appendChild(li);
  input.value = "";
}

// arrow function version
const addListAfterClick = () => {
  if (inputLength() > 0 && input.value != " " && input.value != "  ") {
    addListItem();
  }
};

function addListAfterKeypress(event) {
  if (
    inputLength() > 0 &&
    input.value != " " &&
    input.value != "  " &&
    event.which === 13
  ) {
    addListItem();
  }
}

function markList(e) {
  if (e.target) {
    e.target.classList.toggle("done");
  }
}

function clearContent() {
  ul.innerHTML = "";
}

function clearTask(e) {
  const li = document.querySelector("li");
  li.parentNode.removeChild(li);
}

function clearTask() {
  listItems.parentNode.removeChild(listItems);
}

// running code
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

clear.addEventListener("click", clearContent);

// listItems = [1, 2, 3, 4, 5];
//
// for (i=0; i < li.length; i++) {
// listItems[i].addEventListener('click', 'do something')
// }
//
// for loop rewritten
// listItems.forEach(item => item.addEventListener('click') )
