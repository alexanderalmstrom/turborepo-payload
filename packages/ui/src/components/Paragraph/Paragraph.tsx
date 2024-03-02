import { Slot } from "@radix-ui/react-slot";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

type ParagraphProps = ComponentPropsWithRef<"p"> & {
  asChild?: boolean;
};

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ asChild, children, ...props }, ref) => {
    if (!children) return null;

    const Comp = asChild ? Slot : "p";

    return (
      <Comp ref={ref} {...props}>
        {children}
      </Comp>
    );
  },
);

Paragraph.displayName = "Paragraph";

export { Paragraph };
export type { ParagraphProps };
