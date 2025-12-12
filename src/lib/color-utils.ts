/**
 * Color utility functions for determining readable text colors
 * based on background colors
 */

/**
 * Calculate luminance of a color
 */
function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Get readable text color (black or white) based on background color
 */
export function getReadableTextColor(backgroundColor: string): string {
  const luminance = getLuminance(backgroundColor);
  // Use white text on dark backgrounds, black on light backgrounds
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

/**
 * Get readable background color (light or dark) based on text color
 */
export function getReadableBackgroundColor(textColor: string): string {
  const luminance = getLuminance(textColor);
  // Use dark background for light text, light background for dark text
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}
