import { VNode } from "vue";

export interface NavBarProps {
  prefixCls?: string;
  className?: string;
  mode?: "dark" | "light";
  icon?: VNode[] | VNode | string;
  leftContent?: VNode[] | VNode | string;
  rightContent?: VNode[] | VNode | string;
  nativeLeftClick?: Function;
}
