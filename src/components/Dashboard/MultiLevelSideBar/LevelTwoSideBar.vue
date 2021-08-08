<template>
  <base-side-bar :side-bar-type="'side-bar--level-two'" @mouseenter="levelTwo('mouse-enter')" @mouseleave="levelTwo('mouse-leave')">
    <template #sidebar>
      <ul>
        <level-two-side-bar-item
            v-for="listItem in itemList"
            :key="listItem"
            :level-two-item="listItem"
        ></level-two-side-bar-item>
      </ul>
    </template>
  </base-side-bar>
</template>

<script>
import BaseSideBar from "../../UI/BaseSideBar";
import LevelTwoSideBarItem from "./LevelTwoSideBarItem";
export default {
  data(){
    return {
      sideBarType : null,

    }
  },
  components: {LevelTwoSideBarItem,BaseSideBar},
  props: ['itemList'],
  mounted() {
    this.sideBarType = 'level-two'
  },
  methods : {
    levelTwo(flag){
      this.$emit('select-item', flag)
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
  margin: 0;
  padding : 0;
}

</style>