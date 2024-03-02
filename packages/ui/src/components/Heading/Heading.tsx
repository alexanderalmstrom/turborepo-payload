import { Slot } from "@radix-ui/react-slot";
import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const headingVariants = tv(
  {
    variants: {
      size: {
        1: "text-6xl",
        2: "text-5xl",
        3: "text-4xl",
        4: "text-3xl",
        5: "text-2xl",
        6: "text-xl",
      },
      fluid: {
        1: "text-fluid-1",
        2: "text-fluid-2",
        3: "text-fluid-3",
        4: "text-fluid-4",
        5: "text-fluid-5",
        6: "text-fluid-6",
      },
    },
  },
  {
    responsiveVariants: true,
  },
);

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    asChild?: boolean;
  };

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, className, size, fluid, ...props }, ref) => {
    if (!props.children) return null;

    const Comp = asChild ? Slot : "h2";

    return (
      <Comp
        ref={ref}
        className={headingVariants({ size, fluid, className })}
        {...props}
      />
    );
  },
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
export type { HeadingProps };
