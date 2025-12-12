/**
 * Design DNA Generator
 * Creates unique visual styling for each site based on domain hash
 * Ensures 500+ sites look completely different to avoid Google penalties
 * 
 * Supports two design modes:
 * - Basic: Dynamic colors, fonts, minor layout variations
 * - Advanced: Completely different layouts, structures, and visual patterns
 */

export type DesignStyle = 'basic' | 'advanced';

export interface DesignDNA {
  designStyle: DesignStyle;
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
    textOnPrimary: string
  }
  gradients: {
    primary: string
    hero: string
    accent: string
  }
  fonts: {
    heading: string
    body: string
  }
  layout: {
    heroStyle: 'centered' | 'left-aligned' | 'split'
    cardStyle: 'rounded' | 'sharp' | 'minimal'
    ctaStyle: 'pill' | 'square' | 'rounded'
  }
  // Advanced layout configuration (only used when designStyle === 'advanced')
  advancedLayout?: AdvancedLayoutConfig;
}

/**
 * Advanced Layout Configuration
 * Provides significantly different structural variations for advanced mode
 */
export interface AdvancedLayoutConfig {
  // Hero section variations
  heroVariant: 'centered' | 'split-left' | 'split-right' | 'diagonal' | 'wave' | 'gradient-mesh' | 'card-overlay' | 'minimal';
  
  // Section order (randomized for uniqueness)
  sectionOrder: ('howItWorks' | 'features' | 'programs' | 'states' | 'cities' | 'cta')[];
  
  // Card layout variations
  cardLayout: 'grid-3' | 'grid-2' | 'grid-4' | 'masonry' | 'carousel' | 'accordion' | 'list' | 'alternating';
  
  // Navigation style
  navStyle: 'standard' | 'centered-logo' | 'minimal' | 'transparent' | 'dark' | 'floating';
  
  // Footer style
  footerStyle: 'mega' | 'simple' | 'minimal' | 'centered' | 'dark' | 'gradient';
  
  // Spacing scale
  spacingScale: 'compact' | 'balanced' | 'generous' | 'dramatic';
  
  // Animation style
  animationStyle: 'none' | 'subtle' | 'moderate' | 'playful';
  
  // Border radius scale
  borderRadius: 'none' | 'small' | 'medium' | 'large' | 'full';
  
  // Shadow intensity
  shadowStyle: 'none' | 'subtle' | 'medium' | 'strong' | 'colored';
  
  // Background pattern
  backgroundPattern: 'none' | 'dots' | 'grid' | 'waves' | 'gradient-mesh' | 'noise';
  
  // CTA placement
  ctaPlacement: 'inline' | 'floating' | 'sidebar' | 'bottom-bar' | 'modal-trigger';
  
  // Typography scale
  typographyScale: 'compact' | 'standard' | 'large' | 'dramatic';
  
  // Image style
  imageStyle: 'rounded' | 'sharp' | 'circular' | 'masked' | 'shadowed';
  
  // Button style
  buttonStyle: 'solid' | 'outline' | 'ghost' | 'gradient' | '3d' | 'glow';
}

