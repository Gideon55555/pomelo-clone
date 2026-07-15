import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 text-[16px] font-semibold tracking-[-0.06em] text-white light:text-[#000339]">
      <svg aria-hidden="true" className="h-[18px] w-[15px]" viewBox="0 0 18 20" fill="none">
        <path d="M1 4.1 8.9 0v8L1 12.1V4.1Z" fill="#1648FF" />
        <path d="m1 12.1 7.9-4v8L1 20v-7.9Z" fill="#0F36BF" />
        <path d="m9.1 0 7.9 4.1v8l-7.9-4V0Z" fill="#75B2FF" />
        <path d="m9.1 12 7.9-3.9V16l-7.9 4v-8Z" fill="#3484FF" />
      </svg>
      <span>qua</span>
    </Link>
  );
}