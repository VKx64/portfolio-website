import { education, awards } from "../data/portfolio";

export default function Education() {
    return (
        <section id="about" className="py-12 md:py-16 border-t border-border-dark">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
                    Data Ingestion
                </h2>
                <p className="text-neutral-500 text-lg font-light">
                    Academic credentials and achievements.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {/* Education */}
                <div className="flex flex-col gap-8">
                    <h3 className="text-xs font-mono text-primary-bright mb-2 flex items-center gap-3 uppercase tracking-[0.2em] font-black">
                        <span className="material-symbols-outlined text-xl">school</span>
                        Education
                    </h3>
                    {education.map((edu) => (
                        <div key={edu.degree} className="pl-6 relative">
                            <div className="absolute -left-[8px] top-[6px] w-4 h-4 rounded-full border-3 border-neutral-700 bg-primary-bright z-10" />
                            <div className="absolute left-[-1px] top-[22px] bottom-0 w-[2px] bg-neutral-700" />
                            <h4 className="text-white font-black text-2xl mb-1">{edu.degree}</h4>
                            <p className="text-neutral-300 text-lg">{edu.school}</p>
                            <p className="text-neutral-500 text-sm font-mono mt-2 font-bold">{edu.date}</p>
                            {edu.details && (
                                <p className="text-neutral-500 text-base mt-4 italic leading-relaxed">
                                    {edu.details}
                                </p>
                            )}
                        </div>
                    ))}
                    <a
                        className="inline-flex items-center gap-3 text-primary-bright hover:text-white text-sm font-mono font-bold uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-all group/link w-fit"
                        href="/education"
                    >
                        VIEW_ALL_EDUCATION
                        <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">
                            arrow_forward
                        </span>
                    </a>
                </div>

                {/* Awards & Certificates */}
                <div className="flex flex-col gap-8">
                    <h3 className="text-xs font-mono text-primary-bright mb-2 flex items-center gap-3 uppercase tracking-[0.2em] font-black">
                        <span className="material-symbols-outlined text-xl">emoji_events</span>
                        Awards &amp; Certificates
                    </h3>
                    <div className="space-y-4">
                        {awards.map((award) => (
                            <div
                                key={award.title}
                                className="bg-black/90 backdrop-blur-sm border border-border-dark p-6 rounded-xl flex items-center justify-between group hover:border-primary/40 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded bg-surface-dark flex items-center justify-center border border-border-dark text-primary-bright">
                                        <span className="material-symbols-outlined text-xl">
                                            {award.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-lg">{award.title}</h4>
                                        <p className="text-neutral-500 text-sm mt-1">{award.subtitle}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono font-black text-primary-bright bg-primary/10 border border-primary/30 px-3 py-1 rounded tracking-widest uppercase">
                                    {award.date}
                                </span>
                            </div>
                        ))}
                    </div>
                    <a
                        className="inline-flex items-center gap-3 text-primary-bright hover:text-white text-sm font-mono font-bold uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-all group/link w-fit"
                        href="/awards"
                    >
                        VIEW_ALL_AWARDS
                        <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">
                            arrow_forward
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