// 80+ Premium Dark Theme Color Palettes - Million Dollar Edition
const COLOR_PALETTES = [
  // Premium Dark Blues with Glow
  { primary: '#6366F1', secondary: '#4F46E5', accent: '#F59E0B', background: '#0A0B0F', text: '#F8FAFC', textOnPrimary: '#FFFFFF' },
  { primary: '#3B82F6', secondary: '#2563EB', accent: '#FBBF24', background: '#0F172A', text: '#F1F5F9', textOnPrimary: '#FFFFFF' },
  { primary: '#0EA5E9', secondary: '#0284C7', accent: '#F97316', background: '#0C1222', text: '#E2E8F0', textOnPrimary: '#FFFFFF' },
  { primary: '#60A5FA', secondary: '#3B82F6', accent: '#FB923C', background: '#0A0E1A', text: '#F8FAFC', textOnPrimary: '#FFFFFF' },
  { primary: '#818CF8', secondary: '#6366F1', accent: '#FBBF24', background: '#12141A', text: '#F1F5F9', textOnPrimary: '#FFFFFF' },
  
  // Premium Dark Greens with Energy
  { primary: '#10B981', secondary: '#059669', accent: '#F59E0B', background: '#0A0F0D', text: '#ECFDF5', textOnPrimary: '#FFFFFF' },
  { primary: '#22C55E', secondary: '#16A34A', accent: '#EF4444', background: '#0D1412', text: '#DCFCE7', textOnPrimary: '#FFFFFF' },
  { primary: '#34D399', secondary: '#10B981', accent: '#A855F7', background: '#0A0E0D', text: '#D1FAE5', textOnPrimary: '#0A0B0F' },
  { primary: '#4ADE80', secondary: '#22C55E', accent: '#F472B6', background: '#0C120F', text: '#DCFCE7', textOnPrimary: '#0A0B0F' },
  { primary: '#14B8A6', secondary: '#0D9488', accent: '#FBBF24', background: '#0A0F0E', text: '#CCFBF1', textOnPrimary: '#FFFFFF' },
  
  // Premium Dark Purples & Magentas
  { primary: '#A855F7', secondary: '#9333EA', accent: '#22C55E', background: '#0D0A12', text: '#FAF5FF', textOnPrimary: '#FFFFFF' },
  { primary: '#C084FC', secondary: '#A855F7', accent: '#FBBF24', background: '#0F0A14', text: '#F3E8FF', textOnPrimary: '#FFFFFF' },
  { primary: '#D946EF', secondary: '#C026D3', accent: '#10B981', background: '#120A14', text: '#FDF4FF', textOnPrimary: '#FFFFFF' },
  { primary: '#E879F9', secondary: '#D946EF', accent: '#F59E0B', background: '#140C16', text: '#FAE8FF', textOnPrimary: '#0A0B0F' },
  { primary: '#8B5CF6', secondary: '#7C3AED', accent: '#FB923C', background: '#0C0A12', text: '#EDE9FE', textOnPrimary: '#FFFFFF' },
  
  // Premium Dark Oranges & Ambers
  { primary: '#F97316', secondary: '#EA580C', accent: '#3B82F6', background: '#120A05', text: '#FFF7ED', textOnPrimary: '#FFFFFF' },
  { primary: '#FB923C', secondary: '#F97316', accent: '#A855F7', background: '#140B06', text: '#FFEDD5', textOnPrimary: '#0A0B0F' },
  { primary: '#F59E0B', secondary: '#D97706', accent: '#6366F1', background: '#120B04', text: '#FEF3C7', textOnPrimary: '#0A0B0F' },
  { primary: '#FBBF24', secondary: '#F59E0B', accent: '#8B5CF6', background: '#140D05', text: '#FEF9C3', textOnPrimary: '#0A0B0F' },
  { primary: '#FCD34D', secondary: '#FBBF24', accent: '#7C3AED', background: '#140E06', text: '#FEFCE8', textOnPrimary: '#0A0B0F' },
  
  // Premium Dark Reds & Pinks
  { primary: '#EF4444', secondary: '#DC2626', accent: '#22C55E', background: '#120A0A', text: '#FEF2F2', textOnPrimary: '#FFFFFF' },
  { primary: '#F87171', secondary: '#EF4444', accent: '#34D399', background: '#140B0B', text: '#FECACA', textOnPrimary: '#FFFFFF' },
  { primary: '#F43F5E', secondary: '#E11D48', accent: '#60A5FA', background: '#140A0C', text: '#FFE4E6', textOnPrimary: '#FFFFFF' },
  { primary: '#FB7185', secondary: '#F43F5E', accent: '#14B8A6', background: '#140A0D', text: '#FFE4E6', textOnPrimary: '#FFFFFF' },
  { primary: '#EC4899', secondary: '#DB2777', accent: '#10B981', background: '#120A0E', text: '#FCE7F3', textOnPrimary: '#FFFFFF' },
  
  // Premium Dark Teals & Cyans
  { primary: '#14B8A6', secondary: '#0D9488', accent: '#F59E0B', background: '#0A0F0E', text: '#CCFBF1', textOnPrimary: '#FFFFFF' },
  { primary: '#2DD4BF', secondary: '#14B8A6', accent: '#F472B6', background: '#0A0F0E', text: '#99F6E4', textOnPrimary: '#0A0B0F' },
  { primary: '#06B6D4', secondary: '#0891B2', accent: '#F97316', background: '#0A0E12', text: '#E0F2FE', textOnPrimary: '#FFFFFF' },
  { primary: '#22D3EE', secondary: '#06B6D4', accent: '#FB7185', background: '#0A0F12', text: '#CFFAFE', textOnPrimary: '#0A0B0F' },
  { primary: '#67E8F9', secondary: '#22D3EE', accent: '#F87171', background: '#0B1014', text: '#CFFAFE', textOnPrimary: '#0A0B0F' },
  
  // Premium Dark Indigos & Violets
  { primary: '#6366F1', secondary: '#4F46E5', accent: '#FBBF24', background: '#0A0B12', text: '#E0E7FF', textOnPrimary: '#FFFFFF' },
  { primary: '#818CF8', secondary: '#6366F1', accent: '#FB923C', background: '#0B0C14', text: '#E0E7FF', textOnPrimary: '#FFFFFF' },
  { primary: '#4F46E5', secondary: '#4338CA', accent: '#F59E0B', background: '#0A0A12', text: '#E0E7FF', textOnPrimary: '#FFFFFF' },
  
  // Premium Dark Slates (Ultra Professional)
  { primary: '#64748B', secondary: '#475569', accent: '#60A5FA', background: '#0A0D12', text: '#F1F5F9', textOnPrimary: '#FFFFFF' },
  { primary: '#94A3B8', secondary: '#64748B', accent: '#34D399', background: '#0C0F14', text: '#F8FAFC', textOnPrimary: '#0A0B0F' },
  { primary: '#475569', secondary: '#334155', accent: '#F472B6', background: '#080B10', text: '#E2E8F0', textOnPrimary: '#FFFFFF' },
  
  // Premium Warm Dark Combinations
  { primary: '#DC2626', secondary: '#B91C1C', accent: '#FBBF24', background: '#120808', text: '#FEF2F2', textOnPrimary: '#FFFFFF' },
  { primary: '#EA580C', secondary: '#C2410C', accent: '#A3E635', background: '#120A05', text: '#FFF7ED', textOnPrimary: '#FFFFFF' },
  { primary: '#F59E0B', secondary: '#D97706', accent: '#EF4444', background: '#120B04', text: '#FEF3C7', textOnPrimary: '#0A0B0F' },
  
  // Premium Cool Dark Combinations
  { primary: '#0284C7', secondary: '#0369A1', accent: '#FBBF24', background: '#0A0E14', text: '#E0F2FE', textOnPrimary: '#FFFFFF' },
  { primary: '#0891B2', secondary: '#0E7490', accent: '#FB923C', background: '#0A0F12', text: '#CFFAFE', textOnPrimary: '#FFFFFF' },
  { primary: '#1D4ED8', secondary: '#1E40AF', accent: '#F59E0B', background: '#0A0C14', text: '#DBEAFE', textOnPrimary: '#FFFFFF' },
  
  // Premium Nature-Inspired Dark
  { primary: '#65A30D', secondary: '#4D7C0F', accent: '#F59E0B', background: '#0C0F08', text: '#ECFCCB', textOnPrimary: '#FFFFFF' },
  { primary: '#84CC16', secondary: '#65A30D', accent: '#D946EF', background: '#0D1008', text: '#ECFCCB', textOnPrimary: '#0A0B0F' },
  { primary: '#16A34A', secondary: '#15803D', accent: '#EC4899', background: '#0A0E0B', text: '#DCFCE7', textOnPrimary: '#FFFFFF' },
  
  // Premium Vibrant Dark Combinations
  { primary: '#7C3AED', secondary: '#6D28D9', accent: '#10B981', background: '#0C0A12', text: '#EDE9FE', textOnPrimary: '#FFFFFF' },
  { primary: '#2DD4BF', secondary: '#14B8A6', accent: '#F43F5E', background: '#0A0F0E', text: '#99F6E4', textOnPrimary: '#0A0B0F' },
  { primary: '#818CF8', secondary: '#6366F1', accent: '#FBBF24', background: '#0B0C14', text: '#E0E7FF', textOnPrimary: '#FFFFFF' },
  { primary: '#34D399', secondary: '#10B981', accent: '#A855F7', background: '#0A0E0D', text: '#D1FAE5', textOnPrimary: '#0A0B0F' },
  { primary: '#38BDF8', secondary: '#0EA5E9', accent: '#F43F5E', background: '#0A0E12', text: '#E0F2FE', textOnPrimary: '#0A0B0F' },
  { primary: '#C084FC', secondary: '#A855F7', accent: '#22C55E', background: '#0F0A14', text: '#F3E8FF', textOnPrimary: '#FFFFFF' },
  { primary: '#FB7185', secondary: '#F43F5E', accent: '#14B8A6', background: '#140A0D', text: '#FFE4E6', textOnPrimary: '#FFFFFF' },
  { primary: '#A3E635', secondary: '#84CC16', accent: '#A855F7', background: '#0D1008', text: '#ECFCCB', textOnPrimary: '#0A0B0F' },
  { primary: '#FACC15', secondary: '#EAB308', accent: '#7C3AED', background: '#140E06', text: '#FEF9C3', textOnPrimary: '#0A0B0F' },
  { primary: '#4ADE80', secondary: '#22C55E', accent: '#F43F5E', background: '#0C120F', text: '#DCFCE7', textOnPrimary: '#0A0B0F' },
  { primary: '#60A5FA', secondary: '#3B82F6', accent: '#F97316', background: '#0A0D14', text: '#DBEAFE', textOnPrimary: '#FFFFFF' },
  { primary: '#F472B6', secondary: '#EC4899', accent: '#14B8A6', background: '#120A0E', text: '#FCE7F3', textOnPrimary: '#FFFFFF' },
  
  // Premium Sophisticated Dark Palettes
  { primary: '#0D9488', secondary: '#0F766E', accent: '#FBBF24', background: '#0A0F0E', text: '#CCFBF1', textOnPrimary: '#FFFFFF' },
  { primary: '#7E22CE', secondary: '#6B21A8', accent: '#22C55E', background: '#0D0A12', text: '#F3E8FF', textOnPrimary: '#FFFFFF' },
  { primary: '#BE123C', secondary: '#9F1239', accent: '#FBBF24', background: '#120A0B', text: '#FFE4E6', textOnPrimary: '#FFFFFF' },
  { primary: '#15803D', secondary: '#166534', accent: '#F97316', background: '#0A0E0B', text: '#BBF7D0', textOnPrimary: '#FFFFFF' },
  { primary: '#1D4ED8', secondary: '#1E40AF', accent: '#FBBF24', background: '#0A0C14', text: '#BFDBFE', textOnPrimary: '#FFFFFF' },
  { primary: '#B45309', secondary: '#92400E', accent: '#60A5FA', background: '#120B04', text: '#FEF3C7', textOnPrimary: '#FFFFFF' },
  { primary: '#0F766E', secondary: '#115E59', accent: '#F43F5E', background: '#0A0F0E', text: '#99F6E4', textOnPrimary: '#FFFFFF' },
  { primary: '#9333EA', secondary: '#7E22CE', accent: '#F59E0B', background: '#0D0A12', text: '#E9D5FF', textOnPrimary: '#FFFFFF' },
  { primary: '#DC2626', secondary: '#B91C1C', accent: '#14B8A6', background: '#120808', text: '#FECACA', textOnPrimary: '#FFFFFF' },
  { primary: '#CA8A04', secondary: '#A16207', accent: '#A855F7', background: '#120E05', text: '#FEF08A', textOnPrimary: '#0A0B0F' },
  
  // ULTRA-PREMIUM HIGH-CONVERTING DARK PALETTES (40 additional)
  // Dark Orange/Red combos (Maximum conversion with premium feel)
  { primary: '#FF6B35', secondary: '#E85D2F', accent: '#4ECDC4', background: '#120906', text: '#FFF5F2', textOnPrimary: '#FFFFFF' },
  { primary: '#FF5722', secondary: '#F4511E', accent: '#00BCD4', background: '#120805', text: '#FFF3F0', textOnPrimary: '#FFFFFF' },
  { primary: '#FF7043', secondary: '#FF5722', accent: '#26A69A', background: '#120906', text: '#FBE9E7', textOnPrimary: '#FFFFFF' },
  { primary: '#FF9800', secondary: '#FB8C00', accent: '#7C4DFF', background: '#140C04', text: '#FFF3E0', textOnPrimary: '#0A0B0F' },
  { primary: '#FF6F00', secondary: '#FF6F00', accent: '#00E676', background: '#140B03', text: '#FFF8E1', textOnPrimary: '#FFFFFF' },
  { primary: '#FF8A65', secondary: '#FF7043', accent: '#4DD0E1', background: '#140A07', text: '#FFCCBC', textOnPrimary: '#FFFFFF' },
  
  // Green/Trust combos (trust + action)
  { primary: '#00c853', secondary: '#00b248', accent: '#ff6d00', background: '#e8f5e9', text: '#1b5e20', textOnPrimary: '#ffffff' },
  { primary: '#4caf50', secondary: '#43a047', accent: '#ffa726', background: '#f1f8e9', text: '#2e7d32', textOnPrimary: '#ffffff' },
  { primary: '#66bb6a', secondary: '#4caf50', accent: '#ff7043', background: '#e8f5e9', text: '#388e3c', textOnPrimary: '#ffffff' },
  { primary: '#26c6da', secondary: '#00acc1', accent: '#ff6e40', background: '#e0f7fa', text: '#006064', textOnPrimary: '#ffffff' },
  { primary: '#00897b', secondary: '#00796b', accent: '#ffab00', background: '#e0f2f1', text: '#004d40', textOnPrimary: '#ffffff' },
  
  // Blue/Trust authority combos
  { primary: '#1e88e5', secondary: '#1976d2', accent: '#ff9100', background: '#e3f2fd', text: '#0d47a1', textOnPrimary: '#ffffff' },
  { primary: '#039be5', secondary: '#0288d1', accent: '#ff6f00', background: '#e1f5fe', text: '#01579b', textOnPrimary: '#ffffff' },
  { primary: '#00acc1', secondary: '#0097a7', accent: '#ff5722', background: '#e0f7fa', text: '#006064', textOnPrimary: '#ffffff' },
  { primary: '#5e35b1', secondary: '#512da8', accent: '#ffc107', background: '#ede7f6', text: '#311b92', textOnPrimary: '#ffffff' },
  { primary: '#3949ab', secondary: '#303f9f', accent: '#ff9800', background: '#e8eaf6', text: '#1a237e', textOnPrimary: '#ffffff' },
  
  // Purple/Premium combos
  { primary: '#8e24aa', secondary: '#7b1fa2', accent: '#ffca28', background: '#f3e5f5', text: '#4a148c', textOnPrimary: '#ffffff' },
  { primary: '#ab47bc', secondary: '#9c27b0', accent: '#ffd54f', background: '#f3e5f5', text: '#6a1b9a', textOnPrimary: '#ffffff' },
  { primary: '#7e57c2', secondary: '#673ab7', accent: '#ff9800', background: '#ede7f6', text: '#4527a0', textOnPrimary: '#ffffff' },
  
  // Red/Urgency combos (scarcity/urgency)
  { primary: '#e53935', secondary: '#d32f2f', accent: '#66bb6a', background: '#ffebee', text: '#b71c1c', textOnPrimary: '#ffffff' },
  { primary: '#d32f2f', secondary: '#c62828', accent: '#29b6f6', background: '#ffcdd2', text: '#b71c1c', textOnPrimary: '#ffffff' },
  { primary: '#f4511e', secondary: '#e64a19', accent: '#26c6da', background: '#fbe9e7', text: '#bf360c', textOnPrimary: '#ffffff' },
  
  // Yellow/Gold attention grabbers
  { primary: '#fbc02d', secondary: '#f9a825', accent: '#5e35b1', background: '#fffde7', text: '#f57f17', textOnPrimary: '#1e293b' },
  { primary: '#fdd835', secondary: '#fbc02d', accent: '#e91e63', background: '#fffde7', text: '#f57f17', textOnPrimary: '#1e293b' },
  { primary: '#ffca28', secondary: '#ffb300', accent: '#7e57c2', background: '#fff9c4', text: '#ff6f00', textOnPrimary: '#1e293b' },
  
  // Teal/Modern combos
  { primary: '#00bfa5', secondary: '#00897b', accent: '#ff6e40', background: '#e0f2f1', text: '#004d40', textOnPrimary: '#ffffff' },
  { primary: '#26a69a', secondary: '#00897b', accent: '#ff5722', background: '#e0f2f1', text: '#004d40', textOnPrimary: '#ffffff' },
  { primary: '#00838f', secondary: '#006064', accent: '#ffab00', background: '#e0f7fa', text: '#004d40', textOnPrimary: '#ffffff' },
  
  // Lime/Fresh energy combos
  { primary: '#9ccc65', secondary: '#8bc34a', accent: '#ff7043', background: '#f9fbe7', text: '#558b2f', textOnPrimary: '#1e293b' },
  { primary: '#7cb342', secondary: '#689f38', accent: '#ff6e40', background: '#f1f8e9', text: '#33691e', textOnPrimary: '#ffffff' },
  { primary: '#afb42b', secondary: '#9e9d24', accent: '#ff5722', background: '#f9fbe7', text: '#827717', textOnPrimary: '#1e293b' },
  
  // Amber/Warm conversion combos
  { primary: '#ffb300', secondary: '#ffa000', accent: '#5e35b1', background: '#fff8e1', text: '#ff6f00', textOnPrimary: '#1e293b' },
]

