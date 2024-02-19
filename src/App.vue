<script setup>
import { ref } from 'vue'
const contador = ref(0)
function diminuir(){
  contador.value--
}
function aumentar(){
  contador.value++
}
</script>

<template>
 <button @click="aumentar">+</button>
 <button @click="diminuir">-</button>
 <p>O valor do contador é: {{ contador }}</p>
</template>

<style scoped>

</style>
