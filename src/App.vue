<script setup>
import { ref, reactive } from 'vue';
import { toast } from 'vue3-toastify'
const nome = ref('');

const siglas = ref([ 
   "AC",
   "AL",
   "AP",
   "AM",
   "BA",
   "CE",
   "DF",
   "ES",
   "GO",
   "MA",
   "MT",
   "MS",
   "MG",
   "PA",
   "PB",
   "PR",
   "PE",
   "PI",
   "RJ",
   "RN",
   "RS",
   "RO",
   "RR",
   "SC",                 
   "SP",
   "SE",
   "TO"
])

const dados = reactive({
  nome: "",
  email: "",
  dataNascimento: "",
  senha: "",
  confirmarSenha: "",
 endereço: "",
 cidade:"",
 hobbies:[],
 estado: "",
 linguagens:"",
 biografia:"",
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

  else if(!dados.email.includes("@")){
    toast.warn("Inclua @ no seu email", {autoClose: 1000})
  }
  else if(dados.dataNascimento.length <= 0){
    toast.warn("Insira uma data válida", {autoclosa: 1000})
  }
  else if(dados.senha.length < 6){
    toast.warn("Insira uma senha mais forte", {autoclose: 1000})
  }
  else if (dados.confirmarSenha != dados.senha){
    toast.warn("A senha deve ser a mesma", {autoclose:1000})
  }
  else if (dados.confirmarSenha.length <= 0){
    toast.warn("Confirme sua senha", {autoclose:1000})
  }
  else if (dados.endereço.length <= 0){
    toast.warn("O campo de 'endereço' é obrigatório", {autoclose:1000})
  }
  else if (dados.cidade.length <= 0){
    toast.warn("O campo de 'cidade' é obrigatório", {autoclose:1000})
  }
  else if (dados.estado.length <= 0){
    toast.warn("Selecione um estado", {autoclose:1000})
  }
  else if (dados.hobbies.length <= 0){
    toast.warn("Selecione pelo menos um hobbie", {autoclose:1000})
  }
  else if (dados.linguagens.length <= 0){
    toast.warn("Não sabe programar em nenhuma linguagem?kkkk", {autoclose:1000})
  }
  else if (dados.biografia <= 0){
    toast.warn("Preencha todos os campos", {autoclose:1000})
  }
  else{
    ver.value = true
    toast.success("Deu tudo certo, aproveite", {autoclose:1000})
  }
  
}

</script>

<template>
  <div class="fundo1">
  <main>
    <h1>FORMULARIO DEV WEB</h1>
    <form @submit.prevent="enviar">
      <label for="nome">Nome:</label>
      <input type="text" v-model="dados.nome" />
      <label for="email">Email:</label>
      <input type="email" v-model="dados.email" />
      <label for="dataNascimento">dataNascimento:</label>
      <input type="date" v-model="dados.dataNascimento" />
      <label for="senha">Senha:</label>
      <input type="password" v-model="dados.senha" />
      <label for="senha">Confirmar Senha:</label>
      <input type="password" v-model="dados.confirmarSenha" />
      <label for="endereço">Endereço:</label>
      <input type="text" v-model="dados.endereço" />
      <label for="cidade">Cidade:</label>
      <input type="text" v-model="dados.cidade" />
      <label for="estado">Estado:</label>
      <select name="" v-model="dados.estado" id="">
        <option  v-for="item in siglas" :value="item" :key="item" >{{ item }}</option>
      </select>
      <label for="Hobbies">Hobbies:</label>
      <select name="" id="" multiple v-model="dados.hobbies">
      <option value=" esportes ">Esportes</option>
      <option value="videogame">Videogame</option>
      <option value="tocar instrumentos">Tocar Instrumentos</option>
      <option value="cantar">Cantar</option>
      <option value="dançar">Dançar</option>
    </select>
    <label for="Linguagens de Prog">Linguagens de Prog:</label>
      <select name="" id="" multiple v-model="dados.linguagens">
      <option value=" Javascript">Javascript</option>
      <option value="Vue">Vue</option>
      <option value="Python">Python</option>
      <option value="PHP">PHP</option>
      <option value="c sharp">c sharp</option>
    </select>
    <label for="biografia">Biografia:</label>
      <input type="text" v-model="dados.biografia" />
      <button type="submit">Enviar</button>
    </form>
    <div class="teste" v-if="ver == true">
      <h2>Respostas:</h2>
      <p>{{ dados.nome }}</p>
      <p>{{ dados.email }}</p>
      <p>{{ dados.dataNascimento }}</p>
      <p>{{ dados.senha }}</p>
      <p>{{ dados.endereço }}</p>
      <p>{{ dados.cidade}}</p>
      <p>{{ dados.estado}}</p>
      <p><span v-for="item in dados.hobbies">{{ item }}</span></p>
      <p><span v-for="item in dados.linguagens">{{ item }}</span></p>
      <p>{{ dados.biografia }}</p>
    </div>
    <!-- <div v-if="invalido">
      <p>Algo de errado não está certo!</p>
    </div> -->
  </main>
</div>
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
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  backface-visibility: visible;
  background-color: burlywood;
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

p > span {
  display: flex;
  flex-direction: column
}

.fundo1{
  background-image: url("../src/assets/maxresdefault.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  
}
</style>