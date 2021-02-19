<template>
  <div class="svg-animation">
    <svg-icon className="svg-icon" iconClass="alcohol"></svg-icon>
    <p>
      <button @click="play">play</button>
    </p>
  </div>
</template>

<script>
import SvgIcon from '../base/svg-icon'

export default {
  name: 'svg-animation',
  components: { SvgIcon },
  methods: {
    play () {
      const tl = gsap.timeline()
      tl.from(
        ['#icon-alcohol > path:nth-child(24)', '#icon-alcohol > path:nth-child(25)'],
        { scale: 2, rotateZ: '-720deg', opacity: 0, duration: 2, transformOrigin: 'center' }
      )
      tl.from(
        ['#icon-alcohol > path:nth-child(17)', '#icon-alcohol > path:nth-child(18)'],
        { scale: 0.5, rotateZ: '720deg', opacity: 0, duration: 2, ease: Bounce.easeOut, transformOrigin: 'center' }
      )
    }
  }
}
</script>

<style lang="less" scoped>
  .svg-animation {
    padding: 20px;
    text-align: center;
  }
  .svg-icon {
    width: 200px;
    height: 200px;
  }
  button {
    border: 1px solid #efefef;
    padding: 5px 10px;
    border-radius: 4px;
  }
</style>
