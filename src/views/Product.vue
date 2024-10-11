<template>
    <main>
        <section class="produit">
            <div class="container">
                <div class="content">
                    <div class="product_list">
                        <div class="list" v-for="product in filteredProducts" :key="product.id">
                            <img :src="`${product.productImage}`" alt="">
                            <p>{{ product.productDescription }}</p>
                            <p>{{ product.productName }}</p>
                            <div class="prix">
                                <p>{{ product.reductPrice }} €</p>
                                <del><p>{{ product.priceMain }} €</p></del>
                            </div>
                            <button @click="mesDonnees.selectProduct(product)" class="add-to-cart">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { useDataStore } from "../store/data";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router'
const route = useRoute()
const products = ref([])
const categorieId = Number(route.params.categoryId)
const filteredProducts = ref([]);

const mesDonnees = useDataStore()

mesDonnees.cartCount()

onMounted( async() =>{
    const response = await axios.get('/data.json')
    products.value = response.data.products
    filteredProducts.value = products.value.filter(
      product => product.categoryId === categorieId
    );
   /* console.log(filteredProducts.value); */
   let jsonData = JSON.stringify(products.value)
   localStorage.setItem('mesProduits', jsonData)
    
})

</script>


<style scoped>
    main{
        width: 100%;
        padding: 0;
        margin: 0;
        background-color: #fff;
    }
    .container{
        max-width: 1044px;
        margin: 0 auto;
    }
    .content{
        width: 100%;
        padding-top: 120px;
        padding-bottom: 30px;
    }
    .product_list{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
    }
    .list{
        border: 1px solid rgb(233, 229, 229);
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 30px;
        box-shadow: 0 2px 4px rgb(219, 218, 218);
        font-family: "Roboto", sans-serif;
        text-align: start;
        color: #000;
        padding-top: 0;
    }
    .prix{
        display: flex;
        gap: 10px;
    }
    .prix >p{
        color: red;
    }
    button{
        padding: 10px;
        border: none;
        background-color: #323232;
        color: #fff;
        transition: 0,4s;
        border-radius: 5px;
    }
    button:hover{
        cursor: pointer;
    }
    button:active{
        background-color: #0E0C1B;
    }
</style>