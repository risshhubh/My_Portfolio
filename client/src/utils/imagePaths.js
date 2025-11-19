// Utility to handle image paths for both development and production
// Uses Vite's `BASE_URL` so paths work correctly when the app is served
// from a subpath (e.g. GitHub Pages) or root in dev.
const getImagePath = (imagePath) => {
  // Vite exposes the configured base URL via import.meta.env.BASE_URL
  const baseUrl = import.meta.env.BASE_URL || "";

  // Remove trailing slash from baseUrl to avoid double slashes
  const trimmedBase = baseUrl.endsWith("/") && baseUrl.length > 1 ? baseUrl.slice(0, -1) : baseUrl === "/" ? "" : baseUrl;

  return `${trimmedBase}${imagePath}`;
};

export default getImagePath;
