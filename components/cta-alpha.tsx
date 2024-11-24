import Image from "next/image";
import Link from "next/link";
import { ButtoAppStore, ButtoGooglePlay } from "./button-download";

export const CtaAlpha = () => {
  return (
    <section className="bg-slate-100 px-4 pt-20">
      <div className="container flex flex-col items-center gap-16 lg:flex-row lg:justify-between">
        {/* Col */}
        <div className="flex w-full flex-col items-start justify-center gap-4 text-start lg:w-6/12 lg:pb-20">
          <span className="font-semibold text-primary">
            #BantuMenujuLebihMaju
          </span>

          <h2 className="h2">Mulai Kirim Paketmu Sekarang!</h2>

          <p className="text-xl">
            Jadikan pengalaman pengiriman paket lebih mudah dengan aplikasi
            KiriminAja.
          </p>

          <div className="mt-4 flex gap-8">
            <div className="grid gap-4">
              <ButtoGooglePlay />
              <ButtoAppStore />
            </div>

            <div className="flex aspect-square h-28 shrink-0 items-center justify-center">
              <Image
                src="/qr-code-ka.png"
                alt="Image"
                width={128}
                height={128}
                className="h-28 w-auto object-cover"
              />
            </div>
          </div>

          <span>
            Atau versi &nbsp;
            <Link href="#" className="font-semibold underline">
              Web Dashboard
            </Link>
          </span>
        </div>

        {/* Col */}
        <div className="flex w-full items-center justify-center lg:w-5/12">
          <Image
            src="/3Phone_CTA_NEW_V2.webp"
            alt="Image"
            width={480}
            height={480}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};
