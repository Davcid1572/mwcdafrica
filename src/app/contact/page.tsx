import { PageBanner } from "@/components/ui/PageBanner";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactDetails } from "@/components/sections/contact/ContactDetails";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        breadcrumbLabel="Contact"
        eyebrow="Get in touch"
        heading={
          <>
            Let&apos;s start a{" "}
            <span className="italic text-primary-hover">conversation.</span>
          </>
        }
        description="Questions, partnerships, press, or just hello, we would love to hear from you."
      />

      <section className="max-w-[1240px] mx-auto px-5 sm:px-10 py-12 sm:py-20 flex flex-wrap gap-8 sm:gap-14">
        <ContactForm />
        <ContactDetails />
      </section>
    </>
  );
}