// 30 font combinations
const FONT_COMBINATIONS = [
  { heading: 'Inter', body: 'Inter' },
  { heading: 'Poppins', body: 'Open Sans' },
  { heading: 'Montserrat', body: 'Lato' },
  { heading: 'Playfair Display', body: 'Source Sans Pro' },
  { heading: 'Raleway', body: 'Roboto' },
  { heading: 'Oswald', body: 'Merriweather' },
  { heading: 'Nunito', body: 'Nunito Sans' },
  { heading: 'DM Sans', body: 'DM Sans' },
  { heading: 'Work Sans', body: 'Work Sans' },
  { heading: 'Rubik', body: 'Karla' },
  { heading: 'Quicksand', body: 'Quicksand' },
  { heading: 'Josefin Sans', body: 'Lora' },
  { heading: 'Cabin', body: 'Cabin' },
  { heading: 'Mulish', body: 'Mulish' },
  { heading: 'Barlow', body: 'Barlow' },
  { heading: 'Manrope', body: 'Manrope' },
  { heading: 'Outfit', body: 'Outfit' },
  { heading: 'Plus Jakarta Sans', body: 'Plus Jakarta Sans' },
  { heading: 'Sora', body: 'Sora' },
  { heading: 'Urbanist', body: 'Urbanist' },
  { heading: 'Figtree', body: 'Figtree' },
  { heading: 'Lexend', body: 'Lexend' },
  { heading: 'Be Vietnam Pro', body: 'Be Vietnam Pro' },
  { heading: 'Red Hat Display', body: 'Red Hat Text' },
  { heading: 'Space Grotesk', body: 'Space Grotesk' },
  { heading: 'Albert Sans', body: 'Albert Sans' },
  { heading: 'Epilogue', body: 'Epilogue' },
  { heading: 'General Sans', body: 'General Sans' },
  { heading: 'Satoshi', body: 'Satoshi' },
  { heading: 'Clash Display', body: 'Clash Grotesk' },
]

