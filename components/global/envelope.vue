<template>
  <div class="envelope">
    <div class="h1">SEND A MESSAGE</div>
    <div class="form-wrapper">
      <form action="">
        <div class="h2">HELLO JOHN,</div>
        <label for="email">Your Message:</label>
        <textarea name="message" id="message" cols="30" rows="3" value="Your Message"></textarea>
        <label for="name">Name:</label>
        <input type="text" name="name" value="" />
        <label for="email">Email:</label>
        <input type="text" name="email" value="" />
        <input type="submit" name="submit" value="THANKS">
      </form>
    </div>
  </div>
</template>

<style scoped lang="less">
  @transition: all .5s ease-in-out .2s;
  .envelope {
    background: #eee;
    padding: 50px 0;
    .h1 {
      margin-bottom: 20px;
      text-align: center;
      font-size: 36px;
      color: #000;
      font-weight: bold;
    }
    .h2 {
      margin: 10px 0;
      font-size: 20px;
      color: #000;
      font-weight: bold;
    }
  }
  .form-wrapper {
    margin: 0 auto;
    width: 500px;
    height: 620px;
    position: relative;
    top: 0;
    transition: @transition;
    &.hide {
      &::after, &::before {
        display: none;
      }
    }
    &:hover {
      form {
        top: 0;
        height: 500px;
        & > label, textarea, input {
          z-index: 1;
        }
        input[type=submit] {
          opacity: 1;
          transition: opacity .5s ease-in-out 1s;
        }
      }
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 128px;
      left: 0;
      background: url('../../assets/img/envelope/envelope-before.png') center center no-repeat;
      background-size: cover;
      width: 500px;
      height: 300px;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: url('../../assets/img/envelope/envelope-after.png') center center no-repeat;
      background-size: cover;
      width: 500px;
      height: 300px;
    }
    form {
      background: #fff;
      position: relative;
      top: 250px;
      overflow: hidden;
      width: 400px;
      height: 250px;
      margin: 0 auto;
      padding: 16px;
      border: 1px solid transparent;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      border-radius: 3px;
      transition: @transition;
      background: url('../../assets/img/envelope/envelope-bg.png');
      label {
        margin: 10px 20px 0 0;
        font-size: 14px;
        color: gray;
        text-transform: uppercase;
      }
      input[type=text], textarea {
        font: 14px normal uppercase, arial, serif;
        color: dimgray;
        background: none;
        width: 100%;
        padding: 0 10px;
        margin: 0 auto 10px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      input[type=text] {
        height: 40px;
      }
      textarea {
        padding: 10px;
      }
      input[type=submit] {
        position: relative;
        font-size: 24px;
        color: gray;
        width: 100%;
        text-align: center;
        opacity: 0;
        background: none;
        cursor: pointer;
        border-radius: 3px;
        transition: opacity .5s ease-in-out;
      }
    }
  }
</style>
