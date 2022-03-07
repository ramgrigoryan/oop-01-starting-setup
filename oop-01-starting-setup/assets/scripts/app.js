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

class Attribute {
  constructor(attrName, attrValue) {
    this.attrName = attrName;
    this.attrValue = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.renderHookId = renderHookId;
  }
  createRootElement(tag, cssClassName, attributes) {
    const el = document.createElement(tag);
    if (cssClassName) {
      el.className = cssClassName;
    }
    if (attributes && attributes.length > 0) {
      for (const i of attributes) {
        el.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.renderHookId).append(el);
    return el;
  }
}

class Cart extends Component {
  cartItems = [];
  set addedItems(value) {
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
    this.cartItems = value;
  }

  get totalAmount() {
    const sum = this.cartItems.reduce(
      (prevValue, curvalue) => prevValue + +curvalue.price,
      0
    );
    return sum;
  }

  addProduct(product) {
    this.cartItems.push(product);
    const updatedItems = [...this.cartItems];
    // updatedItems.push(product);
    this.addedItems = updatedItems;
  }
  render() {
    const cartItem = this.createRootElement("section", "cart");
    cartItem.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order now</button>`;
    this.totalOutput = cartItem.querySelector("h2");
  }
  constructor(renderHookId) {
    super(renderHookId);
  }
}

class SingleItem {
  constructor(product) {
    this.product = product;
  }
  addToCard() {
    App.provideToCard(this.product);
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
    this.cartAmounth = new Cart("app");
    this.cartAmounth.render();
    renderedList.append(productListEl);
  }
}

class App {
  static init() {
    const renderSite = new Shop();
    renderSite.renderShop();
    this.cart = renderSite.cartAmounth;
  }
  static provideToCard(product) {
    this.cart.addProduct(product);
  }
}
App.init();
