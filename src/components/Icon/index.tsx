import { Component, Prop } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import classnames from 'classnames';
import loadSprite from './loadSprite';
import { IconPropsType } from './PropsType';

export interface IconProps extends IconPropsType {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  nativeClick?(): void;
}

@Component
export default class Icon extends tsx.Component<IconProps, any> {
  
  @Prop() type?: string;
  @Prop() nativeClick?: Function;
  @Prop() color?: string;
  
  static defaultProps = {
    size: 'md',
  };
  
  mounted() {
    loadSprite();
  }
  
  render() {
    const { type, className, size, ...restProps } = this.$props;
    const cls = classnames(
      className,
      'icon',
      `icon-${type}`,
      `icon-${size}`,
    );
    return (
      <svg class={cls} {...restProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    );
  }
}