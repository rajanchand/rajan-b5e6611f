
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="icon-btn relative overflow-hidden h-10 w-10 rounded-full"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          theme === "dark" ? "opacity-0 translate-y-4" : "opacity-100"
        }`}
      >
        <Sun size={18} />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          theme === "dark" ? "opacity-100" : "opacity-0 -translate-y-4"
        }`}
      >
        <Moon size={18} />
      </span>
    </button>
  );
}
