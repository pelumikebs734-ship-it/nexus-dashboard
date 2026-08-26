"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-14 items-center justify-between border-b px-6">
      <div className="text-sm text-muted-foreground">
        Welcome back
      </div>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-md p-2 hover:bg-accent"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </button>
    </header>
  );
}
