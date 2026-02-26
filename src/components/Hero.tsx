import { profile } from "../data/portfolio";

export default function Hero() {
    return (
        <div className="py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
                {/* Hero text card */}
                <div className="md:col-span-8 md:row-span-2 rounded-xl border border-border-dark bg-black/80 backdrop-blur-sm p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-all duration-500 min-h-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border-dark bg-surface-dark w-fit mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-mono font-bold text-neutral-400 tracking-widest uppercase">
                                {profile.status}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.05] tracking-tight text-white mb-6">
                            {profile.headline.prefix} <br />
                            <span className="text-primary-bright">{profile.headline.highlight}</span>.
                        </h1>
                        <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
                            {profile.description}
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-wrap gap-5 mt-auto">
                        <a
                            href={profile.resumeUrl}
                            className="flex items-center gap-3 justify-center rounded h-12 px-8 bg-white text-black hover:bg-neutral-200 text-base font-bold tracking-wide transition-all hover:translate-y-[-2px]"
                        >
                            <span className="material-symbols-outlined text-xl">download</span>
                            Download Resume
                        </a>
                        <a
                            href={profile.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 justify-center rounded h-12 px-8 border border-border-dark hover:border-primary/50 text-neutral-400 hover:text-primary-bright text-base font-bold transition-all bg-transparent"
                        >
                            <span className="material-symbols-outlined text-xl">code</span>
                            View GitHub
                        </a>
                    </div>
                </div>

                {/* Profile image card */}
                <div className="md:col-span-4 md:row-span-2 flex flex-col">
                    <div className="flex-1 rounded-xl border border-border-dark bg-black flex flex-col relative overflow-hidden group hover:border-primary/40 transition-all">
                        <div className="flex-1 relative min-h-[350px]">
                            <img
                                alt="Tech aesthetic profile"
                                className="absolute inset-0 w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 grayscale"
                                src={profile.profileImage}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-black/80 backdrop-blur-md border border-border-dark p-4 rounded-lg flex items-center gap-4">
                                    <div className="h-10 w-10 rounded bg-surface-dark flex items-center justify-center border border-border-dark text-primary-bright">
                                        <span className="material-symbols-outlined text-xl">terminal</span>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-black tracking-wide">
                                            {profile.name}
                                        </p>
                                        <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
                                            {profile.tagline}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
