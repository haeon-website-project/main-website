import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return <Tag className={cn("mx-auto w-full max-w-[1240px] px-6 md:px-8", className)} {...props} />;
}
