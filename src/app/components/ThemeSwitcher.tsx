"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {/* Display the sun/moon icons based on the current theme */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
        className="p-2 rounded-full"
      >
        {theme === "dark" ? (
          // Moon icon for dark mode
          <svg viewBox="0 0 24 24" role="presentation" className="fill-inherit size-6" aria-hidden="true"><path className="fill-current" d="M12 22h-.9c-2.7-.2-5.1-1.5-6.8-3.6-1.7-2.1-2.5-4.7-2.3-7.3.5-4.8 4.3-8.7 9.1-9.1.4 0 .8.2 1 .5.2.3.2.8-.1 1.1-1 1.3-1.3 2.9-1.1 4.5s1.1 3 2.4 3.9c2.1 1.6 5 1.6 7.1 0 .3-.2.7-.3 1.1-.1.3.2.5.6.5 1-.2 2.7-1.5 5.1-3.6 6.8-1.8 1.5-4 2.3-6.4 2.3zM9.3 4.4c-2.9 1-5 3.7-5.3 6.8-.2 2.1.4 4.2 1.8 5.9s3.3 2.7 5.4 2.9c2.1.2 4.2-.4 5.9-1.8 1.1-.9 1.9-2.1 2.4-3.4-2.5.9-5.3.5-7.5-1.1-1.7-1.3-2.8-3.1-3.2-5.3-.1-1.4 0-2.7.5-4z"></path></svg>
        ) : (
          // Sun icon for light mode
          <svg viewBox="0 0 24 24" role="presentation" className="fill-inherit size-6" aria-hidden="true"><path className="fill-current" d="M12 6.5C8.9 6.5 6.5 9 6.5 12S9 17.5 12 17.5s5.5-2.5 5.5-5.5-2.4-5.5-5.5-5.5zm0 9c-2 0-3.5-1.6-3.5-3.5S10 8.5 12 8.5s3.5 1.6 3.5 3.5-1.5 3.5-3.5 3.5zM11 3.8V2c0-.6.4-1 1-1s1 .4 1 1v1.8c0 .6-.4 1-1 1s-1-.4-1-1zm2 16.4V22c0 .6-.4 1-1 1s-1-.4-1-1v-1.8c0-.6.4-1 1-1s1 .4 1 1zM4.2 5.6c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L4.2 5.6zm15.6 12.8c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-1.3-1.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3zM3.8 13H2c-.6 0-1-.4-1-1s.4-1 1-1h1.8c.6 0 1 .4 1 1s-.4 1-1 1zM23 12c0 .6-.4 1-1 1h-1.8c-.6 0-1-.4-1-1s.4-1 1-1H22c.6 0 1 .4 1 1zM6.9 17.1c.4.4.4 1 0 1.4l-1.3 1.3c-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l1.3-1.3c.4-.4 1-.4 1.4 0zM17.1 6.9c-.4-.4-.4-1 0-1.4l1.3-1.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-1.3 1.3c-.2.2-.5.3-.7.3s-.5-.1-.7-.3z"></path></svg>
        )}
      </button>
    </div>
  );
}