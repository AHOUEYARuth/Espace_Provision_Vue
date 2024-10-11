<template>
  <div class="app">
    <header :class="{ scrolled: isScrolled }">
      <div class="container">
        <div class="content">
          <router-link to="/" id="logo">SpaceProvision</router-link>
          <router-link to="/login">Se connecter</router-link>
          <router-link to="/card"><span id="cart-count">{{ mesDonnees.count }}</span><img
              src="/src/assets/images/diagram-61_24456.webp" alt=""></router-link>
        </div>
      </div>
    </header>
    <main><router-view></router-view></main>
    <footer>
      <div class="container">
        <div class="footer_content">
          <div class="livraison">
            <img src="/src/assets/images/livrai.webp" alt="" style="height: 70px;" id="liv">
            <div class="text">
              <h4>Livraison à domicile</h4>
              <p>Gratuite sur des milliers de produits</p>
            </div>
          </div>
          <div class="marques">
            <ul>
              <li>Lenovo</li>
              <li>Apple</li>
              <li>Huawei</li>
              <li>Withings</li>
              <li>Skullcandy</li>
              <li>Technics</li>
              <li>Bose</li>
            </ul>
            <h3>Nos marques</h3>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "../src/store/data";
import { ref, onMounted, onUnmounted } from 'vue'
const mesDonnees = useDataStore()

const isScrolled = ref(false)
const scrollPage = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', scrollPage);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollPage);
});

/* import { useDataStore } from "../store/data";
const mesDonnees = useDataStore() */
</script>


<style scoped>
.app {
  width: 100%;
  padding: 0;
  margin: 0;
}

header {
  width: 100%;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #00000021;
  transition: background-color 0.3s ease-in-out
}

.scrolled {
  background-color: #131414;
}

.container {
  max-width: 1044px;
  margin: 0 auto;
}

.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
}

#logo {
  font-weight: 600;
  font-size: 20px;
}
a img {
  width: 50px;
}

#cart-count {
  position: absolute;
  right: 13%;
  font-size: 15px;
}

footer {
  background-color: #131414;
  padding: 15px 0;
}

.footer_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.livraison {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
}

.marques {
  color: #fff;
}
.marques ul{
    display: flex;
    gap: 30px;
}
.marques  h3{
    display: none;
}
li{
  list-style: none;
}
</style>
