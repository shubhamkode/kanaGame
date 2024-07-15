import { cn } from "@/lib/utils";
import { useSnackStore } from "@/store/snackStore";
import { useEffect } from "react";

export default function SnackBar() {
  const [message, state, clear] = useSnackStore((store) => [
    store.message,
    store.state,
    store.clear,
  ]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      clear();
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [message, clear]);

  return (
    <div className="px-8 mt-8">
      <div
        className={`w-full bg-destructive text-destructive-foreground px-4 py-2 rounded opacity-0 text-center ${cn(
          message !== undefined && "opacity-100",
          state === "success" && "bg-emerald-400 text-white"
        )}`}
      >
        <p className="text-destructive-foreground text-base font-semibold">
          {message ?? "abc"}
        </p>
      </div>
    </div>
  );
}
