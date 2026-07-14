export default function LanguageSwitcher() {
  return (
    <button
      className="
        flex
        items-center
        gap-1
        bg-[#12162B]
        hover:bg-[#1C203A]
        text-white
        px-2
        py-1.5
        font-geist
        text-[13px]
        font-semibold
        rounded-sm
        border-none
        outline-none
        transition-[color,background-color]
        duration-150
        ease-in-out
      "
    >
      {/* Globe Icon */}
      <svg
        className="w-3.5 h-3.5 text-white/80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1 0-20z" />
        <path d="M2 12h20" />
      </svg>
      
      <span>EN</span>
      
      {/* Down Chevron */}
      <svg
        className="w-2 h-2 text-[#E72B8A] ml-0.5"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L5 5L9 1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}