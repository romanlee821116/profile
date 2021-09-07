<template>
  <div class='w-full h-screen overflow-hidden text-gray-300 pb-4 relative' id='fourScene1'>
    <div class='w-full h-full absolute top-0 left-0 bg-black bg-opacity-80'></div>
    <h1 class='absolute left-20 top-20 text-9xl text-gray-300 font-black md:block hidden'>04</h1>
    <h1 id='experiences' class='absolute transform left-20 -rotate-90 bottom-1/4 w-20
    text-gray-300 text-center text-xl tracking-widest md:block hidden'>EXPERIENCES</h1>
    <div class="relative md:pl-24 px-4 md:w-9/12 w-full mx-auto
                text-left md:pt-10 text-sm md:text-base">
      <p class='relative md:mt-8 mt-4 text-sm text-white
              bg-gray-50 bg-opacity-50 w-44 p-2 text-center'>
        Dec, 2019 - Feb, 2021
      </p>
      <div class="flex md:flex-row flex-col md:mt-8 leading-loose">
        <div class='logo md:w-1/6 w-1/4 mx-auto my-4 md:my-0'>
          <img class='w-40 mx-auto' src="../imgs/company_1.png">
        </div>
        <div class='md:w-5/6 md:pl-12 px-2'>
          <h2 class='md:text-xl text-base font-bold'>美商欣科寶利台灣分公司 - 產品專員</h2>
          <ul>
            <li class='list-disc' v-for='(item, index) in job' :key='index'>{{item}}</li>
          </ul>
        </div>
      </div>
      <p class='relative md:mt-12 mt-4 text-sm text-white
              bg-gray-50 bg-opacity-50 w-44 p-2 text-center'>
        Jul, 2016 - Aug, 2018
      </p>
      <div class="flex md:flex-row flex-col md:mt-8 leading-loose">
        <div class='md:w-1/6 w-1/4 mx-auto my-4 md:my-0'>
          <img class='md:w-20 h-auto w-12 mx-auto' src="../imgs/emblem_1.png">
        </div>
        <div class='md:w-5/6 md:pl-12 px-2'>
          <h2 class='md:text-xl text-base font-bold'>國立臺灣大學 - 分子與細胞生物學研究所  碩士</h2>
          <ul class='list-disc'>
            <li>第三名院長獎成績畢業</li>
            <li>2018生科院壁報競賽優勝</li>
          </ul>
        </div>
      </div>
      <p class='relative md:mt-12 mt-4 text-sm text-white
      bg-gray-50 bg-opacity-50 w-44 p-2 text-center'>
        Sep, 2012 - Jul, 2016
      </p>
      <div class="flex md:flex-row flex-col md:mt-8 leading-loose">
        <div class='md:w-1/6 w-1/4 mx-auto my-4 md:my-0'>
          <img class='md:w-20 h-auto w-12 mx-auto' src="../imgs/emblem_2.png">
        </div>
        <div class='md:w-5/6 md:pl-12 px-2'>
          <h2 class='md:text-xl text-base font-bold'>國立中興大學 - 生物科技學士學位學程  學士</h2>
          <ul class='list-disc'>
            <li>系學會副會長</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'fourthScene1',
  data() {
    return {
      job: [
        '生物類產品推廣 : 負責生命科學類產品推廣。任職期間成功將主線GMP等級產品首次引入中國市場，客戶為中國前10大生藥公司',
        '亞太區產品銷售 : 負責亞太區客戶服務，包含訂單處理、貿易問題協助、代表美國總公司解決客戶疑問。',
        '專案管理 : 各貿易案進度追蹤、流程控制，進出口報關文件、保密協議、質量協議簽署。',
      ],
    };
  },
};
</script>
<style scoped>
  #fourScene1{
    background: url('../imgs/bg.jpeg');
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
  }
  #experiences::after{
    content: '';
    display: block;
    position: absolute;
    width: 120px;
    height: 1.5px;
    background-color: #ccc;
    top: 50%;
    transform: translateY(-50%);
    right: -200px;
  }
</style>
