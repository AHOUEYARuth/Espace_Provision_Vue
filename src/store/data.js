import { defineStore } from "pinia";
import { ref} from "vue";

export const useDataStore = defineStore("myData", () => {
  const cart = ref(JSON.parse(localStorage.getItem("monPanier")) || []);
  const count = ref(0);
  const quantity = ref(1);
  const selectedProduct = ref({});
  const price = ref();
  const totalAmount = ref();

  function selectProduct(product) {
    selectedProduct.value = {
      id: product.id,
      image: product.productImage,
      description: product.productDescription,
      name: product.productName,
      price: product.reductPrice,
      qty: quantity.value,
      totalPrice: product.reductPrice,
    };
    addToCart(selectedProduct.value); 
    console.log("pice", selectedProduct.value.price);
    
  }

  function addToCart(selectedProduct) {
    const existProduit = cart.value.find((item) => item.id == selectedProduct.id);
    if (existProduit) {
      existProduit.qty += 1;
      existProduit.totalPrice = `${
        existProduit.qty * parseFloat(existProduit.price)
      }`;
    } else {
      cart.value.push({ ...selectedProduct }); 
    }
    localStorage.setItem("monPanier", JSON.stringify(cart.value));
    cartCount();
    displayAmount();
  }

  function cartCount() {
    count.value = cart.value.length;
  }

  function increment(selectedProduct) {
    selectedProduct.qty += 1;
    price.value = parseFloat(selectedProduct.price) * parseInt(selectedProduct.qty);
    console.log(price.value);
    
    selectedProduct.totalPrice = `${price.value}`;
    displayAmount();
    localStorage.setItem("monPanier", JSON.stringify(cart.value));
  }

  function decrement(selectedProduct) {
    if (selectedProduct.qty > 1) {
      selectedProduct.qty -= 1;
    }
    price.value = parseFloat(selectedProduct.price) * parseInt(selectedProduct.qty);
    selectedProduct.totalPrice = `${price.value}`;
    displayAmount();
    localStorage.setItem("monPanier", JSON.stringify(cart.value));
  }

  function deleteProduct(product) {
    cart.value = cart.value.filter((p) => p.id !== product.id);
    displayAmount();
    localStorage.setItem("monPanier", JSON.stringify(cart.value));
    cartCount();
  }

  function displayAmount() {
    totalAmount.value = cart.value.reduce(
      (total, item) => total + parseFloat(item.totalPrice),
      0
    );
  }

  function update() {
    localStorage.setItem("monPanier", JSON.stringify(cart.value));
  }

  return {
    selectProduct,
    cart,
    count,
    increment,
    decrement,
    cartCount,
    deleteProduct,
    displayAmount,
    totalAmount,
    update,
    addToCart,
    quantity,
    selectedProduct,
  };
});
