<template>
  <li>
    {{levelTwoItem}}
  </li>
</template>

<script>
export default {
  props:['levelTwoItem']
}
</script>

<style scoped>
li {
  padding: 1.2rem 2rem;
}



li:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.26);
}
</style>