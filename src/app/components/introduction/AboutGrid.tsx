'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import CodeIcons from "./components/codeIcons";

export default function AboutGrid() {
    const router = useRouter();
    
    return (
        <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 w-full">
                <div className="flex col-span-2 md:col-span-2 sm:col-span-full w-full h-[100px] sm:h-[144px] rounded-2xl text-center justify-start text-start items-end px-4 py-3 relative cursor-pointer
                transition-all duration-500 will-change-[outline,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100"
                    onClick={() => router.push('/projects')}>
                    <div
                        className="absolute inset-0 rounded-2xl blur-[2px] dark:opacity-60 opacity-80"
                        style={{
                            backgroundImage: "url('/catcomputer.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="dark:invert dark:group-hover:invert-0 group-hover:invert">
                            <Image
                              src="/github-cat.svg"
                              alt="icon"
                              width={24}
                              height={24}
                              priority
                            />
                        </div>
                        <div>
                            <p className="text-base sm:text-lg font-bold dark:text-white text-black dark:text-white">Projects</p>
                            <p className="font-medium dark:text-white text-black dark:text-white">Bekijk wat van mijn experimenten</p>
                        </div>
                    </div>
                </div>
                <div className="flex col-span-full md:col-span-1 sm:col-span-2 w-full h-[100px] sm:h-[144px] rounded-2xl text-center justify-start text-start items-end px-4 py-3 relative cursor-pointer
                transition-all duration-500 will-change-[outline,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100"
                    onClick={() => router.push('/cv')}>
                    <div
                        className="absolute inset-0 rounded-2xl blur-[2px] dark:opacity-60 opacity-80"
                        style={{
                            backgroundImage: "url('/cathai.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="dark:invert dark:group-hover:invert-0 group-hover:invert">
                            <Image
                              src="/throphy.svg"
                              alt="icon"
                              width={24}
                              height={24}
                              priority
                            />
                        </div>
                        <div>
                            <p className="text-base sm:text-lg font-bold dark:text-white text-black dark:text-white">CV</p>
                            <p className="font-medium dark:text-white text-black dark:text-white">Bekijk mijn cv</p>
                        </div>
                    </div>
                </div>
                <div className="flex col-span-full md:col-span-1 sm:col-span-2 w-full h-[100px] sm:h-[144px] rounded-2xl text-center justify-start text-start items-end px-4 py-3 relative cursor-pointer
                transition-all duration-500 will-change-[outline,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100"
                    onClick={() => router.push('/about')}>
                    <div
                        className="absolute inset-0 rounded-2xl blur-[2px] dark:opacity-60 opacity-80"
                        style={{
                            backgroundImage: "url('/selfie.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="dark:invert dark:group-hover:invert-0 group-hover:invert">
                            <Image
                              src="/user-card.svg"
                              alt="icon"
                              width={26}
                              height={26}
                              priority
                            />
                        </div>
                        <div>
                            <p className="text-base sm:text-lg font-bold dark:text-white text-black dark:text-white">About</p>
                            <p className="font-medium dark:text-white text-black dark:text-white">Leer mij beter kennen</p>
                        </div>
                    </div>
                </div>
                <div className="flex col-span-full h-[52px] rounded-2xl text-center justify-center items-center">
                    <CodeIcons />
                </div>
            </div>
        </div>
    )
}