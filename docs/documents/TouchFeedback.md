# TouchFeedback
---

## 用法

```js
import { Button, TouchFeedback } from "@/components";

<TouchFeedback activeClassName="acitve" activeStyle={{ color: 'red'}} disabled={false}>
     <button class="button">按钮</button>
</TouchFeedback>

```

## API

### props

| 属性        | 说明          | 类型   | 默认值    |
|-------------|------------------------|--------|------------|
| disabled     |     设置禁用                | boolean | false |
| activeClassName | 点击反馈的自定义类名 | string |  - |
| activeStyle |  点击反馈的自定义样式 | object | - |

