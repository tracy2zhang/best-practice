<template>
  <div class="typing">
    <h1 ref="container" :class="{ ended }">
      <span class="letter" v-for="(letter, i) in letters" :key="i" :style="{ animationDelay: i * 0.2 + 's' }">{{ letter }}</span>
    </h1>
    <div>
      <button @click="replay">重新播放</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'typing',
  mounted () {
    this.$refs.container.addEventListener('animationend', e => {
      if (e.target === this.$refs.container.querySelector('.letter:last-child')) {
        this.ended = true
      }
    })
  },
  data () {
    return {
      word: 'learning',
      ended: false
    }
  },
  computed: {
    letters () {
      return this.word.split('')
    }
  },
  methods: {
    replay () {
      const _word = this.word
      this.ended = false
      this.word = ''
      this.$nextTick(() => {
        this.word = _word
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @keyframes cursor {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes text {
    from {
      width: 0ch;
    }
    to {
      width: 1ch;
    }
  }

  .typing {
    --font-size: 20px;
    padding: 30px;
    text-align: center;
    h1 {
      position: relative;
      display: inline-block;
      font-family: monospace;
      font-size: 6rem;
      font-weight: 500;
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      .letter {
        width: 0;
        display: inline-block;
        overflow: hidden;
        animation: 0.1s text ease forwards;
      }
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        right: -10px;
        width: 6px;
        height: 6rem;
        margin-left: 10px;
        background: currentColor;
        border-radius: 2px;
      }
      &.ended::after {
        animation: 1.1s cursor steps(2, jump-none) infinite;
      }
    }
  }
</style>
