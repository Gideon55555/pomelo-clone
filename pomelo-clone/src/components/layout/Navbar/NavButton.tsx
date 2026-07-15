export default function NavButton() {
  return (
    <button
      className="
        relative
        overflow-hidden
        bg-gradient-to-r from-[#1648FF] to-[#3484FF]
        hover:brightness-115
        text-white
        font-geist
        text-[10px]
        font-medium
        tracking-wide
        rounded-[4px]
        transition-all
        duration-200
        hover:shadow-[0_0_20px_rgba(22,72,255,0.35)]
        active:scale-[0.98]
      "
    >
      {/* 
        The exact inner div wrapper extracted from the inspector:
        div.relative.z-10.flex.h-full.w-full.items-center.justify-center.whitespace-pre...
      */}
      <div 
        className="
          relative 
          z-10 
          flex 
          h-full 
          w-full 
          items-center 
          justify-center 
          whitespace-pre 
          px-3.5
          py-2
        "
      >
        Contact us
      </div>
    </button>
  );
}