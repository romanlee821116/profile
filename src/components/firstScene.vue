<template>
  <div class='relative h-screen w-screen overflow-hidden' id='scene1_Bg'>
    <div class='w-full h-full bg-black opacity-50'></div>
    <div class='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <p class='text-xl text-white mb-4 font-bold drop-shadow-2xl'>Hello! I'm</p>
        <h1 class='text-5xl mb-16 text-white'> ANYI</h1>
        <a href="#" class='relative px-4 py-2.5 bg-gray-50 bg-opacity-50
        text-white rounded-xl hover:bg-green-600 z-10' @click='toWork()'>VIEW MY WORKS</a>
    </div>
    
    <!-- scroll down -->
    <section id="section07"
    class="demo absolute bottom-10 left-1/2 transform -translate-x-1/2 h-8 text-sm">
        <a><span></span><span></span><span></span>Scroll</a>
    </section>
    <!-- <div class='absolute bottom-0 left-0 h-48 w-full' id='scene_Block'></div> -->
  </div>
</template>

<script>
export default {
  name: 'firstScene',
  methods: {  
    toWork() {
      this.$emit('movework', 6)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/scrollDown.css';
#scene1_Bg{
  background: url('../imgs/wallpaper.jpg');
  background-size: cover;
  background-position: fixed;
  background-repeat: no-repeat;
}
#scene_Block{
  /* background: linear-gradient(5deg, #F9FAFB 50%, transparent 50%); */
  background: linear-gradient(5deg, #111 50%, transparent 50%);
}
</style>
