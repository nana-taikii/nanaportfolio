import { tv } from "tailwind-variants";


export const customButtonTextStyles = tv({
base: "bg-[var(--main-lightGray)] rounded-[8px]",
  variants: {
    intent: {
      default: "",
      error: "",
      success: "",
      warning: "",
    },
    disabled: {
      true: "",
    },
  },

  defaultVariants: {
    intent: "default",
    disabled: false,
  },
})