"use client";

import MakersChoose from "@/components/pages/makers/Makers";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Makers() {
  const pathname = usePathname();
  console.log(pathname);
  return <MakersChoose chooseOption={["empty"]} />;
}
