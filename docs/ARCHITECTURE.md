# Wayu Frontend Architecture & System Specifications

## 1. Design System & Responsive Layout Grid
The design system establishes standard spacing scales, color palettes, and container widths across mobile, tablet, and desktop breakpoints.

## 2. Next.js App Router Structure
Routing follows Next.js App Router conventions with organized route groups, layout wrappers, and parallel loading states.

## 3. Client State Management & Providers
Global application state uses lightweight React Context providers wrapped at root layout level with minimal re-render scope.

## 4. Reusable UI Component Contracts
Atomic components like buttons, modals, and input fields define strict TypeScript prop interfaces and accessible variants.

## 5. Custom React Hooks
Hooks encapsulate reusable logic including scroll listeners, media queries, debounce filters, and local storage synchronization.

## 6. Form Handling & Schema Validation
Forms integrate React Hook Form with Zod schema validation to provide immediate field-level feedback and typed form payloads.

## 7. HTTP Client Architecture
API communication utilizes an Axios/fetch wrapper configured with base URLs, authorization headers, and unified error handling.

## 8. Protected Routes & Middleware Authentication
Next.js Edge middleware guards private route patterns, redirecting unauthenticated sessions to login.

## 9. Asset & Image Optimization
Images leverage next/image with responsive srcset generation, lazy loading, and modern WebP/AVIF format transcoding.

## 10. Tailwind CSS Utility Conventions
Utility classes follow standardized precedence: layout, box model, typography, backgrounds, and conditional variants.

## 11. Dynamic Metadata & SEO Configuration
Metadata generation functions populate dynamic title tags, canonical URLs, and OpenGraph social cards per route.

## 12. Internationalization (i18n) Architecture
UI labels and notification messages reference localized dictionary keys supporting multi-language switching.

## 13. Accessibility & Keyboard Navigation
All interactive components include WAI-ARIA roles, focus indicators, and keyboard navigation listeners.

## 14. UI Animations & Interaction Timing
Micro-interactions and modal transitions use Framer Motion springs with optimized transform and opacity properties.

## 15. Error Boundaries & Fallback Displays
Component boundaries isolate rendering failures and present helpful retry prompts without crashing the full view.
