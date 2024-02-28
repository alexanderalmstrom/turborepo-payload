import { cn } from "../../utils";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return <div className={cn("animate-pulse bg-muted", className)} {...props} />;
};

Skeleton.displayName = "Skeleton";

export { Skeleton };
