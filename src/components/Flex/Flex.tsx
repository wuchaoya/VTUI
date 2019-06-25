import { Component, Prop } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import classnames from "classnames";
import { FlexPropsType as BasePropsType } from "./PropsType";

import "./style.less";

export interface FlexProps extends BasePropsType {
  alignContent?: "start" | "end" | "center" | "between" | "around" | "stretch";
  prefixCls?: string;
  className?: string;
  style?: string | object;
}

@Component
export default class Flex extends tsx.Component<FlexProps, any> {
  static Item: any;

  @Prop({ default: "vt-flexbox" }) public prefixCls?: string;
  @Prop({ default: "row" }) public direction?: string;
  @Prop({ default: "nowrap" }) public wrap?: string;
  @Prop({ default: "vt-flexbox" }) public justify?: string;
  @Prop({ default: "center" }) public align?: string;
  @Prop({ default: "stretch" }) public alignContent?: string;
  @Prop() public className?: string;
  @Prop() public restProps?: object;

  render() {
    const {
      direction,
      wrap,
      justify,
      align,
      alignContent,
      className,
      prefixCls,
      style,
      ...restProps
    } = this.$props;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-dir-row`]: direction === "row",
      [`${prefixCls}-dir-row-reverse`]: direction === "row-reverse",
      [`${prefixCls}-dir-column`]: direction === "column",
      [`${prefixCls}-dir-column-reverse`]: direction === "column-reverse",

      [`${prefixCls}-nowrap`]: wrap === "nowrap",
      [`${prefixCls}-wrap`]: wrap === "wrap",
      [`${prefixCls}-wrap-reverse`]: wrap === "wrap-reverse",

      [`${prefixCls}-justify-start`]: justify === "start",
      [`${prefixCls}-justify-end`]: justify === "end",
      [`${prefixCls}-justify-center`]: justify === "center",
      [`${prefixCls}-justify-between`]: justify === "between",
      [`${prefixCls}-justify-around`]: justify === "around",

      [`${prefixCls}-align-start`]: align === "start",
      [`${prefixCls}-align-center`]: align === "center",
      [`${prefixCls}-align-end`]: align === "end",
      [`${prefixCls}-align-baseline`]: align === "baseline",
      [`${prefixCls}-align-stretch`]: align === "stretch",

      [`${prefixCls}-align-content-start`]: alignContent === "start",
      [`${prefixCls}-align-content-end`]: alignContent === "end",
      [`${prefixCls}-align-content-center`]: alignContent === "center",
      [`${prefixCls}-align-content-between`]: alignContent === "between",
      [`${prefixCls}-align-content-around`]: alignContent === "around",
      [`${prefixCls}-align-content-stretch`]: alignContent === "stretch"
    });

    return (
      <div class={wrapCls} style={style} {...restProps}>
        {Object.values(this.$slots)}
      </div>
    );
  }
}
