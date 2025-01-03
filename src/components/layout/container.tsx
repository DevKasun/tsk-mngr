import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="max-w-6xl mx-auto p-4">{children}</div>;
}

export default Container;
