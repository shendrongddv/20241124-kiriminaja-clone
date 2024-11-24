import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTiktokFill,
  RiYoutubeFill,
  RemixiconComponentType,
} from "@remixicon/react";

import { Logo } from "./logo";
import Link from "next/link";
import Image from "next/image";

const socialMedia = [
  {
    id: "a4bcd954-7c83-57da-98e1-55d682415421",
    title: "Instagram",
    href: "#",
    icon: RiInstagramFill,
  },
  {
    id: "0fe7a6b4-6fd3-5b05-9bf7-95496e25b8f0",
    title: "Facebook",
    href: "#",
    icon: RiFacebookBoxFill,
  },
  {
    id: "d8baac4e-195f-540c-92be-4189a0adc6b9",
    title: "YouTube",
    href: "#",
    icon: RiYoutubeFill,
  },
  {
    id: "ce78ee8b-ca68-5afa-bd49-650a026cc8ca",
    title: "LinkedIn",
    href: "#",
    icon: RiLinkedinBoxFill,
  },
  {
    id: "f791cf65-33b3-5a3c-92a1-113f6987d584",
    title: "TikTok",
    href: "#",
    icon: RiTiktokFill,
  },
];

const footerLinks = [
  {
    id: "1b2c820d-4a97-562a-983b-f271d0eed52b",
    title: "Produk",
    href: "",
    icon: "",
    links: [
      {
        id: "caf6bad9-bd87-5ec9-abe8-3f74e4718fbd",
        title: "Integrasi API",
        href: "#",
        icon: "",
      },
    ],
  },
  {
    id: "35cc879a-6803-5538-a397-0858f5ebe103",
    title: "Lainnya",
    href: "",
    icon: "",
    links: [
      {
        id: "5d47a430-9f0a-53b3-8538-14e65b21d9e4",
        title: "Cek Ongkir",
        href: "#",
        icon: "",
      },
      {
        id: "fa5283c8-6dff-5388-ae88-d484ea7d4dfa",
        title: "Cek Resi",
        href: "#",
        icon: "",
      },
      {
        id: "55149629-3a39-53bb-b3cd-fadc0d90e388",
        title: "CPress Kit",
        href: "#",
        icon: "",
      },
      {
        id: "c8cb13c8-627e-5458-bf5a-43b04fa1a65e",
        title: "Panduan",
        href: "#",
        icon: "",
      },
      {
        id: "90ebaab3-f32b-5c51-8910-db50e0d05023",
        title: "Status Sistem",
        href: "#",
        icon: "",
      },
    ],
  },
  {
    id: "aa9a3081-f053-5403-bbca-a54e772dfdcc",
    title: "Perusahaan",
    href: "",
    icon: "",
    links: [
      {
        id: "624fd538-5753-5be8-9d57-04ecbd4646f8",
        title: "Tentang Kami",
        href: "#",
        icon: "",
      },
    ],
  },
  {
    id: "7d9ec03b-2a87-59f7-b09c-50b23186bd0e",
    title: "Legal",
    href: "",
    icon: "",
    links: [
      {
        id: "74d16cbe-ffe2-51f2-b3cd-319c97bcf307",
        title: "Syarat & Ketentuan",
        href: "#",
        icon: "",
      },
      {
        id: "f132010c-fe4a-5b2a-859e-0cb40eb228c9",
        title: "Kebijakan Privasi",
        href: "#",
        icon: "",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="px-4 text-foreground/75">
      {/* Row */}
      <div className="container grid grid-cols-2 gap-4 py-16 lg:grid-cols-5">
        {/* Col */}
        <div className="col-span-2 lg:col-span-3">
          <div className="flex w-full flex-col items-start gap-4 border lg:w-4/5">
            <Logo />

            <div className="flex items-center justify-center gap-1">
              {socialMedia?.map((item) => (
                <SocialMedia key={item.id} href={item.href} icon={item.icon} />
              ))}
            </div>

            <span>PT Selalu Siap Solusi</span>

            <Link href="#" className="text-muted-foreground">
              Jl. Palagan Tentara Pelajar No.30 km.08, Karang Moko, Sariharjo,
              Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
            </Link>

            <small>Terdaftar di:</small>

            <ul>
              <li>
                <Link href="/">
                  <Image
                    src="/download.png"
                    alt="Image"
                    width={156}
                    height={156}
                    className=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Col */}
        <div className="flex flex-col items-start justify-start gap-8">
          <div className="grid gap-4">
            <span className="font-display text-base font-semibold text-primary">
              Produk
            </span>

            <ul className="grid gap-4">
              <li>
                <Link href="#">Integrasi API</Link>
              </li>
              <li>
                <Link href="#">Integrasi API</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Col */}
        <div className="border p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            esse suscipit neque.
          </p>
        </div>
      </div>

      {/* Row */}
      <div className="container border-t py-6">
        <small className="text-muted-foreground">
          © 2020 - 2024 PT Selalu Siap Solusi
        </small>
      </div>
    </footer>
  );
};

type LinkProps = {
  id?: string;
  title?: string;
  href: string;
  icon: RemixiconComponentType;
};

type LinksProps = LinkProps[];

export const SocialMedia = ({ href, icon: Icon }: LinkProps) => {
  return (
    <div>
      <Link href={href}>
        <Icon className="size-4" />
      </Link>
    </div>
  );
};

// export const FooterLinks = ({}:LinkProps) => {
//   return (

//   )
// }
