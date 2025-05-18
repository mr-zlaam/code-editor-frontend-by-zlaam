import { toast } from "sonner";
type PositionType = "bottom-center" | "bottom-left" | "bottom-right" | "top-left" | "top-right" | "top-center";
export const useMessage = () => {
  const successMessage = (message: string, position?: PositionType, duration?: number) => {
    toast.success(typeof message === "string" ? message : JSON.stringify(message), {
      duration: duration ?? 3000,
      className: "text-foreground bg-background select-none",
      position: position ? position : "bottom-right"
    });
  };
  const errorMessage = (message: string, position?: PositionType, duration?: number) => {
    toast.error(typeof message === "string" ? message : JSON.stringify(message), {
      duration: duration ?? 3000,
      className: "text-foreground bg-background select-none",
      position: position ? position : "bottom-right"
    });
  };
  return { successMessage, errorMessage };
};
