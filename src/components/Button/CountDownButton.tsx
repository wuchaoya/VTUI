import {Component, Prop} from 'vue-property-decorator';
import classnames from "classnames";
import * as tsx from 'vue-tsx-support';
import {Button} from '@/components';
import {CountDownPropsType} from './PropsType';
import './style.less';

export interface CountDownButtonProps extends CountDownPropsType {
  prefixCls?: string;
  className?: string;
  countdownClassName?: string;
  style?: string | object;
}

@Component
export default class CountDownButton extends tsx.Component<CountDownButtonProps> {
  @Prop() public nativeEnd?: () => void
  @Prop() public nativeInCountdown?: (time: number, text: string) => void
  @Prop() public nativeStart?: () => void
  @Prop({default: '发送验证码'}) public defaultText?: string
  @Prop({default: '重新发送 (%s)'}) public InCountdownText?: string
  @Prop({default: 60}) public time?: number
  @Prop({default: false}) public autoTrigger?: boolean
  @Prop({default: 'vt-countDown'}) public prefixCls?: string;
  @Prop() public className?: string;
  @Prop() public countdownClassName?: string;
  
  data() {
    return {
      text: '',
      countdownTime: 0,
      countdown: false
    }
  }
  
  mounted() {
    this.initData()
  }
  
  initData() {
    const {time, defaultText, InCountdownText, autoTrigger} = this.$props;
    this.$data.countdownTime = time;
    this.$data.text = autoTrigger ? InCountdownText.replace('%', time) : defaultText
    autoTrigger && this.startCountdown()
  }
  
  nativeClick () {
    if (this.$props.nativeStart) {
      this.$props.nativeStart() && this.startCountdown()
    }
  }
  
  startCountdown() {
    const { InCountdownText, defaultText } = this.$props;
    this.$data.countdownTime = this.$data.countdownTime - 1;
    this.$data.countdown = true
    let countDownInterval = setInterval(() => {
      if (this.$data.countdownTime === 1) {
        clearInterval(countDownInterval)
        this.$data.text = defaultText;
        this.$data.countdown = false
        return false
      }
      this.$data.countdownTime = this.$data.countdownTime - 1;
      this.$data.text = InCountdownText.replace('%', this.$data.countdownTime)
    }, 1000)
  }
  
  render() {
    const {className, prefixCls, countdownClassName} = this.$props;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-active`]: this.$data.countdown === true,
      [`${prefixCls}-${countdownClassName}`]: this.$data.countdown === true,
    });
    return <Button inline class={wrapCls} nativeClick={this.nativeClick}>{this.$data.text}</Button>
  }
  
}