import classnames from "classnames";
import { Component, Prop } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import { NavBarProps } from "./PropsType";
import "./style.less";

@Component
export default class NavBar extends tsx.Component<NavBarProps, any> {
  @Prop({ default: "vt-navbar" }) public prefixCls?: string;
  @Prop() public className?: string;
  @Prop({ default: "light" }) public mode?: "dark" | "light";
  @Prop() public icon?: VNode | string;
  @Prop() public leftContent?: VNode;
  @Prop() public rightContent?: VNode;
  @Prop() public nativeLeftClick?: Function;

  render() {
    const {
      prefixCls,
      className,
      mode,
      icon,
      nativeLeftClick,
      leftContent,
      rightContent,
      ...restProps
    } = this.$props;

    return (
      <div
        {...restProps}
        class={classnames(className, prefixCls, `${prefixCls}-${mode}`)}
      >
        <div
          class={`${prefixCls}-left`}
          role="button"
          onClick={nativeLeftClick || new Function()}
        >
          {icon ? (
            <span class={`${prefixCls}-left-icon`} aria-hidden="true">
              {icon}
            </span>
          ) : null}
          {leftContent}
        </div>
        <div class={`${prefixCls}-title`}>{Object.values(this.$slots)}</div>
        <div class={`${prefixCls}-right`}>{rightContent}</div>
      </div>
    );
  }
}
