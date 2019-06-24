import { Component, Prop } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import classnames from 'classnames';
import loadSprite from './loadSprite';
import { IconPropsType } from './PropsType';
import './style.less';

export interface IconProps extends IconPropsType {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  nativeClick?(): void;
}

@Component
export default class Icon extends tsx.Component<IconProps, any> {
  
  @Prop() type?: string;
  @Prop() nativeClick?: Function;
  @Prop() color?: string;
  @Prop({default: 'md'}) size?: string;
  
  
  mounted() {
    loadSprite();
  }
  
  render() {
    const { type, className, size, ...restProps } = this.$props;
    const cls = classnames(
      className,
      'vt-icon',
      `vt-icon-${type}`,
      `vt-icon-${size}`,
    );
    return (
      <svg class={cls} {...restProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}