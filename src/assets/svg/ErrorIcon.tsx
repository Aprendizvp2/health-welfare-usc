interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ErrorIcon = ({
  width = 80,
  height = 80,
  color = "#DE1505",
}: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 256 256">
      <path
        fill={color}
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 130.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
      />
    </svg>
  );
};
