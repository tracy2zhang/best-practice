<template>
  <div class="blur-emojj bg-blue-500">
    <div class="grid grid-cols-3 gap-4 p-4 shadow-lg rounded-xl backdrop-blur wrapper dropblur">
      <div class="relative w-24 h-24 flex-center rounded-lg shadow overflow-hidden" v-for="(emojj, i) in list" :key="i">
        <span class="relative z-1 text-5xl">{{ emojj }}</span>
        <span class="absolute text-9xl blur-transparent">{{ emojj }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blur-emojj',
  data () {
    return {
      list: ['😀', '❤️', '💎', '🚑', '🍉', '🍈', '😈', '🐂', '🍺']
    }
  }
}
</script>

<style lang="less" scoped>
  .blur-emojj {
    background: url("../../assets/img/city-night.jpg") 0 0/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
  .wrapper {
    background: rgba(255, 255, 255, .15);
  }
  .blur-transparent {
    filter: blur(20px) opacity(0.8);
  }
  .dropblur {
    backdrop-filter: blur(3px);
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .z-1 {
    z-index: 1;
  }
  .text-5xl {
    font-size: 3rem;
  }
  .text-9xl {
    font-size: 8rem;
  }
</style>
