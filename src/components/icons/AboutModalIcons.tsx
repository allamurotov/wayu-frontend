type IconProps = { className?: string };

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 33 33" fill="none" className={className} aria-hidden="true">
      <circle cx="16.5" cy="16.5" r="16" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
      <path d="M13 10.5L23 16.5L13 22.5V10.5Z" fill="currentColor" />
    </svg>
  );
}
