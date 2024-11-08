import React from "react";

export default function Button(props) {
  const {
    label,
    className,
    type = "",
    fullWidth = true,
    icon,
    variant = "primary",
  } = props;

  const commonClass =
    "focus-visible:outline-none text-white rounded-xl focus-visible:ring-2 focus-visile:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disbaled:opacity-50 p-2";

  const primaryClass = "bg-primary hover:bg-primary/90";

  const fullWidthClass = "w-full";

  const outlinedClass =
    "transition-colors border border-input hover:bg-accent hover:text-accent-foreground h-10 bg-background text-muted-forground rounded-xl shadow-lg";

  const iconClass =
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium px-4 py-2";
  return (
    <button
      type={type}
      className={`${className} ${commonClass} ${
        variant === "primary" ? primaryClass : outlinedClass
      } ${fullWidth ? fullWidthClass : ""} ${icon ? iconClass : ""}`}
    >
      {label}
    </button>
  );
}
