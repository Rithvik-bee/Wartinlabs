/**
 * Reusable Responsive Container Component
 * Uses mobile-first approach with Figma breakpoints
 * 
 * Usage:
 * <ResponsiveContainer>
 *   <YourContent />
 * </ResponsiveContainer>
 */

export default function ResponsiveContainer({ children, className = '' }) {
  return (
    <div 
      className={`w-full max-w-container mx-auto px-3 xs:px-4 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-24 ${className}`}
    >
      {children}
    </div>
  );
}

