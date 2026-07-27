import { tv } from "tailwind-variants";

export const customButtonIconStyles = tv({
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
});


//  background-color:var(--main-dark);
//     border-radius:8px;
//     padding:8px 15px;
//     height:38px;
//     display:flex;
//     flex-direction:row;
//     gap:10px;
//     align-items:center;
//     justify-content: center;
//     min-width:120px;
export const customButtonStyles = tv({
    base:"bg-[var(--main-dark)] py-[8px] px-[15px] h-[38px] flex flex-row gap-[10px] items-center justify-center min-w-[120px] rounded-[8px] text-[var(--text-white)] text-[14px] font-bold max-[768px]:rounded-[8px] max-[768px]:text-[12px] max-[768px]:font-normal max-[768px]:gap-[8px] max-[768px]:py-[10px] max-[768px]:px-[15px] max-[768px]:h-[32px]",
    variants:{
        intent:{
            default:"",
            error:"",
            success:"",
            warning:""
        },
        disabled:{
            true:"",
        },
    },

    defaultVariants:{
        intent:"default",
        disabled:false,
    }
})
