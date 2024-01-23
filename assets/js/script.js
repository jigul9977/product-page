const searchNameInput = document.getElementById("search-input");
const products = document.querySelectorAll("#products .col");
const filterBtns = document.querySelectorAll(".filter");
const priceBtn = document.getElementById("search-price-input").querySelector("button");
console.log(priceBtn);
const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim(); //convert to lowerCase and delete the wrong space of start
  products.forEach((product) => {
    const productName = product.children[0].children[1].children[0].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  products.forEach((product) => {
    const cat = product.dataset.cat;
    if (filter === "all") {
      product.style.display = "block";
      product.style.visibility = "visible";
    } else {
      filter === cat ? (product.style.display = "block") : (product.style.display = "none");
    }
  });
};

const searchPriceHandler = (event) => {
	const priceInput = +event.target.previousElementSibling.value;
	products.forEach((product) => {
		const productPrice = product.children[0].children[1].children[1].children[0].children[0].innerText;
		const price = + productPrice.split(" ")[1];
		if (!priceInput) {
			product.style.display = "block";
		} else {
			price === priceInput ?(product.style.display = "block") : (product.style.display = "none");
		}
	})
};



priceBtn.addEventListener("click", searchPriceHandler)

filterBtns.forEach((button) => {
	button.addEventListener("click", filterHandler);
});

searchNameInput.addEventListener("keyup", searchHandler);