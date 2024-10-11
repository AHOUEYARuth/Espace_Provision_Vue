<template>
    <div class="content" :class="{ 'bg-color': display }">
        <div class="form" :class="{ 'display_form': display }">
            <h3>Créer un compte</h3>
            <form id="field">
                <label for="name">Nom & Prénoms</label>
                <input type="text" @input="complete" v-model="data.name" placeholder="First name and last name">
                <label for="mail">Numero de téléphone ou e-mail</label>
                <input type="text" @input="complete" v-model="data.emailOrNumber" placeholder="Mail or phone number">
                <label for="init-password">Mot de passe</label>
                <input type="password" @input="changePassword" v-model="data.initPassword" placeholder="Au moins six caractères">
                <div class="err_msg">{{ incompletePassword }}</div>
                <label for="re-password">Confirmez le mot de passe</label>
                <input type="password" @input="del" v-model="data.confirmPassword">
                <div class="confirm">{{ incompleteMsg }}</div>
                <button @click="submitForm">Enrégistrer</button>
            </form>
            <div class="err_msg">{{ incompleteFielfd }}</div>
        </div>

        <div class="modal" :class="{ 'close': display }">
            <button id="button" @click="displayModal"><img
                    src="/src/assets/images/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt=""></button>
            <p>Félicitations <span id="user">{{ data.name }}</span> tu viens de créer ton compte avec succès chez
                SpaceProvision</p>
            <a href="https://www.fedapay.com/?v=7516fd43adaa">continuez</a>
            <!-- <div class="div">continuez</div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const data = ref({
    name: '',
    emailOrNumber: '',
    initPassword: '',
    confirmPassword: ''
})
const incompleteMsg = ref('')
const incompleteFielfd = ref('')
const incompletePassword = ref('')
const display = ref(false)

let tabInLocalStorage = localStorage.getItem('customers')
if (!tabInLocalStorage) localStorage.setItem('customers', JSON.stringify([]))
let userTab = JSON.parse(localStorage.getItem('customers'))
function submitForm(e: any) {
    e.preventDefault()
    if (data.value.confirmPassword != data.value.initPassword) {
        incompleteMsg.value = 'mot de passe erroné'
    } else if (data.value.name == '' || data.value.emailOrNumber == '' || data.value.initPassword == '' || data.value.confirmPassword == '') {
        incompleteFielfd.value = 'Veuillez remplir tous les champs'
    } else if(data.value.initPassword.length < 6){
        incompletePassword.value = "le mot de passe doit comporter au moins 6 caractères"
    } else {
        userTab.push(data.value)
        displayModal()
    }
    localStorage.setItem('customers', JSON.stringify(userTab))

}
function del() {
    incompleteMsg.value = ''
}
function complete() {
    incompleteFielfd.value = ''
}
function displayModal() {
    display.value = !display.value
}
function changePassword() {
    incompletePassword.value = ''
}
</script>


<style scoped>
.content {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #0E0C1B;
}

.form,
.form form {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
}

.form form {
    gap: 0;
    border: none;
}

.form h3 {
    margin-bottom: 15px;
}

form input {
    padding: 7px 4px;
    margin-bottom: 25px;
    margin-top: 5px;
    border-radius: 2px;
    border: 1px solid #0E0C1B;
    outline: none;
}

.form form button {
    border: none;
    padding: 10px 0;
    color: #fff;
    background-color: #131414;
    cursor: pointer;
    border-radius: 2px;
    margin-top: 10px;
}

.modal {
    width: 300px;
    height: 200px;
    background-color: #0E0C1B;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 30px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
    gap: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    box-shadow: 0 2px 10px rgb(5, 5, 5);
    ;
}

.modal button {
    background-color: #0E0C1B;
    border: none;
    color: #fff;
    position: absolute;
    top: 5px;
    right: 5px;
}

.modal a {
    font-weight: 600;
    font-size: 20px;
    color: aqua;
}

/* .Connexion{
    display: none;
} */
.confirm {
    color: red;
    /* color: #00000033; */
}

#user {
    font-weight: 300;
    color: aqua;
}

.err_msg {
    color: red;
    font-size: 12px;
}

.close {
    display: flex;
}

.bg-color {
    background-color: #00000021;
}

.display_form {
    display: none;
}
</style>