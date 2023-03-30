const fruits = ["🍇", "🍋", "🍒", "🍓", "🫐", "🥝", "🍍", "🥭"];
const fruitListElement = document.getElementById("fruitList");
const shoppingCartElement = document.getElementById("shoppingCart");
const amountElement = document.getElementById("amount");

let shoppingList = [];

for (let fruit of fruits) {
  const fruitElement = document.createElement("div");
  fruitElement.innerText = fruit;
  fruitElement.classList.add("fruit");
  fruitElement.onclick = addToShoppingList;
  fruitListElement.appendChild(fruitElement);
}

function addToShoppingList() {
  shoppingList.push(this.innerText);

  const createElement = document.createElement("div");

  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  cartElement.appendChild(spanElement);

  const button = document.createElement("button");
  button.innerText = "Remove";
  button.onclick = removeElement;
  cartElement.appendChild(button);

  shoppingCartElement.appendChild(cartElement);

  amountElement.innerText = "Items: " + shoppingList.length;
}

function removeElement() {
  const element = this.paranetNode;
}
