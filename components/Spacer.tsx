interface Props {
  height?: string,
  width?: string
}

export default function Spacer({ height, width }: Props) {
  return (
    <div style={{ 
      display: width ? 'inline-block' : 'block',
      minWidth: height ? '1px' : (width ?? 0),
      minHeight: height ?? 0 }}>
    </div>
  )
}