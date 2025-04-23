import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";
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

const fakePhotos = [
  {
    id: 1,
    category: "Nature",
    src: "https://images.pexels.com/photos/4160252/pexels-photo-4160252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    category: "Portrait",
    src: "https://images.pexels.com/photos/31732878/pexels-photo-31732878/free-photo-of-batiments-aux-couleurs-pastel-dans-un-cadre-urbain-ensoleille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    category: "Urban",
    src: "https://images.pexels.com/photos/31591768/pexels-photo-31591768/free-photo-of-navigation-sereine-en-yacht-sur-des-eaux-bleues-claires.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    category: "Nature",
    src: "https://images.pexels.com/photos/31633276/pexels-photo-31633276/free-photo-of-une-surfeuse-profite-des-vagues-de-la-plage-en-ete.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    category: "Portrait",
    src: "https://images.pexels.com/photos/31352261/pexels-photo-31352261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g",
  },
  {
    id: 6,
    category: "Urban",
    src: "https://images.pexels.com/photos/31670957/pexels-photo-31670957/free-photo-of-la-majestueuse-baleine-de-bryde-se-nourrit-dans-les-eaux-thailandaises.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const heroImages = [
  "https://images.pexels.com/photos/31556575/pexels-photo-31556575/free-photo-of-cafe-matinal-confortable-au-lit-avec-journal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31666543/pexels-photo-31666543/free-photo-of-le-temple-des-sdj-de-portland-dans-l-oregon-s-eleve-majestueusement-en-plein-air.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31321920/pexels-photo-31321920/free-photo-of-escalier-interieur-moderne-au-musee-de-tokyo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function Home() {
  const [category, setCategory] = useState("All");
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const filteredPhotos =
    category === "All" ? fakePhotos : fakePhotos.filter((photo) => photo.category === category);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">PhotoSnap</h1>
        <div className="space-x-4">
          <Button variant="link">Login</Button>
          <Button variant="outline">Register</Button>
        </div>
      </nav>

      {/* Hero Carousel */}
      <Card className="relative w-full h-[60vh] overflow-hidden">
        {heroImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === heroIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <CardContent className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold">Capturing Moments</h2>
        </CardContent>
      </Card>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://images.pexels.com/photos/11473272/pexels-photo-11473272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Photographer"
            className="w-48 h-48 rounded-full object-cover shadow-md"
          />
          <p className="text-lg">
            I am a passionate photographer with a love for capturing life’s most beautiful and
            fleeting moments. My work spans nature, urban landscapes, and intimate portraits.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Gallery</h2>
        <Tabs value={category} onValueChange={setCategory} className="mb-6 text-center">
          <TabsList className="flex justify-center gap-4">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Nature">Nature</TabsTrigger>
            <TabsTrigger value="Portrait">Portrait</TabsTrigger>
            <TabsTrigger value="Urban">Urban</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <Card key={photo.id}>
              <CardContent className="p-0">
                <img src={photo.src} alt="Gallery" className="w-full h-64 object-cover" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto" id="contact">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <form className="space-y-4 bg-gray-50 p-6 rounded-2xl shadow-md">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <Textarea id="message" rows={5} placeholder="Tell me about your project..." />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-100 text-sm">
        © 2025 PhotoSnap. All rights reserved.
      </footer>
    </div>
  );
}
