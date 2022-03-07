class ProductList{
    title="DEFAULT";
    imageUrl;
    price;
    description;
    constructor(title,imageUrl,price,description){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
}

const productList = {
  products: [
    new ProductList("Butter","https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",10.59,"Finnish natural butter"),
    new ProductList("Olive oil","https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80",5.99,"Greek olive oil"),
  ],
  renderItems() {
    const renderedList = document.getElementById("app");
    const itemList = document.createElement("ul");
    itemList.className = "product-list";
    for (const item of this.products) {
        const newItem = document.createElement("li");
        newItem.className = "product-item";
        newItem.innerHTML = `
        <div>
            <img src="${item.imageUrl}" alt="${item.title}">
            <div class="product-item__content">
                <h2>${item.title}</h2>
                <h3>\$${item.price}</h3>
                <p>${item.description}</p>
                <button>Add to card</button>
            </div>
        </div>
        `;
        itemList.append(newItem);
    }
    renderedList.append(itemList);
  },
};
productList.renderItems();
