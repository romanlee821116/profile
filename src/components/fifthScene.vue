<template>
  <div id='fifthScene' class='w-full h-full relative'>
    <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
    <h1 class='absolute left-20 top-20 text-9xl text-gray-300 font-black md:block hidden'>05</h1>
    <h1 id='profolio' class='absolute transform left-20 -rotate-90  bottom-1/3 w-20
    text-gray-300 text-center text-xl tracking-widest md:block hidden'>PROFOLIO</h1>
    <div class='md:w-5/6 mx-auto text-gray-300 relative top-1/2 transform -translate-y-1/2'>
      <div class="container flex justify-center mx-auto pt-8">
        <div class='profolioCard relative mx-4 projectCard flex md:flex-row flex-col justify-end'
            v-for='(item, index) in protfolio' :key='index'>
          <img class='md:w-5/12' :src='item.src'>
          <div class='md:w-5/12 text-gray-300 text-center md:px-4'>
            <h2 class='font-bold text-xl mt-20'>{{item.slogan}}</h2>
            <p class='mt-2 '>{{item.txt}}</p>
            <p class='mt-2'>{{item.tools}}</p>
            <a class='rounded-xl bg-gray-50 bg-opacity-50
            px-4 py-2 mt-8 block w-32 mx-auto hover:bg-green-700'
              :href='item.url'>VIEW MORE</a>
          </div>
        </div>
      </div>
      <div class='flex justify-center'>
        <a href="#" v-for='(item, index) in protfolio' :key='index' @click='change(index)'>
          <img :src='item.src' class='w-20 mx-8 pt-8 backdrop-grayscale cardIndex'>
        </a>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable no-undef */
export default {
  name: 'fifthScene',
  data() {
    return {
      protfolio: [
        {
          src: require('../imgs/pic1.png'),
          slogan: '小春堂-日式和菓子專門店',
          txt: '小春堂是販售日式和菓子並提供客製化禮盒的電商平台。',
          tools: 'JS / Vue.js / SCSS / PHP / MySQL / Git / jQuery / AJAX',
          url: 'https://tibamef2e.com/tfd102/project/g3/page/homepage.html',
        },
        {
          src: require('../imgs/pic2.png'),
          slogan: 'SOFUBI STUDIO',
          txt: 'SOFUBI STUDIO是結合個人興趣，提供玩具販售、設計師介紹，致力於推廣玩具文化的網路平台。',
          tools: ' HTML5 / CSS / JS / jQuery / Bootstrap',
          url: 'https://reurl.cc/NrWr8p',
        },
        {
          src: require('../imgs/pic3.png'),
          slogan: 'AnYi Profile',
          txt: '個人介紹網頁，使用Vue-cli, Tailwind CSS架構',
          tools: ' Vue-cli / Tailwind CSS / JS',
          url: '#',
        },
      ],
      index: 1,
    };
  },
  methods: {
    couresol() {
      $('.profolioCard').hide();
      $('.profolioCard').eq(0).show();
      $('.cardIndex').css('filter', 'grayscale(100%)');
      $('.cardIndex').eq(0).css('filter', 'grayscale(0%)');
      setInterval(() => {
        $('.profolioCard').hide();
        $('.profolioCard').eq(this.index).fadeIn();
        $('.cardIndex').css('filter', 'grayscale(100%)');
        $('.cardIndex').eq(this.index).css('filter', 'grayscale(0%)');
        this.index += 1;
        if (this.index === 3) {
          this.index = 0;
        }
      }, 5000);
    },
    change(index) {
      this.index = index;
      $('.profolioCard').hide();
      $('.profolioCard').eq(this.index).fadeIn();
      $('.cardIndex').css('filter', 'grayscale(100%)');
      $('.cardIndex').eq(this.index).css('filter', 'grayscale(0%)');
      if (index === 2) {
        this.index = 0;
      } else {
        this.index += 1;
      }
    },
  },
  mounted() {
    this.couresol();
  },
};
</script>
<style scoped>
  #fifthScene{
    background: url('../imgs/bg-2.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  #profolio::after{
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
</style>
