<template>
    <main>
        <section class="banner">
            <div class="container">
                <div class="banner_content">
                    <h1>Votre panier</h1>
                </div>
            </div>
        </section>
        <section class="product_section">
            <div class="container">
                <div class="contentp">
                    <div id="cart_items">
                        <div class="prod" v-if="mesDonnees.cart.length === 0 ">
                            <h2 >votre panier est vide</h2>
                        </div>
                        <div class="product" v-else v-for="produit in mesDonnees.cart">
                            <div class="i">
                                <img :src="`${produit.image}`" alt="">
                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <p>Nom: {{ produit.name }}</p>
                                <p>Description: {{ produit.description }}</p>
                                <p style="color: red;">Prix: {{ produit.price }} €</p>
                                <div class="quantity_container" style="display: flex; gap: 10px; align-items: center; font-size:20px;">
                                    <button @click="mesDonnees.decrement(produit)">-</button>
                                    <div class='data-qty'>{{ produit.qty }}</div>
                                    <button @click="mesDonnees.increment(produit)">+</button>
                                </div>
                                <div class="total-price" style="margin-top: 25px;">{{ produit.totalPrice }} €</div>
                                <button style="margin-top: 25px;" @click="mesDonnees.deleteProduct(produit)">Supprimer</button>
                            </div>
                        </div>
                    </div>
                    <div class="panier_paiement">
                        <p>Livraison gratuite à Space of the Provision</p><hr>
                        <div class="produit-total">
                            <div>Prix total :</div>
                            <div id="montant">{{ mesDonnees.totalAmount }} €</div>
                        </div>
                        <router-link to="/login"><button type="submit" id="bouton">Passez à la caisse</button></router-link>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { useDataStore } from "../store/data";
const mesDonnees = useDataStore()
mesDonnees.cartCount()
mesDonnees.productsContainer 
mesDonnees.displayAmount()
/* mesDonnees.update()  */

</script>


<style scoped>
     main{
        width: 100%;
        padding: 0;
        margin: 0;
        background-color: #fff;
        color: #000;
        min-height: 100vh;
    }
    .banner{
        width: 100%;
        height: 60vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(/src/assets/images/dig.jpg);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .banner:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 60%;
        width: 100%;
        background-color: #0000001e;
    }
    .container{
        max-width: 1044px;
        margin: 0 auto;
    }
    .banner_content{
        width: 100%;
    }
    h1{
        z-index: 10;
        color: aqua;
        opacity: 100%;
    }
    .product_section{
        padding: 30px 0;
    }
    .product{
        border: 1px solid #CCCCCC;
        padding: 50px ;
        padding-left: 0;
        width: 520px;
        gap: 10px;
        display: flex;
        /* text-align: start; */
        margin-bottom: 20px;
    }
    .prod{
        width: 520px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  /*   .i img{
        display: flex;
        align-items: center;
        justify-content: center;width: 100%;
    } */
    .contentp{
        display: flex;
        gap: 50px;
        width: 100%;
    }
    #cart_items{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .panier_paiement{
        width: 400px;
        border: 1px solid #CCCCCC;
        display: flex;
        flex-direction: column;
        gap: 20px;
        /* padding-top: 20px; */
        padding-bottom: 20px;
        height: 300px;
    }
    .panier_paiement p{
        text-align: center;
        border-bottom: 1px solid grey;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .produit-total{
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    }
    #bouton{
        background-color: #333333;
        color: #fff;
        border: none;
        padding-top: 15px;
        padding-bottom: 15px;
        cursor: pointer;
        margin: 20px;
        width: 90%;
    }
    .produit-total{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    }
</style>