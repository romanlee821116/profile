<template>
  <div id='app' class='bg-opacity-80'>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <first-scene @movework='moveWork'></first-scene>
    </div>
    <div class="section">
      <second-scene @movepage='changePage'></second-scene>
    </div>
    <div class="section">
      <third-scene></third-scene>
    </div>
    <div class="section">
      <fourth-scene></fourth-scene>
    </div>
    <div class="section">
      <fourth-scene1></fourth-scene1>
    </div>
    <div class="section">
      <fifth-scene></fifth-scene>
    </div>
  </full-page>
</div>
</template>

<script>
import firstScene from './components/firstScene.vue';
import secondScene from './components/secondScene.vue';
import thirdScene from './components/thirdScene.vue';
import fourthScene from './components/fourthScene.vue';
import fifthScene from './components/fifthScene.vue';
import fourthScene1 from './components/fourthScene1.vue';

export default {
  name: 'App',
  components: {
    firstScene,
    secondScene,
    thirdScene,
    fourthScene,
    fifthScene,
    fourthScene1,
  },
  data() {
    return {
      options: {
        navigation: true,
        anchors: ['01', '02', '03', '03', '04', '05'],
        loopBottom: true,
        loopTop: true,
        scrollOverflow: true,
      },
    };
  },
  methods: {
    changePage(index) {
      let page = 0;
      switch (index) {
        case 0:
          page = 3;
          break;
        case 1:
          page = 4;
          break;
        case 2:
          page = 6;
          break;
        default:
          page = 1;
      }
      this.$refs.fullpage.api.moveTo(page);
    },
    moveWork(index){
      this.$refs.fullpage.api.moveTo(index);
    }
  },
  mounted() {
    if (window.innerWidth < 576) {
      this.options.navigation = false;
    }
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}
body{
  /* background-color: #F9FAFB; */
  background-color: #111;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
