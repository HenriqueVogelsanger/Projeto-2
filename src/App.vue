<script setup>
import { ref } from 'vue'
const contador = ref(0)
function diminuir(){
  contador.value--
}
function aumentar(){
  contador.value++
}
function zerar(){
  contador.value = 0
}
</script>

<template>
 <button @click="aumentar">+</button>
 <button @click="diminuir">-</button>
 <p>O valor do contador é: {{ contador }}</p>
</template>

<style scoped>
button{
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  border: none;
  background-color: white;
  border-radius: 0.5rem;
  transition: 1s;
}
button:hover{
  background-color: blue;
}
</style>
