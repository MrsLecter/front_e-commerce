"use client";

import { usePathname } from "next/navigation";

import MakersChoose from "@/components/pages/makers/Makers";

export default function Makers() {
  const pathname = usePathname();

  return <MakersChoose chooseOption={[pathname!]} />;
}
