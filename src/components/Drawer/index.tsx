import { Component, Prop} from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import {DrawerPropsType} from './PropsType';
import classnames from 'classnames';
import './style.less';

@Component
export default class Drawer extends tsx.Component<DrawerPropsType> {
  
  @Prop({}) public open?: boolean
  @Prop() public nativeOpenChange?: Function
  @Prop() public position?: 'left' | 'right' | 'top' | 'bottom'
  @Prop() public transitions?: boolean
  @Prop() public enterAnimated?: string
  @Prop() public leaveAnimated?: string
  @Prop() public touch?: boolean;
  @Prop({default: 'vt-drawer'}) public prefixCls?: string;
  @Prop() public className?: string;
  @Prop() public sidebarStyle?: string;
  
  render() {
    const {open, nativeOpenChange, position,transitions,
      enterAnimated,leaveAnimated,touch,prefixCls,className, style, sidebarStyle} = this.$props;
    return (
      <transition
        name="custom-classes-transition"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft">
        {open ?
          <div class={classnames(className, prefixCls, `${prefixCls}-${position}`)}>
            <div style={sidebarStyle} class={classnames(`${prefixCls}-sidebar`)}>
              {this.$slots.default}
            </div>
          </div>
          : null
        }
      </transition>
    )
  }
  
}