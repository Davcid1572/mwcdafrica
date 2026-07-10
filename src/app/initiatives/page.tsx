import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { EcosystemMap } from "@/components/sections/initiatives/EcosystemMap";
import { CreativeConnectBlock } from "@/components/sections/initiatives/CreativeConnectBlock";
import { MicaBlock } from "@/components/sections/initiatives/MicaBlock";
import { Join } from "@/components/sections/home/Join";

export const metadata: Metadata = {
  title: "Initiatives",
  description:
    "MWCDAFRICA is the parent foundation. Each flagship initiative stands on its own while sharing our mission.",
};

export default function InitiativesPage() {
  return (
    <>
      <PageBanner
        breadcrumbLabel="Initiatives"
        eyebrow="Flagship initiatives"
        heading={
          <>
            An ecosystem designed to{" "}
            <span className="italic text-primary-hover">grow.</span>
          </>
        }
        description="MWCDAFRICA is the parent foundation. Each flagship initiative stands on its own while sharing our mission, and the structure leaves room for more to come."
      />
      <EcosystemMap />
      <CreativeConnectBlock />
      <MicaBlock />
      <Join />
    </>
  );
}
