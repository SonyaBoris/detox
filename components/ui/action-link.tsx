import type { ComponentPropsWithoutRef } from "react";

type ActionLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "nav";
};

function cn(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

export default function ActionLink({
  variant = "primary",
  className,
  children,
  ...props
}: ActionLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "action-link",
        variant === "primary" ? "action-link--primary" : "action-link--nav",
        className,
      )}
    >
      {children}
    </a>
  );
}
