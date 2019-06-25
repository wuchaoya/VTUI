import { Component, Prop } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import { VNode, CreateElement } from "vue";
import classnames from "classnames";
import TouchFeedback from "../TouchFeedback";
import Icon from "../Icon";
import { ButtonPropsType } from "./PropsType";
import cloneElement from "@/utils/cloneVNode";
import "./style.less";

export interface ButtonProps extends ButtonPropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
  inline?: boolean;
  icon?: VNode;
  activeClassName?: string;
  activeStyle?: boolean | string | object;
  style?: string | object;
  nativeClick?: Function;
}

@Component
export default class Button extends tsx.Component<ButtonProps, any> {
  @Prop({ default: "vt-button" }) public prefixCls?: string;
  @Prop({ default: "large" }) public size?: string;
  @Prop({ default: false }) public inline?: boolean;
  @Prop({ default: false }) public disabled?: boolean;
  @Prop({ default: false }) public loading?: boolean;
  @Prop({ default: "active" }) public activeStyle?: boolean | string | object;
  @Prop() public type?: "primary" | "warning" | "ghost";
  @Prop() public nativeClick?: Function;

  render(h: CreateElement) {
    const {
      className,
      prefixCls,
      type,
      size,
      inline,
      disabled,
      icon,
      loading,
      activeStyle,
      activeClassName,
      nativeClick,
      ...restProps
    } = this.$props;

    const iconType: any = loading ? "loading" : icon;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-primary`]: type === "primary",
      [`${prefixCls}-ghost`]: type === "ghost",
      [`${prefixCls}-warning`]: type === "warning",
      [`${prefixCls}-small`]: size === "small",
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-icon`]: !!iconType
    });

    const kids = Object.values(this.$slots);

    let iconEl;
    if (typeof iconType === "string") {
      iconEl = (
        <Icon
          aria-hidden="true"
          type={iconType}
          size={size === "small" ? "xxs" : "md"}
          className={`${prefixCls}-icon`}
        />
      );
    } else if (iconType) {
      const rawCls = iconType.componentOptions.propsData;
      const cls = classnames(
        "vt-icon",
        `${prefixCls}-icon`,
        size === "small" ? "vt-icon-xxs" : "vt-icon-md"
      );
      iconEl = cloneElement(
        iconType,
        { className: rawCls ? `${rawCls} ${cls}` : cls },
        h
      );
    }
    return (
      <TouchFeedback
        activeClassName={
          activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)
        }
        disabled={disabled}
        activeStyle={activeStyle}
      >
        <div
          class={wrapCls}
          {...restProps}
          onClick={disabled ? new Function() : nativeClick || new Function()}
          aria-disabled={disabled}
        >
          {iconEl}
          {kids}
        </div>
      </TouchFeedback>
    );
  }
}
