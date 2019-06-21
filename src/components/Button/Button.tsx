import { Component, Prop } from "vue-property-decorator";
import * as tsx from 'vue-tsx-support';
import classNames from 'classnames';
import deepClone from '@/utils/cloneVNode'


import './style.less';
import {CreateElement} from 'vue';
export enum ButtonTypes {
  default = 'default',
  primary = 'primary',
  ghost = 'ghost',
  dashed = 'dashed',
  danger = 'danger',
  link = 'link'
}

export enum ButtonShapes {
  circle = 'circle',
  circleOutline = 'circleOutline',
  round = 'round'
}

export enum ButtonSizes {
  large = 'large',
  default = 'default',
  small = 'small'
}

export enum ButtonHTMLTypes {
  submit = 'submit',
  button = 'button',
  reset = 'reset'
}


export interface BaseButtonProps {
  type?: ButtonTypes;
  icon?: string;
  shape?: ButtonShapes;
  size?: ButtonSizes;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  classNames?: string;
  ghost?: boolean;
  block?: boolean;
}

interface ButtonState {
  loading?: boolean | { delay?: number };
  hasTwoCNChar: boolean;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  nativeClick?: Function;
} & BaseButtonProps;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLTypes;
  nativeClick?: Function;
} & BaseButtonProps;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

@Component
export default class Button extends tsx.Component <ButtonProps, ButtonState>  {
  
  $vnode: any
  
  @Prop() public nativeClick?: Function
  @Prop() public classNames?: string
  
  mounted () {
    console.log(this)
  }

  handleClick (event: any) {
    const {nativeClick} = this.$props;
    nativeClick && nativeClick(event)
  }
  
  className () {
    const {classNames} = this.$props;
    return classNames
  }
  
  renderButton () {
    return <button class={this.className()} onClick={this.handleClick}>{Object.values(this.$slots)}</button>;
  }

  render(h:CreateElement) {
    return this.renderButton()
  }
}
