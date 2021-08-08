<template>
  <section :class="['base-side-bar', sideBarStyleResult]">
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <slot name="sidebar"></slot>
  </section>
</template>

<script>

export default {
  props : ['sideBarType'],
  computed : {

    sideBarStyleResult(){
      return ({[this.sideBarType]: true});
    }
  }

}
</script>

<style scoped>
header{
  margin: 2rem 0;
  text-align: center;
}
.base-side-bar{
  top: 0;
  font-size : 1.6rem;
  width: 26rem;
  color : white;
}
.side-bar--level-one{
  position: fixed;
  right: 0;
  height: 100vh;
  background: linear-gradient(to left bottom, #223bc9, #067fd0);
}
.side-bar--level-two{
  height: auto;
  position: absolute;
  background: linear-gradient(to left bottom, #067fd0, #000);
  right : 26rem;
}

</style>