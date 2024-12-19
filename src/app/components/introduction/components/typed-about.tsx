'use client';

import { ReactTyped } from "react-typed";

export default function TypedAbout() {
    return (
        <p className="text2xl text-neutral-600 dark:text-neutral-300 font-medium">
            <ReactTyped
            strings={["Frontend developer met ervaring.", "Houd van het bouwen van simpele UI/UX oplossingen.", "Word vrolijk van enthousiaste en tevreden klanten.",
                "In vrije tijd veel bezig met eigen projecten."
            ]}
            typeSpeed={50}
            backSpeed={40}
            backDelay={3000}
            startDelay={500}
            loop
            />
        </p>
    )
}