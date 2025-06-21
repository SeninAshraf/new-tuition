"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface BoxRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
}

export const BoxReveal: React.FC<BoxRevealProps> = ({
  children,
  width = "100%",
  boxColor = "#5046e6",
  duration = 0.5,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
      style={{ width }}
      className="overflow-hidden rounded-lg"
    >
      <div
        className="p-4"
        style={{ borderLeft: `4px solid ${boxColor}` }}
      >
        {children}
      </div>
    </motion.div>
  );
};
