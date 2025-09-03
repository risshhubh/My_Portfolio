// Utility to handle image paths for both development and production
const getImagePath = (imagePath) => {
  // Check if we're in development mode (Vite dev server)
  const isDevelopment = import.meta.env.DEV;
  
  // In development, use root path, in production use /My_Portfolio/
  const basePath = isDevelopment ? "" : "/My_Portfolio";
  
  return `${basePath}${imagePath}`;
};

export default getImagePath;
