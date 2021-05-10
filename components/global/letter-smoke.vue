<template>
  <div class="letter-smoke">
    <p class="sentence" ref="container">
      <span :class="{ letter: letter.trim() !== '' }" v-for="(letter, index) in sentence" :key="index">{{ letter }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'letter-smoke',
  mounted () {
    this.$refs.container.addEventListener('mouseover', e => {
      if (e.target.textContent.trim() !== '' && e.target.classList.contains('letter')) {
        e.target.classList.add('active')
      }
    })
  },
  data () {
    return {
      sentence: 'Pixi’s API is actually a refinement of a well-worn and battle-tested API pioneered by Macromedia/Adobe Flash. Old-skool Flash developers will feel right at home. Other current sprite rendering frameworks use a similar API: CreateJS, Starling, Sparrow and Apple’s SpriteKit. The strength of Pixi’s API is that it’s general-purpose: it’s not a game engine. That’s good because it gives you total expressive freedom to make anything you like, and wrap your own custom game engine around it.'
    }
  },
  computed: {
    letters () {
      return this.letter.split('')
    }
  },
  methods: {
    replay () {
      const _letter = this.letter
      this.ended = false
      this.letter = ''
      this.$nextTick(() => {
        this.letter = _letter
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .letter-smoke {
    padding: 30px;
    .sentence {
      position: relative;
      max-width: 800px;
      font-weight: 600;
      .letter {
        font-size: 18px;
        display: inline-block;
        cursor: default;
        transition: 2s all ease;
        &.active {
          opacity: 0;
          filter: blur(30px);
          transform: translate(300px, -300px) scale(4) rotate(720deg);
        }
      }
    }
  }
</style>
