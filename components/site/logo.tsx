import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="h-8 w-auto">
      <Image
        src="/logo-kiriminaja.webp"
        alt="Kiriminaja"
        width={219}
        height={56}
        priority
        className="h-full w-auto"
      />
    </Link>
  );
};
