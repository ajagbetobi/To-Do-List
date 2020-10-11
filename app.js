const addTitleBtn = document.querySelector(".addTitle");
const addItemBtn = document.querySelector(".addItem");
const clearListBtn = document.querySelector(".clearList");
const listSection = document.querySelector(".listSection");
const listContainer = document.querySelector(".mainList");
const titleInput = document.querySelector("#title");
const itemInput = document.querySelector("#item");
const todoParent = document.querySelector(".todoParent");
const makeListBtn = document.querySelector(".makeList");
const liButtonStyle =
  'border: none; margin:auto .4rem; font-family:"Poppins", sans-serif ; border-radius: .1rem;  height: 2rem;';

addTitleBtn.addEventListener("click", () => {
  let headerstring = titleInput.value;
  if (headerstring) {
    addTitle(headerstring);
    clearListBtn.style.opacity = "1";
  }
  titleInput.value = "";
});

addItemBtn.addEventListener("click", () => {
  if (itemInput.value) {
    let itemString = itemInput.value;
    addItem(itemString);
    itemInput.value = "";
  }
});

clearListBtn.addEventListener("click", () => {
  todoParent.innerHTML = "";
  listContainer.removeChild(listContainer.childNodes[0]);
  clearListBtn.style.opacity = "0";
});
makeListBtn.addEventListener("click", () => {
  listSection.style.opacity = "1";
});

function addTitle(headerstring) {
  let h2 = document.createElement("h2");

  h2.classList.add("listHeading");
  h2.textContent = headerstring;
  listContainer.prepend(h2);
}

function addItem(itemString) {
  let li = document.createElement("li");
  let doneBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.style.cssText = `background:  cornflowerblue ; ${liButtonStyle} `;
  deleteBtn.textContent = "Delete";
  deleteBtn.style.cssText = `background:  red ; ${liButtonStyle} `;
  li.classList.add("todoKid");
  li.style.cssText = "transition: all .25s ease; margin-top: .5rem";
  li.textContent = itemString;
  li.append(doneBtn, deleteBtn);
  let liButtons = li.querySelectorAll("button");

  todoParent.append(li);
  liButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      button.classList.add("btn");

      let { target: clickedBtn } = e;
      let clickedBtnText = clickedBtn.textContent;
      if (clickedBtnText == "Done") {
        li.classList.add("done");
      } else {
        li.classList.add("delete");
        let liToBeDeleted = todoParent.querySelector(".delete");
        todoParent.removeChild(liToBeDeleted);
      }
    });
  });
}
