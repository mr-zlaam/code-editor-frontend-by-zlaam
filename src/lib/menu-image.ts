/**
 * Menu image helper functions
 * These functions help with handling menu image paths and fallbacks
 */

// Default fallback image for each menu section
const DEFAULT_IMAGES = {
  services: "https://placehold.co/600x400",
  industries: "https://placehold.co/600x400",
  technologies: "https://placehold.co/600x400",
  general: "https://placehold.co/600x400"
};

/**
 * Get appropriate image for a menu item
 * @param image The image path if specified
 * @param category The menu category (services, industries, technologies)
 * @returns The image path to use
 */
export const getMenuImage = (image?: string, category?: string): string => {
  // If an image is explicitly provided, use that
  if (image !== null && image !== undefined) return image;

  // Otherwise use the default for the category
  if (category !== null && category !== undefined) {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes("service")) return DEFAULT_IMAGES.services;
    if (lowerCategory.includes("industr")) return DEFAULT_IMAGES.industries;
    if (lowerCategory.includes("tech")) return DEFAULT_IMAGES.technologies;
  }

  // Fallback to general default
  return DEFAULT_IMAGES.general;
};

/**
 * Determines whether an image exists
 * This is a client-side approximation since we can't easily check file existence
 * @param imagePath The image path to check
 * @returns A promise that resolves to true if the image exists
 */
export const checkImageExists = (imagePath: string): Promise<boolean> => {
  // In a real implementation, you might want to validate the image
  // For now, let's assume all paths with /images/ are valid
  return Promise.resolve(imagePath.includes("/images/"));
};

/**
 * Generate a placeholder image path
 * @param category Category name (e.g., "cloud", "web development")
 * @returns A placeholder image path
 */
export const generatePlaceholderImage = (category: string): string => {
  const normalized = category.toLowerCase().replace(/\s+/g, "-");
  return `/images/placeholders/${normalized}.jpg`;
};
