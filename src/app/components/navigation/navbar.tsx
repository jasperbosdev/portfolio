"use client";

import { ThemeSwitcher } from '../ThemeSwitcher';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="px-2 py-7 flex justify-between items-center w-full border rounded-xl z-10">
        <div className="nav-item group hover:bg-neutral-400 dark:hover:bg-white hover:text-white dark:hover:text-black rounded-xl transition-[background-color] duration-150">
          <div className="flex p-2 gap-2 items-center">
            <div className="dark:invert dark:group-hover:invert-0 group-hover:invert">
              <Image
                src="/house.svg"
                alt="house icon"
                width={18}
                height={18}
                priority
              />
            </div>
            Home
          </div>
        </div>
        <ThemeSwitcher />
    </div>
  );
};

export default Navbar;