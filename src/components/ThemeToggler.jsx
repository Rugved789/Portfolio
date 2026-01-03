import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utlis";

// 1️⃣ Get initial theme
const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export default function ThemeToggler() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  // 2️⃣ Apply theme + save user choice
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // 3️⃣ Listen to SYSTEM theme changes
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      // Only update if user hasn't manually chosen
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // 4️⃣ Manual toggle overrides system
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "fixed max-sm:hidden top-4.5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden cursor-pointer"
      )}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}
