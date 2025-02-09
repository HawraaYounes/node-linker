"use client"
import dynamic from "next/dynamic";

const SidePanel = dynamic(() => import("../components/SidePanel"), {
  ssr: false,
});

export default function SSR() {
  return (
    <div>
      <SidePanel />
    </div>
  );
}
