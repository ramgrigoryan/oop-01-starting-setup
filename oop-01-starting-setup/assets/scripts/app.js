class Product {
  //   title = "DEFAULT";
  //   imageUrl;
  //   price;
  //   description;
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

class Cart {
  cartItems = [];
  render() {
    const cartItem = document.createElement("section");
    cartItem.innerHTML = `
        <h2>Total amounth: \$${0}</h2>
        <button>Order now</button>`;
    cartItem.className = "cart";
    return cartItem;
  }
}

class SingleItem {
  constructor(product) {
    this.product = product;
  }
  addToCard() {
    console.log("The sum of purchases is..");
    console.log(this.product);
  }
  render() {
    const newItem = document.createElement("li");
    newItem.className = "product-item";
    newItem.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to card</button>
            </div>
        </div>
        `;
    const addBtn = newItem.querySelector("button");
    addBtn.addEventListener("click", this.addToCard.bind(this));
    return newItem;
  }
}

class ProductList {
  products = [
    new Product(
      "Butter",
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      10.59,
      "Finnish natural butter"
    ),
    new Product(
      "Olive oil",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80",
      5.99,
      "Greek olive oil"
    ),
  ];
  constructor() {}

  renderItems() {
    const itemList = document.createElement("ul");
    itemList.className = "product-list";
    for (const item of this.products) {
      const newPurchase = new SingleItem(item).render();
      itemList.append(newPurchase);
    }
    return itemList;
  }
}

class Shop {
  renderShop() {
    const renderedList = document.getElementById("app");
   
    const productList = new ProductList();
    const productListEl = productList.renderItems();
    const cartAmounth = new Cart();
    const cartAmounthEl = cartAmounth.render();
    renderedList.append(cartAmounthEl);
    renderedList.append(productListEl);
  }
}
const render = new Shop();
render.renderShop();
