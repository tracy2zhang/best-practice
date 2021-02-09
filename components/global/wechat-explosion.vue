<template>
  <div class="wechat-explosion">
    <div class="chat">
      <div class="titleBar">与 XXX 聊天</div>
      <div class="panel" ref="panel">
        <div class="explosion" v-show="showExplosion">
          <Lottie ref="explosion" :data="lottieData.explosion" @end="finishExplosion" />
        </div>
        <div class="message" v-for="message in messageList" :key="message.id" :class="{ [message.side]: true, shake: shaking }">
          <i class="fas" :class="message.side === 'mine' ? 'fa-chess-knight' : 'fa-chess-queen'"></i>
          <p class="content" v-if="message.type === 'text'">
            <span>{{ message.content }}</span>
          </p>
          <p class="content" v-if="message.type === 'emojj'">
            <Lottie :data="message.content" autoplay />
          </p>
        </div>
      </div>
      <footer>
        <button class="chooseSticker" @click="toggleStickers">
          <i class="fas fa-grin"></i>
          <div class="stickers" v-show="showStickers" @click.stop>
            <Lottie :data="lottieData.bomb" @click.native="sendEmojj('bomb')" />
          </div>
        </button>
        <input
          v-model="msg"
          class="messageInput"
          type="text"
          name=""
          id=""
          placeholder="请输入聊天信息"
        />
        <button class="send" @click="sendMsg">发送</button>
      </footer>
    </div>
  </div>
</template>

<script>
import Lottie from '../base/lottie'
import BombData from '../../assets/lottie/bomb'
import ExplosionData from '../../assets/lottie/explosion'

let messageId = 0

export default {
  name: 'wechat-exlosion',
  components: { Lottie },
  data () {
    return {
      msg: '',
      showStickers: false,
      showExplosion: false,
      shaking: false,
      lottieData: Object.freeze({
        bomb: BombData,
        explosion: ExplosionData
      }),
      messageList: [
        {
          id: messageId++,
          side: 'mine',
          type: 'text',
          content: '你好'
        },
        {
          id: messageId++,
          side: 'yours',
          type: 'text',
          content: 'hi'
        },
        {
          id: messageId++,
          side: 'mine',
          type: 'text',
          content: '886'
        }
      ]
    }
  },
  methods: {
    toggleStickers () {
      this.showStickers = !this.showStickers
    },
    sendMsg () {
      if (this.msg) {
        this.messageList.push({
          id: messageId++,
          side: 'mine',
          type: 'text',
          content: this.msg
        })
        this.msg = ''
      }
      this.touchBottom()
    },
    sendEmojj (name) {
      this.showStickers = false
      this.messageList.push({
        id: messageId++,
        side: 'mine',
        type: 'emojj',
        content: this.lottieData[name]
      })
      if (name === 'bomb') {
        this.playExplosion()
      }
      this.touchBottom()
    },
    playExplosion () {
      this.showExplosion = true
      this.$refs.explosion.play()
      this.shake()
    },
    finishExplosion () {
      this.showExplosion = false
      this.$refs.explosion.stop()
    },
    shake () {
      this.shaking = true
      setTimeout(() => {
        this.shaking = false
      }, 1000)
    },
    touchBottom () {
      this.$nextTick(() => {
        this.$refs.panel.scrollTop = this.$refs.panel.scrollHeight
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .shake {
    animation: shake 0.8s ease-in-out;
  }
  @keyframes shake {
    from {
      transform: translate3d(0, 0px, 0px);
    }
    10% {
      transform: translate3d(6px, -6px, 0px);
    }
    20% {
      transform: translate3d(-5px, 5px, 0px);
    }
    30% {
      transform: translate3d(4px, -4px, 0px);
    }
    35% {
      transform: translate3d(-3px, 3px, 0px);
    }
    39% {
      transform: translate3d(2px, -2px, 0px);
    }
    41% {
      transform: translate3d(-1px, 1px, 0px);
    }
    42% {
      transform: translate3d(0px, 0px, 0px) rotate(20deg);
    }
    52% {
      transform: rotate(-15deg);
    }
    60% {
      transform: rotate(8deg);
    }
    65% {
      transform: rotate(-3deg);
    }
    67% {
      transform: rotate(1deg);
    }
    70% {
      transform: rotate(0deg);
    }
    to {
      transform: translate3d(0px, 0px, 0px) rotate(0);
    }
  }

  .wechat-explosion {
    --primary-color: hsl(200, 100%, 48%);
    --inverse-color: hsl(310, 90%, 60%);
    --shadow-large: 0 0 20px rgba(0, 0, 0, 0.2);
    --shadow-medium: 0 0 10px rgba(0, 0, 0, 0.1);
    display: grid;
    place-items: center;
    width: 100%;
    padding: 10px 0;
    background-color: hsl(0, 0%, 10%);
    .chat {
      width: 325px;
      height: 600px;
      background: hsl(0, 0%, 100%);
      border-radius: 8px;
      display: grid;
      grid-template-rows: max-content 1fr max-content;
      .titleBar {
        padding: 12px 0;
        text-align: center;
        box-shadow: var(--shadow-large);
      }
      .panel {
        display: flex;
        flex-direction: column;
        padding: 20px 12px;
        overflow: auto;
        .explosion {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .message {
        display: flex;
        align-items: center;
        max-width: 80%;
        font-size: 14px;
        margin: 8px 0;
        position: relative;
        transform-origin: left bottom;
        &.mine {
          flex-flow: row-reverse;
          align-self: flex-end;
          transform-origin: right bottom;
          i {
            margin-right: 0;
            margin-left: 12px;
          }
          .content {
            background-color: var(--primary-color);
            color: white;
          }
        }
        i {
          font-size: 20px;
          border-radius: 12px;
          margin-right: 12px;
        }
        .content {
          margin: 0;
          padding: 8px 12px;
          border-radius: 12px;
          box-shadow: var(--shadow-large);
          display: flex;
          align-items: center;
          & > .lottie-element {
            width: 36px;
            height: 36px;
          }
        }
      }
      footer {
        display: flex;
        align-items: center;
        padding: 12px;
        box-shadow: var(--shadow-large);
        .chooseSticker {
          position: relative;
          line-height: 1;
          i {
            font-size: 20px;
          }
        }
        .stickers {
          border-radius: 4px;
          background-color: white;
          box-shadow: var(--shadow-medium);
          padding: 6px;
          font-size: 24px;
          position: absolute;
          top: calc(-100% - 40px);
          & > .lottie-element {
            width: 40px;
            height: 40px;
          }
        }
        .messageInput {
          box-shadow: var(--shadow-medium);
          padding: 4px 12px;
          border-radius: 4px;
          width: 100%;
          margin: 0 6px;
        }
        .send {
          width: 100px;
          border-radius: 4px;
          padding: 4px 0;
          color: white;
          background-color: var(--inverse-color);
        }
      }
    }
  }
</style>
