import { FC, ReactNode } from "react";

interface ContainerProps {
  noContainer?: boolean;
  children?: ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
  // **Props
  const { noContainer, children } = props;

  if (noContainer) return children;

  return <div className="container">{children}</div>;
};
