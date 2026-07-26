type IconProps = { className?: string };

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 12H4M4 12L10 6M4 12L10 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 10C4 7.79086 5.79086 6 8 6H10V14H6C4.89543 14 4 13.1046 4 12V10Z"
        fill="currentColor"
      />
      <path d="M6 14L10 20H6L2 14H6Z" fill="currentColor" />
      <path
        d="M18 10C18 7.79086 19.7909 6 22 6H24V14H20C18.8954 14 18 13.1046 18 12V10Z"
        fill="currentColor"
      />
      <path d="M20 14L24 20H20L16 14H20Z" fill="currentColor" />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="15" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.2 8.7L12.8 6.3M7.2 11.3L12.8 13.7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 12L12 8M6.5 9.5L5 11C3.9 12.1 3.9 13.9 5 15C6.1 16.1 7.9 16.1 9 15L10.5 13.5M13.5 10.5L15 9C16.1 7.9 16.1 6.1 15 5C13.9 3.9 12.1 3.9 11 5L9.5 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PrinterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 7V3H15V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="7" width="16" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 12V17H15V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
