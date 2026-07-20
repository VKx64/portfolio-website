import { education } from "../data/portfolio";

export default function Education() {
    return (
        <section id="about" className="py-12 md:py-16 border-t border-border-dark">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
                    Data Ingestion
                </h2>
                <p className="text-neutral-500 text-lg font-light">
                    Academic background.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:gap-16">
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
                </div>
            </div>
        </section>
    );
}
