'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import CodeIcons from "./components/codeIcons";

export default function AboutGrid() {
    const router = useRouter();
    
    return (
        <div>
            <div className="grid grid-cols-4 gap-3 md:grid-cols-10 w-full">
                <div className="flex col-span-5 w-full h-[144px] rounded-2xl text-center justify-start text-start items-end px-4 py-3 relative cursor-pointer
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
                              alt="github icon"
                              width={24}
                              height={24}
                              priority
                            />
                        </div>
                        <div>
                            <p className="text-lg font-bold dark:text-white text-black dark:text-white">Projects</p>
                            <p className="font-medium dark:text-white text-black dark:text-white">Bekijk wat van mijn experimenten</p>
                        </div>
                    </div>
                </div>
                <div className="flex col-span-2 w-full h-[144px] rounded-2xl text-center justify-start text-start items-end px-4 py-3 relative cursor-pointer
                transition-all duration-500 will-change-[outline,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100"
                    onClick={() => router.push('#/')}>
                    <div
                        className="absolute inset-0 rounded-2xl blur-[2px] dark:opacity-60 opacity-80"
                        style={{
                            backgroundImage: "url('/pop.jpg')",
                            backgroundSize: "cover",
                            backgroundPositionX: "right",
                            backgroundPositionY: "bottom",
                        }}
                    ></div>
                    <div className="relative z-10 flex flex-col justify-between">
                        <div>
                            <p className="text-lg font-bold dark:text-white text-black dark:text-white">Wdj</p>
                            <p className="font-medium dark:text-white text-black dark:text-white">geen idee</p>
                        </div>
                    </div>
                </div>
                <div className="flex col-span-3 w-full h-[144px] rounded-2xl text-center justify-start text-start items-end px-4 py-3 relative
                transition-all duration-500 will-change-[outline,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100">
                    <div
                        className="absolute inset-0 rounded-2xl blur-[2px] dark:opacity-60 opacity-80"
                        style={{
                            backgroundImage: "url('/selfie.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="relative z-10 flex flex-col justify-between">
                        <div>
                            <p className="text-lg font-bold dark:text-white text-black dark:text-white">Hallo</p>
                            <p className="font-medium dark:text-white text-black dark:text-white">Dit ben ik</p>
                        </div>
                    </div>
                </div>
                <div className="flex col-span-10 h-[52px] rounded-2xl text-center justify-center items-center">
                    <CodeIcons />
                </div>
            </div>
        </div>
    )
}