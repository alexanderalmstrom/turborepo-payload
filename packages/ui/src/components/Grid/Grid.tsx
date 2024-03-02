import { Slot } from "@radix-ui/react-slot";
import type { ComponentPropsWithoutRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const gridVariants = tv(
  {
    base: "grid",
    variants: {
      columns: {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
      },
    },
  },
  {
    responsiveVariants: true,
  },
);

type GridProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof gridVariants> & {
    asChild?: boolean;
  };

const Grid = ({
  asChild,
  children,
  className,
  columns,
  ...props
}: GridProps) => {
  if (!children) return null;

  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={gridVariants({ columns, className })} {...props}>
      {children}
    </Comp>
  );
};

Grid.displayName = "Grid";

export { Grid, gridVariants };
export type { GridProps };
