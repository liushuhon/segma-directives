## 简介
西格马指令库，目前包含了v-number指令和loading指令，方便开发者使用。

## 仓库地址
https://github.com/liushuhon/segma-directives

## 快速开始
### 1.安装
```shell script
npm i @segma/segma-directives --save
```

### 2.配置

```vue
src/plugins/directives/index.js

import { segmaLoading, inputNumber } from '@segma/segma-directives';

const directives = [
    segmaLoading,
    inputNumber
];

export default {
    install(vue) {
        directives.forEach(d => {
            vue.directive(d.name, d.directive);
        });
    }
};
```


## 快速使用

**1. segmaLoading** 

加载动画指令

**使用**

```vue
<div class="loading"
     v-segma-loading="true"
     segma-loading-background="gray"
     segma-loading-text="我是一个loading">
</div>
```

**说明**

v-segma-loading:  一般由一个Boolean型变量控制

segma-loading-background:  自定义loading背景颜色, 默认为rgba(255, 255, 255, 0.65)

segma-loading-text:  自定义loading文字,  默认为空


**2. onlyNumber**

数字输入框指令

**使用**

```vue
<el-input v-number="{ max: 10, min: 0, precision: 2}"
          v-model="number">
</el-input>
```

**说明**

max: 最大值配置

min: 最小值配置

precision: 最大小数位数配置

## 打包

npm run rollupbuild
