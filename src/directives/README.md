# segma-directives

## 安装依赖
```
npm install segma-directives --save
```

### 配置
```
src/plugins/directives/index.js

import onlyNumber from 'segma-directives/lib/only_number';
const directives = [
    //此处加入指令
    {
        name: 'number',
        directive: number
    }
];

```
