<template>
  <div class="chat">
    <div class="titleBar">与 XXX 聊天</div>
    <div class="panel">
      <div class="message mine">
        <i class="fas fa-book"></i>
        <p><span>你好</span></p>
      </div>
      <div class="message yours">
        <i class="fas fa-book"></i>
        <p><span>Hi</span></p>
      </div>
      <!-- 省略其它消息 -->
    </div>
    <footer>
      <button class="chooseSticker">
        <i class="fas fa-book"></i>
        <div class="stickers"></div>
      </button>
      <input
        class="messageInput"
        type="text"
        name=""
        id=""
        placeholder="请输入聊天信息"
      />
      <button class="send">发送</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'wechat-exlosion'
}
</script>

<style lang="less" scoped>

</style>
