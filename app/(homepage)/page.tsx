import { Card1 } from "@/components/card-1";
import { Button } from "@/components/ui/button";
import { keunggulan } from "@/constant";
import { BadgeCheck } from "lucide-react";
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

      {/* Cek */}

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

      {/* Section */}
      <section className="px-4 py-16">
        <div className="container">
          {/* Row */}
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Col */}
            <div className="flex w-full flex-col gap-4 lg:w-5/12">
              <h2 className="text-balance text-2xl font-bold lg:text-4xl">
                Solusi Pengiriman Efektif dan Efisien
              </h2>

              <p className="text-lg">
                Pengiriman Instan, Same Day, Next Day, Reguler, Ekonomi, dan
                Kargo didukung oleh lebih dari 15 ekspedisi ke seluruh Indonesia
                dalam satu platform.
              </p>

              <ul className="grid gap-2">
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 mt-1 size-4 shrink-0 text-primary" />
                  Jangkauan pengiriman luas, bisa kirim ke seluruh Indonesia.
                </li>
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 mt-1 size-4 shrink-0 text-primary" />
                  Bebas kirim paket berapa pun, tanpa minimum jumlah paket.
                </li>
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 mt-1 size-4 shrink-0 text-primary" />
                  Sistem terintegrasi dan otomatis, tak perlu ribet ganti
                  aplikasi dan mendukung pembayaran COD.
                </li>
              </ul>
            </div>

            {/* Col */}
            <div className="flex aspect-square w-full items-center justify-center lg:w-6/12">
              <Image
                src="/frame-solusi-pengiriman.webp"
                alt="Image"
                width={480}
                height={480}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="bg-slate-100 px-4 py-16">
        <div className="container">
          {/* Row */}
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Col */}
            <div className="flex aspect-square w-full items-center justify-center lg:w-6/12">
              <Image
                src="/framre-cod-fast-release.webp"
                alt="Image"
                width={480}
                height={480}
                className="h-auto w-full"
              />
            </div>

            {/* Col */}
            <div className="flex w-full flex-col gap-4 lg:w-5/12">
              <h2 className="text-balance text-2xl font-bold lg:text-4xl">
                Rilis Dana COD Cepat, Tanpa Tunggu Lama
              </h2>

              <p className="text-lg">
                Paket tiba di tujuan, dana COD langsung masuk saldo aktif di
                hari yang sama.
              </p>

              <ul className="grid gap-2">
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 mt-1 size-4 shrink-0 text-primary" />
                  Saldo aktif bisa ditarik ke rekeningmu secara real time.
                </li>
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 mt-1 size-4 shrink-0 text-primary" />
                  Paket masih di jalan, dana COD cair duluan dengan COD Advance.
                </li>
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 mt-1 size-4 shrink-0 text-primary" />
                  Tidak perlu menunggu berhari-hari untuk menerima dana COD-mu.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="px-4 py-16">
        <div className="container">
          {/* Row */}
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Col */}
            <div className="flex w-full flex-col gap-4 lg:w-5/12">
              <h2 className="text-balance text-2xl font-bold lg:text-4xl">
                Selalu Siap Membantu Bisnis Kamu
              </h2>

              <p className="text-lg">
                KiriminAja membantu permasalahan bisnismu, dari pengiriman paket
                hingga pengembangan bisnis.
              </p>

              <ul className="grid gap-2">
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 mt-1 size-4 shrink-0 text-primary" />
                  Memiliki learning ecosystem yang dibangun untuk meningkatkan
                  kualitas bisnis member
                </li>
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 mt-1 size-4 shrink-0 text-primary" />
                  Dapat dihubungi di platform mana pun, via Telepon, WhatsApp,
                  atau Media Sosial.
                </li>
              </ul>
            </div>

            {/* Col */}
            <div className="flex aspect-square w-full items-center justify-center lg:w-6/12">
              <Image
                src="/support.webp"
                alt="Image"
                width={480}
                height={480}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="px-4 py-16 pt-0">
        <div className="container">
          {/* Row */}
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Col */}
            <div className="flex aspect-square w-full items-center justify-center lg:w-6/12">
              <Image
                src="/support.webp"
                alt="Image"
                width={480}
                height={480}
                className="h-auto w-full"
              />
            </div>
            {/* Col */}
            <div className="flex w-full flex-col gap-4 lg:w-5/12">
              <h2 className="text-balance text-2xl font-bold lg:text-4xl">
                Dipercaya oleh Ribuan Pebisnis Online
              </h2>

              <p className="text-lg">
                Mulai dari UMKM, brand ternama, hingga perusahaan-perusahaan
                yang tersebar di seluruh Indonesia telah mempercayakan
                pengirimannya kepada KiriminAja. Bisnis lebih mudah dalam
                mengelola supply chain, dan berkembang menjadi lebih maju.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-slate-100 px-4 py-16">
        <div className="container flex flex-col items-center gap-8">
          <h2 className="text-balance text-center text-2xl font-bold lg:text-4xl">
            Kata Mereka tentang KiriminAja
          </h2>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="container flex flex-col items-center gap-8">
          <h2 className="text-balance text-center text-2xl font-bold lg:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>
      </section>
    </>
  );
};

export default HomePage;