// Layout variations for Basic mode
const LAYOUT_OPTIONS = {
  heroStyles: ['centered', 'left-aligned', 'split'] as const,
  cardStyles: ['rounded', 'sharp', 'minimal'] as const,
  ctaStyles: ['pill', 'square', 'rounded'] as const,
}

// Advanced layout options - significantly more variations
const ADVANCED_LAYOUT_OPTIONS = {
  heroVariants: ['centered', 'split-left', 'split-right', 'diagonal', 'wave', 'gradient-mesh', 'card-overlay', 'minimal'] as const,
  cardLayouts: ['grid-3', 'grid-2', 'grid-4', 'masonry', 'carousel', 'accordion', 'list', 'alternating'] as const,
  navStyles: ['standard', 'centered-logo', 'minimal', 'transparent', 'dark', 'floating'] as const,
  footerStyles: ['mega', 'simple', 'minimal', 'centered', 'dark', 'gradient'] as const,
  spacingScales: ['compact', 'balanced', 'generous', 'dramatic'] as const,
  animationStyles: ['none', 'subtle', 'moderate', 'playful'] as const,
  borderRadii: ['none', 'small', 'medium', 'large', 'full'] as const,
  shadowStyles: ['none', 'subtle', 'medium', 'strong', 'colored'] as const,
  backgroundPatterns: ['none', 'dots', 'grid', 'waves', 'gradient-mesh', 'noise'] as const,
  ctaPlacements: ['inline', 'floating', 'sidebar', 'bottom-bar', 'modal-trigger'] as const,
  typographyScales: ['compact', 'standard', 'large', 'dramatic'] as const,
  imageStyles: ['rounded', 'sharp', 'circular', 'masked', 'shadowed'] as const,
  buttonStyles: ['solid', 'outline', 'ghost', 'gradient', '3d', 'glow'] as const,
}

