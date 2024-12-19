'use client';

import { useEffect } from "react";
import TypedAbout from "./components/typed-about";
import TransparentImageWithOutline from "./components/TransparantImageWithOutline";
import GlowSm from "../etc/glow-sm";

function myDateAndTime() {
    const date = new Date().toLocaleString('en-EN', {
        timeZone: 'Europe/Amsterdam',
        hour12: false,
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return date;
}

export default function Introduction() {
    useEffect(() => {
        function updateDateTime() {
            const dateTimeElement = document.getElementById('dateTime');
            if (dateTimeElement) {
                dateTimeElement.textContent = myDateAndTime();
            }
        }

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-row sm:items-start w-full">
            <div className="flex flex-row gap-8 items-center justify-between w-full relative">
                <GlowSm />
                <div className="text-xl text-black dark:text-white">
                    <p className="text-neutral-600 dark:text-neutral-300 font-medium">👋 Hallo, mijn naam is</p>
                    <p className="text-7xl font-bold">Jasper Bos,</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 font-semibold">
                        <span id="dateTime" /> • Groningen, Nederland
                    </p>
                    <TypedAbout />
                </div>
                <div className="">
                    <TransparentImageWithOutline
                        src="/rilakkuma.png"
                    />
                </div>
            </div>
        </div>
    );
}