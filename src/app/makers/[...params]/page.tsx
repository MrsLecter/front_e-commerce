"use client";

import MakersChoose from "@/components/pages/makers/Makers";
import { usePathname } from "next/navigation";

export default function Makers() {
  const pathname = usePathname();
  console.log("pathname ", pathname, pathname.split("/")[pathname.length - 1]);
  return <MakersChoose chooseOption={[pathname]} />;
}
