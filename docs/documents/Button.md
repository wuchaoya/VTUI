# Button
---

## 用法
```js
import { Button} from "@/components";

<div>
       <Button disabled>default disabled</Button>
        <Button type="primary">primary</Button>
        <Button type="ghost" inline size='small'>warning</Button>
        <Button loading>loading button</Button>
</div>        

```

## API

### props

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设  |   string   |   -  |
| size    | 按钮大小，可选值为`large`、`small` | string | `large`|
| activeStyle  | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {} |
| activeClassName  | 点击反馈的自定义类名 | string |  |
| disabled   | 设置禁用  | boolean |    false  |
| nativeClick    | 点击按钮的点击回调函数 | (e: Object): void |   无  |
| style    | 自定义样式 |   Object  | 无 |
| inline     | 是否设置为行内按钮  | boolean |   false  |
| loading	   | 设置按钮载入状态	  | boolean	 | false |
| icon  | 可以是组件里内置的某个 icon 的 type 值，也可以是任意合法的 Element (注意: `loading`设置后此项设置失效) | `string`/`Element` | -  |
| prefixCls |  class前缀 | string | `vt-button` |
| className |  样式类名 | string | 无 |
