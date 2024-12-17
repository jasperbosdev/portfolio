"use client";
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="p-4 flex justify-between items-center w-[800px]">
      <h1 className="text-xl">My App</h1>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;