// Section order variations for Advanced mode
const SECTION_ORDER_VARIATIONS = [
  ['howItWorks', 'features', 'programs', 'states', 'cities', 'cta'],
  ['features', 'howItWorks', 'programs', 'cities', 'states', 'cta'],
  ['programs', 'features', 'howItWorks', 'states', 'cta', 'cities'],
  ['howItWorks', 'programs', 'features', 'cta', 'states', 'cities'],
  ['features', 'programs', 'howItWorks', 'cities', 'cta', 'states'],
  ['programs', 'howItWorks', 'features', 'states', 'cities', 'cta'],
  ['cta', 'features', 'howItWorks', 'programs', 'states', 'cities'],
  ['features', 'cta', 'howItWorks', 'programs', 'cities', 'states'],
] as const;

/**
 * Generate a hash from a string
 */
function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) + hash) ^ char;
  }
  hash = hash ^ (hash >>> 16);
  hash = Math.imul(hash, 0x85ebca6b);
  hash = hash ^ (hash >>> 13);
  return Math.abs(hash);
}

/**
 * Generate Advanced Layout Configuration
 */
function generateAdvancedLayout(domain: string, keyword: string): AdvancedLayoutConfig {
  const seed1 = hashString(domain);
  const seed2 = hashString(keyword + domain);
  const seed3 = hashString(domain.split('').reverse().join(''));
  const seed4 = hashString(domain + keyword + 'layout');
  const seed5 = hashString(keyword.split('').reverse().join('') + domain);
  
  return {
    heroVariant: ADVANCED_LAYOUT_OPTIONS.heroVariants[seed1 % ADVANCED_LAYOUT_OPTIONS.heroVariants.length],
    sectionOrder: [...SECTION_ORDER_VARIATIONS[seed2 % SECTION_ORDER_VARIATIONS.length]],
    cardLayout: ADVANCED_LAYOUT_OPTIONS.cardLayouts[seed3 % ADVANCED_LAYOUT_OPTIONS.cardLayouts.length],
    navStyle: ADVANCED_LAYOUT_OPTIONS.navStyles[seed4 % ADVANCED_LAYOUT_OPTIONS.navStyles.length],
    footerStyle: ADVANCED_LAYOUT_OPTIONS.footerStyles[(seed1 + seed2) % ADVANCED_LAYOUT_OPTIONS.footerStyles.length],
    spacingScale: ADVANCED_LAYOUT_OPTIONS.spacingScales[seed5 % ADVANCED_LAYOUT_OPTIONS.spacingScales.length],
    animationStyle: ADVANCED_LAYOUT_OPTIONS.animationStyles[(seed3 + seed4) % ADVANCED_LAYOUT_OPTIONS.animationStyles.length],
    borderRadius: ADVANCED_LAYOUT_OPTIONS.borderRadii[(seed1 + seed3) % ADVANCED_LAYOUT_OPTIONS.borderRadii.length],
    shadowStyle: ADVANCED_LAYOUT_OPTIONS.shadowStyles[(seed2 + seed4) % ADVANCED_LAYOUT_OPTIONS.shadowStyles.length],
    backgroundPattern: ADVANCED_LAYOUT_OPTIONS.backgroundPatterns[(seed1 + seed5) % ADVANCED_LAYOUT_OPTIONS.backgroundPatterns.length],
    ctaPlacement: ADVANCED_LAYOUT_OPTIONS.ctaPlacements[(seed2 + seed5) % ADVANCED_LAYOUT_OPTIONS.ctaPlacements.length],
    typographyScale: ADVANCED_LAYOUT_OPTIONS.typographyScales[(seed3 + seed5) % ADVANCED_LAYOUT_OPTIONS.typographyScales.length],
    imageStyle: ADVANCED_LAYOUT_OPTIONS.imageStyles[(seed4 + seed5) % ADVANCED_LAYOUT_OPTIONS.imageStyles.length],
    buttonStyle: ADVANCED_LAYOUT_OPTIONS.buttonStyles[(seed1 + seed4) % ADVANCED_LAYOUT_OPTIONS.buttonStyles.length],
  };
}

