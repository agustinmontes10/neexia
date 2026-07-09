import type { ServiceIconShape } from "@/app/lib/landing-data";

export default function ServiceIcon({ shape }: { shape: ServiceIconShape }) {
  switch (shape) {
    case "diagnostic":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M3.5 20V14.5M8.5 20V10.5M13.5 20V13"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="16.8" cy="7.2" r="3.1" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M19 9.4L21 11.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "automation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <circle cx="5" cy="6" r="2.3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="5" cy="18" r="2.3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="19" cy="12" r="2.6" fill="currentColor" />
          <path
            d="M7.1 7.1L16.9 11.2M7.1 16.9L16.9 12.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "agents":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <rect x="5" y="8" width="14" height="11" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 8V4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="3" r="1.3" fill="currentColor" />
          <circle cx="9.4" cy="13.3" r="1.3" fill="currentColor" />
          <circle cx="14.6" cy="13.3" r="1.3" fill="currentColor" />
          <path d="M9 17.1H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M4 6.8C4 5.25 5.25 4 6.8 4H17.2C18.75 4 20 5.25 20 6.8V13.2C20 14.75 18.75 16 17.2 16H10.2L5.6 19.4V16H6.8C5.25 16 4 14.75 4 13.2V6.8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="8.6" cy="10" r="1.05" fill="currentColor" />
          <circle cx="12" cy="10" r="1.05" fill="currentColor" />
          <circle cx="15.4" cy="10" r="1.05" fill="currentColor" />
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3.5 8.7H20.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="6.1" cy="6.6" r="0.6" fill="currentColor" />
          <circle cx="8.1" cy="6.6" r="0.6" fill="currentColor" />
          <path
            d="M9.6 14.2L7.4 12L9.6 9.8M14.4 9.8L16.6 12L14.4 14.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
