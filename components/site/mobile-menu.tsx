import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full flex-col gap-0 divide-y p-0 md:hidden"
      >
        <SheetHeader className="space-y-0 p-4">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <Logo />
        </SheetHeader>
        <div className="flex flex-col divide-y">
          <div className="p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              ut ducimus cupiditate nesciunt quas. Quibusdam ex reprehenderit
              laudantium dolorem quia in praesentium pariatur temporibus id non,
              maxime unde obcaecati? Ad, alias a.
            </p>
          </div>
          <div className="grid gap-2 p-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href="/login">Masuk</Link>
            </Button>

            <Button asChild size="lg" className="rounded-full">
              <Link href="/login">Coba Sekarang</Link>
            </Button>
          </div>
        </div>
        <SheetFooter className="mt-auto p-4">
          <small className="text-muted-foreground">Sheet Footer</small>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
