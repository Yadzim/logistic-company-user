import { ReactNode } from "react";

export type TypeModalProps = {
  open: boolean
  children?: ReactNode
  header?: ReactNode | null
  footer?: ReactNode | null
  className?: string
  style?: StyleSheet
  width?: number
  center?: boolean
  closeIcon?: ReactNode | null
  okText?: string
  cancelText?: string
  onClose?: () => void
  onOk?: () => void
  onCancel?: () => void
}