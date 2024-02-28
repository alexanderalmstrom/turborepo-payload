import { Slot } from "@radix-ui/react-slot";
import type { ReactNode } from "react";
import { forwardRef, HTMLAttributes } from "react";

type ParagraphProps = {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLParagraphElement>;

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
