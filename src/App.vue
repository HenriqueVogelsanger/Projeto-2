<script setup> 
import{ref} from "vue"
import FormComp from './components/FormComp.vue';
import InfoComp from './components/InfoComp.vue';

const valores = ref('')
function salvar(item){
  valores.value = item 
}
</script>
<template> 

<FormComp @salvar="salvar"/>
<InfoComp :dados="valores"/>

</template>
<style scoped>

</style>