<template>
  <div class="last-fill">
    <div class="wrapper">
      <div class="item-box" v-for="n in count" :key="n">
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 20
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    .item-box {
      display: inline-block;
      width: ~"calc(100% / 4)";
      padding: 5px;
      vertical-align: top;
      .item {
        background: #0092ff;
        height: 30px;
        border-radius: 0;
      }
      // 关键在这里！
      &:nth-child(4n + 1):last-child {
        width: 100%;
      }
    }
  }
</style>
