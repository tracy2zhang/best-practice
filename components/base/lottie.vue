<template>
  <div class="lottie-element" ref="lottie" @mouseenter="play" @mouseleave="stop"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  name: 'lottie-element',
  props: {
    autoplay: Boolean,
    loop: Boolean,
    data: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.player = lottie.loadAnimation({
      container: this.$refs.lottie,
      renderer: 'svg',
      loop: this.loop,
      autoplay: this.autoplay,
      animationData: this.data
    })
    this.player.addEventListener('complete', () => {
      this.$emit('end')
    })
  },
  beforeDestroy () {
    this.player.destroy()
  },
  methods: {
    play () {
      this.player.play()
    },
    stop () {
      this.player.stop()
    }
  }
}
</script>

<style lang="less" scoped>
  .lottie-element {
    display: inline-block;
  }
</style>
