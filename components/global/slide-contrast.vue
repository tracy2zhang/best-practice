<template>
  <div class='container' ref="container">
    <div class='img background-img'></div>
    <div class='img foreground-img'></div>
    <input type="range" min="1" max="1000" value="500" class="slider" name='slider' id="slider" @input="handleSlide">
    <div class="slider-button"></div>
  </div>
</template>

<script>
  export default {
    name: 'slide-contrast',
    methods: {
      handleSlide (e) {
        this.$refs.container.style.setProperty('--percent', e.target.value / 10 + '%')
      }
    }
  }
</script>

<style lang="less" scoped>
  @height: 300px;

  .container {
    --percent: 50%;
    position: relative;
    height: @height;
    border: 2px solid white;
  }
  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .background-img {
    background-image: url('../../assets/1280_720.jpg');

  }
  .foreground-img {
    background-image: url('../../assets/1280_720.jpg');
    filter: grayscale(80%);
    width: 100%;
    clip-path: inset(0 calc(100% - var(--percent)) 0 0);
  }
  .slider {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.2);
    outline: none;
    margin: 0;
    transition: all .2s;
    cursor: pointer;
  }
  .slider:hover {
    background: rgba(255,255,255,.1);
  }
  .slider::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;
    width: 2px;
    height: @height;
    background: white;
  }
</style>
