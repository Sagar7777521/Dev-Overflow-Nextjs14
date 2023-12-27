"use client";

import { create } from "domain";
import { exportTraceState } from "next/dist/trace";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

interface ThemeContextType {
  mode: String;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  const handleThemechange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else setMode("dark");
    document.documentElement.classList.add("dark");
  };

  useEffect(() => {}, []);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("Use Theme must be used with in the ThemeProvider");
  }
  return context;
}
