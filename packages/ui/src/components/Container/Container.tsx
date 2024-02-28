import { Slot } from "@radix-ui/react-slot";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import { cn } from "../../utils";

type ContainerProps = {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ asChild, children, className, fullWidth }, ref) => {
    const Comp = asChild ? Slot : "div";

    if (fullWidth)
      return (
        <Comp ref={ref} className={className}>
          {children}
        </Comp>
      );

    return (
      <Comp
        ref={ref}
        className={cn("mx-auto w-full max-w-screen-2xl", className)}
      >
        {children}
      </Comp>
    );
  },
);

Container.displayName = "Container";

export { Container };
export type { ContainerProps };
