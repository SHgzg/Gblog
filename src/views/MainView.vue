<template>
  <div class="about"> 
    <h2>blingbling<br />我们的小窝</h2>
    <div class="background">
      <span>Wei</span>
    </div>
    <h2>
        In winter, it is covered with snow and snow. When you climb to Jinding, you can see far and wide, and the
        scenery is very magnificent; West overlooking Aiai snow peak, Gongga Mountain and Wawu mountain, the mountains
        connect the sky; Looking south at the top of Ten Thousand Buddhas, the clouds are rolling and the momentum is
        magnificent; A panoramic view of the Pingchuan River in the north is as beautiful as a shop, with a panoramic
        view of the Dadu River and Qingyi River
    </h2>
  </div>
</template>

<script lang="ts">
</script>

<style scoped lang="scss">
  .background {
            background-image: url("../assets/img/mountain.jpg");
            background-size: cover;
            background-position: 50% 50%;
            height: 200vh;
            font: 900 39rem '';
            line-height: 130vh;
            -webkit-text-fill-color: transparent;
            position: relative;
            text-align: center;
            overflow: hidden;
        }

        .background::before {
            content: '';
            background-size: cover;
            background-image: inherit;
            background-position: 50% 50%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -99;
        }

        h1 {
            position: absolute;
            text-align: center;
            width: 100%;
            letter-spacing: 10px;
            color: #fff;
        }

        h2 {
            position: absolute;
            letter-spacing: 2px;
            top: 120vh;
            width: 60%;
            color: #fff;
            left: 50%;
            transform: translateX(-50%);
            padding: 30px;
            background-color: rgba(0, 0, 0, .3);
        }
  </style>
