<template>
  <li @mouseenter="levelOneStatus('hovered')" @mouseleave="levelOneStatus('unhovered')">
    <div>{{ item.title }}</div>
    <div class="icon">
      <svg width="2.5rem" height="2.5rem" viewBox="0 0 24 24" id="_24x24_On_Light_Arrow-Left" data-name="24x24/On Light/Arrow-Left" xmlns="http://www.w3.org/2000/svg">
        <rect id="view-box" width="24" height="24" fill="none"/>
        <path id="Shape" d="M.22,10.22A.75.75,0,0,0,1.28,11.28l5-5a.75.75,0,0,0,0-1.061l-5-5A.75.75,0,0,0,.22,1.28l4.47,4.47Z" transform="translate(14.75 17.75) rotate(180)" fill="white"/>
      </svg>

    </div>
    <level-two-side-bar
        v-if="makeLevelTwoVisible"
        :item-list="item.list"
        @select-item="getStatus">
    </level-two-side-bar>
  </li>
</template>

<script>
import LevelTwoSideBar from "./LevelTwoSideBar";

export default {
  components: {LevelTwoSideBar},
  props: ['item'],
  data() {
    return {
      levelOneStatusValue: '',
      levelTwoVisibility: ''
    }
  },
  methods: {
    levelOneStatus(flag) {
      this.levelOneStatusValue = flag
    },
    getStatus(stat) {
      this.levelTwoVisibility = stat;
    }
  },
  computed : {
    makeLevelTwoVisible(){
      return this.levelOneStatusValue === 'hovered' || this.levelTwoVisibility === 'mouse-enter'
    }
  }
}
</script>

<style scoped>
li {
  position: relative;
  padding: 1.5rem 0.5rem;
  text-align: center;
  font-size: 1.8rem;

}
.icon{
  transform: translateY(50%);
  position: absolute;
  top: 0;
  left: 10px;
}

li:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.26);
}


</style>