/**
 * Generate unique Design DNA based on domain
 */
export function generateDesignDNA(domain: string, keyword: string = '', designStyle: DesignStyle = 'basic'): DesignDNA {
  const seed = hashString(domain + keyword)
  
  // Select palette based on hash
  const paletteIndex = seed % COLOR_PALETTES.length
  const palette = COLOR_PALETTES[paletteIndex]
  
  // Select fonts based on different hash
  const fontIndex = hashString(domain.split('').reverse().join('')) % FONT_COMBINATIONS.length
  const fonts = FONT_COMBINATIONS[fontIndex]
  
  // Select layout options
  const layoutSeed = hashString(keyword + domain)
  const heroStyle = LAYOUT_OPTIONS.heroStyles[layoutSeed % LAYOUT_OPTIONS.heroStyles.length]
  const cardStyle = LAYOUT_OPTIONS.cardStyles[(layoutSeed >> 2) % LAYOUT_OPTIONS.cardStyles.length]
  const ctaStyle = LAYOUT_OPTIONS.ctaStyles[(layoutSeed >> 4) % LAYOUT_OPTIONS.ctaStyles.length]
  
  const baseDNA: DesignDNA = {
    designStyle,
    colors: palette,
    gradients: {
      primary: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.secondary} 100%)`,
      hero: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.secondary} 50%, ${palette.accent} 100%)`,
      accent: `linear-gradient(135deg, ${palette.accent} 0%, ${palette.primary} 100%)`,
    },
    fonts,
    layout: {
      heroStyle,
      cardStyle,
      ctaStyle
    }
  };
  
  // Add advanced layout configuration if in advanced mode
  if (designStyle === 'advanced') {
    baseDNA.advancedLayout = generateAdvancedLayout(domain, keyword);
  }
  
  return baseDNA;
}

