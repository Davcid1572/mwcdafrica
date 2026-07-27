import { Suspense } from "react";
import type { Metadata } from "next";
import { DonateSuccessContent } from "@/components/sections/donate/DonateSuccessContent";

export const metadata: Metadata = { title: "Thank you" };

export default function DonateSuccessPage() {
  return (
    <Suspense fallback={null}>
      <DonateSuccessContent />
    </Suspense>
  );
}
