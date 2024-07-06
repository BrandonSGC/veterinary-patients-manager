import { PropsWithChildren } from "react";

export const Error = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-center my-1 bg-red-600 text-white font-medium p-1 text-sm">
      {children}
    </p>
  );
};
