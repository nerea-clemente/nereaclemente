/** Public image path, respecting the GitHub Pages base path. */
export const img = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${path}`;

/** Provisional photos cropped from the design mockups: replace with real ones. */
export const photo = (name: string) => img(`provisional/${name}.jpg`);
