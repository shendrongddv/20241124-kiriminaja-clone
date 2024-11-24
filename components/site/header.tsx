import Link from "next/link";

import { Button } from "../ui/button";
import { Logo } from "./logo";
import { User } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-white px-4">
      <div className="container flex h-16 items-center justify-between gap-4">
        <MobileMenu />
        <Logo />

        <nav className="hidden items-center justify-center gap-2 md:flex">
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/blog">Blog</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/cekaja">Cek Ongkir</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/tracking">Cek Resi</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/integration">Integrasi API</Link>
          </Button>
        </nav>

        <div className="flex items-center justify-center gap-2">
          <Button
            asChild
            variant="ghost"
            className="flex aspect-square size-10 rounded-full border md:hidden"
          >
            <Link href="/login">
              <User className="size-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="hidden rounded-full md:flex"
          >
            <Link href="/login">Masuk</Link>
          </Button>

          <Button asChild className="hidden rounded-full md:flex">
            <Link href="/login">Coba Sekarang</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
