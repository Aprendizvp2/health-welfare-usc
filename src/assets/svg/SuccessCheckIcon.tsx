interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const SuccessCheckIcon = ({
  width = 80,
  height = 80,
  color = "#1FCD07",
}: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 36 36">
      <path
        fill={color}
        d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m10.45 10.63L15.31 25.76L7.55 18a1.4 1.4 0 0 1 2-2l5.78 5.78l11.14-11.13a1.4 1.4 0 1 1 2 2Z"
        className="clr-i-solid clr-i-solid-path-1"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  );
};
