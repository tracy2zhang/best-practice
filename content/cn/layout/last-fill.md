---
title: 流式等分
category: 页面布局
position: 1
---

## 说明
有未知数量m个元素排列，每行固定n（已知n的数量，如：4）个，每个元素宽度相等（100%/n），如果最后一行只有一个元素，则该元素占满全行

## 效果
* 20个
<last-fill :count="20"></last-fill>
* 21个
<last-fill :count="21"></last-fill>

## 代码
```vue{1,3-5}
file(components/global/last-fill.vue)
```
