import { profile, contactLinks } from "../data/portfolio";

export default function Contact() {
    return (
        <section id="contact" className="py-12 md:py-16 border-t border-border-dark">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-auto md:h-[400px]">
                {/* CTA card */}
                <div className="md:col-span-3 h-full bg-black/90 backdrop-blur-sm rounded-2xl border border-border-dark p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                            <div className="inline-flex items-center gap-3 mb-8">
                                <div className="w-1.5 h-1.5 bg-primary-bright rounded-full animate-pulse" />
                                <span className="text-xs font-mono font-bold text-primary-bright tracking-[0.2em] uppercase">
                                    Status: Deployed
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                                Initialize Collaboration?
                            </h2>
                            <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-md">
                                Let's discuss how I can help bring your ideas to life with clean
                                code and scalable architecture.
                            </p>
                        </div>
                        <div className="mt-8">
                            <a
                                className="inline-flex items-center gap-3 text-sm font-mono font-bold uppercase tracking-widest text-white border-b border-primary/30 pb-1 hover:border-primary transition-colors group/link"
                                href={`mailto:${profile.email}`}
                            >
                                Start Transmission
                                <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1 text-primary-bright">
                                    arrow_right_alt
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact links grid */}
                <div className="md:col-span-2 grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 h-full">
                    {contactLinks.map((link) => (
                        <a
                            key={link.label}
                            className="relative bg-black/90 backdrop-blur-sm rounded-xl border border-border-dark flex flex-col items-center justify-center gap-4 group hover:border-primary-bright/50 transition-all duration-300 overflow-hidden min-h-[140px]"
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10 size-12 rounded-lg bg-surface-dark border border-border-dark flex items-center justify-center text-primary-bright group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(74,110,85,0.3)] transition-all duration-300">
                                <span className="material-symbols-outlined text-2xl">
                                    {link.icon}
                                </span>
                            </div>
                            <span className="relative z-10 text-xs font-mono font-bold text-neutral-500 group-hover:text-primary-bright transition-colors uppercase tracking-widest">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
