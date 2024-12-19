import Image from 'next/image'

export default function CodeIcons() {
    const icons = [
        {
            sources: [
                { src: '/code-icons/next-light.svg', media: '(prefers-color-scheme: dark)' },
                { src: '/code-icons/next-dark.svg', media: '(prefers-color-scheme: light)' },
            ],
            alt: 'Next.js',
        },
        {
            src: '/code-icons/svelte.svg',
            alt: 'Svelte',
            className: '',
        },
        {
            src: '/code-icons/tailwind.svg',
            alt: 'Tailwind CSS',
            className: '',
        },
        {
            src: '/code-icons/react.svg',
            alt: 'React',
            className: '',
        },
        {
            src: '/code-icons/figma.svg',
            alt: 'Figma',
            width: 22,
            height: 22,
            className: '',
        },
        {
            src: '/code-icons/typescript.svg',
            alt: 'TypeScript',
            className: '',
        },
        {
            src: '/code-icons/html.svg',
            alt: 'HTML',
            className: '',
        },
        {
            sources: [
                { src: '/code-icons/vercel-light.svg', media: '(prefers-color-scheme: dark)' },
                { src: '/code-icons/vercel-dark.svg', media: '(prefers-color-scheme: light)' },
            ],
            alt: 'Vercel',
            className: '',
        },
        {
            src: '/code-icons/git.svg',
            alt: 'Git',
            className: '',
        },
        {
            src: '/code-icons/cloudflare.svg',
            alt: 'Cloudflare',
            className: '',
        },
        {
            src: '/code-icons/docker.svg',
            alt: 'Docker',
            className: '',
        },
        {
            sources: [
                { src: '/code-icons/next-light.svg', media: '(prefers-color-scheme: dark)' },
                { src: '/code-icons/next-dark.svg', media: '(prefers-color-scheme: light)' },
            ],
            alt: 'Next.js',
        },
        {
            src: '/code-icons/svelte.svg',
            alt: 'Svelte',
            className: '',
        },
        {
            src: '/code-icons/tailwind.svg',
            alt: 'Tailwind CSS',
            className: '',
        },
        {
            src: '/code-icons/react.svg',
            alt: 'React',
            className: '',
        },
        {
            src: '/code-icons/figma.svg',
            alt: 'Figma',
            width: 22,
            height: 22,
            className: '',
        },
        {
            src: '/code-icons/typescript.svg',
            alt: 'TypeScript',
            className: '',
        },
        {
            src: '/code-icons/html.svg',
            alt: 'HTML',
            className: '',
        },
        {
            sources: [
                { src: '/code-icons/vercel-light.svg', media: '(prefers-color-scheme: dark)' },
                { src: '/code-icons/vercel-dark.svg', media: '(prefers-color-scheme: light)' },
            ],
            alt: 'Vercel',
            className: '',
        },
        {
            src: '/code-icons/git.svg',
            alt: 'Git',
            className: '',
        },
        {
            src: '/code-icons/cloudflare.svg',
            alt: 'Cloudflare',
            className: '',
        },
        {
            src: '/code-icons/docker.svg',
            alt: 'Docker',
            className: '',
        },
    ];    

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex animate-infinite-slider items-center">
                {icons.concat(icons).map((icon, index) => (
                    <div key={index} className="flex-shrink-0 px-4">
                        <Image
                            src={icon.src || icon.sources?.[0].src || ''}
                            alt={icon.alt}
                            width={icon.width || 40}
                            height={icon.height || 40}
                            priority
                            className={icon.className || ''}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
