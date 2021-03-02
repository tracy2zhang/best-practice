<template>
  <div ref="banner" class="bilibili-banner">
    <div class="cover" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @mousemove="onMouseMove"></div>
    <div class="layer bg">
      <img class="morning" src="../../assets/img/bilibili/bilibili_bg_1.jpg" alt="">
      <img class="afternoon" src="../../assets/img/bilibili/bilibili_bg_2.jpg" alt="">
      <video autoplay loop muted class="evening">
        <source src="../../assets/video/bilibili_bg_v.webm" type="video/webm" />
      </video>
    </div>
    <div class="layer tree">
      <img class="morning" src="../../assets/img/bilibili/bilibili_tree_1.png" alt="">
      <img class="afternoon" src="../../assets/img/bilibili/bilibili_tree_2.png" alt="">
      <img class="evening" src="../../assets/img/bilibili/bilibili_tree_3.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'bilibili-banner',
  mounted () {
    this.startingPoint = 0
    this.clientWidth = this.$refs.banner.clientWidth
  },
  methods: {
    onMouseEnter (e) {
      this.startingPoint = e.offsetX
    },
    onMouseLeave (e) {
      this.$refs.banner.style.setProperty('--percentage', 0.5)
    },
    onMouseMove (e) {
      const percentage = (e.offsetX - this.startingPoint) / this.clientWidth + 0.5
      this.$refs.banner.style.setProperty('--percentage', percentage)
    }
  }
}
</script>

<style lang="less" scoped>
  .bilibili-banner {
    --percentage: 0.5;
    margin: 20px 0;
    position: relative;
    padding: 0;
    height: 60px;
    overflow: hidden;
    transform: translate3d(0);
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
    }
    &:hover {
      .layer, .afternoon, .evening {
        transition: none;
      }
    }
    .layer {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: ~"translatex(calc(var(--percentage) * -50px))";
      transition: .2s all ease-in;
      &.tree {
        transform: ~"translatex(calc(var(--percentage) * -50px))";
        filter: blur(2px);
      }
      img, video {
        position: absolute;
        width: 120%;
        max-width: 120%;
        height: 100%;
        margin: 0;
        object-fit: cover;
        transition: .2s all ease-in;
      }
      .afternoon {
        opacity: ~"calc((var(--percentage) - 0.2) / 0.2)";
      }
      .evening {
        opacity: ~"calc((var(--percentage) - 0.6) / 0.2)";
      }
    }
  }
</style>
