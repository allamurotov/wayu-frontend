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
