import { footer } from "../data/portfolio";

export default function Footer() {
    return (
        <footer className="border-t border-border-dark py-12 px-[5%] lg:px-[18%] bg-black relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-500 text-sm font-mono font-bold">
                <p className="tracking-widest uppercase">
                    {footer.copyright}
                </p>
                <div className="flex gap-10">
                    {footer.socials.map((social) => (
                        <a
                            key={social.label}
                            className="hover:text-primary-bright transition-colors tracking-widest uppercase"
                            href={social.href}
                            target={social.href.startsWith("http") ? "_blank" : undefined}
                            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                            {social.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
