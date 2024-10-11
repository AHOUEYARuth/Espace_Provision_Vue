<template>
    <main>
        <section class="banner">
            <div class="container">
                <div class="banner_content">
                    <h1>Plongez dans l'univers de l'électronique avec <router-link to="/">SpaceProvision</router-link>,Votre partenaire de confiance</h1>
                </div>
            </div>
        </section>
        <section class="catalogue">
            <div class="container">
                <div class="content">
                   <h2>Nos produits</h2>
                   <div class="products">
                        <!-- <router-link to=""></router-link> -->
                        <router-link :to="`/product/${category.categoryId}`" class="category" v-for="category in Categories" :key="category.categoryId">
                            <div class="image">
                                <img :src="`${category.image}`" alt="" id="img">
                            </div>
                            <p>{{ category.name }}</p>
                        </router-link>
                   </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { useDataStore } from "../store/data";
import { ref, onMounted} from "vue";
import axios from "axios";

const Categories = ref([])

const mesDonnees = useDataStore()
mesDonnees.cartCount()
/* mesDonnees.selectProduct() */
onMounted( async() =>{
    const response = await axios.get('/data.json')
    Categories.value = response.data.productcategory
    /* console.log(Categories.value);   */
})
</script>


<style scoped>
    main{
        width: 100%;
        padding: 0;
        margin: 0;
    }
    .banner{
        width: 100%;
        height: 70vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(/src/assets/images/dig.jpg);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container{
        max-width: 1044px;
        margin: 0 auto;
    }
    .banner_content{
        width: 100%;
    }
    h1{
        font-weight: 100;

    }
    h1 a:hover{
        color: rgb(1, 218, 218);
    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .products{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 60px;
    }
    .catalogue{
        width: 100%;
        color: #000;
        padding: 80px 0;
    }
    .category{
        border: 1px solid rgb(233, 229, 229);
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 2px 4px rgb(219, 218, 218);
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 5px;
    }
    .category .image{
        width: 100%;
        display:block;
        overflow:hidden;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .category p{
        position: relative;
        right: 10px;
    }
    .category .image #img{
        width: 100%; 
        height:100%;
        -webkit-transition: all 0.2s;
        -moz-transition: all 0.2s;
        -ms-transition: all 0.2s;
        -o-transition: all 0.2s;
        transition: all 0.2s;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

    }
    .category .image #img:hover{
        transform:scale(1.1);
    }
    .products a{
        color: #000;
    }
</style>