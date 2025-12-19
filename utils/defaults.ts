
// Shared defaults for the Christmas Tree experience
// These values act as the single source of truth for both 
// the initial component rendering and the Developer Panel state.

export const SCENE_DEFAULTS = {
    snowSize: 11.0,
    snowCount: 400,
    foliageSize: 15.0,
    foliageCount: 6000,
    photoScale: 2.5,
    // New controls for Ball (specifically ball.glb custom model context)
    ballScale: 0.7, 
    ballVariance: 0.2,
    // Control for Top Star
    starScale: 11.0,
    titleText: "Easy Christmas",
    titleFont: "font-luxury" // Default font class
};

// Default images displayed before user uploads their own.
// Using local project assets located in public/defaultImg/
// Updated to use BASE_URL for GitHub Pages subpath support
const BASE_URL = import.meta.env.BASE_URL || '/';
export const DEFAULT_IMAGES = [
    `${BASE_URL}defaultImg/1.jpg`,
    `${BASE_URL}defaultImg/2.jpg`,
    `${BASE_URL}defaultImg/3.jpg`,
    `${BASE_URL}defaultImg/4.jpg`,
    `${BASE_URL}defaultImg/5.jpg`,
    `${BASE_URL}defaultImg/6.jpg`,
    `${BASE_URL}defaultImg/7.jpg`,
    `${BASE_URL}defaultImg/8.jpg`
];
