import type { ComponentPropsWithoutRef } from "react";

import { cn } from "../../utils";

type SkeletonProps = ComponentPropsWithoutRef<"div">;

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return <div className={cn("animate-pulse bg-muted", className)} {...props} />;
};

Skeleton.displayName = "Skeleton";

export { Skeleton };
