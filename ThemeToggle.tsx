import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-card shadow-card-hover flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow border-2 border-primary/20 group"
      aria-label="Переключить тему"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow group-hover:animate-wiggle" />
      ) : (
        <Moon className="w-6 h-6 text-purple group-hover:animate-wiggle" />
      )}
    </button>
  );
};
