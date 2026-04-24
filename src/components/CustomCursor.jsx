import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 420, damping: 32 });
  const springY = useSpring(cursorY, { stiffness: 420, damping: 32 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(hasFinePointer);

    if (!hasFinePointer) return undefined;

    const handlePointerMove = (event) => {
      cursorX.set(event.clientX - 16);
      cursorY.set(event.clientY - 16);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-8 w-8 rounded-full border border-electric/60 bg-electric/10 backdrop-blur-sm mix-blend-screen md:block"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  );
}

export default CustomCursor;
