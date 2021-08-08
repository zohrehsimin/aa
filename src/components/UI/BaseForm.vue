<template>
<div class="main-container">
  <div class="form-container">
    <slot></slot>
  </div>

</div>
</template>

<script>
export default {
  name: "BaseForm"
}
</script>

<style scoped>
.main-container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right top, #154a89, deepskyblue);
}
.form-container{
  width: 40%;
  background-color: rgba(64, 62, 62, 0.08);
  border-radius: 1rem;
  background-color: #b3b2b2;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.26);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

</style>