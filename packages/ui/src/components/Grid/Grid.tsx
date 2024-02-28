import { Slot } from "@radix-ui/react-slot";
import type { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const gridVariants = tv(
  {
    base: "grid",
    variants: {
      layout: {
        "1 column": "grid-cols-1",
        "2 columns": "grid-cols-2",
        "3 columns": "grid-cols-3",
        "4 columns": "grid-cols-4",
        "5 columns": "grid-cols-5",
      },
    },
  },
  {
    responsiveVariants: true,
  },
);

type GridProps = {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
} & VariantProps<typeof gridVariants>;

const Grid = ({
  asChild,
  children,
  className,
  layout,
  ...props
}: GridProps) => {
  if (!children) return null;

  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={gridVariants({ layout, className })} {...props}>
      {children}
    </Comp>
  );
};

Grid.displayName = "Grid";

export { Grid, gridVariants };
export type { GridProps };
