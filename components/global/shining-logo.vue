<template>
  <div class="shining-logo">
    <div class="wrapper">
      <i class="fab" :class="'fa-' + logo"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shining-logo',
  props: {
    logo: String
  }
}
</script>

<style lang="less" scoped>
  @keyframes hua {
    0% {
      filter: hue-rotate(0deg)
    }
    100% {
      filter: hue-rotate(360deg)
    }
  }
  .wrapper {
    padding: 150px 0;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .fab {
      @shadow-color: #0f0;
      font-size: 120px;
      color: #fff;
      text-shadow: 0 0 50px @shadow-color,
                    0 0 250px @shadow-color,
                    0 0 5000px @shadow-color;
      animation: hua 5s linear infinite;
    }
  }
</style>
