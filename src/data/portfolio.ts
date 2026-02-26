// Re-exports JSON data with TypeScript types for component imports.
// Prefixes image paths with Vite's base URL for GitHub Pages compatibility.
import data from "./portfolio.json";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function prefixPath(path: string) {
    if (path.startsWith("/")) return base + path;
    return path;
}

export const profile = {
    ...data.profile,
    profileImage: prefixPath(data.profile.profileImage),
};

export const skills = data.skills;
export const experience = data.experience;

export const projects = data.projects.map((p) => ({
    ...p,
    image: prefixPath(p.image),
}));

export const education = data.education;
export const awards = data.awards;
export const contactLinks = data.contactLinks;
export const footer = data.footer;
