import { twMerge } from "tailwind-merge";

export default function Container({ children, className }) {
  return (
    <div className={twMerge(["max-w-[1250px] mx-auto", className])}>
      {children}
    </div>
  );
}
