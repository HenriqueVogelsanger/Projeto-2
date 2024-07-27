<script setup> 
const props = defineProps(["dados"])

</script>
<template> 
 <div class="teste" >
      <h2>Respostas:</h2>
      <p>{{ props.dados.nome }}</p>
      <p>{{ props.dados.email }}</p>
      <p>{{ props.dados.dataNascimento }}</p>
      <p>{{ props.dados.senha }}</p>
      <p>{{ props.dados.endereço }}</p>
      <p>{{ props.dados.cidade}}</p>
      <p>{{ props.dados.estado}}</p>
      <p><span v-for="item in props.dados.hobbies">{{ item }}</span></p>
      <p><span v-for="item in props.dados.linguagens">{{ item }}</span></p>
      <p>{{ props.dados.biografia }}</p>
    </div>


</template>
<style scoped>

</style>