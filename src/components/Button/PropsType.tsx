export interface ButtonPropsType {
  type?: "primary" | "warning" | "ghost";
  size?: "large" | "small";
  disabled?: boolean;
  loading?: boolean;
}

export interface CountDownPropsType {
  nativeEnd?: () => void
  nativeInCountdown?: (time: number, text: string) => void
  text?: string
  time?: number
  autoTrigger?: boolean
}