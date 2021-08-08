<template>
  <base-side-bar :side-bar-type="'side-bar--level-one'">
    <template #header>
      <h2>multi level sidebar</h2>
    </template>
    <template #sidebar>
      <ul>
        <side-bar-item
            v-for="menuItem in menuItems"
            :key="menuItem.title"
            :item="menuItem"
        ></side-bar-item>
      </ul>
    </template>
  </base-side-bar>
</template>

<script>

import SideBarItem from "./LevelOneSideBarItem";
import BaseSideBar from "../../UI/BaseSideBar";

export default {
  data(){
    return {
      menuItems: [
        {
          title: 'آیتم ۱',
          list: ['آیتم ۱.۱', 'آیتم ۱.۲']
        },
        {
          title: 'آیتم ۲',
          list: ['آیتم ۲.۱', 'آیتم ۲.۲']
        },
        {
          title: 'آیتم ۳',
          list: ['آیتم ۳.۱', 'آیتم ۳.۲']
        },
        {
          title: 'آیتم ۴',
          list: ['آیتم ۴.۱', 'آیتم ۴.۲', 'آیتم ۴.۳', 'آیتم ۴.۴']
        },
        {
          title: 'آیتم ۵',
          list: ['آیتم ۵.۱', 'آیتم ۵.۲']
        },
        {
          title: 'آیتم ۶',
          list: ['آیتم ۶.۱', 'آیتم ۶.۲']
        }]
    }
  },
  components: {BaseSideBar, SideBarItem},
  methods : {

  }


}
</script>

<style scoped>
h2{
  font-size: 3rem;
  border-bottom: 2px solid white;
}

ul{
  list-style: none;
}
</style>