// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-2">
      The current theme is: {theme}
      <Button radius="sm" onClick={() => setTheme("light")}>
        Light Mode
      </Button>
      <Button radius="sm" onClick={() => setTheme("dark")}>
        Dark Mode
      </Button>
    </div>
  );
}
