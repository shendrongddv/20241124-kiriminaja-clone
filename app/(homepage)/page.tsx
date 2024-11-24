import { Button } from "@/components/ui/button";
import Image from "next/image";

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
    </>
  );
};

export default HomePage;
