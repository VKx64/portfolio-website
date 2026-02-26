import { experience } from "../data/portfolio";

export default function Experience() {
    return (
        <section id="work" className="py-12 md:py-16 border-t border-border-dark">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
                    Execution History
                </h2>
                <p className="text-neutral-500 text-lg font-light">
                    Timeline of professional deployment.
                </p>
            </div>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[223px] top-6 bottom-4 w-px bg-neutral-700 hidden sm:block" />

                <div className="space-y-12">
                    {experience.map((item) => (
                        <div key={item.company + item.date} className="relative sm:flex gap-12 group">
                            <div className="sm:w-[200px] flex-none mb-4 sm:mb-0 sm:text-right pt-2 relative">
                                <span className="text-sm font-mono font-bold text-primary-bright tracking-widest block uppercase whitespace-nowrap">
                                    {item.date}
                                </span>
                                {item.type && (
                                    <span className="text-xs font-mono text-neutral-500 tracking-widest block uppercase mt-1">
                                        {item.type}
                                    </span>
                                )}
                            </div>
                            {/* Timeline dot */}
                            <div className="absolute left-[216px] top-[10px] w-4 h-4 rounded-full border-3 border-neutral-700 bg-primary-bright hidden sm:block z-10" />
                            <div className="flex-1 pb-4 pl-4 sm:pl-0 border-l border-border-dark sm:border-l-0 relative">
                                <div className="absolute -left-[5px] top-[12px] w-2.5 h-2.5 rounded-full bg-primary sm:hidden" />
                                <h3 className="text-2xl font-black text-white mb-1 group-hover:text-primary-bright transition-colors">
                                    {item.title}
                                </h3>
                                <div className="text-neutral-500 text-sm font-bold mb-4 uppercase tracking-widest">
                                    {item.company}
                                </div>
                                {item.bullets && item.bullets.length > 0 && (
                                    <ul className="text-neutral-400 text-lg leading-relaxed max-w-3xl list-disc pl-5 space-y-3">
                                        {item.bullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