/**
 * Generate CSS variables from Design DNA
 */
// Helper to generate a light version of a color for hover states
function generateLightColor(hex: string): string {
  // Convert hex to RGB, mix with white, return as rgba
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 0.1)`;
}

export function generateCSSVariables(dna: DesignDNA): string {
  let css = `
    --color-primary: ${dna.colors.primary};
    --color-primary-light: ${generateLightColor(dna.colors.primary)};
    --color-secondary: ${dna.colors.secondary};
    --color-accent: ${dna.colors.accent};
    --color-background: ${dna.colors.background};
    --color-text: ${dna.colors.text};
    --color-text-on-primary: ${dna.colors.textOnPrimary};
    --gradient-primary: ${dna.gradients.primary};
    --gradient-hero: ${dna.gradients.hero};
    --gradient-accent: ${dna.gradients.accent};
    --font-heading: '${dna.fonts.heading}', sans-serif;
    --font-body: '${dna.fonts.body}', sans-serif;
  `;
  
  // Add advanced CSS variables if in advanced mode
  if (dna.designStyle === 'advanced' && dna.advancedLayout) {
    const adv = dna.advancedLayout;
    
    // Border radius
    const borderRadiusMap = { none: '0', small: '4px', medium: '8px', large: '16px', full: '9999px' };
    css += `--border-radius: ${borderRadiusMap[adv.borderRadius]};`;
    
    // Spacing scale
    const spacingMap = { compact: '0.75', balanced: '1', generous: '1.25', dramatic: '1.5' };
    css += `--spacing-scale: ${spacingMap[adv.spacingScale]};`;
    
    // Typography scale
    const typoMap = { compact: '0.9', standard: '1', large: '1.1', dramatic: '1.25' };
    css += `--typography-scale: ${typoMap[adv.typographyScale]};`;
    
    // Shadow style
    const shadowMap = {
      none: 'none',
      subtle: '0 1px 3px rgba(0,0,0,0.1)',
      medium: '0 4px 6px rgba(0,0,0,0.1)',
      strong: '0 10px 25px rgba(0,0,0,0.15)',
      colored: `0 10px 25px ${dna.colors.primary}30`,
    };
    css += `--shadow: ${shadowMap[adv.shadowStyle]};`;
  }
  
  return css;
}

/**
 * Get Google Fonts URL for the design DNA fonts
 */
export function getGoogleFontsURL(dna: DesignDNA): string {
  const fonts = [dna.fonts.heading]
  if (dna.fonts.body !== dna.fonts.heading) {
    fonts.push(dna.fonts.body)
  }
  const fontParams = fonts.map(f => `family=${f.replace(/\s+/g, '+')}:wght@400;500;600;700`).join('&')
  return `https://fonts.googleapis.com/css2?${fontParams}&display=swap`
}

