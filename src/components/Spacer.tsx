import { CSSProperties } from "react";

export function Spacer({
  size,
  style,
}: {
  size: number;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        flexBasis: size,
        flexGrow: 0,
        flexShrink: 0,
        minHeight: 0.1,
        minWidth: 0.1,
        ...style,
      }}
    />
  );
}
