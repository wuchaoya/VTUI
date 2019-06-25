import { Component, Prop } from "vue-property-decorator";
import { VNode } from "vue";
import * as tsx from "vue-tsx-support";
import classnames from "classnames";
import Icon from "../Icon";
import { InputInputProps } from "./PropsType";

import "./style.less";

@Component
export default class Input extends tsx.Component<InputInputProps> {
  @Prop({ default: "text" }) public type?: "text" | "password";
  @Prop() public placeholder?: string;
  @Prop() public icon?: string | VNode;
  @Prop() public value?: string | number;
  @Prop() public nativeChange?: Function;
  @Prop() public className?: string;
  @Prop() public rightContent?: VNode;
  @Prop({ default: "vt-input" }) public prefixCls?: string;
  @Prop({ default: false }) public error?: boolean;

  onInputBlur(e) {
    const value = (e.target as any).value;
    this.$props.nativeBlur && this.$props.nativeBlur(value);
  }

  onInputFocus(e) {
    const value = (e.target as any).value;
    this.$props.nativeFocus && this.$props.nativeFocus(value);
  }

  onChange(e) {
    const value = (e.target as any).value;
    this.$props.nativeChange && this.$props.nativeChange(value);
  }

  render() {
    const {
      type,
      placeholder,
      icon,
      value,
      className,
      rightContent,
      prefixCls,
      error
    } = this.$props;
    const wrapCls = classnames(`${prefixCls}`, className, {
      [`${prefixCls}-error`]: error === true
    });
    return (
      <div class={wrapCls}>
        {typeof icon === "string" ? <Icon size="xxs" type={icon} /> : icon}
        <input
          onInput={this.onChange}
          value={value}
          placeholder={placeholder}
          type={type}
        />
        {rightContent}
      </div>
    );
  }
}
