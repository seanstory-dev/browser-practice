const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__btn");

function onAdd() {
  const text = input.value;

  const item = createItem(text);
  items.appendChild(item);

  // 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });

  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = "삭제";
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  item.appendChild(name);
  item.appendChild(deleteBtn);

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});
