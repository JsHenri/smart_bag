import { ReactNode } from "react";

export default function loginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
