"use client";

import MakersChoose from "@/components/pages/makers/Makers";
import { usePathname } from "next/navigation";

export default function Makers() {
  const pathname = usePathname();
  return <MakersChoose chooseOption={[pathname]} />;
}
