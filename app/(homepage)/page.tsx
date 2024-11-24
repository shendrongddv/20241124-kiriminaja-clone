import { ButtoAppStore, ButtoGooglePlay } from "@/components/button-download";
import { Card1 } from "@/components/card-1";
import { FAQ } from "@/components/faq";
import { Button } from "@/components/ui/button";
import { keunggulan, logoClouds } from "@/constant";
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
      <section className="bg-slate-100 px-4 py-20">
        <div className="container flex flex-col items-center">
          <h2 className="h2 text-center">
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

          <div className="mt-4 flex w-full flex-col items-center gap-4 rounded-2xl bg-slate-200 p-6 py-6 lg:mt-10 lg:flex-row lg:justify-between lg:rounded-3xl lg:p-8">
            <h2 className="h2 text-center lg:text-start">
              Coba Aplikasi KiriminAja Sekarang!
            </h2>

            <div className="mt-2 flex flex-col items-center gap-4 lg:items-end">
              <div className="flex items-center justify-center gap-4">
                <ButtoGooglePlay />
                <ButtoAppStore />
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
      <section className="px-4 py-20">
        <div className="container">
          {/* Row */}
          <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-between">
            {/* Col */}
            <div className="flex w-full flex-col gap-4 lg:w-6/12">
              <h2 className="h2 text-balance">
                Solusi Pengiriman Efektif dan Efisien
              </h2>

              <p className="lead">
                Pengiriman Instan, Same Day, Next Day, Reguler, Ekonomi, dan
                Kargo didukung oleh lebih dari 15 ekspedisi ke seluruh Indonesia
                dalam satu platform.
              </p>

              <ul className="grid gap-2">
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 size-6 shrink-0 text-primary" />
                  Jangkauan pengiriman luas, bisa kirim ke seluruh Indonesia.
                </li>
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 size-6 shrink-0 text-primary" />
                  Bebas kirim paket berapa pun, tanpa minimum jumlah paket.
                </li>
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 size-6 shrink-0 text-primary" />
                  Sistem terintegrasi dan otomatis, tak perlu ribet ganti
                  aplikasi dan mendukung pembayaran COD.
                </li>
              </ul>
            </div>

            {/* Col */}
            <div className="flex aspect-square w-full items-center justify-center lg:w-5/12">
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
      <section className="bg-slate-100 px-4 py-20">
        <div className="container">
          {/* Row */}
          <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
            {/* Col */}
            <div className="flex aspect-square w-full items-center justify-center lg:w-5/12">
              <Image
                src="/framre-cod-fast-release.webp"
                alt="Image"
                width={480}
                height={480}
                className="h-auto w-full"
              />
            </div>

            {/* Col */}
            <div className="flex w-full flex-col gap-4 lg:w-6/12">
              <h2 className="h2">Rilis Dana COD Cepat, Tanpa Tunggu Lama</h2>

              <p className="lead">
                Paket tiba di tujuan, dana COD langsung masuk saldo aktif di
                hari yang sama.
              </p>

              <ul className="grid gap-2">
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 size-6 shrink-0 text-primary" />
                  Saldo aktif bisa ditarik ke rekeningmu secara real time.
                </li>
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 size-6 shrink-0 text-primary" />
                  Paket masih di jalan, dana COD cair duluan dengan COD Advance.
                </li>
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 size-6 shrink-0 text-primary" />
                  Tidak perlu menunggu berhari-hari untuk menerima dana COD-mu.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="px-4 py-20">
        <div className="container">
          {/* Row */}
          <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-between">
            {/* Col */}
            <div className="flex w-full flex-col gap-4 lg:w-6/12">
              <h2 className="h2">Selalu Siap Membantu Bisnis Kamu</h2>

              <p className="lead">
                KiriminAja membantu permasalahan bisnismu, dari pengiriman paket
                hingga pengembangan bisnis.
              </p>

              <ul className="grid gap-2">
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 size-6 shrink-0 text-primary" />
                  Memiliki learning ecosystem yang dibangun untuk meningkatkan
                  kualitas bisnis member
                </li>
                <li className="gap2 flex items-start justify-normal text-start">
                  <BadgeCheck className="mr-2 size-6 shrink-0 text-primary" />
                  Dapat dihubungi di platform mana pun, via Telepon, WhatsApp,
                  atau Media Sosial.
                </li>
              </ul>
            </div>

            {/* Col */}
            <div className="flex aspect-square w-full items-center justify-center lg:w-5/12">
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
      <section className="px-4 py-20 pt-0">
        <div className="container">
          {/* Row */}
          <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
            {/* Col */}
            <div className="flex w-full flex-wrap items-center justify-around gap-4 lg:w-5/12">
              {logoClouds?.slice(0, 10).map((item) => (
                <Link
                  key={item.id}
                  href="#"
                  className="group flex w-[30%] items-center justify-center overflow-hidden rounded-3xl bg-slate-100 p-4 transition hover:bg-background hover:shadow-lg"
                >
                  <Image
                    src={`/${item.media}`}
                    alt="Image"
                    width={256}
                    height={256}
                    className="scale-95 transition group-hover:scale-75"
                  />
                </Link>
              ))}
            </div>
            {/* Col */}
            <div className="flex w-full flex-col gap-4 lg:w-6/12">
              <h2 className="h2">
                Dipercaya oleh Ribuan&nbsp;
                <span className="text-primary">Pebisnis Online</span>
              </h2>

              <p className="lead">
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
      <section className="bg-slate-100 px-4 py-20">
        <div className="container flex flex-col items-center gap-8">
          <h2 className="h2 text-center">Kata Mereka tentang KiriminAja</h2>

          <div className="aspect-video w-full overflow-hidden rounded-3xl bg-blue-500 lg:w-2/3"></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="container flex flex-col items-center gap-8">
          <h2 className="h2 text-center">Pertanyaan yang Sering Diajukan</h2>

          <div className="w-full lg:w-2/3">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
