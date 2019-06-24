export interface DrawerPropsType {
  open?: boolean
  nativeOpenChange?: Function
  position?: 'left' | 'right' | 'top' | 'bottom'
  transitions?: boolean
  enterAnimated?: string
  leaveAnimated?: string
  touch?: boolean;
  prefixCls?: string;
  className?: string;
  style?: string | object;
  sidebarStyle?: string | object
}