
// global vars

const button = document.getElementById("enter");
const input = document.getElementById("user-input");
const ul = document.querySelector("ul");
const clear = document.getElementById("clear");

// functions

function inputLength() {
   return input.value.length;
}

function addListItem() {
    const li = document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0 && input.value != " " && input.value != "  ") {
        addListItem();
      }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && input.value != " " && input.value != "  " && event.which === 13 ) {
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



// running code

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", markList);

clear.addEventListener("click", clearContent);
