"use client"

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* Logo principal */}
      <div className="relative w-[60px] h-[60px]">
        <Image
          src="/logo.png"
          alt="logo da loja"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Logo com texto */}
      <div className="relative w-[230px] h-[60px]">
        <Image
          src="/logo-texto.png"
          alt="Gam3r.Store"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </Link>
  );
}
