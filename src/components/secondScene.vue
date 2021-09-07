<template>
    <div class='relative h-screen mx-auto overflow-hidden' id='scene2_Bg'>
      <div class="w-full h-full bg-black bg-opacity-70 absolute top-0 left-0"></div>
      <h1 class='absolute left-20 top-20 text-9xl text-gray-300 font-black md:block hidden'>01</h1>
      <h1 id='about' class='absolute transform left-20 -rotate-90  bottom-1/4 w-20
      text-gray-300 text-center text-xl tracking-widest md:block hidden'>INTRODUCTION</h1>
      <div class='flex flex-col w-full md:flex-row md:w-4/6
                  transform -translate-y-1/2 mx-auto relative top-1/2'>
        <!--  -->
        <div class='md:w-1/3 w-full flex flex-col justify-center'>
          <img class='relative block md:object-contain mx-auto w-72 rounded-full'
          src="../imgs/personalPic.jpg">
          <div class='text-gray-50 text-3xl md:mt-4 mt-2 '>
            <a href="https://www.linkedin.com/in/anyilee" target='_blank'>
              <i class="fab fa-linkedin text-3xl mx-4 hover:text-green-500"></i>
            </a>
            <a href="mailto:romanlee1116@gmail.com" target='_blank'>
              <i class="fas fa-envelope text-3xl mx-4 hover:text-green-500"></i>
            </a>
            <a href="https://github.com/romanlee821116" target='_blank'>
              <i class="fab fa-github text-3xl mx-4 hover:text-green-500"></i>
            </a>
          </div>
        </div>
        <!--  -->
        <div class='md:w-2/3 w-full md:pt-8'>
          <p class='relative text-left w-10/12 mx-auto md:my-8 my-4 text-gray-300'
          v-for='item in intro' :key='item.index'>
            {{item.txt}}
          </p>
          <div class='relative pt-6 w-10/12 mx-auto md:block hidden'>
            <i class="absolute fas fa-quote-left left-0 top-0 text-gray-300"></i>
            <h2 class='md:text-lg  text-gray-300 mb-2 text-center w-full'
              v-for='item in about' :key='item.index'>{{item.txt}}
            </h2>
            <!-- <i class="absolute right-0 bottom-0 fas fa-quote-right"></i> -->
          </div>
          <div class='group mt-4'>
            <a class='spot md:py-2 md:px-4 md:mt-6 md:mx-6 inline-block text-white md:w-32 mx-2 p-1
                      w-24 rounded-md bg-gray-50 bg-opacity-50 hover:bg-green-600
                      transform hover:-translate-y-2'
            href="#" v-for='(item, index) in spot' :key='item.id' @click='move(index)'>
            {{item.txt}}</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default ({
  name: 'secondScene',
  data() {
    return {
      about: [
        { txt: '擁有跨部門合作經驗，善於溝通協調、效率執行任務。', index: 0 },
        { txt: '理工科的背景，讓我得以各種角度、方法解決問題。', index: 1 }],
      intro: [
        { txt: '於今年三月至八月於緯育Tibame前端工程師養成班進修，學習Vue.JS及各項前、後端技術。期間完成個人及團體專題，個人專題榮獲最佳網站獎第一名，團體專題擔任組長，帶領五人團隊進行開發，並獲得歷屆專題完成度最高的好評。', indx: 0 },
        { txt: '過去擔任美商產品專員，需要與各國不同部門團隊溝通協商，也需要掌控專案流程進度，培養我團隊合作及如何有效率地處理工作上的進度及排程。於研究所期間，也訓練了我邏輯思考與解決問題的能力，這些經驗讓我得以多元的角度快速解決問題，也在程式學習上更快速上手。', index: 1 }],
      spot: [
        { txt: 'SKILLS', id: 0 },
        { txt: 'TRAINING', id: 1 },
        { txt: 'PROFOLIO', id: 2 }],
    };
  },
  methods: {
    move(index) {
      this.$emit('movepage', index);
    },
  },
});
</script>
<style scoped>
  #scene2_Bg{
    background: url('../imgs/bg-1.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  #about::after{
    content: '';
    display: block;
    position: absolute;
    width: 120px;
    height: 1.5px;
    background-color: #ccc;
    top: 50%;
    transform: translateY(-50%);
    right: -220px;
  }
  .spot:hover{
    /* transform: translateY(-5px); */
    transition: .3s;
  }
</style>
