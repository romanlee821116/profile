<template>
  <div id='scene3_Bg' class='relative mx-auto w-full h-screen overflow-hidden text-gray-300'>
    <div class="bg_block absolute w-full h-full top-0 left-0 bg-black opacity-60"></div>
    <div class="block1 absolute top-0 left-0 h-48 w-full"></div>
    <div class="block2 absolute bottom-0 left-0 h-48 w-full"></div>
    <h1 class='absolute left-20 top-20 text-9xl text-gray-300 font-black md:block hidden'>02</h1>
      <h1 id='intro' class='absolute transform left-20 -rotate-90  bottom-1/3 w-20
      text-gray-300 text-center text-xl tracking-widest md:block hidden'>ABILITIES</h1>
    <div class="absolute w-5/6 container flex md:flex-row flex-col justify-center
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <!-- card1 -->
      <div id="Achievements" class='group md:w-1/4 w-full md:p-10 md:h-auto h-56 py-2
                md:mx-4 my-2 transform hover:-translate-y-4 transition-all text-gray-800'>
        <i class="fas fa-trophy md:text-4xl text-2xl text-green-500
        group-hover:text-yellow-400 transition-all"></i>
        <h2 class='md:my-4 mt-2 text-xl'>ACHIEVEMENTS</h2>
        <p class='mt-2' v-for='(item, index) in achievements' :key="index">{{item}}</p>
      </div>
      <!-- card2 -->
      <div id="webSkill" class='group md:w-1/4 w-full md:p-10 md:h-auto h-56 py-2
      md:mx-4 my-2 transform hover:-translate-y-4 transition-all text-gray-800'>
        <i class="fas fa-lightbulb md:text-4xl text-2xl text-green-500
        group-hover:text-yellow-400 transition-all"></i>
        <h2 class='md:my-4 mt-2 text-xl'>WEB DEVELOPMENT</h2>
        <div class='flex'>
          <div class='w-1/2'>
            <p class='text-left pl-8 md:pl-4'
              v-for='(item, index) in webSkill1' :key='index'>{{item}}</p>
          </div>
          <div class='w-1/2'>
            <p class='text-left pl-8' v-for='(item, index) in webSkill2' :key='index'>{{item}}</p>
          </div>
        </div>
      </div>
      <!-- card3 -->
      <div id="language" class='group md:w-1/4 w-full md:p-10 md:h-auto h-56 py-2
      md:mx-4 my-2 transform hover:-translate-y-4 transition-all text-gray-800'>
        <i class="fas fa-globe-americas md:text-4xl text-2xl text-green-500
        group-hover:text-yellow-400 transition-all"></i>
        <h2 class='md:my-4 mt-2 text-xl'>LANGUAGE</h2>
        <h3 class='relative mt-2 text-green-700 font-bold'>English</h3>
        <p>TOEIC - 940</p>
        <p>CEFR - C2 Proficient</p>
        <h3 class='relative md:mt-4 text-green-700 font-bold'>Japanese</h3>
        <p>JLPT N2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'thirdScene',
  data() {
    return {
      achievements: ['Tibame:最佳個人網站第一名', 'Google基礎數位行銷資格認證', '台大生科院院長獎'],
      webSkill1: ['HTML5', 'SCSS/CSS', 'JavaScript', 'jQuery', 'Vue.js', 'Tailwind CSS'],
      webSkill2: ['PHP', 'MySQL', 'AJAX/API', 'Eslint', 'Webpack', 'Git'],
    };
  },
});
</script>
<style scoped>
  #intro::after{
    content: '';
    display: block;
    position: absolute;
    width: 120px;
    height: 1.5px;
    background-color: #ccc;
    top: 50%;
    transform: translateY(-50%);
    right: -150px;
  }
  .block1{
    /* background: linear-gradient(5deg, transparent 50%, #F9FAFB 50%); */
    background: linear-gradient(5deg, transparent 50%, #111 50%);
  }
  .block2{
    /* background: linear-gradient(5deg, #F9FAFB 50%, transparent 50%); */
    background: linear-gradient(5deg, #111 50%, transparent 50%);
  }
  #scene3_Bg{
    background: url('../imgs/thirdBg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  #Achievements, #webSkill, #language{
    background-color: rgba(255, 255, 255, .8);
  }
</style>
