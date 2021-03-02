<template>
  <div class="cyberpunk-button">
    <button>available now</button>
  </div>
</template>

<style lang="less" scoped>
  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }
    
    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }
    
    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }
    
    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }
    
    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }
    
    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }
    
    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }
    
    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }
    
    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }
    
    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }
    
    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }

  .cyberpunk-button {
    text-align: center;
    padding: 20px 0;
    button {
      position: relative;
      &:hover::before{
        animation: glitch 1s;
        animation-timing-function: steps(2, end)
      }
    }
    button, button::before {
      text-transform: uppercase;
      width: 320px;
      height: 66px;
      line-height: 66px;
      font-size: 26px;
      font-weight: bold;
      font-family: 'Operator Mono';
      background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
      color: #fff;
      border: none;
      letter-spacing: 2px;
      box-shadow: 6px 0 0 #00E6F6;
      outline: transparent;
    }
    button::before {
      --slice-0: inset(50% 50% 50% 50%);
      --slice-1: inset(80% -6px 0 0);
      --slice-2: inset(50% -6px 30% 0);
      --slice-3: inset(10% -6px 85% 0);
      --slice-4: inset(40% -6px 43% 0);
      --slice-5: inset(80% -6px 5% 0);
      position: absolute;
      content: "available now";
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
      text-shadow: -3px -3px 0 #F8F005, 3px 3px #00E6F6;
      clip-path: var(--slice-0);
    }
  }
</style>
