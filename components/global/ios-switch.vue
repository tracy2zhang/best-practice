<template>
  <div class="wrapper">
    <span class="switch">
      <label>
        <input type="checkbox">
        <span class="switch-wrapper"></span>
      </label>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ios-switch'
}
</script>

<style lang="less" scoped>
  @button-height: 40px;
  @button-width: @button-height * 1.75;
  @toggle-shadow-offset: (@button-height / 10);
  @toggle-diameter: @button-height - @toggle-shadow-offset * 2;
  @button-toggle-offset: ((@button-height - @toggle-diameter) / 2);
  @active-add-width: (@button-height / 7.5);
  @color-gray: #e9e9ea;
  @color-dark-gray: #39393d;
  @color-green: #30d158;

  .wrapper {
    background: #fff;
    padding: 100px 20px;
    text-align: center;
  }

  @media (prefers-color-scheme: dark) {
    .wrapper {
      background: black;
    }
    .switch {
      input[type="checkbox"] + span {
        background: @color-dark-gray;
      }
    }
  }

  .switch {
    input[type="checkbox"] {
      display: none;
    }
    input[type="checkbox"]:checked + span {
      background-color: @color-green;
      &::after {
        transform: translateX(@button-width - @toggle-diameter - @toggle-shadow-offset);
      }
    }
    input[type="checkbox"]:active {
      & + span::after {
        width: @toggle-diameter + @active-add-width;
      }
      &:checked + span::after {
        transform: translateX(@button-width - @toggle-diameter - @toggle-shadow-offset - @active-add-width);
      }
    }
  }

  .switch-wrapper {
    display: inline-block;
    width: @button-width;
    height: @button-height;
    background: @color-gray;
    border-radius: (@button-height / 2);
    position: relative;
    text-align: left;
    cursor: pointer;
    transition: .3s all ease-in-out;
    &::after {
      position: absolute;
      top: @toggle-shadow-offset;
      content: "";
      display: inline-block;
      width: @toggle-diameter;
      height: @toggle-diameter;
      background: #fff;
      border-radius: (@toggle-diameter / 2);
      transform: translateX(@toggle-shadow-offset);
      box-shadow: @toggle-shadow-offset 0 @toggle-shadow-offset * 4 rgba(0, 0, 0, 0.1);
      transition: .3s all ease-in-out;
    }
  }
</style>
