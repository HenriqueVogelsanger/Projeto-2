<script setup>
import { ref, reactive } from 'vue';

const nome = ref('');

let dados = reactive({
  nome: "",
  email: "",
  idade: 0
})

const ver = ref(false)
const invalido = reactive(
 {
  nome: '',
  email: '',
  idade: ''
 }
)
const emailValida = (email) => {
  if (nome.length >= 3 && nome.length <= 20) {
    
  }
}

const idadeValida = (idade) => {
  if (idade >= 18 && idade <= 60) {
    invalido.idade = ""
    return true
  }
  else {
    invalido.idade = "Idade deve estar entre 18 e  60 anos"
    return false
  }
  
}
const nomeValido = (nome) => nome.length >= 3 && nome.length <= 20
const emailValido = (email) => email.includes("@")
const formValido = () => idadeValida(dados.idade) && nomeValido(dados.nome) && emailValido(dados.email)

function enviar() {
  ver.value = formValido()
  // invalido.value = !ver.value
  // if ( formValido() ) {
  //   ver.value = true
  // }
  // else {
  //   alert("sda")
  // }
}
console.log(dados)

</script>

<template>

  <main>
    <h1>Teste</h1>
    <form @submit.prevent="enviar">
      <label for="nome">Nome:</label>
      <input type="text" v-model="dados.nome" />
      <label for="email">Email:</label>
      <input type="email" v-model="dados.email" />
      <label for="idade">Idade:</label>      
      <input type="number" v-model="dados.idade" />
      <span v-if="invalido.idade" class="error">{{ invalido.idade }}</span>
      
      <button type="submit">Enviar</button>
    </form>
    <div class="teste" v-if="ver == true">
      <h2>Respostas:</h2>
      <p>{{ dados.nome }}</p>
      <p>{{ dados.email }}</p>
      <p>{{ dados.idade }}</p>s
    </div>
    <!-- <div v-if="invalido">
      <p>Algo de errado não está certo!</p>
    </div> -->
  </main>

</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.teste {
  display: flex;
  flex-direction: column;
}

main {
  width: 50%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

input {
  border: 2px solid black;
  padding: 4px;
  border-radius: 15px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.error {
  color: red;
  font-size: 0.8rem;
  
}
</style>