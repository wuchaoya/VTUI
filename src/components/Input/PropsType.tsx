import { VNode } from "vue";

export interface InputInputProps {
  type?: "text" | "password";
  placeholder?: string;
  icon?: string | VNode;
  value?: string;
  style?: string | object;
  className?: string;
  rightContent?: VNode;
  prefixCls?: string;
  error?: boolean;
  nativeChange?: Function;
  nativeFocus?: Function;
  nativeBlur?: Function;
}
