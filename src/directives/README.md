# segma-directives

## 安装依赖
```
npm install segma-directives --save
```

### 配置
```
src/plugins/directives/index.js

import onlyNumber from 'segma-directives/lib/only_number';
import segmaLoading from 'segma-directives/lib/segma_loading';
const directives = [
    {
        name: 'number',
        directive: number
    },
    {
        name: 'segma-loading',
        directive: segmaLoading
    }
];

```
