import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
const heroImages = [
  "https://images.pexels.com/photos/31556575/pexels-photo-31556575/free-photo-of-cafe-matinal-confortable-au-lit-avec-journal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31666543/pexels-photo-31666543/free-photo-of-le-temple-des-sdj-de-portland-dans-l-oregon-s-eleve-majestueusement-en-plein-air.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31321920/pexels-photo-31321920/free-photo-of-escalier-interieur-moderne-au-musee-de-tokyo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export const HeroSection = () => {
  const [heroIndex, setHeroIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <Card className="relative w-full h-[60vh] overflow-hidden mt-6">
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
  );
};
