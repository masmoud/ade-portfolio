import { AboutSection } from "~/components/home/about-section";
import { ContactSection } from "~/components/home/contact-section";
import { GallerySection } from "~/components/home/gallery-section";
import { HeroSection } from "~/components/home/hero-section";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Michel Abimbola | Photographe Exceptionnel" },
    {
      name: "description",
      content:
        "Découvrez l'univers visuel de Michel Abimbola, photographe passionné spécialisé en portraits, paysages naturels et scènes urbaines. Un portfolio riche en émotions, en lumière et en histoires capturées à travers l'objectif.",
    },
  ];
}

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
