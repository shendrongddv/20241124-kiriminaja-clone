import { Card1 } from "@/components/card-1";
import { Button } from "@/components/ui/button";
import { keunggulan } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="px-4 py-16">
        <div className="container flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex w-full flex-col items-center justify-center gap-4 text-center lg:w-6/12 lg:items-start lg:text-start">
            <h1 className="text-base font-semibold text-primary md:text-lg">
              Integrasi API Ekspedisi di Indonesia
            </h1>

            <h2 className="text-balance text-3xl font-bold md:text-5xl">
              Integrasi Pintar untuk Kemudahan Terhubung dengan Ekspedisi
            </h2>

            <p className="text-base md:text-lg">
              Maksimalkan kemudahan proses pengiriman dari berbagai ekspedisi
              yang terhubung dengan toko online-mu menggunakan Integrasi API
              KiriminAja.
            </p>

            <div>
              <Button className="rounded-full">Coba Sekarang</Button>
            </div>
          </div>

          {/* Col */}
          <div className="flex aspect-square w-full items-center justify-center lg:w-6/12">
            <Image
              src="/Integrasi-Api.webp"
              alt="Image"
              width={480}
              height={480}
              className=""
            />
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="bg-slate-100 px-4 py-16">
        <div className="container flex flex-col items-center">
          <h2 className="text-balance text-center text-2xl font-bold lg:text-4xl">
            Keunggulan Integrasi API&nbsp;
            <span className="text-primary">KiriminAja</span>
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {keunggulan?.map((item) => (
              <Card1
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>

          <div className="mt-4 flex w-full flex-col items-center gap-4 rounded-2xl bg-slate-200 p-4 py-6 lg:mt-10 lg:flex-row lg:justify-between lg:rounded-3xl lg:p-8">
            <h2 className="w-full text-center text-2xl font-bold lg:w-2/3 lg:text-start lg:text-4xl">
              Coba Aplikasi KiriminAja Sekarang!
            </h2>

            <div className="flex flex-col items-center gap-2 lg:items-end">
              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:justify-center">
                <Link
                  href="#"
                  className="flex h-full items-center justify-center overflow-hidden rounded-xl sm:h-12"
                >
                  <Image
                    src="/playstore.webp"
                    alt="PlayStore"
                    width={357}
                    height={105}
                    className="h-full w-auto"
                  />
                </Link>

                <Link
                  href="#"
                  className="flex h-full items-center justify-center overflow-hidden rounded-xl sm:h-12"
                >
                  <Image
                    src="/appstore.webp"
                    alt="PlayStore"
                    width={357}
                    height={105}
                    className="h-full w-auto"
                  />
                </Link>
              </div>
              <span>
                atau versi&nbsp;
                <Link href="#" className="font-semibold underline">
                  Web Dashboard
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
