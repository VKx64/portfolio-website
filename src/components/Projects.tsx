import { projects } from "../data/portfolio";

export default function Projects() {
    return (
        <section className="py-12 md:py-16 border-t border-border-dark">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
                        Featured Output
                    </h2>
                    <p className="text-neutral-500 text-lg font-light">
                        Recent successful compilations.
                    </p>
                </div>
                <a
                    className="text-primary-bright hover:text-white text-sm font-mono flex items-center gap-3 group border-b border-primary/20 pb-1 hover:border-primary transition-all font-bold tracking-widest uppercase"
                    href="#"
                >
                    VIEW_ALL_PROJECTS
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                        arrow_forward
                    </span>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group relative rounded-xl overflow-hidden bg-black/90 backdrop-blur-sm border border-border-dark hover:border-primary/40 transition-all duration-300"
                    >
                        <div className="aspect-video w-full bg-surface-dark relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-10" />
                            <img
                                alt={project.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 mix-blend-luminosity grayscale"
                                src={project.image}
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10">
                                <span className="material-symbols-outlined text-9xl text-neutral-700">
                                    {project.icon}
                                </span>
                            </div>
                        </div>
                        <div className="p-8 relative z-20 -mt-16">
                            <h3 className="text-2xl font-black text-white mb-2.5 group-hover:text-primary-bright transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-neutral-400 text-base mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded bg-surface-dark border border-border-dark text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
