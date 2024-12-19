"use client";

import { ThemeSwitcher } from '../ThemeSwitcher';
import Image from 'next/image';

const Navbar = () => {

  return (
    <div className="px-2 py-7 flex justify-between items-center w-full border border-neutral-400 rounded-xl z-10">
        <div className='flex gap-2'>
          <div className="cursor-pointer nav-item group hover:bg-neutral-400 dark:hover:bg-white hover:text-white dark:hover:text-black rounded-xl transition-[background-color] duration-150">
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
          <div className="cursor-pointer nav-item group hover:bg-neutral-400 dark:hover:bg-white hover:text-white dark:hover:text-black rounded-xl transition-[background-color] duration-150">
            <div className="flex p-2 gap-2 items-center">
              <div className="dark:invert dark:group-hover:invert-0 group-hover:invert">
                <Image
                  src="/person.svg"
                  alt="person icon"
                  width={18}
                  height={18}
                  priority
                />
              </div>
              About
            </div>
          </div>
        </div>
        <ThemeSwitcher />
    </div>
  );
};

export default Navbar;