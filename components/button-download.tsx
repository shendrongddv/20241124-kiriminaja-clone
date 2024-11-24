import Image from "next/image";
import Link from "next/link";

export const ButtoGooglePlay = () => {
  return (
    <Link
      href="#"
      className="flex h-12 items-center justify-center overflow-hidden rounded-xl bg-[#1E1B1E]"
    >
      <Image
        src="/playstore.webp"
        alt="GooglePlay"
        width={357}
        height={105}
        className="h-full w-auto object-fill"
      />
    </Link>
  );
};

export const ButtoAppStore = () => {
  return (
    <Link
      href="#"
      className="flex h-12 items-center justify-center overflow-hidden rounded-xl bg-[#1E1B1E]"
    >
      <Image
        src="/appstore.webp"
        alt="GooglePlay"
        width={348}
        height={105}
        className="h-full w-auto object-fill"
      />
    </Link>
  );
};
