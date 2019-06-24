import * as tsx from "vue-tsx-support";
import { Component, Prop } from "vue-property-decorator";
import * as classNames from "classnames";
import cloneElement from "@/utils/cloneVNode";
import { CreateElement } from "vue";

export interface ITouchProps {
  disabled?: boolean;
  activeClassName?: string;
  activeStyle?: any;
}

export interface ITouchState {
  active?: boolean;
}

@Component
export default class TouchFeedback extends tsx.Component<
  ITouchProps,
  ITouchState
> {
  $vnode: any;

  @Prop() public disabled?: boolean;
  @Prop() public activeClassName?: string;
  @Prop() public activeStyle?: any;
  @Prop() public active?: boolean;

  static defaultProps = {
    disabled: false
  };

  data() {
    return {
      activeState: false
    };
  }

  update() {
    if (this.$props.disabled && this.$data.activeState) {
      this.$data.activeState = false;
    }
  }

  triggerEvent(type, isActive, ev) {
    const eventType = `on${type}`;
    const children = Object.values(this.$slots);

    if (children[eventType]) {
      children[eventType](ev);
    }
    if (isActive !== this.$data.activeState) {
      this.$data.activeState = isActive;
    }
  }

  onTouchStart = e => {
    this.triggerEvent("TouchStart", true, e);
  };

  onTouchMove = e => {
    this.triggerEvent("TouchMove", false, e);
  };

  onTouchEnd = e => {
    this.triggerEvent("TouchEnd", false, e);
  };

  onTouchCancel = e => {
    this.triggerEvent("TouchCancel", false, e);
  };

  onMouseDown = e => {
    // pc simulate mobile
    this.triggerEvent("MouseDown", true, e);
  };

  onMouseUp = e => {
    this.triggerEvent("MouseUp", false, e);
  };

  onMouseLeave = e => {
    this.triggerEvent("MouseLeave", false, e);
  };

  render(h: CreateElement) {
    const { disabled, activeClassName, activeStyle } = this.$props;
    let events = disabled
      ? undefined
      : {
          touchstart: this.onTouchStart,
          touchmove: this.onTouchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchCancel,
          mousedown: this.onMouseDown,
          mouseup: this.onMouseUp,
          mouseleave: this.onMouseLeave
        };
    const child: any = Object.values(this.$slots)[0];
    let { style } = child[0].data ?child[0].data :  child[0].componentOptions.propsData ;
    let className = child[0].data ?child[0].data.class :  child[0].componentOptions.propsData.class;
    if (!disabled && this.$data.activeState) {
      if (activeStyle !== false) {
        if (activeStyle) {
          style = { ...style, ...activeStyle };
        }
        className = classNames(className, activeClassName);
      }

      return cloneElement(child, {className, style, events}, h);
    }

    return cloneElement(child, { events , className, style,}, h);
  }
}
