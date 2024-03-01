<script setup>
import { ref } from 'vue'
const contador = ref(0)
const contadoruhh = ref(0)

const real = ref(true)


function saudacao() {
  return `Olá, ${nome}!`
}
const idade = 78
const nome = 'Corinthians';
function inverter(texto) {
  return texto.split('').reverse().join('')
}
function diminuir() {
  if (contador.value > 0) {
    contador.value--
  }
}
function aumentar() {

  contador.value++;

}
function zerar() {
  contador.value = 0
}

function diminuiruhh() {
  if (contadoruhh.value > 0) {
    contadoruhh.value--
  }
}
function aumentaruhh() {

  contadoruhh.value++;

}
function zeraruhh() {
  contadoruhh.value = 0
}

function real1(){
  real.value =  !real.value  
}
</script>

<template>
 <!--  <div class="info">

    <h1>Exemplo 1 - Mostrando informações na tela</h1>
        <p>Nome: {{ nome }} </p>
        <p>Idade: {{ idade }}  anos</p>
        <hr />
        <p>Para completar 50 anos faltam: {{ 50 - idade }}  anos</p>
        <p>O nome tem {{ nome.length }}  caracteres</p>
        <p>O nome invertido é: {{ inverter(nome).toUpperCase() }} </p>
        <hr />
        <p> Exemplo de saudação usando função</p>
        <p> {{ saudacao() }}  </p>
  </div> -->
<div class="info">
  <button @click="aumentar">+ aumentar</button>
  <button @click="diminuir">- diminuir</button>
  <button @click="zerar">apagar</button>
  <p>O valor do contador é: {{ contador }}</p>
</div>
<div class="info">
  <button @click="aumentaruhh">+ aumentar</button>
  <button @click="diminuiruhh">- diminuir</button>
  <button @click="zeraruhh">apagar</button>
  <p>O valor do contador é: {{ contadoruhh }}</p>
</div>

<div class="fl" v-if=" contador >= 10" style="background-color: green;">Maior que Dez</div>

<div class="fl" v-if=" contador < 10" style="background-color: red;">Menor que Dez</div>

<div class="fl" v-if=" contadoruhh >= 10" style="background-color: green;">Maior que Dez</div>

<div class="fl" v-if=" contadoruhh < 10" style="background-color: red;">Menor que Dez</div>

<div class="fl" style="background-color: yellow;"> {{contador + contadoruhh}}</div>

<div class="fl" v-if=" (contador + contadoruhh) %2 == 0 " style="background-color: blue;">O Numero é Par</div>

<div class="fl" v-if=" (contador + contadoruhh) %2 != 0 " style="background-color: rgb(255, 145, 0);">O Numero é Impar</div>

<button @click="real1()">
  t
</button>
<p v-show="real">sodaihffgdwdef</p>
</template>

<style scoped>
.fl{
  padding: 20px 30px;
  color: rgb(0, 0, 0);
  border-radius: 10px;
  margin: 1rem;
}
button {
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  border: none;
  background-color: white;
  border-radius: 0.5rem;
  transition: 1s;
}

.info{
  background-color: rgb(226, 32, 32);
  padding: 20px 30px;
  color: rgb(0, 0, 0);
  border-radius: 10px;
}

button:hover {
  background-color: blue;
}
</style>
