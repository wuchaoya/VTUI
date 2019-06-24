# NavBar
---

## 用法
```js
import { NavBar, Icon} from "@/components";

<div>
       <NavBar
                 mode="dark"
                 leftContent="Back"
                 rightContent={[
                   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                   <Icon key="1" type="ellipsis" />,
                 ]}
               >NavBar</NavBar>
</div>        

```

## API

### props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode   | 模式   | string |  'dark' enum{'dark', 'light'} |
| icon   | 出现在最左边的图标占位符  | ReactNode |  - |
| leftContent   | 导航左边内容      | any |    无  |
| rightContent   | 导航右边内容      | any |    无  |
| onLeftClick   | 导航左边点击回调      | (e: Object): void |    无  |
