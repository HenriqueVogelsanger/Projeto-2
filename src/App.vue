<script setup>
import { ref } from 'vue';

const cidades = ref([
  'São Paulo',
  'Rio de Janeiro',
  'Belo Horizonte',
  'Salvador',
  'Fortaleza',
  'Curitiba',
  'Manaus',
  'Recife',
  'Porto Alegre',
  'Brasília',
])



</script>
<template>
<ul>
  <li v-for="(cidades, index) in cidades.sort()" > {{ cidades }}</li>
<input type="text">
</ul>
</template>
<style>

</style>
