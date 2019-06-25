import { Component, Prop } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import classnames from "classnames";
import { FlexItemPropsType } from "./PropsType";
export interface FlexItemProps extends FlexItemPropsType {
  prefixCls?: string;
  className?: string;
  style?: string | object;
  restProps?: object;
}

@Component
export default class FlexItem extends tsx.Component<FlexItemProps, any> {
  @Prop({ default: "vt-flexbox" }) public prefixCls?: string;
  @Prop() public className?: string;
  @Prop() public restProps?: object;

  render() {
    const { prefixCls, style, className, ...restProps } = this.$props;
    const wrapCls = classnames(`${prefixCls}-item`, className);
    return (
      <div class={wrapCls} style={style} {...restProps}>
        {Object.values(this.$slots)}
      </div>
    );
  }
}