/**
 * Get CSS classes for advanced layout elements
 */
export function getAdvancedLayoutClasses(dna: DesignDNA): Record<string, string> {
  if (dna.designStyle !== 'advanced' || !dna.advancedLayout) {
    return {};
  }
  
  const adv = dna.advancedLayout;
  
  return {
    // Hero classes
    heroClass: `hero-${adv.heroVariant}`,
    
    // Card layout classes
    cardContainerClass: `cards-${adv.cardLayout}`,
    
    // Navigation classes
    navClass: `nav-${adv.navStyle}`,
    
    // Footer classes
    footerClass: `footer-${adv.footerStyle}`,
    
    // Animation classes
    animationClass: `animate-${adv.animationStyle}`,
    
    // Background pattern classes
    backgroundClass: `bg-pattern-${adv.backgroundPattern}`,
    
    // Button classes
    buttonClass: `btn-${adv.buttonStyle}`,
    
    // Image classes
    imageClass: `img-${adv.imageStyle}`,
    
    // CTA placement
    ctaClass: `cta-${adv.ctaPlacement}`,
  };
}

/**
 * Generate background pattern CSS
 */
export function getBackgroundPatternCSS(pattern: AdvancedLayoutConfig['backgroundPattern'], primaryColor: string): string {
  switch (pattern) {
    case 'dots':
      return `background-image: radial-gradient(${primaryColor}20 1px, transparent 1px); background-size: 20px 20px;`;
    case 'grid':
      return `background-image: linear-gradient(${primaryColor}10 1px, transparent 1px), linear-gradient(90deg, ${primaryColor}10 1px, transparent 1px); background-size: 40px 40px;`;
    case 'waves':
      return `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='${encodeURIComponent(primaryColor)}' fill-opacity='0.1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");`;
    case 'gradient-mesh':
      return `background: radial-gradient(at 40% 20%, ${primaryColor}30 0px, transparent 50%), radial-gradient(at 80% 0%, ${primaryColor}20 0px, transparent 50%), radial-gradient(at 0% 50%, ${primaryColor}25 0px, transparent 50%);`;
    case 'noise':
      return `background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); opacity: 0.05;`;
    default:
      return '';
  }
}

/**
 * Calculate total unique combinations for verification
 */
export function calculateUniqueCombinations(designStyle: DesignStyle): number {
  const colorCount = COLOR_PALETTES.length; // 50
  const fontCount = FONT_COMBINATIONS.length; // 30
  
  if (designStyle === 'basic') {
    const heroCount = LAYOUT_OPTIONS.heroStyles.length; // 3
    const cardCount = LAYOUT_OPTIONS.cardStyles.length; // 3
    const ctaCount = LAYOUT_OPTIONS.ctaStyles.length; // 3
    return colorCount * fontCount * heroCount * cardCount * ctaCount;
  } else {
    // Advanced mode has many more combinations
    const heroCount = ADVANCED_LAYOUT_OPTIONS.heroVariants.length; // 8
    const cardCount = ADVANCED_LAYOUT_OPTIONS.cardLayouts.length; // 8
    const navCount = ADVANCED_LAYOUT_OPTIONS.navStyles.length; // 6
    const footerCount = ADVANCED_LAYOUT_OPTIONS.footerStyles.length; // 6
    const spacingCount = ADVANCED_LAYOUT_OPTIONS.spacingScales.length; // 4
    const animCount = ADVANCED_LAYOUT_OPTIONS.animationStyles.length; // 4
    const borderCount = ADVANCED_LAYOUT_OPTIONS.borderRadii.length; // 5
    const shadowCount = ADVANCED_LAYOUT_OPTIONS.shadowStyles.length; // 5
    const bgCount = ADVANCED_LAYOUT_OPTIONS.backgroundPatterns.length; // 6
    const ctaCount = ADVANCED_LAYOUT_OPTIONS.ctaPlacements.length; // 5
    const typoCount = ADVANCED_LAYOUT_OPTIONS.typographyScales.length; // 4
    const imgCount = ADVANCED_LAYOUT_OPTIONS.imageStyles.length; // 5
    const btnCount = ADVANCED_LAYOUT_OPTIONS.buttonStyles.length; // 6
    const sectionCount = SECTION_ORDER_VARIATIONS.length; // 8
    
    return colorCount * fontCount * heroCount * cardCount * navCount * footerCount * 
           spacingCount * animCount * borderCount * shadowCount * bgCount * 
           ctaCount * typoCount * imgCount * btnCount * sectionCount;
  }
}

// Export for testing
export { COLOR_PALETTES, FONT_COMBINATIONS, ADVANCED_LAYOUT_OPTIONS, SECTION_ORDER_VARIATIONS };
