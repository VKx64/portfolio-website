import { skills } from "../data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="py-12 md:py-16 border-t border-border-dark">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
                        Core Protocols
                    </h2>
                    <p className="text-neutral-500 text-lg font-light">
                        Technical capabilities and stack proficiency.
                    </p>
                </div>
                <a
                    className="text-primary-bright hover:text-white text-sm font-mono flex items-center gap-3 group border-b border-primary/20 pb-1 hover:border-primary transition-all font-bold tracking-widest uppercase"
                    href="#"
                >
                    VIEW_ALL_SKILLS
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                        arrow_forward
                    </span>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill.title}
                        className="group flex flex-col gap-4 rounded-xl border border-border-dark bg-black/90 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/40 hover:bg-surface-dark/90"
                    >
                        <div className="size-12 rounded bg-surface-dark flex items-center justify-center border border-border-dark group-hover:border-primary/40 group-hover:text-primary-bright transition-colors text-neutral-600">
                            <span className="material-symbols-outlined text-2xl">{skill.icon}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-white text-xl font-black">{skill.title}</h3>
                            <p className="text-neutral-500 text-sm font-mono leading-relaxed tracking-tight">
                                {skill.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
