import Image from "next/image";

export default function Footer() {
    return (
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
            <div className="w-full">
                <hr className="w-full border-neutral-400" />
            </div>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/leeuwz"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    className="dark:invert"
                    src="/github.svg"
                    alt="Github icon"
                    width={20}
                    height={20}
                />
                Github
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    className="dark:invert"
                    src="/linkedin.svg"
                    alt="Linkedin icon"
                    width={24}
                    height={24}
                />
                Linkedin
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="mailto:#"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    className="dark:invert"
                    src="/mail.svg"
                    alt="Mail icon"
                    width={24}
                    height={24}
                />
                Contact
            </a>
        </div>
    );
}