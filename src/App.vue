<script setup>
import { ref, reactive } from 'vue';
import { toast } from 'vue3-toastify'
const nome = ref('');

let dados = reactive({
  nome: "",
  email: "",
  idade: 0

})

const ver = ref(false)


const idadeValido = (idade) => {
  idade >= 18 && idade <= 60 ? true : false
}

// const nomeValido = (nome) => nome.length >= 3 && nome.length <= 20 ? true : false
// const emailValido = (email) => email.includes("@")
// const senhaValido = (senha) => senha.length > 0

// const formValido = () => idadeValido(dados.idade) && nomeValido(dados.nome) && emailValido(dados.email) 
// && senhaValido(dados.senha)


function enviar() {
  if (dados.idade < 18 || dados.idade > 60) {
    toast.warn("Idade Ruim", { autoClose: 1000 })
  }
  else if (dados.nome.length <= 3 || dados.nome.length >= 20) {
    toast.warn("Nome Ruim", { autoClose: 1000 })
  }
  console.log(dados)
}

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
      <label for="senha">Senha:</label>
      <input type="password" v-model="dados.senha" />
      <label for="senha">Confirmar Senha:</label>
      <input type="password" v-model="dados.confirmarSenha" />


      <button type="submit">Enviar</button>
    </form>
    <div class="teste" v-if="ver == true">
      <h2>Respostas:</h2>
      <p>{{ dados.nome }}</p>
      <p>{{ dados.email }}</p>
      <p>{{ dados.idade }}</p>
      <p>{{ dados.senha }}</p>
      <p>{{ dados.confirmarSenha }}</p>
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