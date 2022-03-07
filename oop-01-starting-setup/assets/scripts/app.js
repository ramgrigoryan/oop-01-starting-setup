const productList = {
  products: [
    {
      title: "Butter",
      imageUrl:
        "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: 10.69,
      description: "Finnish natural butter",
    },
    {
      title: "Olive oil",
      imageUrl:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80",
      price: 5.99,
      description: "Greek olive oil",
    },
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
