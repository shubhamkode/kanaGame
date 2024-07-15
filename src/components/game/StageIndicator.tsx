import { motion } from "framer-motion";
import { useEffect } from "react";

export default function StageIndicator({
  description,
  title,
  hideStage,
}: {
  title: string;
  description: string;
  hideStage: () => void;
}) {
  useEffect(() => {
    const timeout = setTimeout(hideStage, 1200);
    return () => clearTimeout(timeout);
  }, [hideStage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, type: "tween" }}
      exit={{ opacity: 0, transition: { delay: 0.5 } }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      className="bg-muted w-full flex items-center justify-center rounded-lg py-32 mt-4"
    >
      <p className="">
        <span className="text-3xl block text-center ">{title}</span>
        <span className="text-sm text-muted-foreground block">
          {description}
        </span>
      </p>
    </motion.div>
  );
}
