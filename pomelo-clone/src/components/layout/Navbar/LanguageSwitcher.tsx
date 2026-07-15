export default function LanguageSwitcher() {
  return (
    <button
      className="
        flex
        items-center
        gap-1
        bg-white/[0.035]
        hover:bg-white/[0.08]
        light:bg-[#0B2023]/[0.05]
        light:hover:bg-[#0B2023]/10
        light:text-[#0B2023]
        text-[#EEFEFC]
        px-2.5
        py-2
        text-[12px]
        font-medium
        rounded-[2px]
        border-none
        outline-none
        transition-[color,background-color]
        duration-150
        ease-in-out
      "
    >
      {/* Globe Icon */}
      <svg
        className="w-3.5 h-3.5 text-[#EEFEFC]/80"
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
        className="w-2 h-2 text-[#1AF3DC] ml-0.5"
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