---
category: Components
title: 时间格式化 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示猫店链接
group: # 分组
  title: 工具函数 # 所在分组的名称
  order: 3 # 分组排序，值越小越靠前
---

# formatTime

## 介绍

将时间戳格式化为指定的日期时间格式

## 示例

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/base.tsx">基础用法</code>

## 参数

<!-- 会形成api表格 -->

| 参数名    | 类型   | 默认值                | 必填  | 说明                                                 |
| --------- | ------ | --------------------- | ----- | ---------------------------------------------------- |
| timestamp | number | -                     | true  | 要格式化的时间戳，单位为毫秒                         |
| format    | string | 'YYYY-MM-DD hh:mm:ss' | false | 要格式化的时间日期格式，默认为 'YYYY-MM-DD hh:mm:ss' |

## 返回值

类型: string
格式化的日期时间字符串
