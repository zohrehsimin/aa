<template>
  <header>
    <base-button @click="exit" :button-type="['button--read-more', 'button--custom-color=red']"
                 :button-content="'خروج'">

    </base-button>
  </header>
</template>

<script>
import BaseButton from "../UI/BaseButton";
export default {
  components:{BaseButton},
  methods : {
    exit(){
      this.$router.push('/homepage')
    }
  }

}
</script>

<style scoped>
header{
  direction: ltr;
  background: #ccc;
  height: 9rem;
  display: flex;
  justify-content: right;
  align-items: center;
}
</style>