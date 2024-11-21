let users = JSON.parse(localStorage.getItem('users'));
let currentUser = users.find(user => user.isLogined === true);
let basket = currentUser.basket || [];

function createBasketItem() {
    if (basket.length > 0) {
        basket.forEach((product) => {
            let basketItem = document.createElement("div");
            basketItem.classList.add("basket-item");

            let image = document.createElement("div");
            image.classList.add("image");

            let img = document.createElement("img");
            let title = document.createElement("h4");
            title.classList.add("title");

            let category = document.createElement("div");
            category.classList.add("category");

            let price = document.createElement("div");
            price.classList.add("price");

            let countArea = document.createElement("div");
            countArea.classList.add("count-area");

            let minusBtn = document.createElement("button");
            minusBtn.classList.add("minus-btn");
            minusBtn.setAttribute("disabled", "true");
            minusBtn.textContent = "-";
            minusBtn.addEventListener("click", () => decrementCount(product.id, count));

            let count = document.createElement("p");
            count.classList.add("count");
            count.textContent = product.count;

            let plusBtn = document.createElement("button");
            plusBtn.classList.add("plus-btn");
            plusBtn.textContent = "+";
            plusBtn.addEventListener("click", () => incrementCount(product.id, count));

            let removeBtn = document.createElement("button");
            removeBtn.classList.add("btn", "btn-danger", "remove-btn");
            removeBtn.textContent = "Remove";
            removeBtn.addEventListener("click", () => removeItemFromBasket(product.id, basketItem));

            countArea.append(minusBtn, count, plusBtn);
            image.append(img);
            basketItem.append(image, title, category, price, countArea, removeBtn);

            let basketContainer = document.querySelector(".basket");
            basketContainer.append(basketItem);

            img.src = product.image;
            title.textContent = product.title.slice(0, 10) + "...";
            category.textContent = product.category;
            price.textContent = `$${product.price}`;
            count.textContent = product.count;
        });
    }
}

createBasketItem();


function clearBasket () {
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    currentUser.basket = [];

    let basketContainer = document.querySelector(".basket");
    basketContainer.innerHTML = "";

    users[userIndex].basket = currentUser.basket;
    localStorage.setItem("users", JSON.stringify(users));

    updateBasketCount();

}


let clearBasketBtn = document.createElement("button");
clearBasketBtn.classList.add("btn", "btn-danger", "clear-basket-btn");
clearBasketBtn.textContent = "Clear AllProducts";
clearBasketBtn.addEventListener("click", clearBasket);
let basketContainer = document.querySelector(".basket")
basketContainer.append(clearBasketBtn);

function incrementCount(productId, countElement) {
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    let existingProduct = basket.find((product) => product.id === productId);

    if (existingProduct) {
        existingProduct.count++;
    }

    countElement.textContent = existingProduct.count;

    let minusBtn = countElement.previousElementSibling; // minusBtn referansını tapırıq
    if (existingProduct.count > 0) {
        minusBtn.removeAttribute("disabled");
    }

    users[userIndex].basket = basket;
    localStorage.setItem("users", JSON.stringify(users));
}

function decrementCount(productId, countElement) {
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    let existingProduct = basket.find((product) => product.id === productId);

    if (existingProduct) {
        existingProduct.count--;
    }

    countElement.textContent = existingProduct.count;

    let minusBtn = countElement.previousElementSibling; // minusBtn referansını tapırıq
    if (existingProduct.count === 1) {
        minusBtn.setAttribute("disabled", "true");
    }

    users[userIndex].basket = basket;
    localStorage.setItem("users", JSON.stringify(users));
}

function removeItemFromBasket(productId, basketItemElement) {
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    let productIndex = basket.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
        basket.splice(productIndex, 1); // Məhsulu basketdən silirik
        users[userIndex].basket = basket;
        localStorage.setItem("users", JSON.stringify(users));

        // Silinən məhsulu DOM-dan da silirik
        basketItemElement.remove();
        updateBasketCount(); // Basketin sayını yeniləyirik
    }
}

function updateBasketCount() {
    let basketCount = basket.reduce((acc, product) => acc + product.count, 0);
    let basketElement = document.querySelector(".basketIcon sup");
    if (basketElement) {
        basketElement.textContent = basketCount;
    }
}
