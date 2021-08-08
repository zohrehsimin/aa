<template>
  <button type="button" :style="buttonInlineStyle" :class="buttonClasses">
    <a href="#" >
      {{buttonContent}}
      <div v-if="$slots['button-content']">
        <slot name="button-content"></slot>
      </div>
    </a>
  </button>
</template>

<script>
export default {

  props :['buttonType','buttonContent'],
  computed : {
    makingButtonStyle(){
      const dynamicClasses = {}
      const dynamicBg = {};
      this.buttonType.forEach((type)=>{
        if(type.split('=')[0] === 'button--custom-color'){
          dynamicBg.backgroundColor = type.split('=')[1].trim().toString();

        }else {
          dynamicClasses[type] = true;

        }
      });
      return [dynamicClasses,dynamicBg];

    },
    buttonClasses(){
      return this.makingButtonStyle[0];
    },
    buttonInlineStyle(){
      return this.makingButtonStyle[1];
    }
  }
}
</script>

<style scoped>
button{
  font-size: 1.5rem;

  width: 10rem;
  padding: 1rem 0;
  border : none;
  cursor: pointer;
  border-radius: 0.8rem;
  display: inline-block;
}
a{
  /*display: inline-block;*/
  text-decoration: none;

  color: white;
  text-align: center;
}
.button--read-more{
  background-color: #791111;
}
.button--curved{
  border-radius: 50rem;
}
.button--big{
  width: 30rem;
  font-size: 2rem;

  padding : 2rem 8rem;
}
.button--disable{
  background-color: #aaa;
}.button--small{
   width: 9rem;

   padding: 0.3rem 1.2rem;
   font-size: 1.2rem;
 }


</style>