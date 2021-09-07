<template>
  <div id='fourthScene' class='w-full h-screen overflow-hidden relative
                  text-gray-300 md:pt-16 pt-4 md:text-base text-sm'>
    <div class='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
    <h1 class='absolute left-20 top-20 text-9xl text-gray-300 font-black md:block hidden'>03</h1>
    <h1 id='training' class='absolute transform left-20 -rotate-90  bottom-1/3 w-20
    text-gray-300 text-center text-xl tracking-widest md:block hidden'>TRAINING</h1>
    <div class="md:pl-16 px-4 md:w-4/6 w-full h-full mx-auto text-left relative">
      <p class='relative text-sm text-white bg-gray-50 bg-opacity-50 w-44 p-2 text-center'>
        Mar, 2021 - Aug, 2021
      </p>
      <div class="flex md:flex-row flex-col md:mt-8 leading-loose">
        <div class='logo md:w-1/6 w-1/2 mx-auto'>
          <img class='w-full' src="../imgs/company_2.png">
        </div>
        <div class='md:w-5/6 md:pl-12'>
          <h2 class='md:text-xl text-base font-bold'>緯育Tibame - Web/App前端工程師養成班  學員</h2>
          <h3 class='font-medium mt-2 md:text-lg text-base text-green-600'>
            個人專題 :  SOFUBI STUDIO - 設計師玩具平台</h3>
          <p>獨自完成UI設計、網站製作(含RWD)、功能撰寫等前端開發，成果榮獲最佳個人網站獎第一名。</p>
          <div class="flex">
            <img class='w-1/3 h-auto mt-2 md:mr-2 shadow'
                v-for='(item, index) in imgPerson' :key='index' :src="item">
          </div>
          <br>
          <h3 class='font-medium mt-2 md:text-lg text-base text-green-600'>
            團體專題 :  小春堂 - 日式和菓子專門店</h3>
          <p>擔任組長，帶領5人團隊開發、保持專案在每次驗收皆擁有高完整度。
            期間積極與組員溝通、整合團隊意見，並協助各頁面功能優化、解決JS, PHP技術困難。主要工作內容還包含 :</p>
          <ul>
            <li v-for='(item, index) in experience' :key='index'>{{item}}</li>
          </ul>
          <div class="flex h-32">
            <img class='w-1/3 md:h-auto h-16 mt-2 md:mr-2 shadow'
                v-for='(item, index) in imgGroup' :key='index' :src="item">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'fourthScene',
  data() {
    return {
      experience: ['- 制定開發規則、專案分工、手機版mockup設計、資料庫規劃。',
        '- 金物流API、後端資料庫串接經驗、結帳流程功能優化。',
        '- 使用Vue.js於首頁、客製化、關於我們頁面的動畫/切版/功能開發。'],
      imgPerson: [require('../imgs/exp0.png'), require('../imgs/exp1.png'), require('../imgs/exp2.png')],
      imgGroup: [require('../imgs/exp4.png'), require('../imgs/exp8.png'), require('../imgs/exp9.png')],
    };
  },
};
</script>
<style scoped>
  #fourthScene{
    background: url('../imgs/bg-3.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  #training::after{
    content: '';
    display: block;
    position: absolute;
    width: 120px;
    height: 1.5px;
    background-color: #ccc;
    top: 50%;
    transform: translateY(-50%);
    right: -160px;
  }
  .spot{
    left: -76px;
  }
</style>
